import { Controller, Get, Inject, Post, Body } from '@nestjs/common';
import { RandomQuoteService } from './random-quote.service';
import { Quote } from './quote.entity';

@Controller('random-quote')
export class RandomQuoteController {

    constructor(private readonly randomQuoteService: RandomQuoteService) {}
    @Post()
    async create(@Body() quote: Partial<Quote>): Promise<Quote> {
      if (!quote.content || !quote.author) {
        throw new Error('Content and author are required.');
      }
      return this.randomQuoteService.create(quote);
    }

    @Get()
    async getDailyQuote(): Promise<Quote> {
        // Use the service to get the daily quote
        return this.randomQuoteService.findDailyQuote();
    }
    
    @Get('all-quotes')
    findAll(): Promise<Quote[]> {
        return this.randomQuoteService.findAll();
    }
}
