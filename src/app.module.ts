import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { City } from './resources/cities/models/city.model';
import { ResourcesModule } from './resources/resources.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './resources/countries/entities/country.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

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
    MongooseModule.forRoot(
      `mongodb://${process.env.DATABASE_USER}:${
        process.env.DATABASE_PASSWORD
      }@${process.env.DATABASE_HOST}:${process.env.MONGO_PORT || 27017}/${
        process.env.DATABASE_NAME
      }`,
      {
        retryAttempts: 3,
        connectionFactory: (connection: Connection) => {
          Logger.debug(`mongoose readyState: ${connection.readyState}`);
          return connection;
        },
      },
    ),
    ResourcesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
