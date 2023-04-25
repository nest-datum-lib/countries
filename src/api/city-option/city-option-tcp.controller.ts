import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { OptionTcpController } from '@nest-datum/option';
import { CityOptionService } from './city-option.service';

@Controller()
export class CityOptionTcpController extends OptionTcpController {
	constructor(
		protected service: CityOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'cityOption.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'cityOption.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('cityOption.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('cityOption.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('cityOption.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('cityOption.update')
	async update(payload) {
		return await super.update(payload);
	}

	@EventPattern('city.content')
	async content(payload) {
		return await super.content(payload);
	}
}
