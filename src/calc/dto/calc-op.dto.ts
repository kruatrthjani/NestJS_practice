// src/calc/dto/calc-op.dto.ts
import { IsString } from 'class-validator';
import { CalcDto } from './calc.dto';

export class CalcOpDto extends CalcDto {
  @IsString()
  op: string;
}
