import { Test, TestingModule } from '@nestjs/testing';
import { RandomQuoteController } from './random-quote.controller';

describe('RandomQuoteController', () => {
  let controller: RandomQuoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomQuoteController],
    }).compile();

    controller = module.get<RandomQuoteController>(RandomQuoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
