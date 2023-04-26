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
import { TypeStatusService } from './type-status.service';
import { TypeStatusHttpController } from './type-status-http.controller';
import { TypeStatus } from './type-status.entity';

@Module({
	controllers: [ TypeStatusHttpController ],
	imports: [
		TypeOrmModule.forFeature([ TypeStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		TypeStatusService, 
	],
})
export class TypeStatusHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
