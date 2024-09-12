import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from './quote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RandomQuoteService {
    
    constructor(
        @InjectRepository(Quote)
        private quotesRepository: Repository<Quote>,
    ) {}

    create(quote: Partial<Quote>): Promise<Quote> {
        const newQuote = this.quotesRepository.create(quote);
        return this.quotesRepository.save(newQuote);
    }
    async findDailyQuote(): Promise<Quote> {
        // Get the total number of quotes without deleted ones
        const count = await this.quotesRepository.count();

        if (count === 0) {
            throw new NotFoundException('No quotes found');
        }

        // Calculate the day of the year (1-365/366)
        const today = new Date();
        const start = new Date(today.getFullYear(), 0, 0);
        const diff = (today as any) - (start as any);
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // Use the day of the year modulo total count to calculate the index
        const quoteIndex = dayOfYear % count;

        // Fetch a quote using the calculated index with OFFSET and LIMIT, excluding deleted quotes
        const quote = await this.quotesRepository
            .createQueryBuilder("quote")
            .orderBy("quote.id", "ASC")  // Or use any other ordering mechanism
            .offset(quoteIndex)  // Skip to the correct quote
            .limit(1)            // Only fetch one quote
            .getOne();

        if (!quote) {
            throw new NotFoundException('Quote not found');
        }

        return quote;
    }

    findAll(): Promise<Quote[]> {
        return this.quotesRepository.find();
      }

          // New method to delete a quote by ID
    async deleteQuoteById(id: number): Promise<void> {
        const result = await this.quotesRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Quote with ID ${id} not found`);
        }
    }
}
