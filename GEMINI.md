# GEMINI.md: Project Context

This document provides context for the Gemini AI assistant to understand the project in the current directory.

## Project Overview

This is a personal portfolio website for Joshua David (joshydavid). It is built with [Next.js](https://nextjs.org/) (using the App Router), [TypeScript](https://www.typescriptlang.org/), and styled with [Tailwind CSS](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/).

The project uses [TanStack Query](https://tanstack.com/query) for server-state management and data fetching. It also integrates with [Supabase](https://supabase.com/) for backend functionality, initialized via `superbase.ts`, and uses an AWS S3 bucket for image hosting as defined in `next.config.js`.

The codebase is well-structured with linting and formatting enforced by ESLint and Prettier.

## Build, Run, and Test Commands

The project uses `bun` as the package manager and script runner.

*   **Install Dependencies:**
    ```bash
    bun install
    ```

*   **Run Development Server:**
    Starts the local development server with Turbopack.
    ```bash
    bun run dev
    ```

*   **Create Production Build:**
    Builds the application for production.
    ```bash
    bun run build
    ```

*   **Start Production Server:**
    Starts the production server. A build must be created first.
    ```bash
    bun run start
    ```

*   **Linting:**
    Checks for linting errors using ESLint.
    ```bash
    bun run lint
    ```

*   **Formatting:**
    Formats the code using Prettier.
    ```bash
    bun run prettier
    ```

## Development Conventions

*   **Package Manager**: `bun` should be used for all dependency management and script execution.
*   **UI Components**: The project uses Shadcn UI, which are not traditional library components. They are added via the Shadcn CLI and live in `app/components/ui`.
*   **Styling**: Use Tailwind CSS utility classes. Avoid plain CSS where possible.
*   **Data Fetching**: Use TanStack Query for managing server state.
*   **Backend**: Supabase is used for backend services. Client configuration is in `superbase.ts`.
*   **Environment**: Supabase credentials (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) need to be provided in an environment file (e.g., `.env.local`). An example is provided in `.env.sample`.
*   **CI/CD**: The GitHub Actions workflow in `.github/workflows/ci.yml` defines the continuous integration process, which includes linting, formatting, and building the project.
