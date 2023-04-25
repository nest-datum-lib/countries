import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option } from '@nest-datum/option';
import { RegionRegionOption } from '../region-region-option/region-region-option.entity';

@Entity()
export class RegionOption extends Option {
	@OneToMany(() => RegionRegionOption, (regionRegionOption) => regionRegionOption.regionOption)
	public regionRegionOptions: RegionRegionOption[];
}
