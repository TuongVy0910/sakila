import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { ActorModule } from 'src/api/actor/actor.module';
import { Actor } from 'src/api/actor/entities/actor.entity';
import { CountryModule } from 'src/api/country/country.module';
import { Country } from 'src/api/country/entities/country.entity';
import { FilmModule } from 'src/api/film/film.module';
import { Film } from 'src/api/film/entities/film.entity';

import { ActorController } from 'src/api/actor/actor.controller';
import { CountryController } from 'src/api/country/country.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'datpham',
      database: 'sakila',
      entities: [Actor, Film,Country],
      synchronize: false,
    }),
    ActorModule,
    FilmModule,
    CountryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
