import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { StatusTcpController } from '@nest-datum/status';
import { RegionStatusService } from './region-status.service';

@Controller()
export class RegionStatusTcpController extends StatusTcpController {
	constructor(
		protected service: RegionStatusService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'regionStatus.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'regionStatus.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('regionStatus.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('regionStatus.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('regionStatus.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('regionStatus.update')
	async update(payload) {
		return await super.update(payload);
	}
}
