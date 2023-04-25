import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { MainService } from '@nest-datum/main';
import { CacheService } from '@nest-datum/cache';
import { CityCityOption } from '../city-city-option/city-city-option.entity';
import { City } from './city.entity';

@Injectable()
export class CityService extends MainService {
	protected readonly withEnvKey: boolean = false;
	protected readonly withTwoStepRemoval: boolean = true;
	protected readonly repositoryConstructor = City;
	protected readonly repositoryBindOptionConstructor = CityCityOption;
	protected readonly mainRelationColumnName: string = 'cityId';
	protected readonly optionRelationColumnName: string = 'cityOptionId';

	constructor(
		@InjectRepository(City) protected readonly repository: Repository<City>,
		@InjectRepository(CityCityOption) protected repositoryBindOption: Repository<CityCityOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}) {
		return ({
			...super.manyGetColumns(customColumns),
			userId: true,
			regionId: true,
			cityStatusId: true,
			name: true,
			description: true,
		});
	}

	protected oneGetColumns(customColumns: object = {}): object {
		return ({
			...super.oneGetColumns(customColumns),
			userId: true,
			regionId: true,
			cityStatusId: true,
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
