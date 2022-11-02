import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { CreateCountryDto, UpdateCountryDto } from './dto/country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}

  async create(dto: CreateCountryDto): Promise<Country> {
    const entity =  await this.countryRepository.save(dto);
    if (!entity.countryId) {
        throw new UnprocessableEntityException(`Cannot create country`);
    }
    
    return this.countryRepository.findOneBy({ countryId: entity.countryId });
  }

  async getAll(): Promise<Country[]> {
    const res = await this.countryRepository.find();
    if (!res) {
        throw new NotFoundException(`No country found`);
    }

    return res
    
  }

  async get(id: number): Promise<Country> {
    const res = await this.countryRepository.findOneBy({ countryId: id });
    if (!res) {
        throw new NotFoundException(`No country found for ${id}`);
      }
    
    return res;
  }

  async update(dto: UpdateCountryDto): Promise<Country> {
    const res =  await this.countryRepository.update({ countryId: dto.countryId }, dto);
    if (res.affected === 0 ) {
        throw new UnprocessableEntityException(`Cannot delete country`);
    }
    return await this.get(dto.countryId)
  }

  async remove(id: number): Promise<DeleteResult> {
    const res =  await this.countryRepository.delete(id);
    if (res.affected === 0 ) {
        throw new UnprocessableEntityException(`Cannot delete country`);
    }
    return res
  }
}