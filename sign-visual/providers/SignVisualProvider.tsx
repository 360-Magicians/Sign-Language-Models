'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { stateMachine, StateEvent } from '../engine/stateMachine';
import { eventBus } from '../engine/eventBus';

interface SignVisualContextType {
  emitState: (event: Omit<StateEvent, 'timestamp'>) => void;
}

const SignVisualContext = createContext<SignVisualContextType | null>(null);

export function SignVisualProvider({ children }: { children: React.ReactNode }) {
  const emitState = (event: Omit<StateEvent, 'timestamp'>) => {
    const fullEvent = stateMachine.transition(event);
    eventBus.emit(fullEvent);
  };

  // Initialize with idle state
  useEffect(() => {
    emitState({
      actor: 'System',
      state: 'idle',
      confidence: 1.0,
      requiresUser: false,
      message: 'System ready'
    });
  }, []);

  return (
    <SignVisualContext.Provider value={{ emitState }}>
      {children}
    </SignVisualContext.Provider>
  );
}

export function useSignVisual() {
  const context = useContext(SignVisualContext);
  if (!context) {
    throw new Error('useSignVisual must be used within SignVisualProvider');
  }
  return context;
}
