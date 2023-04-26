import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeOption } from './type-option.entity';

@Injectable()
export class TypeOptionService extends OptionService {
	protected readonly mainRelationColumnName: string = 'typeId';
	protected readonly optionRelationColumnName: string = 'typeOptionId';
	protected readonly optionContentColumnName: string = 'typeTypeOptionId';
	protected readonly repositoryConstructor = TypeOption;
	protected readonly repositoryOptionConstructor = TypeTypeOption;
	protected readonly repositoryContentOptionConstructor = TypeTypeTypeOption;

	constructor(
		@InjectRepository(TypeOption) protected readonly repository: Repository<TypeOption>,
		@InjectRepository(TypeTypeOption) public readonly repositoryOption: Repository<TypeTypeOption>,
		@InjectRepository(TypeTypeTypeOption) public readonly repositoryContentOption: Repository<TypeTypeTypeOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
