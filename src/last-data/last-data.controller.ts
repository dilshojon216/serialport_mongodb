import { Controller, Get } from '@nestjs/common';
import { LastDataService } from './last-data.service';

@Controller('/api/v1/last-data')
export class LastDataController {
          constructor(private readonly lastDataService: LastDataService) { }

          @Get("/all")
          async getAllLastData() {
                    return await this.lastDataService.getAllData();
          }
}
