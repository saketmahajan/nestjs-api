import { Test, TestingModule } from '@nestjs/testing';
import { ServiceListService } from './serviceList.service';

describe('ServiceListService', () => {
  let service: ServiceListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceListService],
    }).compile();

    service = module.get<ServiceListService>(ServiceListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
