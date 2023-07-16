import { Injectable, OnModuleInit } from '@nestjs/common';
import { SerialPort } from 'serialport';
import { ListDataName } from 'src/config/list_data_name';
import { LastDataService } from 'src/last-data/last-data.service';
import { LastData } from 'src/last-data/schemas/last.data.schema';
import { WriteDataService } from 'src/write-data/write-data.service';

@Injectable()
export class ReadSeralService implements OnModuleInit {
          constructor(private readonly lastDataService: LastDataService, private readonly writeDataService: WriteDataService) { }
          private serialPort: SerialPort;
          onModuleInit() {
                    this.serialPort = new SerialPort(
                              { path: 'COM5', baudRate: 19200, autoOpen: false }, (err) => {
                                        if (err) {
                                                  console.log('Error: ', err.message);
                                        }
                                        console.log('Serial port is open1');
                              }
                    );

                    this.serialPort.open(
                              (err) => {
                                        if (err) {
                                                  console.log('Error: ', err.message);
                                        }
                                        console.log('Serial port is open2');
                              }
                    )

                    this.serialPort.on('data', (data) => {
                              this.readWriteDB(data);
                    });
          }
          count = 0;
          lastDataS = new LastData();

          async readWriteDB(data) {
                    const valueString = data.toString();
                    const valueStringW = valueString.substring(1, valueString.length - 1);
                    if (valueStringW.includes(ListDataName[0])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[0]) + ListDataName[0].length, valueStringW.length)
                              this.lastDataS.fistAgVoltage = Number(data)

                    } else if (valueStringW.includes(ListDataName[1])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[1]) + ListDataName[1].length, valueStringW.length)
                              this.lastDataS.fistAgAmperage = Number(data)

                    } else if (valueStringW.includes(ListDataName[2])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[2]) + ListDataName[2].length, valueStringW.length)
                              this.lastDataS.fistAgActivePower = Number(data)
                    }
                    else if (valueStringW.includes(ListDataName[3])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[3]) + ListDataName[3].length, valueStringW.length)
                              this.lastDataS.fistAgReactivePower = Number(data)
                    }
                    else if (valueStringW.includes(ListDataName[4])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[4]) + ListDataName[4].length, valueStringW.length)
                              this.lastDataS.fistAgHertz = Number(data)
                    } else if (valueStringW.includes(ListDataName[5])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[5]) + ListDataName[5].length, valueStringW.length)
                              this.lastDataS.fistAgUseAmperage = Number(data)
                    } else if (valueStringW.includes(ListDataName[6])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[6]) + ListDataName[6].length, valueStringW.length)
                              this.lastDataS.fistAgUsePower = Number(data)
                    } else if (valueStringW.includes(ListDataName[7])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[7]) + ListDataName[7].length, valueStringW.length)
                              this.lastDataS.secondAgVoltage = Number(data)

                    } else if (valueStringW.includes(ListDataName[8])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[8]) + ListDataName[8].length, valueStringW.length)
                              this.lastDataS.secondAgAmperage = Number(data)

                    } else if (valueStringW.includes(ListDataName[9])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[9]) + ListDataName[9].length, valueStringW.length)
                              this.lastDataS.secondAgActivePower = Number(data)


                    } else if (valueStringW.includes(ListDataName[10])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[10]) + ListDataName[10].length, valueStringW.length)
                              this.lastDataS.secondAgReactivePower = Number(data)
                    } else if (valueStringW.includes(ListDataName[11])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[11]) + ListDataName[11].length, valueStringW.length)
                              this.lastDataS.secondAgHertz = Number(data)
                    } else if (valueStringW.includes(ListDataName[12])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[12]) + ListDataName[12].length, valueStringW.length)
                              this.lastDataS.secondAgUseAmperage = Number(data)
                    } else if (valueStringW.includes(ListDataName[13])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[13]) + ListDataName[13].length, valueStringW.length)
                              this.lastDataS.secondAgUsePower = Number(data)
                    } else if (valueStringW.includes(ListDataName[14])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[14]) + ListDataName[14].length, valueStringW.length)
                              this.lastDataS.hightLevel = Number(data) - 25;
                    } else if (valueStringW.includes(ListDataName[15])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[15]) + ListDataName[15].length, valueStringW.length)
                              this.lastDataS.lowerLevel = Number(data)
                    } else if (valueStringW.includes(ListDataName[16])) {

                              this.lastDataS.ag1DiffentAg2 = this.lastDataS.hightLevel - this.lastDataS.lowerLevel;
                    } else if (valueStringW.includes(ListDataName[17])) {
                              this.lastDataS.ag2DiffentAg1 = this.lastDataS.hightLevel - this.lastDataS.lowerLevel;
                    } else if (valueStringW.includes(ListDataName[18])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[18]) + ListDataName[18].length, valueStringW.length)
                              this.lastDataS.fistAgGeneratorVoltage = Number(data)
                    } else if (valueStringW.includes(ListDataName[19])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[19]) + ListDataName[19].length, valueStringW.length)
                              this.lastDataS.fistAgGeneratorAmperage = Number(data)
                    } else if (valueStringW.includes(ListDataName[20])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[20]) + ListDataName[20].length, valueStringW.length)
                              this.lastDataS.fistAgShinaVoltage = Number(data)
                    } else if (valueStringW.includes(ListDataName[21])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[21]) + ListDataName[21].length, valueStringW.length)
                              this.lastDataS.fistAgGeneratorActivePower = Number(data)
                    } else if (valueStringW.includes(ListDataName[22])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[22]) + ListDataName[22].length, valueStringW.length)
                              this.lastDataS.fistAgGeneratorReactivePower = Number(data)
                    } else if (valueStringW.includes(ListDataName[23])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[23]) + ListDataName[23].length, valueStringW.length)
                              this.lastDataS.fistAgGeneratorFlow = Number(data)
                    } else if (valueStringW.includes(ListDataName[24])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[24]) + ListDataName[24].length, valueStringW.length)
                              this.lastDataS.secondAgGeneratorVoltage = Number(data)
                    } else if (valueStringW.includes(ListDataName[25])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[25]) + ListDataName[25].length, valueStringW.length)
                              this.lastDataS.secondAgGeneratorAmperage = Number(data)
                    } else if (valueStringW.includes(ListDataName[26])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[26]) + ListDataName[26].length, valueStringW.length)
                              this.lastDataS.secondAgShinaVoltage = Number(data)
                    } else if (valueStringW.includes(ListDataName[27])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[27]) + ListDataName[27].length, valueStringW.length)
                              this.lastDataS.secondAgGeneratorActivePower = Number(data)
                    } else if (valueStringW.includes(ListDataName[28])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[28]) + ListDataName[28].length, valueStringW.length)
                              this.lastDataS.secondAgGeneratorReactivePower = Number(data)
                    } else if (valueStringW.includes(ListDataName[29])) {
                              const data = valueStringW.substring(valueStringW.indexOf(ListDataName[29]) + ListDataName[29].length, valueStringW.length)
                              this.lastDataS.secondAgGeneratorFlow = Number(data)



                              const oldLastData = await this.lastDataService.getAllData()
                              if (oldLastData) {
                                        await this.lastDataService.update(oldLastData._id.toString(), this.lastDataS)
                                        await this.writeDataService.create(this.lastDataS)
                              } else {
                                        await this.lastDataService.create(this.lastDataS)
                                        await this.writeDataService.create(this.lastDataS)

                              }
                    }

          }





}
