import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CalcModule } from './calc/calc.module';
import { GreetingModule } from './Greeting/greeting.module';
import { CrudController } from './crud/crud.controller';
import { CrudModule } from './crud/crud.module';
@Module({
  imports: [CalcModule,GreetingModule,CrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
