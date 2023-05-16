import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { RegionStatus } from '../api/region-status/region-status.entity';

export class RegionStatusSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(RegionStatus) private readonly regionStatusRepository: Repository<RegionStatus>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: 'countries_reg_stat_active',
				userId: process.env.USER_ID,
				envKey: 'HAPP_COUNTRIES_REGION_STATUS_ACTIVE',
				name: 'Active',
				description: 'Region is active.',
				isNotDelete: 1,
			}], async (data) => {
				try {
					await this.regionStatusRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: RegionStatus 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: RegionStatus 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}