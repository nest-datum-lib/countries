import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { CityCityOptionHttpTcpController } from './city-city-option-http-tcp.controller';

@Module({
	imports: [ 
		TransportModule, 
	],
	controllers: [ CityCityOptionHttpTcpController ],
	providers: [ 
		TransportService, 
	],
})
export class CityCityOptionHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
