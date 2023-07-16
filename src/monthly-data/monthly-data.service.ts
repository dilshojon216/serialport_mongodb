import { Injectable } from '@nestjs/common';
import { MonthlyData, MonthlyDataDocument } from './schemas/monthly.data.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
@Injectable()
export class MonthlyDataService {
          constructor(@InjectModel(MonthlyData.name) private monthlyDataModel: Model<MonthlyDataDocument>) { }

          async create(monthlyData: MonthlyData): Promise<MonthlyData> {
                    return await this.monthlyDataModel.create(monthlyData);
          }

          async allCreate(monthlyData: MonthlyData[]): Promise<MonthlyData[]> {
                    return await this.monthlyDataModel.insertMany(monthlyData);
          }

          async update(id: string, monthlyData: MonthlyData) {
                    return await this.monthlyDataModel.updateOne({ _id: id }, monthlyData);
          }
}
