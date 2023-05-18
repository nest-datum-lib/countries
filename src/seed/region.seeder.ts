import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { Region } from '../api/region/region.entity';
import { stateData } from './data/state';
import { citiesData } from './data/cities';
import { countriesData } from './data/countries';

export class RegionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(Region) private readonly regionRepository: Repository<Region>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([
				...countriesData,
				...stateData,
				...citiesData,
			], async (data) => {
				try {
					await this.regionRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: Region 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: Region 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}