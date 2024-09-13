import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('happiness');
  app.enableCors({
    origin: '*', // Allow requests from all origins, you can restrict to specific origins if needed
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
  });
  
  await app.listen(3011);
}
bootstrap();
