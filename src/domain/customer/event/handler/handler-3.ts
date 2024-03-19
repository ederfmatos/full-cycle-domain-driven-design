import { EventHandler } from "../../../@shared/event/event-handler";
import CustomerAddressUpdatedEvent from "../customer-address-updated.event";

export default class EnviaConsoleLog3Handler implements EventHandler<CustomerAddressUpdatedEvent> {
  handle(event: CustomerAddressUpdatedEvent): void {
    console.log(`Endereço do cliente: ${event.eventData.customerId}, ${event.eventData.customerName} alterado para: ${event.eventData.address}`); 
  }
}
