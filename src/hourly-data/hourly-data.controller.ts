import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { HourlyDataService } from './hourly-data.service';

@Controller('api/v1/data')
export class HourlyDataController {
          constructor(private readonly hourlyDataService: HourlyDataService) { }

          @Get("/daily?")
          async getToydayByStationId(@Query('date') date: string) {
                    const data = await this.hourlyDataService.getTodayData(date);
                    if (data) {
                              return { kunlik: data };
                    } else {
                              throw new HttpException({
                                        statusCode: 400,
                                        message: 'This stations is not exists'
                              },
                                        400
                              );
                    }
          }

          @Get("/monthly?")
          async getMonthlyByStationId(@Query('date') date: string) {
                    console.log(date);
                    const data = await this.hourlyDataService.getMonthData(date);

                    if (data) {
                              return { "oylik": data };
                    } else {
                              throw new HttpException({
                                        statusCode: 400,
                                        message: 'This stations is not exists'
                              },
                                        400
                              );
                    }
          }

          @Get("/yearly?")
          async getYearlyByStationId(@Query('date') date: string) {
                    const data = await this.hourlyDataService.getYearData(date);

                    if (data) {
                              return { "yillik": data };
                    } else {
                              throw new HttpException({
                                        statusCode: 400,
                                        message: 'This stations is not exists'
                              },
                                        400
                              );
                    }
          }
}
