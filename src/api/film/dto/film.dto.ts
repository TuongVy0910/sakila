import { IsString } from 'class-validator';

import { Rating } from 'src/api/film/types/Rating';

export class CreateFilmDto {
  @IsString()
  title: string;

  description: string;

  releaseYear: Date;

  languageId: number;

  originalLanguageId: number;

  rentalDuration: number;

  rentalRate: number;

  length: number;

  replacementCost: number;

  rating: Rating;

  specialFeatures: string;
}
