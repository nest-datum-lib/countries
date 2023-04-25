import { Controller } from '@nestjs/common';
import { RoleAccessHttpController as RoleAccessHttpControllerBase } from '@nest-datum/access';
import { RoleAccessService } from './role-access.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/role/access`)
export class RoleAccessHttpController extends RoleAccessHttpControllerBase {
	constructor(
		protected service: RoleAccessService,
	) {
		super();
	}
}
