import { DataSource } from 'typeorm';
import { Curso } from './entities/curso.entity'
import { Tag } from './entities/tag.entity';


export const cursosProviders = [
    {
        provide: 'CURSOS_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Curso),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'TAGS_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Tag),
        inject: ['DATA_SOURCE'],
    }
]
