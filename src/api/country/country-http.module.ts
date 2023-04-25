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
import { CountryService } from './country.service';
import { CountryHttpController } from './country-http.controller';
import { CountryCountryOptionService } from '../country-country-option/country-country-option.service';
import { CountryCountryCountryOptionService } from '../country-country-country-option/country-country-country-option.service';
import { CountryCountryCountryOption } from '../country-country-country-option/country-country-country-option.entity';
import { CountryOption } from '../country-option/country-option.entity';
import { CountryCountryOption } from '../country-country-option/country-country-option.entity';
import { Country } from './country.entity';

@Module({
	controllers: [ CountryHttpController ],
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
		CountryCountryCountryOptionService,
		CountryService,
	],
})
export class CountryHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
