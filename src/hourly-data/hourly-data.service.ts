import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HourlyData, HourlyDataDocument } from './schemas/hourly.data.schema';
import { Model } from "mongoose";
@Injectable()
export class HourlyDataService {
          constructor(@InjectModel(HourlyData.name) private hourlyDataModel: Model<HourlyDataDocument>) { }

          async crate(hourlyData: HourlyData): Promise<HourlyData> {
                    return await this.hourlyDataModel.create(hourlyData);
          }

          async allCrate(hourlyData: HourlyData[]): Promise<HourlyData[]> {
                    return await this.hourlyDataModel.insertMany(hourlyData);
          }

          async update(id: string, hourlyData: HourlyData) {
                    return await this.hourlyDataModel.updateOne({ _id: id }, hourlyData);
          }



}
