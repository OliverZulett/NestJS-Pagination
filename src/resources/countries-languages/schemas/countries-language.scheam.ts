import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CountryLanguageDocument = CountryLanguage & Document;

export enum OfficialEnum {
  T = 'T',
  F = 'F'
}

@Schema({
  collection: 'countrylanguage',
  timestamps: false
})
export class CountryLanguage {
  //   `CountryCode` char(3) NOT NULL DEFAULT '',
  @Prop({
    type: String,
    required: true,
    length: 3,
    default: ''
  })
  CountryCode: string;
  //   `Language` char(30) NOT NULL DEFAULT '',
  @Prop({
    type: String,
    required: true,
    length: 30,
    default: ''
  })
  Language: string;
  //   `IsOfficial` enum('T','F') NOT NULL DEFAULT 'F',
  @Prop({
    type: String,
    required: true,
    default: OfficialEnum.F
  })
  IsOfficial: OfficialEnum;
  //   `Percentage` decimal(4,1) NOT NULL DEFAULT '0.0',
  @Prop({
    type: Number,
    required: true,
    default: 0.0
  })
  Percentage: number;
}

export const CountryLanguageSchema = SchemaFactory.createForClass(CountryLanguage);
