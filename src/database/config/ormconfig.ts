import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { env } from '../../env';

const config: ConnectionOptions = {
  type: 'postgres',
  host: env.db.host,
  port: env.db.port,
  username: env.db.username,
  password: env.db.password,
  database: env.db.database,
  entities: [__dirname + '/../../**/*.entity.{ts,js}'],
  subscribers: [__dirname + '/../**/*.subscriber.{ts,js}'],
  migrations: [__dirname + '/../migrations/*.{ts,js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: false,
  dropSchema: false,
};

export default config;
