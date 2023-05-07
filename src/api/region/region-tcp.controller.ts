import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { MethodNotAllowedException } from '@nest-datum-common/exceptions';
import { TcpController } from '@nest-datum-common/controllers';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName, 
	strDescription as utilsCheckStrDescription,
} from '@nest-datum-utils/check';
import { RegionService } from './region.service';

@Controller()
export class RegionTcpController extends TcpController {
	constructor(
		protected service: RegionService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['regionStatusId'])) {
			throw new MethodNotAllowedException(`Property "regionStatusId" is not valid.`);
		}
		if (!utilsCheckStrId(options['typeId'])) {
			throw new MethodNotAllowedException(`Property "typeId" is not valid.`);
		}
		return await super.validateCreate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckExists(options['regionStatusId'])) {
			if (!utilsCheckStrId(options['regionStatusId'])) {
				throw new MethodNotAllowedException(`Property "regionStatusId" is not valid.`);
			}
			output['regionStatusId'] = options['regionStatusId'];
		}
		if (utilsCheckExists(options['typeId'])) {
			if (!utilsCheckStrId(options['typeId'])) {
				throw new MethodNotAllowedException(`Property "typeId" is not valid.`);
			}
			output['typeId'] = options['typeId'];
		}
		if (utilsCheckExists(options['parentId'])) {
			if (!utilsCheckStrId(options['parentId'])) {
				throw new MethodNotAllowedException(`Property "parentId" is not valid.`);
			}
			output['parentId'] = options['parentId'];
		}
		if (utilsCheckExists(options['parentId'])) {
			if (!utilsCheckStrId(options['parentId'])) {
				throw new MethodNotAllowedException(`Property "parentId" is not valid.`);
			}
			output['parentId'] = options['parentId'];
		}
		if (utilsCheckExists(options['name'])) {
			if (!utilsCheckStrName(options['name'])) {
				throw new MethodNotAllowedException(`Property "name" is not valid.`);
			}
			output['name'] = options['name'];
		}
		if (utilsCheckExists(options['description'])) {
			if (!utilsCheckStrDescription(options['description'])) {
				throw new MethodNotAllowedException(`Property "description" is not valid.`);
			}
			output['description'] = options['description'];
		}
		return {
			...await super.validateUpdate(options),
			...output,
		};
	}

	@MessagePattern({ cmd: 'region.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'region.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('region.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('region.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('region.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('region.update')
	async update(payload: object = {}) {
		return await super.update(payload);
	}
}
