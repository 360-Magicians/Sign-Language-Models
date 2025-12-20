'use client';

import React from 'react';
import { SystemState } from '../engine/stateMachine';
import { 
  Brain, 
  Ear, 
  HandWaving, 
  ShieldCheck, 
  Scale, 
  Zap, 
  CheckCircle, 
  AlertTriangle,
  Hourglass
} from 'lucide-react';

interface StateIndicatorProps {
  state: SystemState;
  message?: string;
}

const stateConfig = {
  idle: {
    icon: HandWaving,
    color: 'text-gray-500',
    bg: 'bg-gray-100 dark:bg-gray-800',
    label: 'Ready'
  },
  listening: {
    icon: Ear,
    color: 'text-blue-500',
    bg: 'bg-blue-100 dark:bg-blue-900',
    label: 'Listening'
  },
  processing: {
    icon: Brain,
    color: 'text-purple-500',
    bg: 'bg-purple-100 dark:bg-purple-900',
    label: 'Processing'
  },
  validating: {
    icon: ShieldCheck,
    color: 'text-amber-500',
    bg: 'bg-amber-100 dark:bg-amber-900',
    label: 'Validating'
  },
  deciding: {
    icon: Scale,
    color: 'text-pink-500',
    bg: 'bg-pink-100 dark:bg-pink-900',
    label: 'Deciding'
  },
  executing: {
    icon: Zap,
    color: 'text-green-500',
    bg: 'bg-green-100 dark:bg-green-900',
    label: 'Executing'
  },
  fetching: {
    icon: Hourglass,
    color: 'text-cyan-500',
    bg: 'bg-cyan-100 dark:bg-cyan-900',
    label: 'Fetching'
  },
  completed: {
    icon: CheckCircle,
    color: 'text-emerald-500',
    bg: 'bg-emerald-100 dark:bg-emerald-900',
    label: 'Completed'
  },
  error: {
    icon: AlertTriangle,
    color: 'text-red-500',
    bg: 'bg-red-100 dark:bg-red-900',
    label: 'Error'
  },
  needs_input: {
    icon: HandWaving,
    color: 'text-orange-500',
    bg: 'bg-orange-100 dark:bg-orange-900',
    label: 'Needs Input'
  }
};

export function StateIndicator({ state, message }: StateIndicatorProps) {
  const config = stateConfig[state];
  const Icon = config.icon;

  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-lg ${config.bg} transition-all duration-300`}>
      <div className={`${config.color} animate-pulse`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <div className={`font-semibold ${config.color}`}>{config.label}</div>
        {message && (
          <div className="text-sm text-muted-foreground mt-1">{message}</div>
        )}
      </div>
    </div>
  );
}
