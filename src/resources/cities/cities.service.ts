import { Injectable } from '@nestjs/common';
import { City } from './models/city.model';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

export type Filter = 'ID' | 'Name' | 'countryCode' | 'District' | 'Population';
export type Sort = 'DESC' | 'ASC';

@Injectable()
export class CitiesService {
  constructor(
    @InjectModel(City)
    private cityModel: typeof City,
  ) {}

  findAll() {
    return this.cityModel.findAll();
  }

  async findAllPaginated(
    page: number,
    pageSize: number,
    filter: Filter,
    order: Sort,
    search: string,
  ) {
    const { rows, count } = await this.cityModel.findAndCountAll({
      where: {
        [filter]: {
          [Op.substring]: search
        }
      },
      limit: pageSize,
      offset: page === 1 ? 0 : (page - 1) * pageSize,
      order: [[filter, order]],
    });
    const totalPages = count / pageSize;
    return {
      total_cities: count,
      total_pages: Math.round(totalPages),
      page_size: pageSize,
      page: page,
      cities: rows,
    };
  }
}
