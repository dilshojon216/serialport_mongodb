import { Module } from '@nestjs/common';
import { YearlyDataController } from './yearly-data.controller';
import { YearlyDataService } from './yearly-data.service';
import { MongooseModule } from '@nestjs/mongoose';
import { YearlyData, YearlyDataSchema } from './schemas/yearly.data.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: YearlyData.name, schema: YearlyDataSchema, }])],
  controllers: [YearlyDataController],
  providers: [YearlyDataService],
  exports: [YearlyDataService]
})
export class YearlyDataModule { }
