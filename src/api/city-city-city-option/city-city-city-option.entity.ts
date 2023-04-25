import { 
	Entity,
	Column, 
	ManyToOne,
} from 'typeorm';
import { Many } from '@nest-datum/many';
import { CityCityOption } from '../city-city-option/city-city-option.entity';
import { City } from '../city/city.entity';

@Entity()
export class CityCityCityOption extends Many {
	@Column()
	public cityCityOptionId: string;

	@ManyToOne(() => CityCityOption, (cityCityOption) => cityCityOption.cityCityCityOptions, {
		onDelete: 'CASCADE'
	})
	public cityCityOption: CityCityOption;

	@Column()
	public cityId: string;

	@ManyToOne(() => City, (city) => city.cityCityCityOptions)
	public city: City;
}
