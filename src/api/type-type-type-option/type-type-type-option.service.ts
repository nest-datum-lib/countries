import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { CacheService } from '@nest-datum/cache';
import { ManyService } from '@nest-datum/many';
import { TypeTypeTypeOption } from './type-type-type-option.entity';

@Injectable()
export class TypeTypeTypeOptionService extends ManyService {
	protected readonly mainRelationColumnName: string = 'typeId';
	protected readonly optionRelationColumnName: string = 'typeTypeOptionId';
	protected readonly repositoryConstructor = TypeTypeTypeOption;

	constructor(
		@InjectRepository(TypeTypeTypeOption) protected readonly repository: Repository<TypeTypeTypeOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
