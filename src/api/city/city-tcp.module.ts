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
import { CityTcpController } from './city-tcp.controller';
import { CityCityCityOption } from '../city-city-city-option/city-city-city-option.entity';
import { CityOption } from '../city-option/city-option.entity';
import { CityCityOption } from '../city-city-option/city-city-option.entity';
import { City } from './city.entity';

@Module({
	controllers: [ CityTcpController ],
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
		CityService,
	],
})
export class CityTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
