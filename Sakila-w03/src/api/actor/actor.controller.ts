import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateActorDto, UpdateActorDto } from './dto/actor.dto';
import { ActorService } from './actor.service';
import { Actor } from './entities/actor.entity';
import { UpdateResult } from 'typeorm';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiUnprocessableEntityResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { ActorDto } from './dto/actor.dto';
@Controller('actors')
@ApiTags('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Post()
  @ApiOperation({ summary: 'Create actor' })
  @ApiCreatedResponse({ description: 'Created Succesfully', type: ActorDto })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  create(@Body() dto: CreateActorDto): Promise<Actor> {
    return this.actorService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all actors' })
  @ApiOkResponse({
    description: 'Retrieved actors successfully',
    type: ActorDto,
    isArray: true
  })
  @ApiNotFoundResponse({ description: 'No actors found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  getAll(): Promise<Actor[]> {
    return this.actorService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get actor by id' })
  @ApiOkResponse({
    description: 'Retrieved actor by ID successfully',
    type: ActorDto
  })
  @ApiNotFoundResponse({ description: 'No actor found for ID' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  get(@Param('id') actorId: number): Promise<Actor> {
    return this.actorService.get(actorId);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update actor by id' })
  @ApiOkResponse({ description: 'The actor was updated successfully', type:ActorDto })
  @ApiNotFoundResponse({ description: 'Actor not found' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  update(
    @Param('id') id: number,
    @Body() dto: UpdateActorDto,
  ): Promise<UpdateResult> {
    return this.actorService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete actor by id' })
  @ApiOkResponse({ description: 'The actor was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  delete(@Param('id') id: number): Promise<Actor> {
    return this.actorService.remove(id);
  }
}
