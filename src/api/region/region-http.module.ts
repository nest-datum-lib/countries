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
import { RegionService } from './region.service';
import { RegionHttpController } from './region-http.controller';
import { RegionRegionOptionService } from '../region-region-option/region-region-option.service';
import { RegionRegionRegionOptionService } from '../region-region-region-option/region-region-region-option.service';
import { RegionRegionRegionOption } from '../region-region-region-option/region-region-region-option.entity';
import { RegionOption } from '../region-option/region-option.entity';
import { RegionRegionOption } from '../region-region-option/region-region-option.entity';
import { Region } from './region.entity';

@Module({
	controllers: [ RegionHttpController ],
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
		RegionRegionRegionOptionService,
		RegionService,
	],
})
export class RegionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
