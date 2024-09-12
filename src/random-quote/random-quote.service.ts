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

    findAll(): Promise<Quote[]> {
        return this.quotesRepository.find();
      }
}
