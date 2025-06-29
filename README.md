# Portfolio Website

A modern, responsive portfolio website built with Next.js and React.js, featuring dark/light theme toggle, smooth animations, and a contact form.

## Features

- 🌟 Modern and responsive design
- 🌙 Dark/Light theme toggle
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-first responsive layout
- 🚀 Optimized for performance and SEO
- 📧 Contact form with validation
- 🎨 Project showcase with filtering
- 🔍 SEO optimized with structured data

## Tech Stack

- **Framework:** Next.js 15.3.4
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form
- **Theme Management:** next-themes
- **Icons:** Heroicons (via SVG)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/Hero.js** - Update name, title, and description
2. **src/components/About.js** - Update skills, experience, and bio
3. **src/components/Projects.js** - Add your actual projects
4. **src/components/Contact.js** - Update contact information
5. **src/components/Footer.js** - Update social media links
6. **src/app/layout.js** - Update metadata and SEO information
7. **src/components/StructuredData.js** - Update structured data

### Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors: Update the color scheme in component files
- Typography: Modify font settings in `src/app/layout.js`
- Spacing: Adjust padding and margins throughout components

### Adding Projects

To add your projects, update the `projects` array in `src/components/Projects.js`:

```javascript
{
  id: 1,
  title: "Your Project Title",
  description: "Project description...",
  technologies: ["React", "Node.js", "MongoDB"],
  category: "fullstack", // or "frontend", "backend"
  demoUrl: "https://your-demo-url.com",
  githubUrl: "https://github.com/username/repo",
  featured: true // Set to true for featured projects
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the generated files to Netlify

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `.next` directory
3. Upload the contents to your hosting provider

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## SEO Features

- Meta tags and Open Graph data
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt
- Performance optimizations

## Performance Optimizations

- Image optimization with Next.js Image component
- CSS optimization
- Compression enabled
- Security headers
- Lazy loading for animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub](https://github.com/yourusername)
