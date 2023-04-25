import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { RegionStatusService } from './region-status.service';
import { RegionStatusTcpController } from './region-status-tcp.controller';
import { RegionStatus } from './region-status.entity';

@Module({
	controllers: [ RegionStatusTcpController ],
	imports: [
		TypeOrmModule.forFeature([ RegionStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		RegionStatusService, 
	],
})
export class RegionStatusTcpModule {
}

