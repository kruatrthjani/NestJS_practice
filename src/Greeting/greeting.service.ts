import { Injectable } from "@nestjs/common";
@Injectable()
export class GreetingService{
    sayHello(name:string,language:string):string{
        return `${language=="en"?'hello':'Namaste'}  ${name}`;
    }
}