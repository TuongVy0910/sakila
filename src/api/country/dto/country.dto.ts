import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCountryDto {
  @ApiProperty({
    type: String,
    description: "Name of country",
    example: "Viet Nam"
})
  @IsString()
  @IsNotEmpty()
  readonly country: string;
}

export class UpdateCountryDto extends CreateCountryDto {
  @ApiProperty({
    type: Number,
    description: "ID of country",
    example: 1
  })
  @IsNumber()
  @IsNotEmpty()
  readonly countryId: number;
}