import { IsString } from "class-validator";

export class CreateCursoDto {
    @IsString()
    readonly name: string;
    @IsString()
    readonly description: string;
    @IsString({ each: true })
    readonly tags: string[]; // não será manipulado, apenas para definir o tipo da informação que será enviada no corpo da requisão create
}

//uma classe que não é necessário testar
