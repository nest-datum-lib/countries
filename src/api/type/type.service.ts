import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { MainService } from '@nest-datum/main';
import { CacheService } from '@nest-datum/cache';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { Type } from './type.entity';

@Injectable()
export class TypeService extends MainService {
	protected readonly withEnvKey: boolean = false;
	protected readonly withTwoStepRemoval: boolean = true;
	protected readonly repositoryConstructor = Type;
	protected readonly repositoryBindOptionConstructor = TypeTypeOption;
	protected readonly mainRelationColumnName: string = 'typeId';
	protected readonly optionRelationColumnName: string = 'typeOptionId';

	constructor(
		@InjectRepository(Type) protected readonly repository: Repository<Type>,
		@InjectRepository(TypeTypeOption) protected repositoryBindOption: Repository<TypeTypeOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}) {
		return ({
			...super.manyGetColumns(customColumns),
			userId: true,
			typeStatusId: true,
			name: true,
			description: true,
		});
	}

	protected oneGetColumns(customColumns: object = {}): object {
		return ({
			...super.oneGetColumns(customColumns),
			userId: true,
			typeStatusId: true,
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
