import { 
	Entity,
	Column, 
	ManyToOne,
} from 'typeorm';
import { Many } from '@nest-datum/many';
import { CountryCountryOption } from '../country-country-option/country-country-option.entity';
import { Country } from '../country/country.entity';

@Entity()
export class CountryCountryCountryOption extends Many {
	@Column()
	public countryCountryOptionId: string;

	@ManyToOne(() => CountryCountryOption, (countryCountryOption) => countryCountryOption.countryCountryCountryOptions, {
		onDelete: 'CASCADE'
	})
	public countryCountryOption: CountryCountryOption;

	@Column()
	public countryId: string;

	@ManyToOne(() => Country, (country) => country.countryCountryCountryOptions)
	public country: Country;
}
