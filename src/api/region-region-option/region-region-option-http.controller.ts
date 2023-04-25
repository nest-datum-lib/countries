import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { RegionRegionOptionService } from './region-region-option.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/region/option`)
export class RegionRegionOptionHttpController extends BindHttpController {
	constructor(
		protected service: RegionRegionOptionService,
	) {
		super();
	}
}
