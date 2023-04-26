import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { TypeOptionService } from './type-option.service';
import { TypeOptionTcpController } from './type-option-tcp.controller';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { Type } from '../type/type.entity';
import { TypeOption } from './type-option.entity';

@Module({
	controllers: [
		TypeOptionTcpController, 
	],
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
		TypeOptionService,
	],
})
export class TypeOptionTcpModule {
}
