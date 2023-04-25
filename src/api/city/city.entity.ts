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
import { CityCityCityOption } from '../city-city-city-option/city-city-city-option.entity';
import { CityCityOption } from '../city-city-option/city-city-option.entity';
import { Region } from '../region/region.entity';

@Entity()
export class City {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	@Index()
	public userId: string;

	@Column({ default: '' })
	public regionId: string;

	@ManyToOne(() => Region, (region) => region.cities)
	public region: Region;

	@Column({ default: '' })
	public cityStatusId: string;

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

	@OneToMany(() => CityCityOption, (cityCityOption) => cityCityOption.city)
	public cityCityOptions: CityCityOption[];

	@OneToMany(() => CityCityCityOption, (cityCityCityOption) => cityCityCityOption.city)
	public cityCityCityOptions: CityCityCityOption[];
}
