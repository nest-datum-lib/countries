import { Controller } from '@nestjs/common';
import { OptionHttpController } from '@nest-datum/option';
import { CityOptionService } from './city-option.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/city-option`)
export class CityOptionHttpController extends OptionHttpController {
	constructor(
		protected service: CityOptionService,
	) {
		super();
	}
}
