import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { OptionTcpController } from '@nest-datum/option';
import { CountryOptionService } from './country-option.service';

@Controller()
export class CountryOptionTcpController extends OptionTcpController {
	constructor(
		protected service: CountryOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'countryOption.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'countryOption.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('countryOption.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('countryOption.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('countryOption.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('countryOption.update')
	async update(payload) {
		return await super.update(payload);
	}

	@EventPattern('country.content')
	async content(payload) {
		return await super.content(payload);
	}
}
