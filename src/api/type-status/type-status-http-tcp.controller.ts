import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_COUNTRIES}/type-status`)
export class TypeStatusHttpTcpController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_COUNTRIES;
	protected readonly entityName: string = 'typeStatus';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
