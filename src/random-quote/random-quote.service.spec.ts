import { Test, TestingModule } from '@nestjs/testing';
import { RandomQuoteService } from './random-quote.service';

describe('RandomQuoteService', () => {
  let service: RandomQuoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomQuoteService],
    }).compile();

    service = module.get<RandomQuoteService>(RandomQuoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
