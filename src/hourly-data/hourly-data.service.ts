import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HourlyData, HourlyDataDocument } from './schemas/hourly.data.schema';
import { Model } from "mongoose";
@Injectable()
export class HourlyDataService {
          constructor(@InjectModel(HourlyData.name) private hourlyDataModel: Model<HourlyDataDocument>) { }



          async allCrate(hourlyData: HourlyData[]): Promise<HourlyData[]> {
                    return await this.hourlyDataModel.insertMany(hourlyData);
          }

          async getTodayData(date: string) {
                    const startA = new Date(date);
                    const start = new Date(Date.UTC(startA.getFullYear(), startA.getMonth(), startA.getDate()));

                    const end = new Date(Date.UTC(start.getFullYear(), start.getMonth(), start.getDate(), 23, 59, 59, 999));

                    return await this.hourlyDataModel.find({ date: { $gte: start, $lt: end } }).sort({ date: -1 });

          }

          async getMonthData(date: string) {
                    return await this.hourlyDataModel.aggregate(
                              [
                                        {
                                                  '$group': {
                                                            '_id': {
                                                                      '$dateToString': {
                                                                                'format': '%Y-%m-%d',
                                                                                'date': '$date'
                                                                      }
                                                            },
                                                            'fistAgVoltage': {
                                                                      '$avg': '$fistAgVoltage'
                                                            },
                                                            'fistAgAmperage': {
                                                                      '$avg': '$fistAgAmperage'
                                                            },
                                                            'fistAgActivePower': {
                                                                      '$avg': '$fistAgActivePower'
                                                            },
                                                            'fistAgReactivePower': {
                                                                      '$avg': '$fistAgReactivePower'
                                                            },
                                                            'fistAgHertz': {
                                                                      '$avg': '$fistAgHertz'
                                                            },
                                                            'fistAgUseAmperage': {
                                                                      '$avg': '$fistAgUseAmperage'
                                                            },
                                                            'fistAgUsePower': {
                                                                      '$avg': '$fistAgUsePower'
                                                            },
                                                            'secondAgVoltage': {
                                                                      '$avg': '$secondAgVoltage'
                                                            },
                                                            'secondAgAmperage': {
                                                                      '$avg': '$secondAgAmperage'
                                                            },
                                                            'secondAgActivePower': {
                                                                      '$avg': '$secondAgActivePower'
                                                            },
                                                            'secondAgReactivePower': {
                                                                      '$avg': '$secondAgReactivePower'
                                                            },
                                                            'secondAgHertz': {
                                                                      '$avg': '$secondAgHertz'
                                                            },
                                                            'secondAgUseAmperage': {
                                                                      '$avg': '$secondAgUseAmperage'
                                                            },
                                                            'secondAgUsePower': {
                                                                      '$avg': '$secondAgUsePower'
                                                            },
                                                            'hightLevel': {
                                                                      '$avg': '$hightLevel'
                                                            },
                                                            'lowerLevel': {
                                                                      '$avg': '$lowerLevel'
                                                            },
                                                            'ag1DiffentAg2': {
                                                                      '$avg': '$ag1DiffentAg2'
                                                            },
                                                            'ag2DiffentAg1': {
                                                                      '$avg': '$ag2DiffentAg1'
                                                            },
                                                            'fistAgGeneratorVoltage': {
                                                                      '$avg': '$fistAgGeneratorVoltage'
                                                            },
                                                            'fistAgGeneratorAmperage': {
                                                                      '$avg': '$fistAgGeneratorAmperage'
                                                            },
                                                            'fistAgShinaVoltage': {
                                                                      '$avg': '$fistAgShinaVoltage'
                                                            },
                                                            'fistAgGeneratorActivePower': {
                                                                      '$avg': '$fistAgGeneratorActivePower'
                                                            },
                                                            'fistAgGeneratorReactivePower': {
                                                                      '$avg': '$fistAgGeneratorReactivePower'
                                                            },
                                                            'fistAgGeneratorFlow': {
                                                                      '$avg': '$fistAgGeneratorFlow'
                                                            },
                                                            'secondAgGeneratorVoltage': {
                                                                      '$avg': '$secondAgGeneratorVoltage'
                                                            },
                                                            'secondAgGeneratorAmperage': {
                                                                      '$avg': '$secondAgGeneratorAmperage'
                                                            },
                                                            'secondAgShinaVoltage': {
                                                                      '$avg': '$secondAgShinaVoltage'
                                                            },
                                                            'secondAgGeneratorActivePower': {
                                                                      '$avg': '$secondAgGeneratorActivePower'
                                                            },
                                                            'secondAgGeneratorReactivePower': {
                                                                      '$avg': '$secondAgGeneratorReactivePower'
                                                            },
                                                            'secondAgGeneratorFlow': {
                                                                      '$avg': '$secondAgGeneratorFlow'
                                                            },
                                                            'day': {
                                                                      '$first': {
                                                                                '$dateToString': {
                                                                                          'format': '%Y-%m-%d',
                                                                                          'date': '$date'
                                                                                }
                                                                      }
                                                            }
                                                  }
                                        }, {
                                                  '$project': {
                                                            '_id': 0,
                                                            'monthNumber': {
                                                                      '$substr': [
                                                                                '$_id', 0, 7
                                                                      ]
                                                            },
                                                            'fistAgVoltage': '$fistAgVoltage',
                                                            'fistAgAmperage': '$fistAgAmperage',
                                                            'fistAgActivePower': '$fistAgActivePower',
                                                            'fistAgReactivePower': '$fistAgReactivePower',
                                                            'fistAgHertz': '$fistAgHertz',
                                                            'fistAgUseAmperage': '$fistAgUseAmperage',
                                                            'fistAgUsePower': '$fistAgUsePower',
                                                            'secondAgVoltage': '$secondAgVoltage',
                                                            'secondAgAmperage': '$secondAgAmperage',
                                                            'secondAgActivePower': '$secondAgActivePower',
                                                            'secondAgReactivePower': '$secondAgReactivePower',
                                                            'secondAgHertz': '$secondAgHertz',
                                                            'secondAgUseAmperage': '$secondAgUseAmperage',
                                                            'secondAgUsePower': '$secondAgUsePower',
                                                            'hightLevel': '$hightLevel',
                                                            'lowerLevel': '$lowerLevel',
                                                            'ag1DiffentAg2': '$ag1DiffentAg2',
                                                            'ag2DiffentAg1': '$ag2DiffentAg1',
                                                            'fistAgGeneratorVoltage': '$fistAgGeneratorVoltage',
                                                            'fistAgGeneratorAmperage': '$fistAgGeneratorAmperage',
                                                            'fistAgShinaVoltage': '$fistAgShinaVoltage',
                                                            'fistAgGeneratorActivePower': '$fistAgGeneratorActivePower',
                                                            'fistAgGeneratorReactivePower': '$fistAgGeneratorReactivePower',
                                                            'fistAgGeneratorFlow': '$fistAgGeneratorFlow',
                                                            'secondAgGeneratorVoltage': '$secondAgGeneratorVoltage',
                                                            'secondAgGeneratorAmperage': '$secondAgGeneratorAmperage',
                                                            'secondAgShinaVoltage': '$secondAgShinaVoltage',
                                                            'secondAgGeneratorActivePower': '$secondAgGeneratorActivePower',
                                                            'secondAgGeneratorReactivePower': '$secondAgGeneratorReactivePower',
                                                            'secondAgGeneratorFlow': '$secondAgGeneratorFlow',
                                                            'day': '$day'
                                                  }
                                        }, {
                                                  '$match': {
                                                            'monthNumber': date
                                                  }
                                        }, {
                                                  '$project': {
                                                            'monthNumber': 0
                                                  }
                                        }, {
                                                  '$sort': {
                                                            'day': -1
                                                  }
                                        }
                              ]
                    )
          }




          async getYearData(date: string) {
                    return await this.hourlyDataModel.aggregate(
                              [
                                        {
                                                  '$group': {
                                                            '_id': {
                                                                      '$dateToString': {
                                                                                'format': '%Y-%m',
                                                                                'date': '$date'
                                                                      }
                                                            },
                                                            'fistAgVoltage': {
                                                                      '$avg': '$fistAgVoltage'
                                                            },
                                                            'fistAgAmperage': {
                                                                      '$avg': '$fistAgAmperage'
                                                            },
                                                            'fistAgActivePower': {
                                                                      '$avg': '$fistAgActivePower'
                                                            },
                                                            'fistAgReactivePower': {
                                                                      '$avg': '$fistAgReactivePower'
                                                            },
                                                            'fistAgHertz': {
                                                                      '$avg': '$fistAgHertz'
                                                            },
                                                            'fistAgUseAmperage': {
                                                                      '$avg': '$fistAgUseAmperage'
                                                            },
                                                            'fistAgUsePower': {
                                                                      '$avg': '$fistAgUsePower'
                                                            },
                                                            'secondAgVoltage': {
                                                                      '$avg': '$secondAgVoltage'
                                                            },
                                                            'secondAgAmperage': {
                                                                      '$avg': '$secondAgAmperage'
                                                            },
                                                            'secondAgActivePower': {
                                                                      '$avg': '$secondAgActivePower'
                                                            },
                                                            'secondAgReactivePower': {
                                                                      '$avg': '$secondAgReactivePower'
                                                            },
                                                            'secondAgHertz': {
                                                                      '$avg': '$secondAgHertz'
                                                            },
                                                            'secondAgUseAmperage': {
                                                                      '$avg': '$secondAgUseAmperage'
                                                            },
                                                            'secondAgUsePower': {
                                                                      '$avg': '$secondAgUsePower'
                                                            },
                                                            'hightLevel': {
                                                                      '$avg': '$hightLevel'
                                                            },
                                                            'lowerLevel': {
                                                                      '$avg': '$lowerLevel'
                                                            },
                                                            'ag1DiffentAg2': {
                                                                      '$avg': '$ag1DiffentAg2'
                                                            },
                                                            'ag2DiffentAg1': {
                                                                      '$avg': '$ag2DiffentAg1'
                                                            },
                                                            'fistAgGeneratorVoltage': {
                                                                      '$avg': '$fistAgGeneratorVoltage'
                                                            },
                                                            'fistAgGeneratorAmperage': {
                                                                      '$avg': '$fistAgGeneratorAmperage'
                                                            },
                                                            'fistAgShinaVoltage': {
                                                                      '$avg': '$fistAgShinaVoltage'
                                                            },
                                                            'fistAgGeneratorActivePower': {
                                                                      '$avg': '$fistAgGeneratorActivePower'
                                                            },
                                                            'fistAgGeneratorReactivePower': {
                                                                      '$avg': '$fistAgGeneratorReactivePower'
                                                            },
                                                            'fistAgGeneratorFlow': {
                                                                      '$avg': '$fistAgGeneratorFlow'
                                                            },
                                                            'secondAgGeneratorVoltage': {
                                                                      '$avg': '$secondAgGeneratorVoltage'
                                                            },
                                                            'secondAgGeneratorAmperage': {
                                                                      '$avg': '$secondAgGeneratorAmperage'
                                                            },
                                                            'secondAgShinaVoltage': {
                                                                      '$avg': '$secondAgShinaVoltage'
                                                            },
                                                            'secondAgGeneratorActivePower': {
                                                                      '$avg': '$secondAgGeneratorActivePower'
                                                            },
                                                            'secondAgGeneratorReactivePower': {
                                                                      '$avg': '$secondAgGeneratorReactivePower'
                                                            },
                                                            'secondAgGeneratorFlow': {
                                                                      '$avg': '$secondAgGeneratorFlow'
                                                            },
                                                            'day': {
                                                                      '$first': {
                                                                                '$dateToString': {
                                                                                          'format': '%Y',
                                                                                          'date': '$date'
                                                                                }
                                                                      }
                                                            }
                                                  }
                                        }, {
                                                  '$project': {
                                                            '_id': 0,
                                                            'monthNumber': {
                                                                      '$substr': [
                                                                                '$_id', 0, 4
                                                                      ]
                                                            },
                                                            'fistAgVoltage': '$fistAgVoltage',
                                                            'fistAgAmperage': '$fistAgAmperage',
                                                            'fistAgActivePower': '$fistAgActivePower',
                                                            'fistAgReactivePower': '$fistAgReactivePower',
                                                            'fistAgHertz': '$fistAgHertz',
                                                            'fistAgUseAmperage': '$fistAgUseAmperage',
                                                            'fistAgUsePower': '$fistAgUsePower',
                                                            'secondAgVoltage': '$secondAgVoltage',
                                                            'secondAgAmperage': '$secondAgAmperage',
                                                            'secondAgActivePower': '$secondAgActivePower',
                                                            'secondAgReactivePower': '$secondAgReactivePower',
                                                            'secondAgHertz': '$secondAgHertz',
                                                            'secondAgUseAmperage': '$secondAgUseAmperage',
                                                            'secondAgUsePower': '$secondAgUsePower',
                                                            'hightLevel': '$hightLevel',
                                                            'lowerLevel': '$lowerLevel',
                                                            'ag1DiffentAg2': '$ag1DiffentAg2',
                                                            'ag2DiffentAg1': '$ag2DiffentAg1',
                                                            'fistAgGeneratorVoltage': '$fistAgGeneratorVoltage',
                                                            'fistAgGeneratorAmperage': '$fistAgGeneratorAmperage',
                                                            'fistAgShinaVoltage': '$fistAgShinaVoltage',
                                                            'fistAgGeneratorActivePower': '$fistAgGeneratorActivePower',
                                                            'fistAgGeneratorReactivePower': '$fistAgGeneratorReactivePower',
                                                            'fistAgGeneratorFlow': '$fistAgGeneratorFlow',
                                                            'secondAgGeneratorVoltage': '$secondAgGeneratorVoltage',
                                                            'secondAgGeneratorAmperage': '$secondAgGeneratorAmperage',
                                                            'secondAgShinaVoltage': '$secondAgShinaVoltage',
                                                            'secondAgGeneratorActivePower': '$secondAgGeneratorActivePower',
                                                            'secondAgGeneratorReactivePower': '$secondAgGeneratorReactivePower',
                                                            'secondAgGeneratorFlow': '$secondAgGeneratorFlow',
                                                            'day': {
                                                                      '$substr': [
                                                                                '$_id', 5, 7
                                                                      ]
                                                            }
                                                  }
                                        }, {
                                                  '$match': {
                                                            'monthNumber': date
                                                  }
                                        }, {
                                                  '$project': {
                                                            'monthNumber': 0
                                                  }
                                        }
                              ]
                    )
          }


}
