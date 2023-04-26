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
import { RegionTcpController } from './region-tcp.controller';
import { Type } from '../type/type.entity';
import { RegionRegionRegionOption } from '../region-region-region-option/region-region-region-option.entity';
import { RegionOption } from '../region-option/region-option.entity';
import { RegionRegionOption } from '../region-region-option/region-region-option.entity';
import { Region } from './region.entity';

@Module({
	controllers: [ RegionTcpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			Type,
			RegionOption,
			RegionRegionOption,
			Region,
			RegionRegionRegionOption, 
		]),
		CacheModule,
	],
	providers: [ 
		CacheService,
		RegionService,
	],
})
export class RegionTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
