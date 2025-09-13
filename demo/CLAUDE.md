# Gym Quest Demo - AI Assistant Context

## 📋 Project Overview

**Project Name**: Gym Quest Demo  
**Description**: A web-based demo for a personal fitness tracking platform that helps individuals monitor their fitness journey, with optional trainer matching capabilities  
**Type**: Web App Demo (prototyping mobile app functionality)  
**Status**: Development  

### Key Features
- **Personal Tracking**: Comprehensive performance metrics and quality tracking for individual fitness journeys
- **Progress Monitoring**: Advanced analytics and visualization of workout data and fitness goals
- **Optional Trainer Matching**: Connect with personal trainers when professional guidance is needed
- **Solo-Friendly Interface**: Designed for independent fitness enthusiasts

### Target Users
- **Fitness Enthusiasts**: Individuals tracking their personal fitness journey
- **Solo Trainers**: People who prefer self-guided workouts with data tracking
- **Personal Trainers**: Fitness professionals offering services (optional feature)
- **Trainees**: Individuals seeking professional guidance (optional feature)

---

## 🛠 Technology Stack

### Frontend
- **Framework**: SvelteKit with Svelte 5 syntax
- **Language**: TypeScript
- **Styling**: TailwindCSS (recommended for rapid prototyping)
- **State Management**: Svelte 5 runes and stores
- **Build Tool**: Vite (integrated with SvelteKit)

### Backend (Future)
- **Runtime**: Bun (preferred)
- **Framework**: TBD (likely Express or Fastify)
- **Language**: TypeScript
- **Database**: TBD (PostgreSQL recommended)
- **ORM/Query Builder**: TBD (Prisma recommended)

### Infrastructure & Tools
- **Package Manager**: bun
- **Task Runner**: Justfile
- **Deployment**: TBD (Vercel recommended for demo)
- **CI/CD**: TBD
- **Monitoring**: TBD

---

## 🏗 Development Environment

### Prerequisites
```bash
# Required software and versions
node >= 18.0.0
bun >= 1.0.0
```

### Setup Instructions
```bash
# Navigate to demo directory
cd /Users/ralim1/Documents/personal/gym-quest/demo

# Install dependencies
bun install

# Start development server
bun run dev
```

### Environment Variables
```bash
# Demo-specific environment variables (if needed)
# PUBLIC_DEMO_MODE=true
# PUBLIC_API_BASE_URL=http://localhost:5173
```

---

## 📝 Code Standards & Conventions

### General Preferences
- **Language**: Prefer TypeScript over JavaScript
- **Code Style**: ESLint + Prettier configuration
- **Naming**: camelCase for variables/functions, PascalCase for components
- **File Organization**: Feature-based organization with clear separation of concerns

### Component Guidelines
- Keep components under 200 lines
- Use Svelte 5 runes ($state, $derived, $effect) for reactivity
- Prefer composition over complex component hierarchies
- Use TypeScript interfaces for prop definitions

### Svelte 5 Specific
- Use new runes syntax: $state, $derived, $effect
- Leverage snippets for reusable template logic
- Follow Svelte 5 best practices for performance

---

## 📁 Project Structure

```
demo/
├── src/
│   ├── lib/
│   │   ├── components/     # Reusable UI components
│   │   ├── stores/         # Svelte stores for state management
│   │   ├── types/          # TypeScript type definitions
│   │   ├── utils/          # Utility functions
│   │   └── mock-data/      # Mock data for demo
│   ├── routes/             # SvelteKit routes (pages)
│   │   ├── trainer/        # Trainer interface routes
│   │   ├── trainee/        # Trainee interface routes
│   │   └── +layout.svelte  # Root layout
│   ├── app.html            # HTML template
│   └── app.css             # Global styles
├── static/                 # Static assets
├── tests/                  # Test files
├── justfile                # Task runner commands
├── package.json            # Dependencies and scripts
├── svelte.config.js        # SvelteKit configuration
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

### Key Directories
- **`src/lib/components/`**: Reusable UI components (buttons, cards, charts, etc.)
- **`src/routes/`**: Page components and routing structure
- **`src/lib/stores/`**: Global state management with Svelte stores
- **`src/lib/mock-data/`**: Sample data for trainer profiles, trainee data, performance metrics

---

## 🔄 Common Tasks & Workflows

### Development Workflow
```bash
# Start development server
just dev

# Run type checking
just check

# Build for production
just build

# Preview production build
just preview

# Lint and format
just lint
just format
```

### Demo-Specific Tasks
```bash
# Generate mock data
just generate-mock-data

# Reset demo state
just reset-demo

# Export demo build
just export-demo
```

---

## 🤖 AI Assistant Guidelines

### 🚨 CRITICAL CONSTRAINTS - READ FIRST
- **🚫 NEVER START DEVELOPMENT SERVERS AUTOMATICALLY** after implementing features
- **🚫 NO LOCAL SERVER TESTING** - All testing must be performed without launching servers
- **✅ USE BUILD COMMANDS** and static analysis for verification instead
- **❓ ASK BEFORE STARTING SERVERS** - If testing requires a server, explicitly ask the user first
- **🚫 NEVER** use `cp` commands (use proper file operations)

### Preferred Approaches
- **Always** use TypeScript for type safety
- **Always** use Svelte 5 runes syntax ($state, $derived, $effect)
- **Prefer** bun over npm/yarn for package management
- **Prefer** Justfile over npm scripts for task running
- **Prefer** build verification over live server testing

### Code Generation Rules
- Generate TypeScript over JavaScript
- Use Svelte 5 syntax and runes
- Include proper TypeScript interfaces
- Add JSDoc comments for complex functions
- Follow SvelteKit routing conventions
- Create responsive designs with TailwindCSS

### Development Workflow Constraints
- **NEVER** automatically run `just dev`, `bun run dev`, or any development server commands
- **ALWAYS** use `just build` and `just check` for verification
- **ONLY** start servers when explicitly requested by the user
- Focus on code implementation and static validation
- Use TypeScript compiler and linting for error detection

### Demo-Specific Requirements
- Create realistic mock data for trainers and trainees
- Implement basic performance tracking visualizations
- Design intuitive interfaces for both user types
- Ensure responsive design for various screen sizes

---

## 🚀 Build & Deployment

### Build Process
```bash
# Development build
just dev

# Production build
just build

# Build verification
just preview
```

### Deployment Targets
- **Development**: http://localhost:5173
- **Demo Preview**: TBD (likely Vercel deployment)
- **Production**: N/A (this is a demo)

---

## 🧪 Testing Guidelines

### 🚨 NO-SERVER TESTING POLICY
- **🚫 NEVER START LOCAL SERVERS** for testing purposes
- **✅ USE STATIC TESTING ONLY** - Unit tests, component tests, build verification
- **✅ BUILD VALIDATION** - Use `just build` and `just check` to verify code
- **❓ ASK USER PERMISSION** before starting any development server for testing

### Testing Stack
- **Unit Tests**: Vitest (runs without server)
- **Component Tests**: @testing-library/svelte (static testing)
- **Build Verification**: SvelteKit build process
- **Type Checking**: TypeScript compiler
- **E2E Tests**: Playwright (only if explicitly requested by user)

### Testing Commands
```bash
# PREFERRED: Static testing without servers
just test          # Run unit/component tests
just build         # Verify build works
just check         # Type checking and linting
just test:coverage # Test coverage analysis

# AVOID: Server-dependent testing
# just dev         # ❌ Don't run automatically
# just preview     # ❌ Only if user requests
```

### Testing Standards
- **Primary**: Static analysis and unit testing without servers
- Focus on critical user flows (matching, tracking) via unit tests
- Test component interactions in isolation
- Mock external dependencies and API calls
- Use build process to validate code correctness
- Maintain reasonable test coverage for demo features

---

## 📚 Documentation Standards

### Code Documentation
- Use JSDoc for functions and complex logic
- Comment Svelte component props and events
- Document mock data structure
- Maintain clear README for demo setup

### Demo Documentation
- Document user flows for both trainer and trainee interfaces
- Explain mock data scenarios
- Provide screenshots of key features
- Include demo script for presentations

---

## 🔧 Troubleshooting

### Common Issues
1. **Svelte 5 syntax errors**: Ensure using latest Svelte 5 syntax with runes
2. **TypeScript errors**: Check tsconfig.json and component prop types
3. **Build failures**: Verify all dependencies are installed with bun

### Debug Commands
```bash
# Check SvelteKit status
just check

# View build logs
just build --verbose

# Reset node_modules
just clean && bun install
```

---

## 📋 Quick Reference

### Essential Commands
```bash
just dev          # Start development server
just build         # Build for production
just check         # Type check and lint
just format        # Format code
just test          # Run tests
```

### Demo Features
- **Personal Dashboard**: Individual progress tracking, goal setting, workout logging
- **Performance Analytics**: Charts and metrics visualization for personal fitness data
- **Progress Tracking**: Comprehensive monitoring of fitness goals and achievements
- **Optional Trainer Features**: Trainer discovery and booking system (secondary feature)
- **Matching Algorithm**: Basic compatibility scoring for trainer connections (optional)

---

**Last Updated**: 2024-01-XX  
**Version**: 0.1.0 (Demo)

> 💡 **Demo Note**: This is a web-based prototype demonstrating mobile app functionality. Focus on core features and user experience over production-ready implementation.