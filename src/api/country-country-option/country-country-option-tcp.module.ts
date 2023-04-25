import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { CountryCountryOptionService } from './country-country-option.service';
import { CountryCountryOptionTcpController } from './country-country-option-tcp.controller';
import { CountryCountryCountryOption } from '../country-country-country-option/country-country-country-option.entity';
import { CountryOption } from '../country-option/country-option.entity';
import { Country } from '../country/country.entity';
import { CountryCountryOption } from './country-country-option.entity';

@Module({
	controllers: [
		CountryCountryOptionTcpController, 
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
		CountryCountryOptionService,
	],
})
export class CountryCountryOptionTcpModule {
}
