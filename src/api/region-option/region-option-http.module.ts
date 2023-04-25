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
import { RegionOptionService } from './region-option.service';
import { RegionOptionHttpController } from './region-option-http.controller';
import { RegionRegionRegionOption } from '../region-region-region-option/region-region-region-option.entity';
import { RegionRegionOption } from '../region-region-option/region-region-option.entity';
import { Region } from '../region/region.entity';
import { RegionOption } from './region-option.entity';

@Module({
	controllers: [ RegionOptionHttpController ],
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
export class RegionOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
