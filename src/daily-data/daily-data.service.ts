import { Injectable } from '@nestjs/common';
import { DailyData, DailyDataDocument } from './schema/daily.data.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
@Injectable()
export class DailyDataService {
          constructor(@InjectModel(DailyData.name) private dailyDataModel: Model<DailyDataDocument>) { }

          async create(dailyData: DailyData): Promise<DailyData> {
                    return await this.dailyDataModel.create(dailyData);
          }

          async allCreate(dailyData: DailyData[]): Promise<DailyData[]> {
                    return await this.dailyDataModel.insertMany(dailyData);
          }
}
