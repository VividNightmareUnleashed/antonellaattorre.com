# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for Antonella Attorre, a luxury lifestyle influencer and entrepreneur. The site showcases her services through 10X Experts Agency and Haute Traveling Media Group.

## Development Workflow

### Running the Site
Since this is a static website with no build process:
- Open `index.html` directly in a web browser, or
- Use a local web server: `python -m http.server 8000` (Python 3) or `python -m SimpleHTTPServer 8000` (Python 2)
- For VS Code users: Use the Live Server extension

### No Build Process
- No package manager (npm, yarn) required
- No compilation or bundling needed
- All dependencies are loaded via CDN

## Architecture

### File Structure
- `index.html` - Main HTML file with all content
- `css/styles.css` - All styling, organized into sections (Base, Layout, Components, Responsive)
- `js/script.js` - Vanilla JavaScript for interactivity (sidebar toggle, mobile menu, smooth scrolling, parallax effects)

### Key Components
1. **Sticky Sidebar Navigation** (`#stickyColumn`) - Fixed sidebar with navigation links and company info
2. **Main Content Area** (`#mainContent`) - Scrollable content with hero section, stats, testimonials
3. **Mobile Menu** - Hamburger menu for mobile devices (breakpoint at 1024px)

### External Dependencies
- Font Awesome 5.15.0 (icons)
- Google Fonts: Playfair Display (headings)
- No JavaScript frameworks or libraries

### CSS Architecture
- Color scheme: `#BA8E38` (primary gold), `#FFF8F0` (background), `#FEFDFB` (sidebar)
- Responsive breakpoints: 1024px (tablet), 640px (mobile)
- BEM-style naming for components

### JavaScript Patterns
- All code wrapped in DOMContentLoaded event
- Feature detection for responsive behavior
- RequestAnimationFrame for parallax scrolling
- Event delegation not used; direct event listeners on elements