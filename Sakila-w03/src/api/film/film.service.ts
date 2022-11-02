import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateFilmDto } from './dto/film.dto';
import { Film } from './entities/film.entity';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film)
    private filmRepository: Repository<Film>,
  ) {}

  create(dto: CreateFilmDto): Promise<Film> {
    return this.filmRepository.save(dto);
  }

  findAll(): Promise<Film[]> {
    return this.filmRepository.find();
  }
}
