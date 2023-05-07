import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
	Like,
} from 'typeorm';
import { 
	strId as utilsCheckStrId,
	strName as utilsCheckStrName,
	objQueryRunner as utilsCheckObjQueryRunner,
} from '@nest-datum-utils/check';
import { NotFoundException } from '@nest-datum-common/exceptions';
import { Region } from '../region/region.entity';
import { BindService } from '@nest-datum/bind';
import { CacheService } from '@nest-datum/cache';
import { RegionContent } from './region-content.entity';

export class RegionContentService extends BindService {
	protected readonly mainRelationColumnName: string = 'regionId';
	protected readonly optionRelationColumnName: string = 'typeOptionId';
	protected repositoryConstructor = RegionContent;
	
	constructor(
		@InjectRepository(RegionContent) protected repository: Repository<RegionContent>,
		protected connection: Connection,
		protected repositoryCache: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}): object {
		return {
			...super.manyGetColumns(customColumns),
			typeOptionId: true,
			regionId: true,
			value: true,
		};
	}

	protected manyGetQueryColumns(customColumns: object = {}): object {
		return {
			...super.manyGetQueryColumns(customColumns),
			value: true,
		};
	}

	protected oneGetColumns(customColumns: object = {}): object {
		return {
			...super.oneGetColumns(customColumns),
			typeOptionId: true,
			regionId: true,
			value: true,
		};
	}
}
