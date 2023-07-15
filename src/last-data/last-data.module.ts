import { Module } from '@nestjs/common';
import { LastDataController } from './last-data.controller';
import { LastDataService } from './last-data.service';
import { LastData, LastDataSchema } from './schemas/last.data.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: LastData.name, schema: LastDataSchema, }])],
  controllers: [LastDataController],
  providers: [LastDataService],
  exports: [LastDataService]
})
export class LastDataModule { } 
