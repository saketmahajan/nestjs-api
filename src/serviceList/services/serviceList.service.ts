import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ServiceList } from '../serviceList.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceListModule } from '../serviceList.module';
@Injectable()
export class ServiceListService extends TypeOrmCrudService<ServiceList>{
    constructor(@InjectRepository(ServiceList) serviceListRepository: Repository<ServiceList>) {
        super(serviceListRepository);
    }
}