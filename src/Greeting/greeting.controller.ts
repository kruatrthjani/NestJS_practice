// import { GreetingService } from "./greeting.service";

// @Controller('greeting')
// export class GreetingController {
//     constructor(private readonly greetingService: GreetingService) {}       
//     @Get()
//     greet(@Query('name') name: string) {
//         return { message: this.greetingService.sayHello(name) };
//     }
// } 
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { GreetingService } from "./greeting.service";
import { GreetingDto } from "./dto/greeting.dto";

@Controller('greet')
export class GreetingController {
    constructor(private readonly greetingService: GreetingService) {}       

    @Get(':name')
    greet(@Param('name') name: string, @Query('language') language: string) {

        return { message: this.greetingService.sayHello(name, language) };
    }
   @Post()
    createGreeting(@Body() body: GreetingDto) {
        const {name,email}=body;
        // call service if it provides a create method, otherwise return body
        const created = typeof (this.greetingService as any).CreateGreeting === 'function'
            ? (this.greetingService as any).CreateGreeting({email,name})
            : null;
        return  { message: created ?? `Greeting created for ${body.name}`, data: body };
    }
    
}
