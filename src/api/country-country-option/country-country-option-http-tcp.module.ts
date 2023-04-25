import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { CountryCountryOptionHttpTcpController } from './country-country-option-http-tcp.controller';

@Module({
	imports: [ 
		TransportModule, 
	],
	controllers: [ CountryCountryOptionHttpTcpController ],
	providers: [ 
		TransportService, 
	],
})
export class CountryCountryOptionHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
