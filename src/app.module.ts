import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LastDataModule } from './last-data/last-data.module';
import { HourlyDataModule } from './hourly-data/hourly-data.module';
import { DailyDataModule } from './daily-data/daily-data.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ReadSeralModule } from './read-seral/read-seral.module';
import { WriteDataModule } from './write-data/write-data.module';
import { MonthlyDataModule } from './monthly-data/monthly-data.module';
import { YearlyDataModule } from './yearly-data/yearly-data.module';
import { YesterdayDataModule } from './yesterday-data/yesterday-data.module';
import { DailyCronsTask } from './services/daily.crons.task';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),

    MongooseModule.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get("mongodb_host")}:${configService.get("mongodb_port")}/${configService.get("mongodb_database")}?authSource=admin`,

      }),
    }),
    LastDataModule, HourlyDataModule, DailyDataModule, ReadSeralModule, WriteDataModule, MonthlyDataModule, YearlyDataModule, YesterdayDataModule],
  controllers: [AppController],
  providers: [AppService, DailyCronsTask],
})
export class AppModule { }
