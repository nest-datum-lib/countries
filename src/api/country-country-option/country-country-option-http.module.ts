import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { CountryCountryOptionService } from './country-country-option.service';
import { CountryCountryOptionHttpController } from './country-country-option-http.controller';
import { CountryCountryCountryOption } from '../country-country-country-option/country-country-country-option.entity';
import { CountryOption } from '../country-option/country-option.entity';
import { Country } from '../country/country.entity';
import { CountryCountryOption } from './country-country-option.entity';

@Module({
	controllers: [ CountryCountryOptionHttpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			CountryOption,
			CountryCountryOption,
			Country,
			CountryCountryCountryOption, 
		]),
		CacheModule,
	],
	providers: [
		CacheService,
		CountryCountryOptionService, 
	],
})
export class CountryCountryOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
