import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { BindTcpController } from '@nest-datum/bind';
import { CityCityOptionService } from './city-city-option.service';

@Controller()
export class CityCityOptionTcpController extends BindTcpController {
	constructor(
		protected service: CityCityOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'cityOptionRelation.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'cityOptionRelation.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('cityOptionRelation.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('cityOptionRelation.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('cityOptionRelation.create')
	async create(payload) {
		return await super.create(payload);
	}
}
