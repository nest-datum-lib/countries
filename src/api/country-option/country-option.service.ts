import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { CountryCountryOption } from '../country-country-option/country-country-option.entity';
import { CountryCountryCountryOption } from '../country-country-country-option/country-country-country-option.entity';
import { CountryOption } from './country-option.entity';

@Injectable()
export class CountryOptionService extends OptionService {
	protected readonly mainRelationColumnName: string = 'countryId';
	protected readonly optionRelationColumnName: string = 'countryOptionId';
	protected readonly optionContentColumnName: string = 'countryCountryOptionId';
	protected readonly repositoryConstructor = CountryOption;
	protected readonly repositoryOptionConstructor = CountryCountryOption;
	protected readonly repositoryContentOptionConstructor = CountryCountryCountryOption;

	constructor(
		@InjectRepository(CountryOption) protected readonly repository: Repository<CountryOption>,
		@InjectRepository(CountryCountryOption) public readonly repositoryOption: Repository<CountryCountryOption>,
		@InjectRepository(CountryCountryCountryOption) public readonly repositoryContentOption: Repository<CountryCountryCountryOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
