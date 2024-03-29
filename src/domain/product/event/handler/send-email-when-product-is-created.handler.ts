import { EventHandler } from "../../../@shared/event/event-handler";
import ProductCreatedEvent from "../product-created.event";

export default class SendEmailWhenProductIsCreatedHandler implements EventHandler<ProductCreatedEvent> {
  handle(event: ProductCreatedEvent): void {
    console.log(`Sending email to .....`); 
  }
}
