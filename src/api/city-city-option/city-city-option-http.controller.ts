import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { CityCityOptionService } from './city-city-option.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/city/option`)
export class CityCityOptionHttpController extends BindHttpController {
	constructor(
		protected service: CityCityOptionService,
	) {
		super();
	}
}
