import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomQuoteController } from './random-quote/random-quote.controller';
import { RandomQuoteService } from './random-quote/random-quote.service';
import { RandomQuoteModule } from './random-quote/random-quote.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './quote.entity'; // We'll create this entity below
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Replace with your PostgreSQL username
      password: 'your_password', // Replace with your PostgreSQL password
      database: 'happiness-quote', // Replace with your database name
      entities: [Quote],
      synchronize: true, // Only for development, set to false in production
    }),
    RandomQuoteModule
  ],
  controllers: [AppController, RandomQuoteController],
  providers: [AppService, RandomQuoteService],
})
export class AppModule {}
