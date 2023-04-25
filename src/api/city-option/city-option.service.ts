import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { CityCityOption } from '../city-city-option/city-city-option.entity';
import { CityCityCityOption } from '../city-city-city-option/city-city-city-option.entity';
import { CityOption } from './city-option.entity';

@Injectable()
export class CityOptionService extends OptionService {
	protected readonly mainRelationColumnName: string = 'cityId';
	protected readonly optionRelationColumnName: string = 'cityOptionId';
	protected readonly optionContentColumnName: string = 'cityCityOptionId';
	protected readonly repositoryConstructor = CityOption;
	protected readonly repositoryOptionConstructor = CityCityOption;
	protected readonly repositoryContentOptionConstructor = CityCityCityOption;

	constructor(
		@InjectRepository(CityOption) protected readonly repository: Repository<CityOption>,
		@InjectRepository(CityCityOption) public readonly repositoryOption: Repository<CityCityOption>,
		@InjectRepository(CityCityCityOption) public readonly repositoryContentOption: Repository<CityCityCityOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
