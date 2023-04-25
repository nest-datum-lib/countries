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
import { CountryOptionService } from './country-option.service';
import { CountryOptionHttpController } from './country-option-http.controller';
import { CountryCountryCountryOption } from '../country-country-country-option/country-country-country-option.entity';
import { CountryCountryOption } from '../country-country-option/country-country-option.entity';
import { Country } from '../country/country.entity';
import { CountryOption } from './country-option.entity';

@Module({
	controllers: [ CountryOptionHttpController ],
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
		CountryOptionService,
	],
})
export class CountryOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
