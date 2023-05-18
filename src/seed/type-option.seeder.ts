import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TypeOption } from '../api/type-option/type-option.entity';

export class TypeOptionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TypeOption) private readonly typeOptionRepository: Repository<TypeOption>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: "happ-countries-type-option-code",
				userId: process.env.USER_ID,
				dataTypeId: 'happ-data-type-int',
				envKey: 'HAPP_COUNTRIES_TYPE_OPTION_PHONE_CODE',
				name: 'Phone code',
				description: 'Phone code.',
				isNotDelete: 1,
			}, {
				id: "happ-countries-type-option-iso1",
				userId: process.env.USER_ID,
				dataTypeId: 'happ-data-type-text',
				envKey: 'HAPP_COUNTRIES_TYPE_OPTION_ISO_CODE_1',
				name: 'Iso code 1',
				description: 'Iso code 1',
				isNotDelete: 1,
			}, {
				id: "happ-countries-type-option-iso2",
				userId: process.env.USER_ID,
				dataTypeId: 'happ-data-type-text',
				envKey: 'HAPP_COUNTRIES_TYPE_OPTION_ISO_CODE_2',
				name: 'Iso code 2',
				description: 'Iso code 2.',
				isNotDelete: 1,
			}, {
				id: "happ-countries-to-zip",
				userId: process.env.USER_ID,
				dataTypeId: 'happ-data-type-text',
				envKey: 'HAPP_COUNTRIES_TYPE_OPTION_ZIP_CODE',
				name: 'ZIP Code',
				description: 'ZIP Code.',
				isNotDelete: 1,
			}, {
				id: "happ-countries-to-lat-lng",
				userId: process.env.USER_ID,
				dataTypeId: 'happ-data-type-text',
				envKey: 'HAPP_COUNTRIES_TYPE_OPTION_LATITUDE___LONGITUDE',
				name: 'Latitude & Longitude',
				description: 'Latitude & Longitude.',
				isNotDelete: 1,
			}, {
				id: "happ-countries-type-currency",
				userId: process.env.USER_ID,
				dataTypeId: 'happ-data-type-text',
				envKey: 'HAPP_COUNTRIES_TYPE_OPTION_HAPP_COUNTRIES_TYPE_OPTION_CURRENCY',
				name: 'Currency',
				description: 'Currency.',
				isNotDelete: 1,
			}, {
				id: "happ-countries-type-option-length",
				userId: process.env.USER_ID,
				dataTypeId: 'happ-data-type-text',
				envKey: 'HAPP_COUNTRIES_TYPE_OPTION_MAX_LENGTH_PHONE',
				name: 'Max length phone',
				description: 'Max length phone.',
				isNotDelete: 1,
			}], async (data) => {
				try {
					await this.typeOptionRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: TypeOption 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: TypeOption 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}