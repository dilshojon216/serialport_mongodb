import { Module } from '@nestjs/common';
import { WriteDataService } from './write-data.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WriteData, WriteDataSchema } from './schemas/write.data';

@Module({
  imports: [MongooseModule.forFeature([{ name: WriteData.name, schema: WriteDataSchema, }])],
  providers: [WriteDataService],
  exports: [WriteDataService]
})
export class WriteDataModule { }
