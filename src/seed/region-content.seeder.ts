import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { RegionContent } from '../api/region-content/region-content.entity';
import { v4 as uuidv4 } from 'uuid';
import { latLngData } from './data/lat_lng'
import { zipCodeData } from './data/zip_code'
import { isoStateData } from './data/iso_state'
import { isoOneCountryData } from './data/iso1_country';
import { isoTwoCountryData } from './data/iso2_country';
import { dialData } from './data/dial';
import { currencyData } from './data/currency';

export class RegionContentSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(RegionContent) private readonly regionContentRepository: Repository<RegionContent>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: uuidv4(),
				userId: process.env.USER_ID,
                regionId: 'happ-region-country-usa',
                typeOptionId: 'happ-countries-type-option-length',
				value: '10',
			},
			...currencyData,
			...dialData,
			...isoTwoCountryData,
			...isoOneCountryData,
            ...latLngData,
            ...isoStateData,
            ...zipCodeData
            ], async (data) => {
				try {
					await this.regionContentRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: RegionContent 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: RegionContent 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}