import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { CacheService } from '@nest-datum/cache';
import { ManyService } from '@nest-datum/many';
import { CountryCountryCountryOption } from './country-country-country-option.entity';

@Injectable()
export class CountryCountryCountryOptionService extends ManyService {
	protected readonly mainRelationColumnName: string = 'countryId';
	protected readonly optionRelationColumnName: string = 'countryCountryOptionId';
	protected readonly repositoryConstructor = CountryCountryCountryOption;

	constructor(
		@InjectRepository(CountryCountryCountryOption) protected readonly repository: Repository<CountryCountryCountryOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
