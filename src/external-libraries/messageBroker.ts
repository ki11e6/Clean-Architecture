import {IMessageBroker} from "../interfaces/IMessageBroker";

export class MessageBroker implements IMessageBroker{
	NotifyToPromotionService(product: unknown) {
		//kafka //RabbitMQ
		console.log('calling message broker')
		return true;
	}
}
