import { Injectable } from "@nestjs/common";
@Injectable()
export class GreetingService{
    sayHello(name:string,language:string):string{
        return `${language=="en"?'hello':'Namaste'}  ${name}`;
    }

    CreateGreeting(payload:{email:string,name:string}):{message:string,status:number} | null{
        const {email, name} = payload || {};
        if(name && email){
                return {
                    message:`Greeting created for ${name} with email ${email}`,
                    status:201
                };            
    }
        return null;
    }
}