import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { City } from './resources/cities/models/city.model';
import { ResourcesModule } from './resources/resources.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './resources/countries/entities/country.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [
        City
      ],
      autoLoadModels: true,
      // synchronize: process.env.NODE_ENV === 'development' ? true : false,
      logging: process.env.NODE_ENV === 'development' 
        ? (sql, timing) => Logger.debug(`${sql} - ${timing}`)
        : false,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [
        Country
      ],
      // synchronize: false
      logger: 'debug',
      logging: process.env.NODE_ENV === 'development' ? 'all' : false
    }),
    ResourcesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
