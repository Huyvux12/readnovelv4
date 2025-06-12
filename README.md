# Novel Reader - Static Story Website Generator

A modern, responsive static site generator for creating beautiful story-reading websites from Markdown files.

## Features

- Clean, modern design with responsive layout
- Dark/light mode toggle
- Reading progress indicator
- Smooth scrolling and fade-in animations
- Adjustable typography (font size, line height, font family)
- Table of contents generation
- Search functionality
- SEO-friendly with Open Graph tags
- Mobile-first approach

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create your stories:
   - Place your Markdown files in the `src/stories` directory
   - Each story should have a frontmatter with:
     ```yaml
     ---
     title: Story Title
     description: Story description
     coverImage: URL to cover image
     date: 2024-03-20
     ---
     ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
novel-reader/
├── src/
│   ├── _includes/        # Layout templates
│   ├── _layouts/         # Base layouts
│   ├── stories/          # Your story Markdown files
│   ├── css/             # Stylesheets
│   └── js/              # JavaScript files
├── _site/               # Generated static site
├── .eleventy.js         # Eleventy configuration
└── package.json         # Project dependencies
```

## Customization

### Themes
The site uses CSS variables for theming. You can customize colors, typography, and spacing in `src/css/main.css`.

### Reading Effects
Reading effects are implemented using:
- CSS `scroll-behavior: smooth` for smooth scrolling
- IntersectionObserver for fade-in animations
- AOS library for additional animations
- Custom reading progress bar

### Typography Controls
Users can adjust:
- Font size (0.8rem to 1.4rem)
- Line height (1.2 to 2.0)
- Font family (sans-serif or serif)

## Contributing

Feel free to submit issues and enhancement requests! 