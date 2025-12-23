# Sign Language Visual System

A next-generation interaction system that treats sign language as a primary visual channel for agentic systems.

## Overview

This system provides sign language as a first-class interaction layer, not as translation or accessibility overlay. Sign visuals reflect system state and intent in real-time, making agent cognition visible.

## Core Principle

**Sign visuals reflect system state, not just output text.**

- Text = optional
- Sign = authoritative

## Architecture

Built on Next.js with standalone deployment support.

### Key Components

- **SignerPanel**: Persistent, dockable panel for sign visualization
- **StateIndicator**: Visual representation of system states (listening, processing, deciding, executing, error)
- **ConfidenceCue**: Display certainty, uncertainty, and warnings

## Getting Started

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production (standalone)
npm run build

# Start standalone server
npm start
```

## Deployment

This project is configured for standalone deployment. The build output includes everything needed to run independently.

### Build Configuration

The Next.js config is set to:
- Generate standalone output
- Work without external font dependencies
- Disable build-time TypeScript/ESLint checks for flexibility

## Documentation

- [Sign Visual System Specification](./sign-visual-system.md)
- [Implementation Plan](./IMPLEMENTATION_PLAN.md)

## Philosophy

> If the system thinks, it signs.
> If it cannot sign, it should not act.