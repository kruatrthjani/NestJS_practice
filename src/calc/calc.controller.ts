import { Controller,Get,Post,Body,Query } from "@nestjs/common";
import { CalcService } from "./calc.service";
import { CalcDto } from "./dto/calc.dto";
@Controller('calc')
export class CalcController{
    constructor(private readonly calc:CalcService){}
    @Get('add')
    add(@Query('a') a:String,@Query('b')b:String){
        return {result :this.calc.add(Number(a),Number(b))};
    }
    @Get('sub')
    sub(@Query('a') a:String,@Query('b')b:String){
        return{result:this.calc.sub(Number(a),Number(b))};
    }
    @Get('mul')
  mul(@Query('a') a: string, @Query('b') b: string) {
    return { result: this.calc.mul(Number(a), Number(b)) };
  }

  @Get('div')
  div(@Query('a') a: string, @Query('b') b: string) {
    return { result: this.calc.div(Number(a), Number(b)) };
  }
  @Post()
  postCalc(@Body() body: { op: string } & CalcDto) {
    const { op, a, b } = body;
    switch (op) {
      case 'add': return { result: this.calc.add(a, b) };
      case 'sub': return { result: this.calc.sub(a, b) };
      case 'mul': return { result: this.calc.mul(a, b) };
      case 'div': return { result: this.calc.div(a, b) };
      default: return { error: 'unsupported op' };
    }
}
}