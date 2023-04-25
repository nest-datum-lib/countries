import { 
	Entity,
	Column, 
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { Bind } from '@nest-datum/bind';
import { CityCityCityOption } from '../city-city-city-option/city-city-city-option.entity';
import { CityOption } from '../city-option/city-option.entity';
import { City } from '../city/city.entity';

@Entity()
export class CityCityOption extends Bind {
	@Column()
	public cityOptionId: string;

	@ManyToOne(() => CityOption, (cityOption) => cityOption.cityCityOptions)
	public cityOption: CityOption;

	@Column()
	public cityId: string;

	@ManyToOne(() => City, (city) => city.cityCityOptions)
	public city: City;

	@OneToMany(() => CityCityCityOption, (cityCityCityOption) => cityCityCityOption.cityCityOption)
	public cityCityCityOptions: CityCityCityOption[];
}
