import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { MainService } from '@nest-datum/main';
import { CacheService } from '@nest-datum/cache';
import { RegionRegionOption } from '../region-region-option/region-region-option.entity';
import { Region } from './region.entity';

@Injectable()
export class RegionService extends MainService {
	protected readonly withEnvKey: boolean = false;
	protected readonly withTwoStepRemoval: boolean = true;
	protected readonly repositoryConstructor = Region;
	protected readonly repositoryBindOptionConstructor = RegionRegionOption;
	protected readonly mainRelationColumnName: string = 'regionId';
	protected readonly optionRelationColumnName: string = 'regionOptionId';

	constructor(
		@InjectRepository(Region) protected readonly repository: Repository<Region>,
		@InjectRepository(RegionRegionOption) protected repositoryBindOption: Repository<RegionRegionOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}) {
		return ({
			...super.manyGetColumns(customColumns),
			userId: true,
			parentId: true,
			regionStatusId: true,
			name: true,
			description: true,
		});
	}

	protected oneGetColumns(customColumns: object = {}): object {
		return ({
			...super.oneGetColumns(customColumns),
			userId: true,
			parentId: true,
			regionStatusId: true,
			name: true,
			description: true,
		});
	}

	protected manyGetQueryColumns(customColumns: object = {}) {
		return ({
			name: true,
			description: true,
		});
	}
}
