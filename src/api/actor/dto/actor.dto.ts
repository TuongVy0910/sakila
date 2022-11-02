import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateActorDto {
  @ApiProperty({
    type: String,
    description: "First name of actor",
    example: "Giang"
})
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @ApiProperty({
    type: String,
    description: "Last name of actor",
    example: "Hoang"
})
  @IsString()
  @IsNotEmpty()
  lastName: string;
}

export class UpdateActorDto extends PartialType(CreateActorDto) {}


export class ActorDto {
  @ApiProperty({
    type: String,
    description: "First name of actor",
    example: "Giang"
})
  firstName: string;
  @ApiProperty({
    type: String,
    description: "Last name of actor",
    example: "Hoang"
})
  lastName: string;
  @ApiProperty({
    type: String,
    description: "ID of actor",
    example: 1
})
  actorId: string;
}