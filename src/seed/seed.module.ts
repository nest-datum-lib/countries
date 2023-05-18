import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqlConfig as utilsFormatSqlConfig } from '@nest-datum-utils/format';

import { SeedService } from './seed.service';
import { RegionSeeder } from './region.seeder';
import { RegionStatusSeeder } from './region-status.seeder';
import { RegionContentSeeder } from './region-content.seeder';
import { TypeStatusSeeder } from './type-status.seeder';
import { TypeSeeder } from './type.seeder';
import { TypeTypeOptionSeeder } from './type-type-option.seeder';
import { TypeOptionSeeder } from './type-option.seeder';

import { RegionStatus } from '../api/region-status/region-status.entity';
import { Region } from '../api/region/region.entity';
import { RegionContent } from '../api/region-content/region-content.entity';
import { RegionOption } from '../api/region-option/region-option.entity';
import { RegionRegionOption } from '../api/region-region-option/region-region-option.entity'; 
import { RegionRegionRegionOption } from '../api/region-region-region-option/region-region-region-option.entity';
import { TypeStatus } from '../api/type-status/type-status.entity';
import { Type } from '../api/type/type.entity';
import { TypeOption } from '../api/type-option/type-option.entity';
import { TypeTypeOption } from '../api/type-type-option/type-type-option.entity';
import { TypeTypeTypeOption } from '../api/type-type-type-option/type-type-type-option.entity';

@Module({
	controllers: [],
	imports: [
		TypeOrmModule.forRoot(utilsFormatSqlConfig()),
		TypeOrmModule.forFeature([
			RegionStatus,
			RegionOption,
			Region,
			RegionContent,
			RegionRegionOption,
			RegionRegionRegionOption,
			TypeOption,
			TypeTypeOption,
			TypeTypeTypeOption,
			TypeStatus,
			Type,
		]),
	],
	providers: [
		SeedService,
		TypeOptionSeeder,
		TypeTypeOptionSeeder,
		TypeStatusSeeder,
		TypeSeeder,
		RegionStatusSeeder,
		RegionSeeder,
		RegionContentSeeder
	]
})

export class SeedModule {
}
