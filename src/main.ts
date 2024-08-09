import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  //app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  setuoOpenAPI(app);
  await app.listen(3000);
}
bootstrap();

function setuoOpenAPI(app: INestApplication): void {
  const config = new DocumentBuilder().setTitle('CodeLabAPITemplate').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, { useGlobalPrefix: true });
  Logger.log('OpenAPI is running on http://localhost:3000/api/v1/docs');
}
