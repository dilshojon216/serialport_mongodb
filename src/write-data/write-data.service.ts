import { Injectable } from '@nestjs/common';
import { WriteData, WriteDataDocument } from './schemas/write.data';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
@Injectable()
export class WriteDataService {
          constructor(@InjectModel(WriteData.name) private writeDataModel: Model<WriteDataDocument>) { }


          async create(writeData: WriteData): Promise<WriteData> {

                    return await this.writeDataModel.create(writeData);
          }


          async getAllData(): Promise<WriteData[]> {
                    return this.writeDataModel.find();
          }


}
