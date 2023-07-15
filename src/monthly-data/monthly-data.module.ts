import { Module } from '@nestjs/common';
import { MonthlyDataController } from './monthly-data.controller';
import { MonthlyDataService } from './monthly-data.service';

@Module({
  controllers: [MonthlyDataController],
  providers: [MonthlyDataService]
})
export class MonthlyDataModule {}
