import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { RegionHttpTcpController } from './region-http-tcp.controller';

@Module({
	controllers: [ RegionHttpTcpController ],
	imports: [
		TransportModule,
	],
	providers: [ 
		TransportService, 
	],
})
export class RegionHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
