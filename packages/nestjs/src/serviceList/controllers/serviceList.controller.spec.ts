import { Test, TestingModule } from '@nestjs/testing';
import { ServiceListController } from './serviceList.controller';

describe('ServiceListController', () => {
  let controller: ServiceListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceListController],
    }).compile();

    controller = module.get<ServiceListController>(ServiceListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
