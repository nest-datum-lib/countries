import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { TypeHttpTcpController } from './type-http-tcp.controller';

@Module({
	controllers: [ TypeHttpTcpController ],
	imports: [
		TransportModule,
	],
	providers: [ 
		TransportService, 
	],
})
export class TypeHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
