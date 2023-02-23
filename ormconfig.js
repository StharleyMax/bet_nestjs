console.log('DATABASE_URL: ', process.env.DATABASE_URI);
module.exports = {
  type: process.env.DB_TYPE,
  url: process.env.DATABASE_URI,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['./dist/**/*.entity.js'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
  syncronize: false,
};
