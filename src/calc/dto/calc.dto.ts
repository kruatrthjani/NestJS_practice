// src/calc/dto/calc.dto.ts
import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CalcDto {
  @Type(() => Number)
  @IsNumber()
  a: number;

  @Type(() => Number)
  @IsNumber()
  b: number;
}
