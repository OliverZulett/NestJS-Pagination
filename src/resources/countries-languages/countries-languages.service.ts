import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { paginate } from 'mongoose-paginate-v2';
import { PaginateModel } from 'mongoose';
import {
  CountryLanguage,
  CountryLanguageDocument,
} from './schemas/countries-language.scheam';

export type CountryLanguageFilter =
  | 'CountryCode'
  | 'Language'
  | 'IsOfficial'
  | 'Percentage';
export type CountryLanguageOrder = 'asc' | 'desc';

@Injectable()
export class CountriesLanguagesService {
  constructor(
    @InjectModel(CountryLanguage.name)
    private countryLanguageModel: PaginateModel<CountryLanguageDocument>,
  ) {}

  findAll() {
    return this.countryLanguageModel.find();
  }

  async findPaginated(
    page: number,
    pageSize: number,
    filter: CountryLanguageFilter,
    order: CountryLanguageOrder,
    search: string,
  ) {
    const query = {
      [filter]: {
        $regex: `.*${search}.*`,
        $options: 'i',
      },
    };
    const customLabels = {
      docs: 'countries_languages',
      totalDocs: 'total',
      limit: 'page_size',
      totalPages: 'total_pages',
      pagingCounter: false,
      hasPrevPage: false,
      hasNextPage: false,
      prevPage: 'prev_page',
      nextPage: 'next_page',
    };
    const options = {
      page: page,
      limit: pageSize,
      sort: {
        [filter]: order,
      },
      customLabels: customLabels,
    };
    return await this.countryLanguageModel.paginate(
      filter !== 'Percentage' ? query : {},
      options,
    );
  }
}
