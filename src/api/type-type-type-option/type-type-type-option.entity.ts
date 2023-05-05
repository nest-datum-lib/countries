import { 
	Entity,
	Column, 
	ManyToOne,
} from 'typeorm';
import { Many } from '@nest-datum/many';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { Type } from '../type/type.entity';

@Entity()
export class TypeTypeTypeOption extends Many {
	@Column()
	public typeTypeOptionId: string;

	@ManyToOne(() => TypeTypeOption, (typeTypeOption) => typeTypeOption.typeTypeTypeOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public typeTypeOption: TypeTypeOption;

	@Column()
	public typeId: string;

	@ManyToOne(() => Type, (type) => type.typeTypeTypeOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public type: Type;
}
