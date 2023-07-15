import { Module } from '@nestjs/common';
import { HourlyDataController } from './hourly-data.controller';
import { HourlyDataService } from './hourly-data.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HourlyData, HourlyDataSchema } from './schemas/hourly.data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: HourlyData.name, schema: HourlyDataSchema, }])
  ],
  controllers: [HourlyDataController],
  providers: [HourlyDataService]
})
export class HourlyDataModule { }
