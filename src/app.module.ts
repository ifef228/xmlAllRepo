import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutsModule } from './products/products.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ProdutsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'front'), 
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
