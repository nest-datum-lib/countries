import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option } from '@nest-datum/option';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { RegionContent } from '../region-content/region-content.entity';

@Entity()
export class TypeOption extends Option {
	@OneToMany(() => TypeTypeOption, (typeTypeOption) => typeTypeOption.typeOption, {
		cascade: true,
	})
	public typeTypeOptions: TypeTypeOption[];

	@OneToMany(() => RegionContent, (regionContent) => regionContent.typeOption, {
		cascade: true,
	})
	public regionContents: RegionContent[];
}
