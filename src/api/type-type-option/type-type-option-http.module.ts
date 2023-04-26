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
import { TypeTypeOptionService } from './type-type-option.service';
import { TypeTypeOptionHttpController } from './type-type-option-http.controller';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeOption } from '../type-option/type-option.entity';
import { Type } from '../type/type.entity';
import { TypeTypeOption } from './type-type-option.entity';

@Module({
	controllers: [ TypeTypeOptionHttpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			TypeOption,
			TypeTypeOption,
			Type,
			TypeTypeTypeOption, 
		]),
		CacheModule,
	],
	providers: [
		CacheService,
		TypeTypeOptionService, 
	],
})
export class TypeTypeOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
