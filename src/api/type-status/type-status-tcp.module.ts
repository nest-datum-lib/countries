import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { TypeStatusService } from './type-status.service';
import { TypeStatusTcpController } from './type-status-tcp.controller';
import { TypeStatus } from './type-status.entity';

@Module({
	controllers: [ TypeStatusTcpController ],
	imports: [
		TypeOrmModule.forFeature([ TypeStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		TypeStatusService, 
	],
})
export class TypeStatusTcpModule {
}

