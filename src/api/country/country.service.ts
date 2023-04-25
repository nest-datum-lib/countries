import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { MainService } from '@nest-datum/main';
import { CacheService } from '@nest-datum/cache';
import { CountryCountryOption } from '../country-country-option/country-country-option.entity';
import { Country } from './country.entity';

@Injectable()
export class CountryService extends MainService {
	protected readonly withEnvKey: boolean = false;
	protected readonly withTwoStepRemoval: boolean = true;
	protected readonly repositoryConstructor = Country;
	protected readonly repositoryBindOptionConstructor = CountryCountryOption;
	protected readonly mainRelationColumnName: string = 'countryId';
	protected readonly optionRelationColumnName: string = 'countryOptionId';

	constructor(
		@InjectRepository(Country) protected readonly repository: Repository<Country>,
		@InjectRepository(CountryCountryOption) protected repositoryBindOption: Repository<CountryCountryOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}) {
		return ({
			...super.manyGetColumns(customColumns),
			userId: true,
			countryStatusId: true,
			code: true,
			name: true,
			description: true,
		});
	}

	protected oneGetColumns(customColumns: object = {}): object {
		return ({
			...super.oneGetColumns(customColumns),
			userId: true,
			countryStatusId: true,
			code: true,
			name: true,
			description: true,
		});
	}

	protected manyGetQueryColumns(customColumns: object = {}) {
		return ({
			code: true,
			name: true,
			description: true,
		});
	}
}
