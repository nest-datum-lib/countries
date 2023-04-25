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
import { CountryStatusService } from './country-status.service';
import { CountryStatusHttpController } from './country-status-http.controller';
import { CountryStatus } from './country-status.entity';

@Module({
	controllers: [ CountryStatusHttpController ],
	imports: [
		TypeOrmModule.forFeature([ CountryStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		CountryStatusService, 
	],
})
export class CountryStatusHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
