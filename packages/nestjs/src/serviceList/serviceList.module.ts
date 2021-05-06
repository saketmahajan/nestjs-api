import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceListController } from './controllers/serviceList.controller';
import { ServiceList } from './entity/serviceList.entity';
import { ServiceListService } from './services/serviceList.service';

@Module({
    controllers: [ServiceListController],
    providers: [ServiceListService],
    imports: [
        TypeOrmModule.forFeature([ServiceList])
    ]
})
export class ServiceListModule { }
