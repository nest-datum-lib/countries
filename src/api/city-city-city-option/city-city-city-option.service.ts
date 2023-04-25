import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { CacheService } from '@nest-datum/cache';
import { ManyService } from '@nest-datum/many';
import { CityCityCityOption } from './city-city-city-option.entity';

@Injectable()
export class CityCityCityOptionService extends ManyService {
	protected readonly mainRelationColumnName: string = 'cityId';
	protected readonly optionRelationColumnName: string = 'cityCityOptionId';
	protected readonly repositoryConstructor = CityCityCityOption;

	constructor(
		@InjectRepository(CityCityCityOption) protected readonly repository: Repository<CityCityCityOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
