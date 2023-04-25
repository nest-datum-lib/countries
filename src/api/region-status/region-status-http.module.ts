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
import { RegionStatusService } from './region-status.service';
import { RegionStatusHttpController } from './region-status-http.controller';
import { RegionStatus } from './region-status.entity';

@Module({
	controllers: [ RegionStatusHttpController ],
	imports: [
		TypeOrmModule.forFeature([ RegionStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		RegionStatusService, 
	],
})
export class RegionStatusHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
