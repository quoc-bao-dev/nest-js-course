import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = process.env.PORT ?? 3000;

const config = new DocumentBuilder()
  .setTitle('Query Book API')
  .setDescription(
    'Hệ thống mạng xã hội dành cho lập trình viên — giống như Facebook + LinkedIn + StackOverflow',
  )
  .setVersion('1.0.0')
  .addServer('http://localhost:3000') // server base URL
  .addBearerAuth() // nếu dùng JWT
  .setContact('Quốc Bảo', 'https://your-portfolio.com', 'youremail@example.com')
  .setLicense('MIT', 'https://opensource.org/licenses/MIT')
  .setTermsOfService('https://yourdomain.com/terms')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(`app running on port ${port}, http://localhost:${port}`);
    console.log(`swagger:  http://localhost:${port}/api-docs`);
  });
}
bootstrap();
