import { 
	Entity,
	Column, 
	ManyToOne,
} from 'typeorm';
import { Many } from '@nest-datum/many';
import { RegionRegionOption } from '../region-region-option/region-region-option.entity';
import { Region } from '../region/region.entity';

@Entity()
export class RegionRegionRegionOption extends Many {
	@Column()
	public regionRegionOptionId: string;

	@ManyToOne(() => RegionRegionOption, (regionRegionOption) => regionRegionOption.regionRegionRegionOptions, {
		onDelete: 'CASCADE'
	})
	public regionRegionOption: RegionRegionOption;

	@Column()
	public regionId: string;

	@ManyToOne(() => Region, (region) => region.regionRegionRegionOptions)
	public region: Region;
}
