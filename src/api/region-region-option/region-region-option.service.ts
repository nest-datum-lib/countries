import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { BindService } from '@nest-datum/bind';
import { CacheService } from '@nest-datum/cache';
import { RegionRegionOption } from './region-region-option.entity';


export class RegionRegionOptionService extends BindService {
	protected readonly mainRelationColumnName: string = 'regionId';
	protected readonly optionRelationColumnName: string = 'regionOptionId';
	protected repositoryConstructor = RegionRegionOption;
	
	constructor(
		@InjectRepository(RegionRegionOption) protected repository: Repository<RegionRegionOption>,
		protected connection: Connection,
		protected repositoryCache: CacheService,
	) {
		super();
	}
}
