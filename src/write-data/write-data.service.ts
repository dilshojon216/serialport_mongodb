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

          async getDataByHour() {
                    return this.writeDataModel.aggregate(
                              [
                                        {
                                                  $group: {
                                                            _id: {
                                                                      $hour: "$date",
                                                            },
                                                            fistAgVoltage: {
                                                                      $avg: "$fistAgVoltage",
                                                            },
                                                            fistAgAmperage: {
                                                                      $avg: "$fistAgAmperage",
                                                            },
                                                            fistAgActivePower: {
                                                                      $avg: "$fistAgActivePower",
                                                            },
                                                            fistAgReactivePower: {
                                                                      $avg: "$fistAgReactivePower",
                                                            },
                                                            fistAgHertz: {
                                                                      $avg: "$fistAgHertz",
                                                            },
                                                            fistAgUseAmperage: {
                                                                      $avg: "$fistAgUseAmperage",
                                                            },
                                                            fistAgUsePower: {
                                                                      $avg: "$fistAgUsePower",
                                                            },
                                                            secondAgVoltage: {
                                                                      $avg: "$secondAgVoltage",
                                                            },
                                                            secondAgAmperage: {
                                                                      $avg: "$secondAgAmperage",
                                                            },

                                                            secondAgActivePower: {
                                                                      $avg: "$secondAgActivePower",
                                                            },
                                                            secondAgReactivePower: {
                                                                      $avg: "$secondAgReactivePower",
                                                            },
                                                            secondAgHertz: {
                                                                      $avg: "$secondAgHertz",
                                                            },
                                                            secondAgUseAmperage: {
                                                                      $avg: "$secondAgUseAmperage",
                                                            },
                                                            secondAgUsePower: {
                                                                      $avg: "$secondAgUsePower",
                                                            },
                                                            hightLevel: {
                                                                      $avg: "$hightLevel",
                                                            },
                                                            lowerLevel: {
                                                                      $avg: "$lowerLevel",
                                                            },
                                                            ag1DiffentAg2: {
                                                                      $avg: "$ag1DiffentAg2",
                                                            },
                                                            ag2DiffentAg1: {
                                                                      $avg: "$ag2DiffentAg1",
                                                            },
                                                            fistAgGeneratorVoltage: {
                                                                      $avg: "$fistAgGeneratorVoltage",
                                                            },
                                                            fistAgGeneratorAmperage: {
                                                                      $avg: "$fistAgGeneratorAmperage",
                                                            },
                                                            fistAgShinaVoltage: {
                                                                      $avg: "$fistAgShinaVoltage",
                                                            },
                                                            fistAgGeneratorActivePower: {
                                                                      $avg: "$fistAgGeneratorActivePower",
                                                            },
                                                            fistAgGeneratorReactivePower: {
                                                                      $avg: "$fistAgGeneratorReactivePower",
                                                            },
                                                            fistAgGeneratorFlow: {
                                                                      $avg: "$fistAgGeneratorFlow",
                                                            },
                                                            secondAgGeneratorVoltage: {
                                                                      $avg: "$secondAgGeneratorVoltage",
                                                            },
                                                            secondAgGeneratorAmperage: {
                                                                      $avg: "$secondAgGeneratorAmperage",
                                                            },
                                                            secondAgShinaVoltage: {
                                                                      $avg: "$secondAgShinaVoltage",
                                                            },
                                                            secondAgGeneratorActivePower: {
                                                                      $avg: "$secondAgGeneratorActivePower",
                                                            },
                                                            secondAgGeneratorReactivePower: {
                                                                      $avg: "$secondAgGeneratorReactivePower",
                                                            },
                                                            secondAgGeneratorFlow: {
                                                                      $avg: "$secondAgGeneratorFlow",
                                                            },
                                                            date: {
                                                                      $first: "$date",
                                                            },
                                                  },
                                        },
                                        {
                                                  $project: {
                                                            _id: 0,
                                                  },
                                        },
                              ]

                    );
          }


          async deleteAllData() {
                    return this.writeDataModel.deleteMany({});
          }


}
