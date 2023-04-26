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
	strFilled as utilsCheckStrFilled,
} from '@nest-datum-utils/check';
import { TypeService } from './type.service';

@Controller()
export class TypeTcpController extends TcpController {
	constructor(
		protected service: TypeService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['typeStatusId'])) {
			throw new MethodNotAllowedException(`Property "typeStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckStrFilled(options['userId'])) {
			if (!utilsCheckStrId(options['userId'])) {
				throw new MethodNotAllowedException(`Property "userId" is not valid.`);
			}
			output['userId'] = options['userId'];
		}
		if (utilsCheckStrFilled(options['typeStatusId'])) {
			if (!utilsCheckStrId(options['typeStatusId'])) {
				throw new MethodNotAllowedException(`Property "typeStatusId" is not valid.`);
			}
			output['typeStatusId'] = options['typeStatusId'];
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

	@MessagePattern({ cmd: 'type.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'type.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('type.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('type.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('type.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('type.update')
	async update(payload: object = {}) {
		return await super.update(payload);
	}
}
