import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { CountryStatusService } from './country-status.service';
import { CountryStatusTcpController } from './country-status-tcp.controller';
import { CountryStatus } from './country-status.entity';

@Module({
	controllers: [ CountryStatusTcpController ],
	imports: [
		TypeOrmModule.forFeature([ CountryStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		CountryStatusService, 
	],
})
export class CountryStatusTcpModule {
}

