import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { MethodNotAllowedException } from '@nest-datum-common/exceptions';
import { AccessToken } from '@nest-datum-common/decorators';
import { 
	exists as utilsCheckExists,
	strIdExists as utilsCheckStrIdExists, 
} from '@nest-datum-utils/check';
import { BindTcpController } from '@nest-datum/bind';
import { RegionContentService } from './region-content.service';

@Controller()
export class RegionContentTcpController extends BindTcpController {
	protected readonly mainRelationColumnName: string = 'regionId';
	protected readonly optionRelationColumnName: string = 'typeOptionId';
	
	constructor(
		protected service: RegionContentService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckExists(options['value'])) {
			throw new MethodNotAllowedException(`Property "value" is not valid.`);
		}
		return {
			...await super.validateCreate(options),
			value: options['value'] ?? '',
		};
	}

	async validateUpdate(options) {
		if (!utilsCheckExists(options['value'])) {
			throw new MethodNotAllowedException(`Property "value" is not valid.`);
		}
		if (!utilsCheckStrIdExists(options['typeOptionId'])) {
			throw new MethodNotAllowedException(`Property "typeOptionId" is not valid.`);
		}
		if (!utilsCheckStrIdExists(options['regionId'])) {
			throw new MethodNotAllowedException(`Property "regionId" is not valid.`);
		}
		return {
			...await super.validateUpdate(options),
			typeOptionId: options['typeOptionId'],
			regionId: options['regionId'],
			value: options['value'] ?? '',
		};
	}

	@MessagePattern({ cmd: 'regionContent.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'regionContent.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('regionContent.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('regionContent.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('regionContent.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('regionContent.update')
	async update(payload) {
		return await super.create(payload);
	}
}
