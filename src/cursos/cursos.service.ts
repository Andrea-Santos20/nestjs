import {  Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Tag } from './entities/tag.entity';


@Injectable()
export class CursosService {
    constructor(
        @Inject('CURSO_REPOSITORY')
        private readonly cursoRepository: Repository<Curso>, 
        
        @Inject('TAGS_REPOSITORY')
        private readonly tagRepository: Repository<Tag>, 
       
    ) {}

    async findAll() {
        return this.cursoRepository.find({
            relations: ['tags'],
        });
        };

    async findOne(id: number) {
       const curso = await this.cursoRepository.findOne({
        where: { id },
        relations: ['tags'],
       });
      
       if(!curso) {
            throw new NotFoundException(`Curso ID ${id} does not exist`)
       }
        return curso;
    };

   async create(createCursoDto: CreateCursoDto) { //Dto usado para encapsular dados enviados de uma aplicação para outra, ajuda a definir as interfaces ou informações que são recebidoas no body
        const tags = await Promise.all(
            createCursoDto.tags.map((name: string) => this.preloadTagByName(name))
        )
        const curso = this.cursoRepository.create({
            ...createCursoDto,
           
        });
        return this.cursoRepository.save(curso);
    };

    async update(id: string, UpdateCursoDto: UpdateCursoDto) {
        const tags = UpdateCursoDto.tags && (await Promise.all(
             UpdateCursoDto.tags.map((name: string) => this.preloadTagByName(name)),
        ))
       
        const curso = await this.cursoRepository.preload( {
            id: +id, //converte em number
            ...UpdateCursoDto, // ... operator
            

        });

        if(!curso) {
            throw new NotFoundException(`Curso ID ${id} not found`);
        };            

        return this.cursoRepository.save(curso);
    };

    async remove(id: number) {
        const curso = await this.cursoRepository.findOne({ 
            where: { id }, 
         });
           
        if(!curso) {
            throw new NotFoundException(`Curso ID ${id} not found`);
        };            

        return this.cursoRepository.remove(curso);
    }    

    private async preloadTagByName(name: string): Promise<Tag> {
        const tag = await this.tagRepository.findOne({ where: { name } });

        if(tag) {
            return tag;
        }

        return this.tagRepository.create({ name }),
    }
}

//regras de negócios no service