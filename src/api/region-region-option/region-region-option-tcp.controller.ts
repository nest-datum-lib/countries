import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { BindTcpController } from '@nest-datum/bind';
import { RegionRegionOptionService } from './region-region-option.service';

@Controller()
export class RegionRegionOptionTcpController extends BindTcpController {
	constructor(
		protected service: RegionRegionOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'regionOptionRelation.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'regionOptionRelation.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('regionOptionRelation.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('regionOptionRelation.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('regionOptionRelation.create')
	async create(payload) {
		return await super.create(payload);
	}
}
