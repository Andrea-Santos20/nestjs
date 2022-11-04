module.exports = {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'postgres',
      entities: ['dist/**/*.entity.js'],
      migrations: ['dist/migration/s*.js'],
      cli: {
        migrationsDir: 'src/migrations',
      },
};
