import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import {
  CountriesLanguagesService,
  CountryLanguageFilter,
  CountryLanguageOrder,
} from './countries-languages.service';

@Controller('countries-languages')
export class CountriesLanguagesController {
  constructor(
    private readonly countriesLanguagesService: CountriesLanguagesService,
  ) {}

  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
    @Query('pageSize', new DefaultValuePipe(0), ParseIntPipe)
    pageSize: number = 20,
    @Query('filter') filter: CountryLanguageFilter = 'CountryCode',
    @Query('order') order: CountryLanguageOrder = 'asc',
    @Query('search') search: string = '',
    @Req() request: Request,
  ) {
    if (page) {
      const { path } = request.route;
      const { host } = request.headers;
      const response = await this.countriesLanguagesService.findPaginated(
        page,
        pageSize,
        filter,
        order,
        search,
      );
      const {next_page, prev_page, total_pages} = response;
      return {
        ...response,
        next_page: `${host}${path}?page=${
          page + 1 >= total_pages ? total_pages : page + 1
        }&pageSize=${pageSize}&filter=${filter}&order=${order}&search=${search}`,
        prev_page: `${host}${path}?page=${
          page - 1 === 0 ? '1' : page - 1
        }&pageSize=${pageSize}&filter=${filter}&order=${order}&search=${search}`,
      };
    }
    return this.countriesLanguagesService.findAll();
  }
}
