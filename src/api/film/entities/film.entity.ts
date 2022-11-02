import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';

import { Rating } from 'src/api/film/types/Rating';

@Entity()
export class Film {
  @PrimaryGeneratedColumn({ name: 'film_id' })
  filmId: number;

  @Column()
  @IsString()
  title: string;

  @Column()
  description: string;

  @Column({ name: 'release_year', type: 'year' })
  releaseYear: Date;

  @Column({ name: 'language_id' })
  languageId: number;

  @Column({ name: 'original_language_id' })
  originalLanguageId: number;

  @Column({ name: 'rental_duration' })
  rentalDuration: number;

  @Column({ name: 'rental_rate', type: 'decimal' })
  rentalRate: number;

  @Column()
  length: number;

  @Column({ name: 'replacement_cost', type: 'decimal' })
  replacementCost: number;

  @Column({
    type: 'enum',
    enum: ['R', 'PG-13', 'NC-17', 'G'],
    default: 'R',
  })
  rating: Rating;

  @Column({ name: 'special_features', type: 'set' })
  specialFeatures: string;

  @Column({ name: 'last_update', type: 'timestamp' })
  lastUpdate: Date;
}
