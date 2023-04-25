import { Controller } from '@nestjs/common';
import { StatusHttpController } from '@nest-datum/status';
import { RegionStatusService } from './region-status.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/region-status`)
export class RegionStatusHttpController extends StatusHttpController {
	constructor(
		protected service: RegionStatusService,
	) {
		super();
	}
}
