import { Controller } from '@nestjs/common';
import { OptionHttpController } from '@nest-datum/option';
import { CountryOptionService } from './country-option.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/country-option`)
export class CountryOptionHttpController extends OptionHttpController {
	constructor(
		protected service: CountryOptionService,
	) {
		super();
	}
}
