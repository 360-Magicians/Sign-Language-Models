'use client';

import { useState, useEffect } from 'react';
import { eventBus } from '@/sign-visual/engine/eventBus';
import { StateEvent, SystemState } from '@/sign-visual/engine/stateMachine';

export function useSignState() {
  const [currentState, setCurrentState] = useState<SystemState>('idle');
  const [lastEvent, setLastEvent] = useState<StateEvent | null>(null);
  const [eventHistory, setEventHistory] = useState<StateEvent[]>([]);

  useEffect(() => {
    const unsubscribe = eventBus.subscribe((event: StateEvent) => {
      setCurrentState(event.state);
      setLastEvent(event);
      setEventHistory(prev => [...prev.slice(-19), event]); // Keep last 20 events
    });

    return unsubscribe;
  }, []);

  return {
    currentState,
    lastEvent,
    eventHistory,
  };
}
