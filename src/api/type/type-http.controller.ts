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
import { TypeTypeOptionService } from '../type-type-option/type-type-option.service';
import { TypeTypeTypeOptionService } from '../type-type-type-option/type-type-type-option.service';
import { TypeService } from './type.service';

@Controller(`${process.env.SERVICE_COUNTRIES}/type`)
export class TypeHttpController extends MainHttpController {
	protected readonly mainRelationColumnName: string = 'typeId';
	protected readonly optionRelationColumnName: string = 'typeOptionId';

	constructor(
		protected service: TypeService,
		protected readonly serviceOptionContent: TypeTypeTypeOptionService,
		protected readonly serviceOptionRelation: TypeTypeOptionService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['typeStatusId'])) {
			throw new MethodNotAllowedException(`Property "typeStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckStrFilled(options['typeStatusId'])) {
			if (!utilsCheckStrId(options['typeStatusId'])) {
				throw new MethodNotAllowedException(`Property "typeStatusId" is not valid.`);
			}
			output['typeStatusId'] = options['typeStatusId'];
		}
		if (utilsCheckStrFilled(options['userId'])) {
			if (!utilsCheckStrId(options['userId'])) {
				throw new MethodNotAllowedException(`Property "userId" is not valid.`);
			}
			output['userId'] = options['userId'];
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
		@Body('typeStatusId') typeStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.create(await this.validateCreate({
			accessToken,
			id,
			userId,
			typeStatusId,
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
		@Body('typeStatusId') typeStatusId: string,
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
			typeStatusId,
			name,
			description,
			isNotDelete,
			isDeleted,
		})));
	}
}
