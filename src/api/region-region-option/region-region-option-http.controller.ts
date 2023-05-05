import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { RegionRegionOptionService } from './region-region-option.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/region/option`)
export class RegionRegionOptionHttpController extends BindHttpController {
	protected readonly mainRelationColumnName: string = 'regionId';
	protected readonly optionRelationColumnName: string = 'regionOptionId';
	
	constructor(
		protected service: RegionRegionOptionService,
	) {
		super();
	}
}
