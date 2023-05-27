import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: [
      process.env.CORS_ORIGIN || configService.get<string>('CORS_ORIGIN'),
      process.env.CORS_ORIGIN_DEV || configService.get<string>('CORS_ORIGIN_DEV'),
    ],
    methods: ['GET'],
    credentials: true,
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
