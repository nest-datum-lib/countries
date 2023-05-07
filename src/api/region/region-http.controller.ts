import { 
	Controller,
	Post,
	Patch,
	Body,
	Param,
	MethodNotAllowedException,
} from '@nestjs/common';
import { checkToken } from '@nest-datum-common/jwt';
import { AccessToken } from '@nest-datum-common/decorators';
import { MainHttpController } from '@nest-datum/main';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName, 
	strDescription as utilsCheckStrDescription,
} from '@nest-datum-utils/check';
import { RegionRegionOptionService } from '../region-region-option/region-region-option.service';
import { RegionRegionRegionOptionService } from '../region-region-region-option/region-region-region-option.service';
import { RegionService } from './region.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/region`)
export class RegionHttpController extends MainHttpController {
	protected readonly mainRelationColumnName: string = 'regionId';
	protected readonly optionRelationColumnName: string = 'regionOptionId';

	constructor(
		protected service: RegionService,
		protected readonly serviceOptionContent: RegionRegionRegionOptionService,
		protected readonly serviceOptionRelation: RegionRegionOptionService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['regionStatusId'])) {
			throw new MethodNotAllowedException(`Property "regionStatusId" is not valid.`);
		}
		if (!utilsCheckStrId(options['typeId'])) {
			throw new MethodNotAllowedException(`Property "typeId" is not valid.`);
		}
		return await super.validateCreate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckExists(options['regionStatusId'])) {
			if (!utilsCheckStrId(options['regionStatusId'])) {
				throw new MethodNotAllowedException(`Property "regionStatusId" is not valid.`);
			}
			output['regionStatusId'] = options['regionStatusId'];
		}
		if (utilsCheckExists(options['typeId'])) {
			if (!utilsCheckStrId(options['typeId'])) {
				throw new MethodNotAllowedException(`Property "typeId" is not valid.`);
			}
			output['typeId'] = options['typeId'];
		}
		if (utilsCheckExists(options['parentId'])) {
			if (!utilsCheckStrId(options['parentId'])) {
				throw new MethodNotAllowedException(`Property "parentId" is not valid.`);
			}
			output['parentId'] = options['parentId'];
		}
		if (utilsCheckExists(options['parentId'])) {
			if (!utilsCheckStrId(options['parentId'])) {
				throw new MethodNotAllowedException(`Property "parentId" is not valid.`);
			}
			output['parentId'] = options['parentId'];
		}
		if (utilsCheckExists(options['name'])) {
			if (!utilsCheckStrName(options['name'])) {
				throw new MethodNotAllowedException(`Property "name" is not valid.`);
			}
			output['name'] = options['name'];
		}
		if (utilsCheckExists(options['description'])) {
			if (!utilsCheckStrDescription(options['description'])) {
				throw new MethodNotAllowedException(`Property "description" is not valid.`);
			}
			output['description'] = options['description'];
		}
		return {
			...await super.validateUpdate(options),
			...output,
		};
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('typeId') typeId: string,
		@Body('parentId') parentId: string,
		@Body('regionStatusId') regionStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.create(await this.validateCreate({
			accessToken,
			id,
			userId,
			parentId,
			typeId,
			regionStatusId,
			name,
			description,
			isNotDelete,
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('id') newId: string,
		@Body('userId') userId: string,
		@Body('typeId') typeId: string,
		@Body('parentId') parentId: string,
		@Body('regionStatusId') regionStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
		@Body('isDeleted') isDeleted: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.update(await this.validateUpdate({
			accessToken,
			id,
			newId,
			userId,
			typeId,
			parentId,
			regionStatusId,
			name,
			description,
			isNotDelete,
			isDeleted,
		})));
	}
}
