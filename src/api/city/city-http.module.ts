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
import { CityService } from './city.service';
import { CityHttpController } from './city-http.controller';
import { CityCityOptionService } from '../city-city-option/city-city-option.service';
import { CityCityCityOptionService } from '../city-city-city-option/city-city-city-option.service';
import { CityCityCityOption } from '../city-city-city-option/city-city-city-option.entity';
import { CityOption } from '../city-option/city-option.entity';
import { CityCityOption } from '../city-city-option/city-city-option.entity';
import { City } from './city.entity';

@Module({
	controllers: [ CityHttpController ],
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
		CityCityCityOptionService,
		CityService,
	],
})
export class CityHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
