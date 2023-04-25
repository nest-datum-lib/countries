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
import { CityStatusService } from './city-status.service';
import { CityStatusHttpController } from './city-status-http.controller';
import { CityStatus } from './city-status.entity';

@Module({
	controllers: [ CityStatusHttpController ],
	imports: [
		TypeOrmModule.forFeature([ CityStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		CityStatusService, 
	],
})
export class CityStatusHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
