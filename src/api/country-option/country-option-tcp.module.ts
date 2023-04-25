import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { CountryOptionService } from './country-option.service';
import { CountryOptionTcpController } from './country-option-tcp.controller';
import { CountryCountryCountryOption } from '../country-country-country-option/country-country-country-option.entity';
import { CountryCountryOption } from '../country-country-option/country-country-option.entity';
import { Country } from '../country/country.entity';
import { CountryOption } from './country-option.entity';

@Module({
	controllers: [
		CountryOptionTcpController, 
	],
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
export class CountryOptionTcpModule {
}
