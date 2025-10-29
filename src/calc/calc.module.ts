import {Module} from '@nestjs/common';
import { CalcController } from './calc.controller';
import { CalcService } from './calc.service';
@Module({
  controllers: [CalcController],
  providers: [CalcService],
  exports: [CalcService], // export if other modules need CalcService
})
export class CalcModule {}