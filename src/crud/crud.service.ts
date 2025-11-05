// crud.service.ts (must match)
import { Injectable } from "@nestjs/common";

@Injectable()
export class CrudService {
    private Obj: { [key: string]: string } = { "1": "apple", "2": "banana", "3": "grapes" };

    getAllData(): { [key: string]: string } {
        return this.Obj;
    }

    getById(id: string): string {
        return this.Obj[id] || "not found";
    }

    createData(id: string, name: string): { message: string; data: { [key: string]: string } } {
        this.Obj[id] = name;
        return { message: "data created", data: this.Obj };
    }

    updateData(id: string, name: string): { message: string; data: { [key: string]: string } } {
        if (!this.Obj[id]) return { message: "not found", data: this.Obj };
        this.Obj[id] = name;
        return { message: "data updated", data: this.Obj };
    }
    deleteData(id:string): {message:string; data:{[key:string]:string}} {
        if(!this.Obj[id]) return {message:"not found", data:this.Obj};
        delete this.Obj[id];
        return {message:"data deleted", data:this.Obj};
    } 
}