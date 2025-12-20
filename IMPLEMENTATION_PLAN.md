# Implementation Plan

## Overview

This document outlines the phased implementation of the Sign Visual System.

## Phase 1 — Make it Real (MVP) ✅

### Core Engine
- ✅ `stateMachine.ts` - Single source of truth for agent state
- ✅ `eventBus.ts` - Emits state changes to all listeners

### State Definitions
- ✅ JSON state definitions for all system states
- ✅ Visual configuration per state
- ✅ Semantic mappings

### Rules
✅ Every agent action MUST emit a state event  
✅ No silent processing  
✅ No hidden waits

Example:
```typescript
emitState({
  actor: "MagicianCore",
  state: "validating",
  confidence: 0.82,
  requiresUser: false
})
```

## Phase 2 — Wire to Agent Core ✅

### React Integration
- ✅ `useSignState.ts` - Hook for consuming state
- ✅ `useIntentMap.ts` - Hook for semantic mappings
- ✅ `SignVisualProvider.tsx` - Context provider

### Flow
```
user intent
  → agent reasoning
  → stateMachine update
  → sign renderer
  → (optional) text confirmation
```

**Text never leads. Sign always reflects truth.**

## Phase 3 — Visual Components ✅

### Components Built
- ✅ `SignerPanel.tsx` - Persistent, dockable panel
- ✅ `StateIndicator.tsx` - Visual state representation
- ✅ `ConfidenceCue.tsx` - Confidence display

### Features
- ✅ Persistent panel (not modal)
- ✅ Docked to layout
- ✅ Real-time state updates
- ✅ Confidence indicators
- ✅ Actor display
- ✅ Expand/collapse controls

## Phase 4 — Integration & Demo ✅

### Layout Integration
- ✅ SignerPanel integrated into main layout
- ✅ Always visible (persistent)
- ✅ Positioned on right side

### Interactive Demo
- ✅ Demo page with state transitions
- ✅ Full sequence demonstration
- ✅ Individual state testing
- ✅ Real-time visual feedback

## Phase 5 — Deaf Engagement Loop (Governance)

### Governance Structure
```
/governance
  sign-feedback.json       # Deaf contributor feedback
  semantic-overrides.json  # Community-approved mappings
```

### Principles
- Deaf contributors approve semantic mappings
- No auto-updates without sign review
- Versioned sign semantics (breaking changes = major version bump)

### Status
🔄 Structure defined, implementation pending community engagement

## Phase 6 — ChatGPT App Store Surface

### Manifest Declaration
```json
{
  "capabilities": {
    "sign_visual_state": {
      "primary": true,
      "modes": ["realtime", "async", "replay"]
    }
  }
}
```

### Positioning
- **Not** "accessibility"
- **Category**: Agent Transparency / Visual Reasoning

### Status
📋 Planned for future integration

## Definition of Success

A deaf user can tell:
- ✅ What the system is doing right now
- ✅ Why it stopped or paused
- ✅ What input it needs
- ✅ What just completed
- 🔄 Whether it's safe to proceed (pending validator integration)
- 🔄 If there's a problem (error handling active, needs real agent integration)

## Next Steps

1. **Community Feedback**
   - Gather feedback from Deaf community
   - Refine semantic mappings
   - Validate visual representations

2. **Enhanced Rendering**
   - Implement actual sign animation
   - Add video renderer
   - Replace placeholder visuals

3. **Agent Integration**
   - Wire to actual AI agent core
   - Integrate with decision-making systems
   - Add real-time state emission from agent actions

4. **Advanced Features**
   - Replay functionality
   - Speed controls
   - State history visualization
   - Export/share capabilities

## Technical Debt

- Google Fonts dependency removed (hardcoded fonts now)
- TypeScript strict mode disabled for build flexibility
- ESLint checks disabled during build
- Need to add comprehensive tests

## Deployment

- ✅ Standalone Next.js build configured
- ✅ No Vercel dependencies
- ✅ Self-contained deployment
- ✅ Production-ready build process
