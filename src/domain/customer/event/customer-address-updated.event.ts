import { Event } from "../../@shared/event/event";
import Address from "../value-object/address";

export default class CustomerAddressUpdatedEvent implements Event {
  dataTimeOccurred: Date;
  eventData: CustomerAddressUpdatedEventData;

  constructor(eventData: CustomerAddressUpdatedEventData) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }
}

class CustomerAddressUpdatedEventData {
  constructor(readonly customerId: string, readonly customerName: string, readonly address: Address) {}
}