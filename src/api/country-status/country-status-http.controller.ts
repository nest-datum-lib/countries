import { Controller } from '@nestjs/common';
import { StatusHttpController } from '@nest-datum/status';
import { CountryStatusService } from './country-status.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/country-status`)
export class CountryStatusHttpController extends StatusHttpController {
	constructor(
		protected service: CountryStatusService,
	) {
		super();
	}
}
