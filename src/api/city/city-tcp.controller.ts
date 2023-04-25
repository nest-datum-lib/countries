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
	strEmail as utilsCheckStrEmail,
	strEnvKey as utilsCheckStrEnvKey,
} from '@nest-datum-utils/check';
import { CityService } from './city.service';

@Controller()
export class CityTcpController extends TcpController {
	constructor(
		protected service: CityService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['regionId'])) {
			throw new MethodNotAllowedException(`Property "regionId" is not valid.`);
		}
		if (!utilsCheckStrId(options['cityStatusId'])) {
			throw new MethodNotAllowedException(`Property "cityStatusId" is not valid.`);
		}
		return await super.validateCreate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckExists(options['regionId'])) {
			if (!utilsCheckStrId(options['regionId'])) {
				throw new MethodNotAllowedException(`Property "regionId" is not valid.`);
			}
			output['regionId'] = options['regionId'];
		}
		if (utilsCheckExists(options['cityStatusId'])) {
			if (!utilsCheckStrId(options['cityStatusId'])) {
				throw new MethodNotAllowedException(`Property "cityStatusId" is not valid.`);
			}
			output['cityStatusId'] = options['cityStatusId'];
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

	@MessagePattern({ cmd: 'city.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'city.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('city.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('city.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('city.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('city.update')
	async update(payload: object = {}) {
		return await super.update(payload);
	}
}
