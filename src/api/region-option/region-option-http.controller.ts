import { Controller } from '@nestjs/common';
import { OptionHttpController } from '@nest-datum/option';
import { RegionOptionService } from './region-option.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/region-option`)
export class RegionOptionHttpController extends OptionHttpController {
	constructor(
		protected service: RegionOptionService,
	) {
		super();
	}
}
