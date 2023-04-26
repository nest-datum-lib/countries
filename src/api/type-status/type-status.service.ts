import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { TypeStatus } from './type-status.entity';

@Injectable()
export class TypeStatusService extends StatusService {
	protected readonly entityName: string = 'typeStatus';
	protected readonly repositoryConstructor = TypeStatus;

	constructor(
		@InjectRepository(TypeStatus) protected readonly repository: Repository<TypeStatus>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
