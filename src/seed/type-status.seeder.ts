import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TypeStatus } from '../api/type-status/type-status.entity';

export class TypeStatusSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TypeStatus) private readonly typeStatusRepository: Repository<TypeStatus>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: "countries_type_status_a",
				userId: process.env.USER_ID,
				envKey: 'HAPP_COUNTRIES_TYPE_STATUS_ACTIVE',
				name: 'Active',
				description: 'Type is active.',
				isNotDelete: 1,
			}], async (data) => {
				try {
					await this.typeStatusRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: TypeStatus 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: TypeStatus 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}