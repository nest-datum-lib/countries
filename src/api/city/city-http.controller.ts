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
	strFilled as utilsCheckStrFilled,
} from '@nest-datum-utils/check';
import { CityCityOptionService } from '../city-city-option/city-city-option.service';
import { CityCityCityOptionService } from '../city-city-city-option/city-city-city-option.service';
import { CityService } from './city.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/city`)
export class CityHttpController extends MainHttpController {
	protected readonly mainRelationColumnName: string = 'cityId';
	protected readonly optionRelationColumnName: string = 'cityOptionId';

	constructor(
		protected service: CityService,
		protected readonly serviceOptionContent: CityCityCityOptionService,
		protected readonly serviceOptionRelation: CityCityOptionService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['regionId'])) {
			throw new MethodNotAllowedException(`Property "regionId" is not valid.`);
		}
		if (!utilsCheckStrId(options['cityStatusId'])) {
			throw new MethodNotAllowedException(`Property "cityStatusId" is not valid.`);
		}
		return await super.validateCreate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckExists(options['regionId'])) {
			if (!utilsCheckStrId(options['regionId'])) {
				throw new MethodNotAllowedException(`Property "regionId" is not valid.`);
			}
			output['regionId'] = options['regionId'];
		}
		if (utilsCheckExists(options['cityStatusId'])) {
			if (!utilsCheckStrId(options['cityStatusId'])) {
				throw new MethodNotAllowedException(`Property "cityStatusId" is not valid.`);
			}
			output['cityStatusId'] = options['cityStatusId'];
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
		@Body('regionId') regionId: string,
		@Body('cityStatusId') cityStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.create(await this.validateCreate({
			accessToken,
			id,
			userId,
			regionId,
			cityStatusId,
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
		@Body('regionId') regionId: string,
		@Body('cityStatusId') cityStatusId: string,
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
			regionId,
			cityStatusId,
			name,
			description,
			isNotDelete,
			isDeleted,
		})));
	}
}
