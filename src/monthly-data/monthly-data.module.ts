import { Module } from '@nestjs/common';
import { MonthlyDataController } from './monthly-data.controller';
import { MonthlyDataService } from './monthly-data.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MonthlyData, MonthlyDataSchema } from './schemas/monthly.data.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: MonthlyData.name, schema: MonthlyDataSchema, }])],
  controllers: [MonthlyDataController],
  providers: [MonthlyDataService],
  exports: [MonthlyDataService]
})
export class MonthlyDataModule { }
