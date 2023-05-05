import { 
	Entity,
	Column, 
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { Bind } from '@nest-datum/bind';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeOption } from '../type-option/type-option.entity';
import { Type } from '../type/type.entity';

@Entity()
export class TypeTypeOption extends Bind {
	@Column()
	public typeOptionId: string;

	@ManyToOne(() => TypeOption, (typeOption) => typeOption.typeTypeOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public typeOption: TypeOption;

	@Column()
	public typeId: string;

	@ManyToOne(() => Type, (type) => type.typeTypeOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public type: Type;

	@OneToMany(() => TypeTypeTypeOption, (typeTypeTypeOption) => typeTypeTypeOption.typeTypeOption, {
		cascade: true,
	})
	public typeTypeTypeOptions: TypeTypeTypeOption[];
}
