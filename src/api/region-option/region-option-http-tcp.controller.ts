import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { OptionHttpTcpController } from '@nest-datum/option';

@Controller(`${process.env.SERVICE_COUNTRIES}/region-option`)
export class RegionOptionHttpTcpController extends OptionHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_COUNTRIES;
	protected readonly entityName: string = 'regionOption';
	
	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
