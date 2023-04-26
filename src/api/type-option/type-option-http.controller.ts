import { Controller } from '@nestjs/common';
import { OptionHttpController } from '@nest-datum/option';
import { TypeOptionService } from './type-option.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/type-option`)
export class TypeOptionHttpController extends OptionHttpController {
	constructor(
		protected service: TypeOptionService,
	) {
		super();
	}
}
