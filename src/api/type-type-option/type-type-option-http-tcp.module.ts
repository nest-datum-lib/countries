import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { TypeTypeOptionHttpTcpController } from './type-type-option-http-tcp.controller';

@Module({
	imports: [ 
		TransportModule, 
	],
	controllers: [ TypeTypeOptionHttpTcpController ],
	providers: [ 
		TransportService, 
	],
})
export class TypeTypeOptionHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
