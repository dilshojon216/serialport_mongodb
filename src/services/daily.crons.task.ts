import { Injectable } from "@nestjs/common";
import { WriteDataService } from "src/write-data/write-data.service";
import { Cron, CronExpression } from "@nestjs/schedule";
import { HourlyDataService } from "src/hourly-data/hourly-data.service";
import { WriteData } from "src/write-data/schemas/write.data";
import { LastDataService } from "src/last-data/last-data.service";
@Injectable()
export class DailyCronsTask {
          constructor(private readonly writeDataService: WriteDataService, private readonly hourlyDataService: HourlyDataService, private readonly lastDataService: LastDataService) { }


          @Cron('00 00 * * * *')
          async handleCron() {
                    const writeDataByHour = await this.writeDataService.getDataByHour()
                    await this.hourlyDataService.allCrate(writeDataByHour)
                    console.log('hourly data created')
                    await this.writeDataService.deleteAllData();
          }


          @Cron(CronExpression.EVERY_30_SECONDS)
          async handleCron2() {
                    const lastDataS = new WriteData()
                    lastDataS.fistAgVoltage = Math.floor(100 + Math.random() * 90)
                    lastDataS.fistAgAmperage = Math.floor(100 + Math.random() * 90)
                    lastDataS.fistAgActivePower = Math.floor(100 + Math.random() * 90)
                    lastDataS.fistAgReactivePower = Math.floor(100 + Math.random() * 90)
                    lastDataS.fistAgHertz = Math.floor(100 + Math.random() * 90)
                    lastDataS.fistAgUseAmperage = Math.floor(100 + Math.random() * 90)
                    lastDataS.fistAgUsePower = Math.floor(100 + Math.random() * 90)
                    lastDataS.secondAgVoltage = Math.floor(100 + Math.random() * 90)
                    lastDataS.secondAgAmperage = Math.floor(100 + Math.random() * 90)
                    lastDataS.secondAgActivePower = Math.floor(100 + Math.random() * 90)
                    lastDataS.secondAgReactivePower = Math.floor(100 + Math.random() * 90)
                    lastDataS.secondAgHertz = Math.floor(100 + Math.random() * 90)
                    lastDataS.secondAgUseAmperage = Math.floor(100 + Math.random() * 90)
                    lastDataS.secondAgUsePower = Math.floor(100 + Math.random() * 90)
                    lastDataS.hightLevel = Math.floor(100 + Math.random() * 90)
                    lastDataS.lowerLevel = Math.floor(100 + Math.random() * 90)
                    lastDataS.ag1DiffentAg2 = Math.floor(100 + Math.random() * 90)
                    lastDataS.ag2DiffentAg1 = Math.floor(100 + Math.random() * 90)
                    lastDataS.fistAgGeneratorVoltage = Math.floor(100 + Math.random() * 90)
                    lastDataS.fistAgGeneratorAmperage = Math.floor(100 + Math.random() * 90)
                    lastDataS.fistAgShinaVoltage = Math.floor(100 + Math.random() * 90)
                    lastDataS.fistAgGeneratorActivePower = Math.floor(100 + Math.random() * 90)
                    lastDataS.fistAgGeneratorReactivePower = Math.floor(100 + Math.random() * 90)
                    lastDataS.fistAgGeneratorFlow = Math.floor(100 + Math.random() * 90)
                    lastDataS.secondAgGeneratorVoltage = Math.floor(100 + Math.random() * 90)
                    lastDataS.secondAgGeneratorAmperage = Math.floor(100 + Math.random() * 90)
                    lastDataS.secondAgShinaVoltage = Math.floor(100 + Math.random() * 90)
                    lastDataS.secondAgGeneratorActivePower = Math.floor(100 + Math.random() * 90)
                    lastDataS.secondAgGeneratorReactivePower = Math.floor(100 + Math.random() * 90)
                    lastDataS.secondAgGeneratorFlow = Math.floor(100 + Math.random() * 90)
                    const startA = new Date()
                    lastDataS.date = new Date(Date.UTC(startA.getFullYear(), startA.getMonth(), startA.getDate(), startA.getHours(), startA.getMinutes(), startA.getSeconds(), startA.getMilliseconds()));




                    const oldLastData = await this.lastDataService.getAllData()
                    if (oldLastData) {
                              await this.lastDataService.update(oldLastData._id.toString(), lastDataS)
                              await this.writeDataService.create(lastDataS)
                    } else {
                              await this.lastDataService.create(lastDataS)
                              await this.writeDataService.create(lastDataS)

                    }
          }


}