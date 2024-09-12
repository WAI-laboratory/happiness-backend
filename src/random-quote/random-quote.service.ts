import { Injectable } from '@nestjs/common';
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
        // Get the total number of quotes without fetching them all
        const count = await this.quotesRepository.count();

        if (count === 0) {
            throw new Error('No quotes found');
        }

        // Calculate the day of the year (1-365/366)
        const today = new Date();
        const start = new Date(today.getFullYear(), 0, 0);
        const diff = (today as any) - (start as any);
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // Select the quote based on the day of the year, using an offset query
        const quoteIndex = dayOfYear % count;
        const quote = await this.quotesRepository
            .createQueryBuilder("quote")
            .offset(quoteIndex)   // Skip to the correct quote
            .limit(1)             // Only fetch one quote
            .getOne();

        return quote;
    }

    findAll(): Promise<Quote[]> {
        return this.quotesRepository.find();
      }
}
