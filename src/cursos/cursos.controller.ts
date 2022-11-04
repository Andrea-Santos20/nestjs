import { Body, Controller, Delete, Get, Param, Patch, Post, } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Controller('cursos')
export class CursosController {
    constructor(private readonly cursosService: CursosService) {}

    @Get()
    findAll(e) {
        return this.cursosService.findAll()
    }
    
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.cursosService.findOne(+id);
    }

    @Post()
    create(@Body() createCursoDto: CreateCursoDto ) {
        return this.cursosService.create(createCursoDto);        
    }

    @Patch(':id')
    update(@Param(':id') id: string, @Body() updateCursoDto: UpdateCursoDto){
        return this.cursosService.update(id, updateCursoDto);
    }

    @Delete(':id')
    remover(@Param('id') id: number){
        return this.cursosService.remove(+id);
    }



}
