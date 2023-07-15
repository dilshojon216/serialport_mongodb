import { Injectable } from '@nestjs/common';
import { LastData, LastDataDocument } from './schemas/last.data.schema';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class LastDataService {
          constructor(@InjectModel(LastData.name) private lastDataModel: Model<LastDataDocument>) { }


          async create(lastData: LastData): Promise<LastData> {

                    return await this.lastDataModel.create(lastData);
          }

          async findById(id: string): Promise<LastData> {
                    return await this.lastDataModel.findById(id);
          }

          async update(id: string, lastData: LastData) {
                    return await this.lastDataModel.updateOne({ _id: id }, lastData);
          }

          async getAllData(): Promise<LastData> {
                    return this.lastDataModel.findOne().sort({ createdAt: -1 });
          }
}
