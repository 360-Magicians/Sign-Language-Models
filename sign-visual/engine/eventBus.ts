/**
 * Event Bus for Sign Visual System
 * Emits state changes to all listeners
 */

import { StateEvent } from './stateMachine';

type EventListener = (event: StateEvent) => void;

class SignEventBus {
  private listeners: EventListener[] = [];
  private eventLog: StateEvent[] = [];
  private maxLogSize = 100;

  subscribe(listener: EventListener): () => void {
    this.listeners.push(listener);
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  emit(event: StateEvent): void {
    // Log event
    this.eventLog.push(event);
    if (this.eventLog.length > this.maxLogSize) {
      this.eventLog.shift();
    }

    // Notify all listeners
    this.listeners.forEach(listener => {
      try {
        listener(event);
      } catch (error) {
        console.error('Error in event listener:', error);
      }
    });
  }

  getEventLog(): StateEvent[] {
    return [...this.eventLog];
  }

  clear(): void {
    this.eventLog = [];
  }
}

// Singleton instance
export const eventBus = new SignEventBus();
