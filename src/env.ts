import * as dotenv from 'dotenv';

//converts port to number for env
export function portToNumber(port: string): number {
  const portAsNumber = parseInt(port, 10);
  return portAsNumber;
}

dotenv.config();
export const env = {
  app: {
    name: process.env.NAME,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
  },
  db: {
    type: process.env.DB_CONNECTION || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: portToNumber(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};
