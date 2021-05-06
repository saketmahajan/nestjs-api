import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ServiceList } from '../entity/serviceList.entity';
import { ServiceListService } from '../services/serviceList.service';

@Crud({
  model: {
    type: ServiceList
  }
})
@Controller('service')
export class ServiceListController implements CrudController<ServiceList>{
  constructor(public service: ServiceListService){}
}