import { Controller } from '@nestjs/common';
import { BindHttpTcpController } from '@nest-datum/bind';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_COUNTRIES}/region/option`)
export class RegionRegionOptionHttpTcpController extends BindHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_COUNTRIES;
	protected readonly entityName: string = 'regionOptionRelation';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
