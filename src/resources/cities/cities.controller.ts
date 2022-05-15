import {
  Controller,
  Get,
  Query,
  ParseIntPipe,
  Logger,
  DefaultValuePipe,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CitiesService, Sort, Filter } from './cities.service';
import { TypePipe } from '../../pipes/type-pipe/type.pipe';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
    @Query('pageSize', new DefaultValuePipe(0), ParseIntPipe)
    pageSize: number = 20,
    @Query(
      'filter',
      new TypePipe(
        ['ID', 'Name', 'countryCode', 'District', 'Population'],
        'Invalid filter type',
      ),
    )
    filter: Filter = 'ID',
    @Query('order', new TypePipe(['ASC', 'DESC'], 'Invalid sort type'))
    order: Sort = 'ASC',
    @Query('search') search = '',
    @Req() request: Request,
  ) {
    const { path } = request.route;
    const { host } = request.headers;
    if (page) {
      const response = await this.citiesService.findAllPaginated(
        page,
        pageSize,
        filter,
        order,
        search,
      );

      response.total_pages =
        response.total_pages == 0 ? 1 : response.total_pages;

      return {
        next_page: `${host}${path}?page=${
          page + 1 >= response.total_pages ? response.total_pages : page + 1
        }&pageSize=${pageSize}&filter=${filter}&order=${order}&search=${search}`,
        prev_page: `${host}${path}?page=${
          page - 1 === 0 ? '1' : page - 1
        }&pageSize=${pageSize}&filter=${filter}&order=${order}&search=${search}`,
        ...response,
      };
    }
    return this.citiesService.findAll();
  }
}
