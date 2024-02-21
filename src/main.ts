import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // {cors:true}
  // 이걸 해줘야 프론트랑 연동가능
  await app.listen(4000);
}
bootstrap();
