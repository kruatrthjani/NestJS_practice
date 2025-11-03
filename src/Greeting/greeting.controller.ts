// import { GreetingService } from "./greeting.service";

// @Controller('greeting')
// export class GreetingController {
//     constructor(private readonly greetingService: GreetingService) {}       
//     @Get()
//     greet(@Query('name') name: string) {
//         return { message: this.greetingService.sayHello(name) };
//     }
// } 
import { Controller, Get, Param, Query } from "@nestjs/common";
import { GreetingService } from "./greeting.service";

@Controller('greet')
export class GreetingController {
    constructor(private readonly greetingService: GreetingService) {}       

    @Get(':name')
    greet(@Param('name') name: string, @Query('language') language: string) {

        return { message: this.greetingService.sayHello(name, language) };
    }
    
}
