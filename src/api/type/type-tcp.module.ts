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
import { TypeService } from './type.service';
import { TypeTcpController } from './type-tcp.controller';
import { Region } from '../region/region.entity';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeOption } from '../type-option/type-option.entity';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { Type } from './type.entity';

@Module({
	controllers: [ TypeTcpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			Region,
			TypeOption,
			TypeTypeOption,
			Type,
			TypeTypeTypeOption, 
		]),
		CacheModule,
	],
	providers: [ 
		CacheService,
		TypeService,
	],
})
export class TypeTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
