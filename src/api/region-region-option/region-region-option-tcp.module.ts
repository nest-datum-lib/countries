import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { RegionRegionOptionService } from './region-region-option.service';
import { RegionRegionOptionTcpController } from './region-region-option-tcp.controller';
import { RegionRegionRegionOption } from '../region-region-region-option/region-region-region-option.entity';
import { RegionOption } from '../region-option/region-option.entity';
import { Region } from '../region/region.entity';
import { RegionRegionOption } from './region-region-option.entity';

@Module({
	controllers: [
		RegionRegionOptionTcpController, 
	],
	imports: [
		TypeOrmModule.forFeature([
			RegionOption,
			RegionRegionOption,
			Region,
			RegionRegionRegionOption, 
		]),
		CacheModule,
	],
	providers: [ 
		CacheService,
		RegionRegionOptionService,
	],
})
export class RegionRegionOptionTcpModule {
}
