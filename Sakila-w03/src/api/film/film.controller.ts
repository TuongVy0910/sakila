import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateFilmDto } from './dto/film.dto';
import { FilmService } from './film.service';
import { Film } from './entities/film.entity';

@Controller('films')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Post()
  create(@Body() dto: CreateFilmDto): Promise<Film> {
    return this.filmService.create(dto);
  }

  @Get()
  getAll(): Promise<Film[]> {
    return this.filmService.findAll();
  }
}
