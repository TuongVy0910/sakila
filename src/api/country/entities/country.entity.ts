import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Country {
  @ApiProperty({
    type: Number,
    description: "ID of country",
    example: 1
  })
  @PrimaryGeneratedColumn({ name: 'country_id' })
  countryId: number;

  @ApiProperty({
    type: String,
    description: "Name of country",
    example: "Viet Nam"
  })
  @Column({ name: 'country' })
  country: string;

  @ApiProperty({
    type: Date,
    description: "Last time update of country",
    example: "2006-02-15 04:46:27"
  })
  @Column({ name: 'last_update', type: 'timestamp' })
  lastUpdate: Date;
}
