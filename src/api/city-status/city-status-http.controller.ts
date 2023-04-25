import { Controller } from '@nestjs/common';
import { StatusHttpController } from '@nest-datum/status';
import { CityStatusService } from './city-status.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/city-status`)
export class CityStatusHttpController extends StatusHttpController {
	constructor(
		protected service: CityStatusService,
	) {
		super();
	}
}
