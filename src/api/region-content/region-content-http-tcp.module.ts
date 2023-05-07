import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { RegionContentHttpTcpController } from './region-content-http-tcp.controller';

@Module({
	imports: [ 
		TransportModule, 
	],
	controllers: [ RegionContentHttpTcpController ],
	providers: [ 
		TransportService, 
	],
})
export class RegionContentHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
