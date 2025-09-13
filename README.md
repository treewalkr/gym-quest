# Gym Quest

A personal fitness tracking platform that empowers individuals to monitor their fitness journey independently, with optional trainer connections when professional guidance is needed.

## Key Features

- **Personal Fitness Tracking**: Comprehensive performance metrics and progress monitoring
- **Optional Trainer Matching**: Connect with personal trainers when you need professional guidance
- **Mobile-First Design**: Native app-like experience optimized for mobile devices
- **Solo-Friendly**: Designed for independent fitness enthusiasts who want to track their own progress

## Demo

**Live Demo**: [https://gymquest.treewalkr.dev](https://gymquest.treewalkr.dev)

The demo is located in the `/demo` directory and showcases the core functionality of the fitness tracking platform.

### Technology Stack

- **Frontend**: SvelteKit with Svelte 5 syntax
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Package Manager**: Bun
- **Task Runner**: Justfile
- **Deployment**: Vercel

## Quick Start

### Prerequisites

- Node.js >= 18.0.0
- Bun >= 1.0.0

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd gym-quest

# Navigate to demo directory
cd demo

# Install dependencies
bun install

# Start development server
just dev
```

### Available Commands

```bash
# Development
just dev          # Start development server
just build        # Build for production
just preview      # Preview production build

# Quality Assurance
just check        # Type checking and linting
just test         # Run tests
just format       # Format code
```
---

**Note**: This is a demo project showcasing the core concepts of a personal fitness tracking platform. The focus is on user experience and interface design rather than production-ready backend implementation.