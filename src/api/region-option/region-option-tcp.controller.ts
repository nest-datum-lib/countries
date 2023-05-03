import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { OptionTcpController } from '@nest-datum/option';
import { RegionOptionService } from './region-option.service';

@Controller()
export class RegionOptionTcpController extends OptionTcpController {
	constructor(
		protected service: RegionOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'regionOption.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'regionOption.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('regionOption.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('regionOption.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('regionOption.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('regionOption.update')
	async update(payload) {
		return await super.update(payload);
	}

	@EventPattern('region.content')
	async content(payload) {
		return await super.content(payload);
	}

	@EventPattern('region.contentUpdate')
	async contentUpdate(payload) {
		return await super.contentUpdate(payload);
	}
}
