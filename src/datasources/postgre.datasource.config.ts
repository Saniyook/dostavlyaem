const config = {
  name: 'Postgre',
  connector: 'postgresql',
  host: `${process.env.DB_HOST}` || 'localhost',
  port: `${process.env.DB_PORT}` || 5432,
  user: `${process.env.DB_USER}` || 'postgres',
  password: `${process.env.DB_PASS}` || 'postgres',
  database: `${process.env.DB_NAME}` || 'postgres',
  ssl: false,
};

export default config;
