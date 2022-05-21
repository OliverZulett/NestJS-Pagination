import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterOperator, paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}

  async findPaginated(query: PaginateQuery): Promise<Paginated<Country>> {
    return await paginate(query, this.countryRepository, {
      sortableColumns: [
        'code',
        'name',
        'continent',
        'region',
        'surfaceArea',
        'indepYear',
        'population',
        'lifeExpectancy',
        'gnp',
        'gnpOld',
        'localName',
        'governmentForm',
        'headOfState',
        'capital',
        'code2',
      ],
      searchableColumns: [
        'code',
        'name',
        'region',
        'surfaceArea',
        'indepYear',
        'localName',
        'headOfState',
      ],
      defaultSortBy: [
        [
          'code',
          'DESC'
        ]
      ],
      filterableColumns: {
        population: [
          FilterOperator.EQ,
          FilterOperator.GT,
          FilterOperator.LT
        ]
      },
      maxLimit: 200
    });
    // return this.countryRepository.find();
  }
}
