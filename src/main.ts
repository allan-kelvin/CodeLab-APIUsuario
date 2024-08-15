import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ResponseExceptionsFilter } from './shared/filters/response-expeption.filter';
import { ResponseTransformInteceptor } from './shared/interceptors/response-transform.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseTransformInteceptor());
  app.useGlobalFilters(new ResponseExceptionsFilter());
  app.enableCors();

  setuoOpenAPI(app);
  await app.listen(3001);
}
bootstrap();

function setuoOpenAPI(app: INestApplication): void {
  const config = new DocumentBuilder().setTitle('CodeLabAPIUsuario').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, { useGlobalPrefix: true });
  Logger.log('OpenAPI is running on http://localhost:3001/api/v1/docs');
}
