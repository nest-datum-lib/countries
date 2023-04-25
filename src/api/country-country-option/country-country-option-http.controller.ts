import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { CountryCountryOptionService } from './country-country-option.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/country/option`)
export class CountryCountryOptionHttpController extends BindHttpController {
	constructor(
		protected service: CountryCountryOptionService,
	) {
		super();
	}
}
