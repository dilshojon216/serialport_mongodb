import { Module } from '@nestjs/common';
import { YesterdayDataController } from './yesterday-data.controller';
import { YesterdayDataService } from './yesterday-data.service';

@Module({
  controllers: [YesterdayDataController],
  providers: [YesterdayDataService]
})
export class YesterdayDataModule {}
