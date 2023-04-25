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
import { RegionRegionRegionOption } from '../region-region-region-option/region-region-region-option.entity';
import { RegionRegionOption } from '../region-region-option/region-region-option.entity';
import { Country } from '../country/country.entity';
import { City } from '../city/city.entity';

@Entity()
export class Region {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	@Index()
	public userId: string;

	@Column({ default: '' })
	public parentId: string;

	@Column({ default: '' })
	public regionStatusId: string;

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

	@OneToMany(() => RegionRegionOption, (regionRegionOption) => regionRegionOption.region)
	public regionRegionOptions: RegionRegionOption[];

	@OneToMany(() => RegionRegionRegionOption, (regionRegionRegionOption) => regionRegionRegionOption.region)
	public regionRegionRegionOptions: RegionRegionRegionOption[];

	@OneToMany(() => Country, (country) => country.region)
	public countries: Country[];

	@OneToMany(() => City, (city) => city.region)
	public cities: City[];
}
