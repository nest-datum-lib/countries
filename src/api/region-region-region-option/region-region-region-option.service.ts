import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { CacheService } from '@nest-datum/cache';
import { ManyService } from '@nest-datum/many';
import { RegionRegionRegionOption } from './region-region-region-option.entity';

@Injectable()
export class RegionRegionRegionOptionService extends ManyService {
	protected readonly mainRelationColumnName: string = 'regionId';
	protected readonly optionRelationColumnName: string = 'regionRegionOptionId';
	protected readonly repositoryConstructor = RegionRegionRegionOption;

	constructor(
		@InjectRepository(RegionRegionRegionOption) protected readonly repository: Repository<RegionRegionRegionOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
