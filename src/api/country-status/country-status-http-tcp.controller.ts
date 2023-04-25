import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_COUNTRIES}/country-status`)
export class CountryStatusHttpTcpController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_COUNTRIES;
	protected readonly entityName: string = 'countryStatus';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
