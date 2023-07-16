import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';

export type HourlyDataDocument = HourlyData & Document;

@Schema({ timestamps: true, versionKey: false, collection: 'hourlyData' })
export class HourlyData {
          _id?: mongoose.Types.ObjectId;
          @Prop({ required: true })
          fistAgVoltage: number;

          @Prop({ required: true })
          fistAgAmperage: number;

          @Prop({ required: true })
          fistAgActivePower: number;

          @Prop({ required: true })
          fistAgReactivePower: number;

          @Prop({ required: true })
          fistAgHertz: number

          @Prop({ required: true })
          fistAgUseAmperage: number;

          @Prop({ required: true })
          fistAgUsePower: number

          @Prop({ required: true })
          secondAgVoltage: number;

          @Prop({ required: true })
          secondAgAmperage: number;

          @Prop({ required: true })
          secondAgActivePower: number;

          @Prop({ required: true })
          secondAgReactivePower: number;

          @Prop({ required: true })
          secondAgHertz: number

          @Prop({ required: true })
          secondAgUseAmperage: number;

          @Prop({ required: true })
          secondAgUsePower: number


          @Prop({ required: true })
          hightLevel: number;

          @Prop({ required: true })
          lowerLevel: number;

          @Prop({ required: true })
          ag1DiffentAg2: number;

          @Prop({ required: true })
          ag2DiffentAg1: number;



          @Prop({ required: true })
          fistAgGeneratorVoltage: number;

          @Prop({ required: true })
          fistAgGeneratorAmperage: number;

          @Prop({ required: true })
          fistAgShinaVoltage: number;

          @Prop({ required: true })
          fistAgGeneratorActivePower: number;

          @Prop({ required: true })
          fistAgGeneratorReactivePower: number;

          @Prop({ required: true })
          fistAgGeneratorFlow: number;


          @Prop({ required: true })
          secondAgGeneratorVoltage: number;

          @Prop({ required: true })
          secondAgGeneratorAmperage: number;

          @Prop({ required: true })
          secondAgShinaVoltage: number;

          @Prop({ required: true })
          secondAgGeneratorActivePower: number;

          @Prop({ required: true })
          secondAgGeneratorReactivePower: number;

          @Prop({ required: true })
          secondAgGeneratorFlow: number;

          @Prop({ required: true })
          date: Date;

}

export const HourlyDataSchema = SchemaFactory.createForClass(HourlyData);