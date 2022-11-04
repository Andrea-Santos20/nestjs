import { DataSource } from "typeorm"

export const databaseProvider = [
{
    provide: 'DATA_SOURCE',
        useFactory: async () => { //useFactory uma fabrica de instancia
           const dataSource = new DataSource ({
              type: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: 'admin',
              database: 'postgres',
              entities: [ __dirname + '/../**/*.entity.ts}'],
              synchronize: true,        
            });
        return dataSource.initialize();
        },
    },
];
