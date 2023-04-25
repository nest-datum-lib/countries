import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option } from '@nest-datum/option';
import { CountryCountryOption } from '../country-country-option/country-country-option.entity';

@Entity()
export class CountryOption extends Option {
	@OneToMany(() => CountryCountryOption, (countryCountryOption) => countryCountryOption.countryOption)
	public countryCountryOptions: CountryCountryOption[];
}
