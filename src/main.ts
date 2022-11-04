import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe ({
      whitelist: true, // passar apenas o que está no dto(nossa lista)
      forbidNonWhitelisted: true, // para não permitir enviar informação listada na list dto
      transform: true, //transforma os dados, e tipar o vurso com o dto, é possível lidar com os dados 
    }));
  await app.listen(3000);
}
bootstrap();
