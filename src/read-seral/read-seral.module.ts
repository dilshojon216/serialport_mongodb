import { Module } from '@nestjs/common';
import { ReadSeralService } from './read-seral.service';
import { LastDataModule } from 'src/last-data/last-data.module';
import { WriteDataModule } from 'src/write-data/write-data.module';

@Module({
  imports: [LastDataModule, WriteDataModule],
  providers: [ReadSeralService],
  exports: [ReadSeralService],
})
export class ReadSeralModule { }
