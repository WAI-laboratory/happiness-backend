import { Controller, Get, Inject, Post, Body } from '@nestjs/common';
import { RandomQuoteService } from './random-quote.service';
import { Quote } from './quote.entity';

@Controller('random-quote')
export class RandomQuoteController {

    constructor(private readonly randomQuoteService: RandomQuoteService) {}

    @Post()
    create(@Body() quote: Partial<Quote>): Promise<Quote> {
        return this.randomQuoteService.create(quote);
    }

    @Get()
    findAll(): Promise<Quote[]> {
        return this.randomQuoteService.findAll();
    }
}
