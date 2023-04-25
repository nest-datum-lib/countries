import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { CityOptionService } from './city-option.service';
import { CityOptionTcpController } from './city-option-tcp.controller';
import { CityCityCityOption } from '../city-city-city-option/city-city-city-option.entity';
import { CityCityOption } from '../city-city-option/city-city-option.entity';
import { City } from '../city/city.entity';
import { CityOption } from './city-option.entity';

@Module({
	controllers: [
		CityOptionTcpController, 
	],
	imports: [
		TypeOrmModule.forFeature([ 
			CityOption,
			CityCityOption,
			City,
			CityCityCityOption, 
		]),
		CacheModule,
	],
	providers: [ 
		CacheService,
		CityOptionService,
	],
})
export class CityOptionTcpModule {
}
