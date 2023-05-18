import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TypeTypeOption } from '../api/type-type-option/type-type-option.entity';
import { v4 as uuidv4 } from 'uuid';

export class TypeTypeOptionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TypeTypeOption) private readonly typeTypeOptionRepository: Repository<TypeTypeOption>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: uuidv4(),
				typeOptionId: 'happ-countries-type-option-iso2',
				typeId: 'countries_type_country',
			}, {
				id: uuidv4(),
				typeOptionId: 'happ-countries-type-option-code',
				typeId: 'countries_type_country',
			},{
				id: uuidv4(),
				typeOptionId: 'happ-countries-type-option-iso1',
				typeId: 'countries_type_country',
			},{
				id: uuidv4(),
				typeOptionId: 'happ-countries-type-option-length',
				typeId: 'countries_type_country',
			},{
				id: uuidv4(),
				typeOptionId: 'happ-countries-to-lat-lng',
				typeId: 'countries_type_city',
			},{
				id: uuidv4(),
				typeOptionId: 'happ-countries-to-zip',
				typeId: 'countries_type_city',
			},{
				id: uuidv4(),
				typeOptionId: 'happ-countries-to-zip',
				typeId: 'countries_type_state',
			}], async (data) => {
				try {
					await this.typeTypeOptionRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: TypeTypeOption 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: TypeTypeOption 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}