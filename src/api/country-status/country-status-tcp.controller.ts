import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { StatusTcpController } from '@nest-datum/status';
import { CountryStatusService } from './country-status.service';

@Controller()
export class CountryStatusTcpController extends StatusTcpController {
	constructor(
		protected service: CountryStatusService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'countryStatus.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'countryStatus.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('countryStatus.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('countryStatus.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('countryStatus.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('countryStatus.update')
	async update(payload) {
		return await super.update(payload);
	}
}
