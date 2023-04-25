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
import { CountryService } from './country.service';

@Controller()
export class CountryTcpController extends TcpController {
	constructor(
		protected service: CountryService,
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
		if (!utilsCheckStrId(options['countryStatusId'])) {
			throw new MethodNotAllowedException(`Property "countryStatusId" is not valid.`);
		}
		if (!utilsCheckStrFilled(options['code'])) {
			throw new MethodNotAllowedException(`Property "code" is not valid.`);
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
		if (utilsCheckExists(options['countryStatusId'])) {
			if (!utilsCheckStrId(options['countryStatusId'])) {
				throw new MethodNotAllowedException(`Property "countryStatusId" is not valid.`);
			}
			output['countryStatusId'] = options['countryStatusId'];
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
		if (utilsCheckExists(options['code'])) {
			if (!utilsCheckStrFilled(options['code'])) {
				throw new MethodNotAllowedException(`Property "code" is not valid.`);
			}
			output['code'] = options['code'];
		}
		return {
			...await super.validateUpdate(options),
			...output,
		};
	}

	@MessagePattern({ cmd: 'country.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'country.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('country.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('country.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('country.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('country.update')
	async update(payload: object = {}) {
		return await super.update(payload);
	}
}
