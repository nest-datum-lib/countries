import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { CountryStatus } from './country-status.entity';

@Injectable()
export class CountryStatusService extends StatusService {
	protected readonly entityName: string = 'countryStatus';
	protected readonly repositoryConstructor = CountryStatus;

	constructor(
		@InjectRepository(CountryStatus) protected readonly repository: Repository<CountryStatus>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
