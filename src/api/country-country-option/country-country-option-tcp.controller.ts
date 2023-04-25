import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { BindTcpController } from '@nest-datum/bind';
import { CountryCountryOptionService } from './country-country-option.service';

@Controller()
export class CountryCountryOptionTcpController extends BindTcpController {
	constructor(
		protected service: CountryCountryOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'countryOptionRelation.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'countryOptionRelation.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('countryOptionRelation.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('countryOptionRelation.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('countryOptionRelation.create')
	async create(payload) {
		return await super.create(payload);
	}
}
