import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { Region } from '../region/region.entity';
import { TypeOption } from '../type-option/type-option.entity';

@Entity()
export class RegionContent {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	public userId: string;

	@Column({ default: '' })
	public regionId: string;

	@ManyToOne(() => Region, (region) => region.regionContents, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public region: Region;

	@Column({ default: '' })
	public typeOptionId: string;

	@ManyToOne(() => TypeOption, (typeOption) => typeOption.regionContents, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public typeOption: TypeOption;

	@Column('text', {
		nullable: true,
	})
	public value: string;

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
}
