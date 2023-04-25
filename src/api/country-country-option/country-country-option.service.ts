import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { BindService } from '@nest-datum/bind';
import { CacheService } from '@nest-datum/cache';
import { CountryCountryOption } from './country-country-option.entity';


export class CountryCountryOptionService extends BindService {
	protected readonly mainRelationColumnName: string = 'countryId';
	protected readonly optionRelationColumnName: string = 'countryOptionId';
	protected repositoryConstructor = CountryCountryOption;
	
	constructor(
		@InjectRepository(CountryCountryOption) protected repository: Repository<CountryCountryOption>,
		protected connection: Connection,
		protected repositoryCache: CacheService,
	) {
		super();
	}
}
