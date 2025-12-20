/**
 * Sign Visual State Machine
 * Single source of truth for agent state
 */

export type SystemState = 
  | 'idle'
  | 'listening'
  | 'processing'
  | 'validating'
  | 'deciding'
  | 'executing'
  | 'fetching'
  | 'completed'
  | 'error'
  | 'needs_input';

export type ActorType = 
  | 'MagicianCore'
  | 'Validator'
  | 'Compliance'
  | 'User'
  | 'System';

export interface StateEvent {
  actor: ActorType;
  state: SystemState;
  confidence?: number; // 0-1, optional
  requiresUser: boolean;
  message?: string;
  timestamp: number;
  metadata?: Record<string, unknown>;
}

export interface StateTransition {
  from: SystemState;
  to: SystemState;
  actor: ActorType;
  reason?: string;
}

class SignStateMachine {
  private currentState: SystemState = 'idle';
  private previousStates: StateEvent[] = [];
  private maxHistory = 50;

  getCurrentState(): SystemState {
    return this.currentState;
  }

  getStateHistory(): StateEvent[] {
    return [...this.previousStates];
  }

  getLastEvent(): StateEvent | null {
    return this.previousStates[this.previousStates.length - 1] || null;
  }

  transition(event: Omit<StateEvent, 'timestamp'>): StateEvent {
    const fullEvent: StateEvent = {
      ...event,
      timestamp: Date.now()
    };

    // Validate state transition
    if (!this.isValidTransition(this.currentState, event.state)) {
      console.warn(`Invalid state transition: ${this.currentState} -> ${event.state}`);
    }

    // Update state
    this.currentState = event.state;

    // Add to history
    this.previousStates.push(fullEvent);
    if (this.previousStates.length > this.maxHistory) {
      this.previousStates.shift();
    }

    return fullEvent;
  }

  private isValidTransition(from: SystemState, to: SystemState): boolean {
    // Define valid transitions
    const validTransitions: Record<SystemState, SystemState[]> = {
      idle: ['listening', 'processing', 'error'],
      listening: ['processing', 'idle', 'error'],
      processing: ['validating', 'deciding', 'executing', 'completed', 'error', 'needs_input'],
      validating: ['deciding', 'processing', 'error', 'completed'],
      deciding: ['executing', 'validating', 'error', 'needs_input'],
      executing: ['fetching', 'completed', 'error', 'processing'],
      fetching: ['executing', 'completed', 'error'],
      completed: ['idle', 'listening', 'processing'],
      error: ['idle', 'processing', 'needs_input'],
      needs_input: ['listening', 'processing', 'idle']
    };

    return validTransitions[from]?.includes(to) ?? false;
  }

  reset() {
    this.currentState = 'idle';
    this.previousStates = [];
  }
}

// Singleton instance
export const stateMachine = new SignStateMachine();
