import { Module } from '@nestjs/common';
import { CountriesLanguagesService } from './countries-languages.service';
import { CountriesLanguagesController } from './countries-languages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryLanguage, CountryLanguageSchema } from './schemas/countries-language.scheam';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CountryLanguage.name,
        useFactory: () => {
          const schema = CountryLanguageSchema;
          schema.plugin(require('mongoose-paginate-v2'));
          return schema;
        }
      }
    ])
  ],
  controllers: [CountriesLanguagesController],
  providers: [CountriesLanguagesService]
})
export class CountriesLanguagesModule {}
