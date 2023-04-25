import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { RegionOptionService } from './region-option.service';
import { RegionOptionTcpController } from './region-option-tcp.controller';
import { RegionRegionRegionOption } from '../region-region-region-option/region-region-region-option.entity';
import { RegionRegionOption } from '../region-region-option/region-region-option.entity';
import { Region } from '../region/region.entity';
import { RegionOption } from './region-option.entity';

@Module({
	controllers: [
		RegionOptionTcpController, 
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
		RegionOptionService,
	],
})
export class RegionOptionTcpModule {
}
