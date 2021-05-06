import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ServiceList } from '../entity/serviceList.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceListService extends TypeOrmCrudService<ServiceList>{
    constructor(@InjectRepository(ServiceList) serviceListRepository: Repository<ServiceList>) {
        super(serviceListRepository);
    }
}