import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { RegionContentTcpController } from './region-content-tcp.controller';
import { RegionContentService } from './region-content.service';
import { TypeOption } from '../type-option/type-option.entity';
import { Type } from '../type/type.entity';
import { RegionContent } from './region-content.entity';

@Module({
	controllers: [
		RegionContentTcpController, 
	],
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
export class RegionContentTcpModule {
}
