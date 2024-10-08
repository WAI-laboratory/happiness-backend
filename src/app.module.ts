import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomQuoteController } from './random-quote/random-quote.controller';
import { RandomQuoteService } from './random-quote/random-quote.service';
import { RandomQuoteModule } from './random-quote/random-quote.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './random-quote/quote.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'happiness-postgres',
      port: 5432,
      username: 'postgres', // Replace with your PostgreSQL username
      password: 'wai123!', // Replace with your PostgreSQL password
      database: 'happiness-postgres', // Replace with your database name
      entities: [Quote],
      synchronize: false,
    }),
    RandomQuoteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
