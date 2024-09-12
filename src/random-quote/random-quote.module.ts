import { Module } from '@nestjs/common';
import { RandomQuoteController } from './random-quote.controller';
import { RandomQuoteService } from './random-quote.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './quote.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Quote])],
    controllers: [RandomQuoteController],
    providers: [RandomQuoteService],
})
export class RandomQuoteModule {}
