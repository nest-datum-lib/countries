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
import { RegionContentHttpController } from './region-content-http.controller';
import { RegionContentService } from './region-content.service';
import { TypeOption } from '../type-option/type-option.entity';
import { Type } from '../type/type.entity';
import { RegionContent } from './region-content.entity';

@Module({
	controllers: [ RegionContentHttpController ],
	imports: [
		TypeOrmModule.forFeature([
			TypeOption,
			Type,
			RegionContent,
		]),
		CacheModule,
	],
	providers: [
		CacheService,
		RegionContentService, 
	],
})
export class RegionContentHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
