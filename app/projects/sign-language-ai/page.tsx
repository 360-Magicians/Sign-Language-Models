'use client';

import { useEffect, useState } from 'react';
import { ProjectHeader } from "@/components/project/project-header"
import { ProjectAbout } from "@/components/project/project-about"
import { useSignVisual } from '@/sign-visual/providers/SignVisualProvider';
import { Button } from '@/components/ui/button';
import type { Metadata } from "next"

export default function SignLanguageAIPage() {
  const { emitState } = useSignVisual();
  const [isRunning, setIsRunning] = useState(false);

  const aboutParagraphs = [
    "This sign language AI model demonstrates the Sign Visual State system - a revolutionary approach to making agent cognition visible through sign language.",
    "Unlike traditional translation systems, this treats sign language as a primary interaction channel, showing what the system is thinking and doing in real-time.",
    "Click the buttons below to see how different system states are represented visually through the Sign Visual panel on the right."
  ];

  const runDemoSequence = async () => {
    setIsRunning(true);

    // Sequence of states that demonstrates the system
    const sequence = [
      { state: 'listening' as const, actor: 'User' as const, message: 'Receiving your input...', confidence: 0.9, delay: 2000 },
      { state: 'processing' as const, actor: 'MagicianCore' as const, message: 'Analyzing request...', confidence: 0.7, delay: 2500 },
      { state: 'validating' as const, actor: 'Validator' as const, message: 'Checking safety...', confidence: 0.8, delay: 2000 },
      { state: 'deciding' as const, actor: 'MagicianCore' as const, message: 'Determining best action...', confidence: 0.6, delay: 2000 },
      { state: 'executing' as const, actor: 'MagicianCore' as const, message: 'Taking action...', confidence: 0.9, delay: 2000 },
      { state: 'completed' as const, actor: 'System' as const, message: 'Task completed successfully!', confidence: 1.0, delay: 2000 },
      { state: 'idle' as const, actor: 'System' as const, message: 'Ready for next task', confidence: 1.0, delay: 0 }
    ];

    for (const step of sequence) {
      emitState({
        actor: step.actor,
        state: step.state,
        confidence: step.confidence,
        requiresUser: false,
        message: step.message
      });
      await new Promise(resolve => setTimeout(resolve, step.delay));
    }

    setIsRunning(false);
  };

  const emitCustomState = (state: 'listening' | 'processing' | 'error' | 'completed') => {
    const stateConfigs = {
      listening: { actor: 'User' as const, message: 'Listening for input...', confidence: 0.9 },
      processing: { actor: 'MagicianCore' as const, message: 'Processing your request...', confidence: 0.7 },
      error: { actor: 'System' as const, message: 'An error occurred!', confidence: 1.0 },
      completed: { actor: 'System' as const, message: 'Action completed!', confidence: 1.0 }
    };

    const config = stateConfigs[state];
    emitState({
      actor: config.actor,
      state: state,
      confidence: config.confidence,
      requiresUser: state === 'error',
      message: config.message
    });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <ProjectHeader
        title="Sign Language Visual System"
        description="Experience sign language as a primary interaction layer. Watch the Sign Visual panel on the right to see system states visualized in real-time."
      />

      <div className="my-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold mb-4">Interactive Demo</h3>
        <p className="mb-6 text-muted-foreground">
          This demo showcases how the Sign Visual System makes agent cognition visible. 
          The panel on the right shows what the system is doing in real-time through visual state indicators.
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-3">Full Demo Sequence</h4>
            <Button 
              onClick={runDemoSequence} 
              disabled={isRunning}
              size="lg"
              className="w-full sm:w-auto"
            >
              {isRunning ? 'Running Demo...' : 'Run Complete Demo Sequence'}
            </Button>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-semibold mb-3">Try Individual States</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Button 
                onClick={() => emitCustomState('listening')} 
                variant="outline"
                disabled={isRunning}
              >
                Listening
              </Button>
              <Button 
                onClick={() => emitCustomState('processing')} 
                variant="outline"
                disabled={isRunning}
              >
                Processing
              </Button>
              <Button 
                onClick={() => emitCustomState('completed')} 
                variant="outline"
                disabled={isRunning}
              >
                Completed
              </Button>
              <Button 
                onClick={() => emitCustomState('error')} 
                variant="outline"
                disabled={isRunning}
              >
                Error
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ProjectAbout title="About This System" paragraphs={aboutParagraphs} />
    </div>
  )
}
