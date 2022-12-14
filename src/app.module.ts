import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursosModule } from './cursos/cursos.module';


@Module({
    imports: [
      CursosModule, 
    //   TypeOrmModule.forRoot({
    //     type: 'postgres',
    //     host: 'localhost',
    //     port: 5432,
    //     username: 'postgres',
    //     password: 'admin',
    //     database: 'postgres',
    //     autoLoadEntities: true,
    //     synchronize: true,
    // }),
    ],
    controllers:[AppController],
    providers:[AppService],
})
export class AppModule{}

