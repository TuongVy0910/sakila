import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  
  import { CreateCountryDto, UpdateCountryDto } from './dto/country.dto';
  import { CountryService } from './country.service';
  import { Country } from './entities/country.entity';
  import { DeleteResult } from 'typeorm';
  import { ApiCreatedResponse,  ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiUnprocessableEntityResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
  @Controller('country')
  @ApiTags('country')
  export class CountryController {
    constructor(private readonly countryService: CountryService) {}
  
    @Post()
    @ApiOperation({ summary: 'Create country' })
    @ApiCreatedResponse({ description: 'Created Succesfully', type: CreateCountryDto })
    @ApiUnprocessableEntityResponse({ description: 'Cannot create country' })
    create(@Body() dto: CreateCountryDto): Promise<Country> {
      return this.countryService.create(dto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all countries' })
    @ApiOkResponse({
      description: 'Retrieved countries successfully',
      type: Country,
      isArray: true
    })
    @ApiNotFoundResponse({ description: 'No country found' })
    @ApiInternalServerErrorResponse({
      description: 'Internal server error',
    })
    getAll(): Promise<Country[]> {
      return this.countryService.getAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get country by id' })
    @ApiOkResponse({
      description: 'Retrieved country by ID successfully',
      type: Country
    })
    @ApiNotFoundResponse({ description: 'No country found for ID' })
    @ApiInternalServerErrorResponse({
      description: 'Internal server error',
    })
    get(@Param('id') countryId: number): Promise<Country> {
      return this.countryService.get(countryId);
      
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Update country by id' })
    @ApiOkResponse({ description: 'The country was updated successfully', type: UpdateCountryDto })
    @ApiNotFoundResponse({ description: 'Country not found' })
    @ApiUnprocessableEntityResponse({ description: 'Cannot update country' })
    async update(
      @Param('id') id: number,
      @Body() dto: UpdateCountryDto,
    ): Promise<Country> {
      await this.countryService.get(id)
      return this.countryService.update(dto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete country by id' })
    @ApiOkResponse({ description: 'The country was deleted successfully' })
    @ApiNotFoundResponse({ description: 'Resource not found' })
    @ApiUnprocessableEntityResponse({ description: 'Cannot delete country' })
    delete(@Param('id') id: number): Promise<DeleteResult> {
      return this.countryService.remove(id);
    }
  }