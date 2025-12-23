'use client';

import { useMemo } from 'react';
import intentMap from '@/sign-visual/semantics/intent.map.json';
import systemMap from '@/sign-visual/semantics/system.map.json';

type IntentMapping = typeof intentMap.mappings;
type SystemMapping = typeof systemMap.mappings;

export function useIntentMap() {
  const getIntentSemantic = useMemo(() => {
    return (intent: keyof IntentMapping) => {
      return intentMap.mappings[intent] || null;
    };
  }, []);

  const getSystemSemantic = useMemo(() => {
    return (action: keyof SystemMapping) => {
      return systemMap.mappings[action] || null;
    };
  }, []);

  return {
    getIntentSemantic,
    getSystemSemantic,
    intentMap: intentMap.mappings,
    systemMap: systemMap.mappings,
  };
}
