import { Module } from '@nestjs/common';
import { CursosController } from './cursos.controller';
import { cursosProviders } from './cursos.providers';
import { CursosService } from './cursos.service';


@Module({  
  imports: [DatabaseModule],
  controllers: [CursosController],
  providers: [CursosService, ...cursosProviders],   
})
export class CursosModule {}