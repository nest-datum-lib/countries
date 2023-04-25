import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_COUNTRIES}/city-status`)
export class CityStatusHttpTcpController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_COUNTRIES;
	protected readonly entityName: string = 'cityStatus';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
