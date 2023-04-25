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
import { CountryCountryOptionService } from '../country-country-option/country-country-option.service';
import { CountryCountryCountryOptionService } from '../country-country-country-option/country-country-country-option.service';
import { CountryService } from './country.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/country`)
export class CountryHttpController extends MainHttpController {
	protected readonly mainRelationColumnName: string = 'countryId';
	protected readonly optionRelationColumnName: string = 'countryOptionId';

	constructor(
		protected service: CountryService,
		protected readonly serviceOptionContent: CountryCountryCountryOptionService,
		protected readonly serviceOptionRelation: CountryCountryOptionService,
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
		if (!utilsCheckStrId(options['countryStatusId'])) {
			throw new MethodNotAllowedException(`Property "countryStatusId" is not valid.`);
		}
		if (!utilsCheckStrFilled(options['code'])) {
			throw new MethodNotAllowedException(`Property "code" is not valid.`);
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
		if (utilsCheckExists(options['countryStatusId'])) {
			if (!utilsCheckStrId(options['countryStatusId'])) {
				throw new MethodNotAllowedException(`Property "countryStatusId" is not valid.`);
			}
			output['countryStatusId'] = options['countryStatusId'];
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
		if (utilsCheckExists(options['code'])) {
			if (!utilsCheckStrFilled(options['code'])) {
				throw new MethodNotAllowedException(`Property "code" is not valid.`);
			}
			output['code'] = options['code'];
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
		@Body('countryStatusId') countryStatusId: string,
		@Body('code') code: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.create(await this.validateCreate({
			accessToken,
			id,
			userId,
			regionId,
			countryStatusId,
			code,
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
		@Body('countryStatusId') countryStatusId: string,
		@Body('code') code: string,
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
			countryStatusId,
			code,
			name,
			description,
			isNotDelete,
			isDeleted,
		})));
	}
}
