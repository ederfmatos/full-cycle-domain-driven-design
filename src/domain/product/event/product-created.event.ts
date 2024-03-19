import { Event } from "../../@shared/event/event";

export default class ProductCreatedEvent implements Event {
  dataTimeOccurred: Date;
  eventData: any;

  constructor(eventData: any) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }
}
