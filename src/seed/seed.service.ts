import { Promise as Bluebird } from 'bluebird';
import { Connection } from 'typeorm';
import {
	Injectable,
	Logger,
} from '@nestjs/common';
import { TypeStatusSeeder } from './type-status.seeder';
import { RegionStatusSeeder } from './region-status.seeder';
import { RegionSeeder } from './region.seeder';
import { RegionContentSeeder } from './region-content.seeder';
import { TypeSeeder } from './type.seeder';
import { TypeTypeOptionSeeder } from './type-type-option.seeder';
import { TypeOptionSeeder } from './type-option.seeder';

@Injectable()
export class SeedService {
	private readonly seeders = [];
	private readonly logger = new Logger(SeedService.name);

	constructor(
		private readonly connection: Connection,
		private readonly typeStatus: TypeStatusSeeder,
		private readonly typeTypeOption: TypeTypeOptionSeeder,
		private readonly typeOption: TypeOptionSeeder,
		private readonly type: TypeSeeder,
		private readonly region: RegionSeeder,
		private readonly regionContent: RegionContentSeeder,
		private readonly regionStatus: RegionStatusSeeder,
	) {
		this.seeders = [
			this.typeStatus,
			this.type,
			this.typeOption,
			this.typeTypeOption,
			this.regionStatus,
			this.region,
			this.regionContent,
		];
	}

	async send() {
		try {
			await Bluebird.each(this.seeders, async (seeder) => {
				this.logger.log(`Seeding ${seeder.constructor.name}`);
				
				await seeder.send();
			});
		}
		catch (err) {
			console.error(`ERROR send: ${err.message}`);
		}
	}
}
