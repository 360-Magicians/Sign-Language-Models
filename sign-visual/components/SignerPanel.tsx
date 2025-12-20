'use client';

import React, { useState } from 'react';
import { useSignState } from '@/hooks/useSignState';
import { StateIndicator } from './StateIndicator';
import { ConfidenceCue } from './ConfidenceCue';
import { X, Maximize2, Minimize2, GripVertical } from 'lucide-react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

interface SignerPanelProps {
  defaultPosition?: 'left' | 'right' | 'bottom';
  defaultSize?: number;
  onClose?: () => void;
  persistent?: boolean;
}

export function SignerPanel({ 
  defaultPosition = 'right',
  defaultSize = 30,
  onClose,
  persistent = true 
}: SignerPanelProps) {
  const { currentState, lastEvent } = useSignState();
  const [isExpanded, setIsExpanded] = useState(true);
  const [position] = useState(defaultPosition);

  const handleClose = () => {
    if (!persistent && onClose) {
      onClose();
    }
  };

  const panelContent = (
    <div className="flex flex-col h-full bg-background border-l dark:border-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b dark:border-gray-800 bg-muted/30">
        <div className="flex items-center gap-2">
          <GripVertical className="w-4 h-4 text-muted-foreground" />
          <h3 className="font-semibold text-sm">Sign Visual State</h3>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 hover:bg-muted rounded transition-colors"
            aria-label={isExpanded ? 'Minimize panel' : 'Maximize panel'}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          {!persistent && (
            <button
              onClick={handleClose}
              className="p-1.5 hover:bg-muted rounded transition-colors"
              aria-label="Close panel"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Current State */}
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">
              Current State
            </h4>
            <StateIndicator 
              state={currentState} 
              message={lastEvent?.message}
            />
          </div>

          {/* Confidence */}
          {lastEvent && lastEvent.confidence !== undefined && (
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                Confidence
              </h4>
              <ConfidenceCue confidence={lastEvent.confidence} />
            </div>
          )}

          {/* Actor */}
          {lastEvent && (
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                Actor
              </h4>
              <div className="px-3 py-2 bg-muted rounded-lg">
                <span className="font-medium">{lastEvent.actor}</span>
              </div>
            </div>
          )}

          {/* Requires User Input */}
          {lastEvent?.requiresUser && (
            <div className="px-4 py-3 bg-orange-50 dark:bg-orange-950 border-l-4 border-orange-500 rounded">
              <p className="text-sm font-medium text-orange-900 dark:text-orange-200">
                Your input is needed
              </p>
            </div>
          )}

          {/* Signer Visual Placeholder */}
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">
              Sign Visual
            </h4>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-4xl mb-2">🤟</div>
                <p className="text-sm text-muted-foreground">
                  Sign animation for <span className="font-semibold">{currentState}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  (Visual renderer placeholder)
                </p>
              </div>
            </div>
          </div>

          {/* Metadata */}
          {lastEvent?.metadata && Object.keys(lastEvent.metadata).length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                Details
              </h4>
              <div className="px-3 py-2 bg-muted rounded-lg text-xs font-mono">
                <pre className="whitespace-pre-wrap break-all">
                  {JSON.stringify(lastEvent.metadata, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return panelContent;
}
