import { Controller } from '@nestjs/common';
import { StatusHttpController } from '@nest-datum/status';
import { TypeStatusService } from './type-status.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/type-status`)
export class TypeStatusHttpController extends StatusHttpController {
	constructor(
		protected service: TypeStatusService,
	) {
		super();
	}
}
