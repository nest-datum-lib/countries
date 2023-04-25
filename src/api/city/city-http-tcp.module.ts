import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { CityHttpTcpController } from './city-http-tcp.controller';

@Module({
	controllers: [ CityHttpTcpController ],
	imports: [
		TransportModule,
	],
	providers: [ 
		TransportService, 
	],
})
export class CityHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
