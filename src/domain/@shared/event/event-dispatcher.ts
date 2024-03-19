import { EventHandler } from "./event-handler";
import { Event } from "./event";

export interface EventDispatcher {
  notify(event: Event): void;
  register(eventName: string, eventHandler: EventHandler): void;
  unregister(eventName: string, eventHandler: EventHandler): void;
  unregisterAll(): void;
}
