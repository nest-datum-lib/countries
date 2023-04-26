import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { TypeStatusHttpTcpController } from './type-status-http-tcp.controller';

@Module({
	imports: [ 
		TransportModule, 
	],
	controllers: [ TypeStatusHttpTcpController ],
	providers: [ 
		TransportService, 
	],
})
export class TypeStatusHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
