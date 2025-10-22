# UI Plan for nextjs_auth_workflow

## Overview

This document outlines the planned UI components, folder structure, and layout for the Next.js authentication workflow project. The goal is to create a reusable, responsive component skeleton using Tailwind CSS.

## Goals

- Create reusable components (Navbar, Footer, Button, Input)
- Create page-level layout components (DashboardLayout)
- Keep styling consistent using Tailwind utility classes
- Ensure components are accessible and responsive

## Folder Structure

- app/
  - layout.tsx (site shell: includes Navbar + Footer)
  - page.tsx (public home)
  - login/page.tsx
  - dashboard/page.tsx
  - consumer/page.tsx
- components/
  - Navbar.tsx
  - Footer.tsx
  - DashboardLayout.tsx
  - Button.tsx
  - Input.tsx
  - ProtectedButton.tsx (already present)
- utils/
  - provider.js
- app/api/auth/[...nextauth]/route.ts
- ui-plan.md (this file)

## Component Catalog

- Navbar
  - Responsible for site branding and navigation links (Home, Login, Dashboard)
  - Responsive: collapses to a hamburger on small screens
- Footer
  - Small footer with copyright and small nav
- DashboardLayout
  - Page-level layout used for dashboard pages to provide a consistent container
- Button
  - Reusable button styles (primary, secondary)
- Input
  - Reusable input with label, helper text, and error state

## Breakpoints

- Mobile: <640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: >1024px (lg+)

## Accessibility

- All form controls have labels
- Buttons are keyboard accessible
- Color contrast uses Tailwind default palette (ensure sufficient contrast in final designs)

## Visual Examples / Notes

- Use spacing scale and container widths consistently (max-w-sm for forms, max-w-md for dashboards)
- Primary actions use `bg-blue-600` with `hover:bg-blue-700`

## Next Steps

1. Add component skeletons under `components/`
2. Wire Navbar and Footer into `app/layout.tsx`
3. Manually verify UI at `http://localhost:3000` and `http://localhost:3000/login`

---

Prepared for Kalvium PSM - Learning Unit 8.9 UI Setup & Component Planning
