import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Включаем CORS для всех или укажите origin
  app.enableCors({
    origin: '*', // или, например: ['http://localhost:5173']
    credentials: true,
  });

  // Статика для бандла
  app.useStaticAssets(resolve(__dirname, "..",  'public'));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
