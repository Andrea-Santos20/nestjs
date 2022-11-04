import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Curso } from "./curso.entity";

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany (() => Curso, (curso: Curso) => curso.tags )
    cursos: Curso[]
}
