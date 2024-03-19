import { EventDispatcher } from "./event-dispatcher";
import { EventHandler } from "./event-handler";
import { Event } from "./event";

export default class DefaultEventDispatcher implements EventDispatcher {
  private eventHandlers: { [eventName: string]:  EventHandler [] } = {};

  get getEventHandlers(): { [eventName: string]: EventHandler[] } {
    return this.eventHandlers;
  }

  register(eventName: string, eventHandler: EventHandler): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(eventHandler);
  }

  unregister(eventName: string, eventHandler: EventHandler): void {
    if (this.eventHandlers[eventName]) {
      const index = this.eventHandlers[eventName].indexOf(eventHandler);
      if (index !== -1) {
        this.eventHandlers[eventName].splice(index, 1);
      }
    }
  }

  unregisterAll(): void {
    this.eventHandlers = {};
  }

  notify(event: Event): void {
    const eventName = event.constructor.name;
    if (this.eventHandlers[eventName]) {
      this.eventHandlers[eventName].forEach((eventHandler) => {
        eventHandler.handle(event);
      });
    }
  }
}
