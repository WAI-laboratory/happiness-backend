import { Controller, Get, Post, Body, HttpStatus, Delete, Param } from '@nestjs/common';
import { RandomQuoteService } from './random-quote.service';
import { Quote } from './quote.entity';

@Controller('random-quote')
export class RandomQuoteController {

    constructor(private readonly randomQuoteService: RandomQuoteService) {}

    // Not allowed yet
    @Post()
    async create(@Body() quote: Partial<Quote>): Promise<any> {
        if (!quote.content || !quote.author) {
            return {
                message: 'Content and author are required.',
                statusCode: HttpStatus.BAD_REQUEST,
                data: null
            };
        }
        const createdQuote = await this.randomQuoteService.create(quote);
        return {
            message: 'Quote created successfully',
            statusCode: HttpStatus.CREATED,
            data: createdQuote
        };
    }

    @Get()
    async getDailyQuote(): Promise<any> {
        const dailyQuote = await this.randomQuoteService.findDailyQuote();
        return {
            message: 'Quote fetched successfully',
            statusCode: HttpStatus.OK,
            data: dailyQuote
        };
    }

    // Not allowed yet
    // @Get('all-quotes')
    // async findAll(): Promise<any> {
    //     const quotes = await this.randomQuoteService.findAll();
    //     return {
    //         message: 'All quotes fetched successfully',
    //         statusCode: HttpStatus.OK,
    //         data: quotes
    //     };
    // }
    // Not allowed yet
    @Delete(':id')
    async deleteQuote(@Param('id') id: number): Promise<any> {
        await this.randomQuoteService.deleteQuoteById(id);
        return {
            message: `Quote with ID ${id} deleted successfully`,
            statusCode: HttpStatus.OK,
            data: null
        };
    }
}
