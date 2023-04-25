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
import { CityOptionService } from './city-option.service';
import { CityOptionHttpController } from './city-option-http.controller';
import { CityCityCityOption } from '../city-city-city-option/city-city-city-option.entity';
import { CityCityOption } from '../city-city-option/city-city-option.entity';
import { City } from '../city/city.entity';
import { CityOption } from './city-option.entity';

@Module({
	controllers: [ CityOptionHttpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			CityCityCityOption,
			CityCityOption,
			City,
			CityOption, 
		]),
		CacheModule,
	],
	providers: [ 
		CacheService,
		CityOptionService,
	],
})
export class CityOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
