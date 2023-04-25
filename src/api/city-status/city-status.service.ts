import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { CityStatus } from './city-status.entity';

@Injectable()
export class CityStatusService extends StatusService {
	protected readonly entityName: string = 'cityStatus';
	protected readonly repositoryConstructor = CityStatus;

	constructor(
		@InjectRepository(CityStatus) protected readonly repository: Repository<CityStatus>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
