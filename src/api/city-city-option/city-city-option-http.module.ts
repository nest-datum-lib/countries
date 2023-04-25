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
import { CityCityOptionService } from './city-city-option.service';
import { CityCityOptionHttpController } from './city-city-option-http.controller';
import { CityCityCityOption } from '../city-city-city-option/city-city-city-option.entity';
import { CityOption } from '../city-option/city-option.entity';
import { City } from '../city/city.entity';
import { CityCityOption } from './city-city-option.entity';

@Module({
	controllers: [ CityCityOptionHttpController ],
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
		CityCityOptionService, 
	],
})
export class CityCityOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
