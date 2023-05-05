import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { TypeTypeOptionService } from './type-type-option.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/type/option`)
export class TypeTypeOptionHttpController extends BindHttpController {
	protected readonly mainRelationColumnName: string = 'typeId';
	protected readonly optionRelationColumnName: string = 'typeOptionId';
	
	constructor(
		protected service: TypeTypeOptionService,
	) {
		super();
	}
}
