import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option } from '@nest-datum/option';
import { CityCityOption } from '../city-city-option/city-city-option.entity';

@Entity()
export class CityOption extends Option {
	@OneToMany(() => CityCityOption, (cityCityOption) => cityCityOption.cityOption)
	public cityCityOptions: CityCityOption[];
}
