import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config: any = new DocumentBuilder()
    .setTitle('To-do App Backend')
    .setDescription('APIs for To-do App.')
    .setVersion('1.0')
    .addBearerAuth(undefined, 'defaultBearerAuth')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {});

  app.enableCors();
  await app.listen(PORT);
  console.log('Server is running on port -', PORT);
}
bootstrap();
