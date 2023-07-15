import { Injectable } from "@nestjs/common";
import { WriteDataService } from "src/write-data/write-data.service";

@Injectable()
export class DailyCronsTask {
          constructor(private readonly writeDataService: WriteDataService) { }
}