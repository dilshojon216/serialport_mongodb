import { Module } from '@nestjs/common';
import { DailyDataController } from './daily-data.controller';
import { DailyDataService } from './daily-data.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DailyData, DailyDataSchema } from './schema/daily.data.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: DailyData.name, schema: DailyDataSchema, }])],
  controllers: [DailyDataController],
  providers: [DailyDataService],
  exports: [DailyDataService]
})
export class DailyDataModule { }
