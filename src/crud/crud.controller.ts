// crud.controller.ts
import { Controller, Get, Post, Put, Param, Body, Patch, Delete } from "@nestjs/common";
import { CrudService } from "./crud.service";

@Controller("crud")
export class CrudController {
    constructor(private readonly crudService: CrudService) {}

    @Get("/getall")
    getAll(): { [key: string]: string } {
        return this.crudService.getAllData();
    }

    @Get("/getbyid/:id")
    getById(@Param("id") id: string): string {
        return this.crudService.getById(id);
    }

    @Post("/create")
    createData(@Body() body: { id: string; name: string }): { message: string; data: { [key: string]: string } } {
        return this.crudService.createData(body.id, body.name);
    }

    @Patch("/update/:id")
    updateData(
        @Param("id") id: string,
        @Body("name") name: string
    ): { message: string; data: { [key: string]: string } } {
        return this.crudService.updateData(id, name);
    }

    @Delete("/delete/:id")
    deleteData(@Param("id") id: string): { message: string; data: { [key: string]: string } } {
        return this.crudService.deleteData(id);
    }
}