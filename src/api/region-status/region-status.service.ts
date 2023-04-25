import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { RegionStatus } from './region-status.entity';

@Injectable()
export class RegionStatusService extends StatusService {
	protected readonly entityName: string = 'regionStatus';
	protected readonly repositoryConstructor = RegionStatus;

	constructor(
		@InjectRepository(RegionStatus) protected readonly repository: Repository<RegionStatus>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
