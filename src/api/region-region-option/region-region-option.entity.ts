import { 
	Entity,
	Column, 
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { Bind } from '@nest-datum/bind';
import { RegionRegionRegionOption } from '../region-region-region-option/region-region-region-option.entity';
import { RegionOption } from '../region-option/region-option.entity';
import { Region } from '../region/region.entity';

@Entity()
export class RegionRegionOption extends Bind {
	@Column()
	public regionOptionId: string;

	@ManyToOne(() => RegionOption, (regionOption) => regionOption.regionRegionOptions)
	public regionOption: RegionOption;

	@Column()
	public regionId: string;

	@ManyToOne(() => Region, (region) => region.regionRegionOptions)
	public region: Region;

	@OneToMany(() => RegionRegionRegionOption, (regionRegionRegionOption) => regionRegionRegionOption.regionRegionOption)
	public regionRegionRegionOptions: RegionRegionRegionOption[];
}
