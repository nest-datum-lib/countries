import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { BindService } from '@nest-datum/bind';
import { CacheService } from '@nest-datum/cache';
import { CityCityOption } from './city-city-option.entity';


export class CityCityOptionService extends BindService {
	protected readonly mainRelationColumnName: string = 'cityId';
	protected readonly optionRelationColumnName: string = 'cityOptionId';
	protected repositoryConstructor = CityCityOption;
	
	constructor(
		@InjectRepository(CityCityOption) protected repository: Repository<CityCityOption>,
		protected connection: Connection,
		protected repositoryCache: CacheService,
	) {
		super();
	}
}
