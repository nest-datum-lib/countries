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
import { Type } from '../type/type.entity';

@Entity()
export class Region {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	@Index()
	public userId: string;

	@Column({ default: '' })
	public typeId: string;

	@ManyToOne(() => Type, (type) => type.regions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public type: Type;

	@Column({ default: '' })
	public categoryId: string;

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

	@OneToMany(() => RegionRegionOption, (regionRegionOption) => regionRegionOption.region, {
		cascade: true,
	})
	public regionRegionOptions: RegionRegionOption[];

	@OneToMany(() => RegionRegionRegionOption, (regionRegionRegionOption) => regionRegionRegionOption.region, {
		cascade: true,
	})
	public regionRegionRegionOptions: RegionRegionRegionOption[];
}
