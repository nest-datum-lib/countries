import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { CountryHttpTcpController } from './country-http-tcp.controller';

@Module({
	controllers: [ CountryHttpTcpController ],
	imports: [
		TransportModule,
	],
	providers: [ 
		TransportService, 
	],
})
export class CountryHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
