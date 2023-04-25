import { Entity } from 'typeorm';
import { Status } from '@nest-datum/status';

@Entity()
export class CountryStatus extends Status {
}
