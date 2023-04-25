import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { StatusTcpController } from '@nest-datum/status';
import { CityStatusService } from './city-status.service';

@Controller()
export class CityStatusTcpController extends StatusTcpController {
	constructor(
		protected service: CityStatusService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'cityStatus.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'cityStatus.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('cityStatus.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('cityStatus.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('cityStatus.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('cityStatus.update')
	async update(payload) {
		return await super.update(payload);
	}
}
