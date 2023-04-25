import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	Index,
	ManyToOne,
	OneToMany,
} from 'typeorm';
import {
	IsEmail,
} from 'class-validator';
import { CountryCountryCountryOption } from '../country-country-country-option/country-country-country-option.entity';
import { CountryCountryOption } from '../country-country-option/country-country-option.entity';
import { Region } from '../region/region.entity';

@Entity()
export class Country {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	@Index()
	public userId: string;

	@Column({ default: '' })
	public regionId: string;

	@ManyToOne(() => Region, (region) => region.countries)
	public region: Region;

	@Column({ default: '' })
	public countryStatusId: string;

	@Column()
	@Index({ unique: true })
	public code: string;

	@Column()
	@Index({ unique: true })
	public name: string;

	@Column({ default: '' })
	@Index()
	public description: string;

	@Column('boolean', { default: false })
	public isDeleted: boolean = false;

	@Column('boolean', { default: false })
	public isNotDelete: boolean = false;

	@CreateDateColumn({ 
		type: 'timestamp', 
		precision: null,
		default: () => 'CURRENT_TIMESTAMP', 
	})
	public createdAt: Date;

	@UpdateDateColumn({ 
		type: 'timestamp', 
		precision: null,
		default: () => 'CURRENT_TIMESTAMP',
		onUpdate: 'CURRENT_TIMESTAMP', 
	})
	public updatedAt: Date;

	@OneToMany(() => CountryCountryOption, (countryCountryOption) => countryCountryOption.country)
	public countryCountryOptions: CountryCountryOption[];

	@OneToMany(() => CountryCountryCountryOption, (countryCountryCountryOption) => countryCountryCountryOption.country)
	public countryCountryCountryOptions: CountryCountryCountryOption[];
}
