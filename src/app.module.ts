import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Cho phép dùng ở mọi nơi không cần import lại
      envFilePath: `.env.${process.env.NODE_ENV || 'dev'}`,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
