import { Module } from '@nestjs/common';
import { YearlyDataController } from './yearly-data.controller';
import { YearlyDataService } from './yearly-data.service';

@Module({
  controllers: [YearlyDataController],
  providers: [YearlyDataService]
})
export class YearlyDataModule {}
