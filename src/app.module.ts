import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CalcModule } from './calc/calc.module';
import { GreetingModule } from './Greeting/greeting.module';
@Module({
  imports: [CalcModule,GreetingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
