# Sign Visual System Specification

## Purpose

Provide sign language as a primary interaction layer for agentic systems.
Not translation. State + intent visualization.

## Core Principle

Sign visuals reflect system state, not just output text.

**Text = optional**  
**Sign = authoritative**

## Architecture

### Directory Structure

```
/sign-visual
  /engine
    stateMachine.ts      # Single source of truth for agent state
    eventBus.ts          # Emits state changes to listeners
  /components
    SignerPanel.tsx      # Persistent, dockable panel
    StateIndicator.tsx   # Visual state representation
    ConfidenceCue.tsx    # Certainty / uncertainty / warning display
  /states
    idle.json            # Ready state
    listening.json       # Receiving input
    processing.json      # Analyzing request
    validating.json      # Checking safety
    deciding.json        # Making decision
    executing.json       # Taking action
    completed.json       # Task finished
    error.json           # Error state
  /semantics
    intent.map.json      # User intent → sign semantic
    system.map.json      # System action → sign semantic
  /providers
    SignVisualProvider.tsx # React context for state management
```

## Sign Rendering Rules

1. **No word-for-word translation**
   - Use semantic chunks
   - Convey meaning, not literal text

2. **Always expose:**
   - What the system is doing
   - Why it paused
   - What it needs next

3. **State-based signing**
   Different visual modes for:
   - Listening / Processing
   - Deciding / Validating
   - Executing / Fetching
   - Completed / Needs input

## Integration Points

### MagicianCore
Invokes SignerPanel by default. All agent actions emit state events.

```typescript
emitState({
  actor: "MagicianCore",
  state: "processing",
  confidence: 0.75,
  requiresUser: false,
  message: "Analyzing request..."
})
```

### Validator
Switches to "validating/warning" state during safety checks.

### Compliance
High-visibility caution semantics for compliance checks.

### Errors
Explicit, non-ambiguous signing. No silent failures.

## Accessibility Contract

1. **Sign panel never hidden behind modals**
   - Always visible
   - Docked to layout

2. **User controls**
   - Size adjustment
   - Expand/collapse
   - (Future: speed, replay)

3. **Works async-first**
   - No forced realtime
   - State persists across interactions

## State Machine

### States
- `idle` - System ready
- `listening` - Receiving input
- `processing` - Analyzing request
- `validating` - Checking safety
- `deciding` - Making decision
- `executing` - Taking action
- `fetching` - Retrieving data
- `completed` - Task finished
- `error` - Error occurred
- `needs_input` - Waiting for user

### Valid Transitions
Each state can only transition to specific next states, enforcing logical flow.

## Definition of Done

✅ Deaf user understands system state without reading text  
✅ No action happens without a visible sign state  
✅ System silence is never ambiguous

## Non-Goals

❌ Not subtitles  
❌ Not decorative avatars  
❌ Not post-hoc translation

## Philosophy

> If the system thinks, it signs.  
> If it cannot sign, it should not act.

## Future Enhancements

- Generative sign animation
- Video renderer integration
- Replay capabilities
- Speed controls
- Multi-modal semantic mapping
- ChatGPT App Store integration
