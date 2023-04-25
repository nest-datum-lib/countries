import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { CityStatusHttpTcpController } from './city-status-http-tcp.controller';

@Module({
	imports: [ 
		TransportModule, 
	],
	controllers: [ CityStatusHttpTcpController ],
	providers: [ 
		TransportService, 
	],
})
export class CityStatusHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
