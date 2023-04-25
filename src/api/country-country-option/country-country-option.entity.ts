import { 
	Entity,
	Column, 
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { Bind } from '@nest-datum/bind';
import { CountryCountryCountryOption } from '../country-country-country-option/country-country-country-option.entity';
import { CountryOption } from '../country-option/country-option.entity';
import { Country } from '../country/country.entity';

@Entity()
export class CountryCountryOption extends Bind {
	@Column()
	public countryOptionId: string;

	@ManyToOne(() => CountryOption, (countryOption) => countryOption.countryCountryOptions)
	public countryOption: CountryOption;

	@Column()
	public countryId: string;

	@ManyToOne(() => Country, (country) => country.countryCountryOptions)
	public country: Country;

	@OneToMany(() => CountryCountryCountryOption, (countryCountryCountryOption) => countryCountryCountryOption.countryCountryOption)
	public countryCountryCountryOptions: CountryCountryCountryOption[];
}
