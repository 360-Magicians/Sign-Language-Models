'use client';

import React from 'react';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

interface ConfidenceCueProps {
  confidence?: number; // 0-1
  variant?: 'certainty' | 'uncertainty' | 'warning';
}

export function ConfidenceCue({ confidence = 0.5, variant }: ConfidenceCueProps) {
  // Determine variant based on confidence if not explicitly set
  const effectiveVariant = variant || (
    confidence >= 0.8 ? 'certainty' : 
    confidence >= 0.5 ? 'uncertainty' : 
    'warning'
  );

  const variantConfig = {
    certainty: {
      icon: TrendingUp,
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-950',
      label: 'High Confidence'
    },
    uncertainty: {
      icon: AlertCircle,
      color: 'text-yellow-600 dark:text-yellow-400',
      bg: 'bg-yellow-50 dark:bg-yellow-950',
      label: 'Uncertain'
    },
    warning: {
      icon: TrendingDown,
      color: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-950',
      label: 'Low Confidence'
    }
  };

  const config = variantConfig[effectiveVariant];
  const Icon = config.icon;
  const percentage = Math.round(confidence * 100);

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${config.bg} ${config.color}`}>
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{percentage}%</span>
    </div>
  );
}
