import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option } from '@nest-datum/option';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';

@Entity()
export class TypeOption extends Option {
	@OneToMany(() => TypeTypeOption, (typeTypeOption) => typeTypeOption.typeOption, {
		cascade: true,
	})
	public typeTypeOptions: TypeTypeOption[];
}
