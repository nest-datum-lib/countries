import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_COUNTRIES}/region-status`)
export class RegionStatusHttpTcpController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_COUNTRIES;
	protected readonly entityName: string = 'regionStatus';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
