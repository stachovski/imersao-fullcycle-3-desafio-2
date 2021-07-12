import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route } from './entities/route.entity';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(Route)
    private routeRepo: Repository<Route>,
  ) {}

  create(createRouteDto: CreateRouteDto) {
    const route = this.routeRepo.create(createRouteDto);
    return this.routeRepo.save(route);
  }

  findAll() {
    return this.routeRepo.find();
  }

  async findOne(id: number) {
    const result = await this.routeRepo.findOne(id);
    if(!result){
      throw new EntityNotFoundError(Route, id);
    }
    return this.routeRepo.findOne(id);
  }

  async update(id: number, updateRouteDto: UpdateRouteDto) {
    const updateResult = await this.routeRepo.update(id, updateRouteDto);
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Route, id);
    }
    return this.routeRepo.findOne(id);
  }

  async remove(id: number) {
    const deleteResult = await this.routeRepo.delete(id);
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Route, id);
    }
  }
}
