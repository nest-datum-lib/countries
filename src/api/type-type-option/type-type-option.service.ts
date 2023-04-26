import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { BindService } from '@nest-datum/bind';
import { CacheService } from '@nest-datum/cache';
import { TypeTypeOption } from './type-type-option.entity';


export class TypeTypeOptionService extends BindService {
	protected readonly mainRelationColumnName: string = 'typeId';
	protected readonly optionRelationColumnName: string = 'typeOptionId';
	protected repositoryConstructor = TypeTypeOption;
	
	constructor(
		@InjectRepository(TypeTypeOption) protected repository: Repository<TypeTypeOption>,
		protected connection: Connection,
		protected repositoryCache: CacheService,
	) {
		super();
	}
}
