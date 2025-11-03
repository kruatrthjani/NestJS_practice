// src/calc/calc.controller.ts
import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CalcService } from './calc.service';
import { CalcDto } from './dto/calc.dto';
import { CalcOpDto } from './dto/calc-op.dto';

@Controller('calc')
export class CalcController {
  constructor(private readonly calc: CalcService) {}

  @Get('add')
  add(@Query() dto: CalcDto) {
    return { result: this.calc.add(dto.a, dto.b) };
  }

  @Get('sub')
  sub(@Query() dto: CalcDto) {
    return { result: this.calc.sub(dto.a, dto.b) };
  }

  @Get('mul')
  mul(@Query() dto: CalcDto) {
    return { result: this.calc.mul(dto.a, dto.b) };
  }

  @Get('div')
  div(@Query() dto: CalcDto) {
    return { result: this.calc.div(dto.a, dto.b) };
  }

  @Post()
  postCalc(@Body() dto: CalcOpDto) {
    const { op, a, b } = dto;

    switch (op) {
      case 'add': return { result: this.calc.add(a, b) };
      case 'sub': return { result: this.calc.sub(a, b) };
      case 'mul': return { result: this.calc.mul(a, b) };
      case 'div': return { result: this.calc.div(a, b) };
      default: return { error: 'unsupported op' };
    }
  }
}
