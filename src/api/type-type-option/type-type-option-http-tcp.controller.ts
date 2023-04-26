import { Controller } from '@nestjs/common';
import { BindHttpTcpController } from '@nest-datum/bind';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_COUNTRIES}/type/option`)
export class TypeTypeOptionHttpTcpController extends BindHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_COUNTRIES;
	protected readonly entityName: string = 'typeOptionRelation';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
