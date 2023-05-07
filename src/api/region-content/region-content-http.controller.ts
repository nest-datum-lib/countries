import { 
	Post,
	Patch,
	Body,
	Param,
} from '@nestjs/common';
import { MethodNotAllowedException } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AccessToken } from '@nest-datum-common/decorators';
import { BindHttpController } from '@nest-datum/bind';
import { 
	exists as utilsCheckExists,
	strIdExists as utilsCheckStrIdExists, 
} from '@nest-datum-utils/check';
import { RegionContentService } from './region-content.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/region/content`)
export class RegionContentHttpController extends BindHttpController {
	protected readonly mainRelationColumnName: string = 'regionId';
	protected readonly optionRelationColumnName: string = 'typeOptionId';

	constructor(
		protected service: RegionContentService,
	) {
		super();
	}
	
	async validateCreate(options) {
		if (!utilsCheckExists(options['value'])) {
			throw new MethodNotAllowedException(`Property "value" is not valid.`);
		}
		return {
			...await super.validateCreate(options),
			value: options['value'] ?? '',
		};
	}

	async validateUpdate(options) {
		if (!utilsCheckExists(options['value'])) {
			throw new MethodNotAllowedException(`Property "value" is not valid.`);
		}
		if (!utilsCheckStrIdExists(options['regionId'])) {
			throw new MethodNotAllowedException(`Property "regionId" is not valid.`);
		}
		if (!utilsCheckStrIdExists(options['typeOptionId'])) {
			throw new MethodNotAllowedException(`Property "typeOptionId" is not valid.`);
		}
		return {
			...await super.validateUpdate(options),
			regionId: options['regionId'],
			typeOptionId: options['typeOptionId'],
			value: options['value'] ?? '',
		};
	}

	@Post(':id')
	async create(
		@AccessToken() accessToken: string,
		@Param('id') entityId: string,
		@Body() body,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.create(await this.validateCreate({
			accessToken,
			value: body['value'],
			[this.mainRelationColumnName]: entityId,
			[this.optionRelationColumnName]: body['regionId'],
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body() body,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.update(await this.validateUpdate({
			accessToken,
			id,
			value: body['value'],
			regionId: body['regionId'],
			typeOptionId: body['typeOptionId'],
		})));
	}
}
