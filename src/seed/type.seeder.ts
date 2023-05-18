import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { Type } from '../api/type/type.entity';

export class TypeSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(Type) private readonly typeRepository: Repository<Type>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: "countries_type_continent",
				userId: process.env.USER_ID,
				typeStatusId: 'countries_type_status_a',
				name: 'Continent',
				description: 'Continent.',
				isNotDelete: 1,
			},{
                id: "countries_type_state",
				userId: process.env.USER_ID,
				typeStatusId: 'countries_type_status_a',
				name: 'State',
				description: 'State.',
				isNotDelete: 1,
            },{
                id: "countries_type_country",
				userId: process.env.USER_ID,
				typeStatusId: 'countries_type_status_a',
				name: 'Country',
				description: 'Country.',
				isNotDelete: 1,
            },{
                id: "countries_type_city",
				userId: process.env.USER_ID,
				typeStatusId: 'countries_type_status_a',
				name: 'City',
				description: 'City.',
				isNotDelete: 1,
            }], async (data) => {
				try {
					await this.typeRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: Type 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: Type 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}