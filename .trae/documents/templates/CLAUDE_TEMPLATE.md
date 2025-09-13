# CLAUDE.md Template

> **Instructions**: Copy this template to your project root as `CLAUDE.md` and customize it for your specific project. This file helps AI assistants understand your project context, preferences, and requirements.

---

# [PROJECT_NAME] - AI Assistant Context

## 📋 Project Overview

**Project Name**: [Your Project Name]  
**Description**: [Brief description of what your project does]  
**Type**: [Web App / Mobile App / API / CLI Tool / Library / etc.]  
**Status**: [Development / Production / Maintenance]  

### Key Features
- [Feature 1]
- [Feature 2]
- [Feature 3]

### Target Users
- [Primary user type]
- [Secondary user type]

---

## 🛠 Technology Stack

### Frontend
- **Framework**: [React / Vue / Angular / Svelte / etc.]
- **Language**: [TypeScript / JavaScript]
- **Styling**: [Tailwind CSS / Styled Components / CSS Modules / etc.]
- **State Management**: [Redux / Zustand / Context API / etc.]
- **Build Tool**: [Vite / Webpack / Parcel / etc.]

### Backend
- **Runtime**: [Node.js / Bun / Deno / etc.]
- **Framework**: [Express / Fastify / NestJS / etc.]
- **Language**: [TypeScript / JavaScript / Go / Python / etc.]
- **Database**: [PostgreSQL / MongoDB / SQLite / etc.]
- **ORM/Query Builder**: [Prisma / TypeORM / Drizzle / etc.]

### Infrastructure & Tools
- **Package Manager**: [npm / yarn / pnpm / bun]
- **Task Runner**: [Justfile / npm scripts / Makefile]
- **Deployment**: [Vercel / Netlify / AWS / Docker / etc.]
- **CI/CD**: [GitHub Actions / GitLab CI / etc.]
- **Monitoring**: [Sentry / LogRocket / etc.]

---

## 🏗 Development Environment

### Prerequisites
```bash
# List required software and versions
# Example:
node >= 18.0.0
bun >= 1.0.0
# Add other requirements
```

### Setup Instructions
```bash
# Clone and setup
git clone [repository-url]
cd [project-name]

# Install dependencies
[package-manager] install

# Environment setup
# [Add specific setup steps]

# Start development
[command to start dev server]
```

### Environment Variables
```bash
# Required environment variables
DATABASE_URL=
API_KEY=
NEXT_PUBLIC_APP_URL=
# Add all required env vars with descriptions
```

---

## 📝 Code Standards & Conventions

### General Preferences
- **Language**: Prefer [TypeScript/JavaScript] over [alternative]
- **Code Style**: [ESLint config / Prettier config]
- **Naming**: [camelCase / kebab-case / PascalCase] for [specific contexts]
- **File Organization**: [Brief description of file structure preferences]

### Component Guidelines
- Keep components under [X] lines
- Use [functional/class] components
- Prefer [composition/inheritance]
- [Other component-specific rules]

### API Design
- RESTful endpoints following [convention]
- Error handling: [strategy]
- Authentication: [method]
- Validation: [library/approach]

### Database
- Schema design: [principles]
- Migration strategy: [approach]
- Naming conventions: [snake_case/camelCase]

---

## 📁 Project Structure

```
[project-root]/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   ├── types/         # TypeScript type definitions
│   └── styles/        # Global styles
├── api/              # Backend API code
├── docs/             # Documentation
├── tests/            # Test files
└── [other directories]
```

### Key Directories
- **`src/components/`**: [Description and organization rules]
- **`src/pages/`**: [Routing and page structure]
- **`api/`**: [Backend organization]
- **[Other important directories]**

---

## 🔄 Common Tasks & Workflows

### Development Workflow
```bash
# Start development
[command]

# Run tests
[command]

# Build for production
[command]

# Lint and format
[command]
```

### Database Operations
```bash
# Run migrations
[command]

# Seed database
[command]

# Reset database
[command]
```

### Deployment
```bash
# Deploy to staging
[command]

# Deploy to production
[command]
```

---

## 🤖 AI Assistant Guidelines

### Preferred Approaches
- **Always** use [specific technology/pattern] for [use case]
- **Never** use [technology/pattern] because [reason]
- **Prefer** [approach A] over [approach B] for [context]

### Code Generation Rules
- Generate TypeScript over JavaScript
- Include proper error handling
- Add JSDoc comments for complex functions
- Follow existing code patterns in the project
- Use existing utility functions when available

### Constraints
- Don't run `cp` commands (use proper file operations)
- Don't start development servers automatically after implementation
- Always use [package manager] for dependency management
- Follow the established project structure

### Testing Requirements
- Write tests for new features
- Update existing tests when modifying code
- Ensure all tests pass before considering task complete

---

## 🚀 Build & Deployment

### Build Process
```bash
# Development build
[command]

# Production build
[command]

# Build verification
[command]
```

### Deployment Targets
- **Development**: [URL and process]
- **Staging**: [URL and process]
- **Production**: [URL and process]

### Environment-Specific Configurations
- **Development**: [specific settings]
- **Staging**: [specific settings]
- **Production**: [specific settings]

---

## 🧪 Testing Guidelines

### Testing Stack
- **Unit Tests**: [Jest / Vitest / etc.]
- **Integration Tests**: [Testing Library / etc.]
- **E2E Tests**: [Playwright / Cypress / etc.]

### Testing Commands
```bash
# Run all tests
[command]

# Run unit tests
[command]

# Run integration tests
[command]

# Run E2E tests
[command]

# Test coverage
[command]
```

### Testing Standards
- Minimum [X]% code coverage
- Test naming convention: [pattern]
- Mock external dependencies
- [Other testing rules]

---

## 📚 Documentation Standards

### Code Documentation
- Use JSDoc for functions and classes
- Comment complex business logic
- Keep README.md updated
- Document API endpoints

### Architecture Documentation
- Keep architecture decisions in [location]
- Document database schema changes
- Maintain API documentation
- Update deployment guides

---

## 🔧 Troubleshooting

### Common Issues
1. **[Issue 1]**: [Solution]
2. **[Issue 2]**: [Solution]
3. **[Issue 3]**: [Solution]

### Debug Commands
```bash
# Check system status
[command]

# View logs
[command]

# Reset environment
[command]
```

---

## 📞 Project Contacts

- **Project Lead**: [Name] ([email])
- **Tech Lead**: [Name] ([email])
- **DevOps**: [Name] ([email])

---

## 📋 Quick Reference

### Essential Commands
```bash
# Most used commands for quick reference
[command 1]  # Description
[command 2]  # Description
[command 3]  # Description
```

### Important URLs
- **Repository**: [GitHub/GitLab URL]
- **Documentation**: [Docs URL]
- **Staging**: [Staging URL]
- **Production**: [Production URL]
- **CI/CD**: [Pipeline URL]

---

**Last Updated**: [Date]  
**Version**: [Version number]

> 💡 **Tip**: Keep this file updated as your project evolves. It's your AI assistant's guide to understanding and working with your codebase effectively.