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
import { CountryTcpController } from './country-tcp.controller';
import { CountryCountryCountryOption } from '../country-country-country-option/country-country-country-option.entity';
import { CountryOption } from '../country-option/country-option.entity';
import { CountryCountryOption } from '../country-country-option/country-country-option.entity';
import { Country } from './country.entity';

@Module({
	controllers: [ CountryTcpController ],
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
		CountryService,
	],
})
export class CountryTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
