import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { RegionRegionOption } from '../region-region-option/region-region-option.entity';
import { RegionRegionRegionOption } from '../region-region-region-option/region-region-region-option.entity';
import { RegionOption } from './region-option.entity';

@Injectable()
export class RegionOptionService extends OptionService {
	protected readonly mainRelationColumnName: string = 'regionId';
	protected readonly optionRelationColumnName: string = 'regionOptionId';
	protected readonly optionContentColumnName: string = 'regionRegionOptionId';
	protected readonly repositoryConstructor = RegionOption;
	protected readonly repositoryOptionConstructor = RegionRegionOption;
	protected readonly repositoryContentOptionConstructor = RegionRegionRegionOption;

	constructor(
		@InjectRepository(RegionOption) protected readonly repository: Repository<RegionOption>,
		@InjectRepository(RegionRegionOption) public readonly repositoryOption: Repository<RegionRegionOption>,
		@InjectRepository(RegionRegionRegionOption) public readonly repositoryContentOption: Repository<RegionRegionRegionOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
