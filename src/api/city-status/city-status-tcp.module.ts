import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { CityStatusService } from './city-status.service';
import { CityStatusTcpController } from './city-status-tcp.controller';
import { CityStatus } from './city-status.entity';

@Module({
	controllers: [ CityStatusTcpController ],
	imports: [
		TypeOrmModule.forFeature([ CityStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		CityStatusService, 
	],
})
export class CityStatusTcpModule {
}

