import { type } from "os";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./tag.entity"

@Entity('cursos')
export class Curso { // atributos do curso
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

   @JoinTable() //principal das relacções
   @ManyToMany( (type) => Tag, (tag:Tag) => tag.cursos, {
    cascade: true,
   })
   tags: string[];
}
//estrutura inicial da classe entidades