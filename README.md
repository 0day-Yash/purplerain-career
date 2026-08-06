# 💼 PurpleRain Tech – Careers Page

> Modern, responsive careers website built with React, TypeScript, and Tailwind CSS

[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)
- [Form Handling](#-form-handling)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)

---

## 🌟 Overview

PurpleRain Tech Careers Page is a modern, responsive website showcasing open positions and company culture. Built with React and TypeScript, it provides a seamless experience for potential candidates to learn about the company and apply for positions.

**Live Site:** [https://purplerain-careers.netlify.app](https://purplerain-careers.netlify.app)

---

## ✨ Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **Form Handling**: Netlify Forms integration for resume submissions
- **Type-Safe**: Full TypeScript coverage for reliability
- **Fast Performance**: Vite for lightning-fast development and builds
- **Accessible**: WCAG-compliant components from Radix UI
- **Dark Mode**: Theme support with next-themes
- **Animations**: Smooth transitions with tailwindcss-animate

---

## 🛠️ Technology Stack

### Frontend
- **[React 18.3](https://reactjs.org/)** - UI library
- **[TypeScript 5.5](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 5.4](https://vitejs.dev/)** - Build tool and dev server
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation
- **[React Router](https://reactrouter.com/)** - Client-side routing

### Dev Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing

### Deployment
- **[Netlify](https://www.netlify.com/)** - Hosting and form handling
- **[Vercel](https://vercel.com/)** - Alternative hosting option

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0 (or **yarn**/**pnpm**)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/purplerain-careers.git
   cd purplerain-careers
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

---

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make changes** and test locally with `npm run dev`

3. **Run linter** to check code quality
   ```bash
   npm run lint
   ```

4. **Build to verify** no build errors
   ```bash
   npm run build
   ```

5. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/my-feature
   ```

---

## 📦 Deployment

### Option 1: Netlify (Recommended)

#### Method A: Drag and Drop
1. **Build your project**
   ```bash
   npm run build
   ```

2. **Upload to Netlify**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the `dist/` folder

#### Method B: Git Integration
1. **Push to GitHub/GitLab**
   ```bash
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`

3. **Deploy**
   - Netlify automatically deploys on push to main

#### Configure Custom Domain
- Go to **Site settings** → **Domain management**
- Add custom domain (e.g., `careers.purplerain.tech`)
- Update DNS records as instructed

### Option 2: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts** to configure project

---

## 📬 Form Handling

### Netlify Forms Integration

The careers page uses Netlify Forms for resume submissions.

#### Setup

1. **Add `netlify` attribute to form**
   ```html
   <form name="apply-now" netlify>
     <!-- form fields -->
   </form>
   ```

2. **Netlify auto-detects** the form on deployment

3. **Configure email notifications**
   - Go to **Site settings** → **Forms**
   - Click on your form (e.g., "Apply Now")
   - Add email notification under **Form notifications**

#### Viewing Submissions

- **Netlify Dashboard**: Site → Forms tab
- **Email**: Configured notification email
- **Export**: Download submissions as CSV

#### Form Fields

- **Name**: Applicant's full name
- **Email**: Contact email
- **Phone**: Contact number (optional)
- **Position**: Job position applying for
- **Resume**: File upload (PDF, DOC, DOCX)
- **Cover Letter**: Text area (optional)

---

## 📁 Project Structure

```
purplerain-careers/
├── public/                    # Static assets
│   ├── logo.png              # Company logo
│   ├── logo.avif             # Optimized logo
│   └── _redirects            # Netlify redirects
├── src/                       # Source code
│   ├── components/           # React components
│   │   ├── ui/              # Reusable UI components
│   │   ├── hero-section.tsx
│   │   ├── open-roles.tsx
│   │   ├── life-at-purplerain.tsx
│   │   ├── perks-benefits.tsx
│   │   ├── meet-team.tsx
│   │   ├── resume-submission.tsx
│   │   ├── site-navbar.tsx
│   │   └── footer.tsx
│   ├── data/                 # Static data
│   │   ├── jobs.ts          # Job listings
│   │   └── team.ts          # Team members
│   ├── lib/                  # Utilities
│   │   └── utils.ts         # Helper functions
│   ├── App.tsx              # Main app component
│   ├── App.css              # App styles
│   └── main.tsx             # Entry point
├── index.html                # HTML template
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── netlify.toml              # Netlify configuration
├── vercel.json               # Vercel configuration
└── README.md                 # This file
```

---

## 🎨 Customization

### Adding New Job Listings

Edit `src/data/jobs.ts`:

```typescript
export const jobs = [
  {
    id: 1,
    title: "Senior Security Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our security team...",
    requirements: [
      "5+ years experience in cybersecurity",
      "Strong knowledge of network security",
      // ...
    ],
  },
  // Add more jobs...
];
```

### Updating Team Members

Edit `src/data/team.ts`:

```typescript
export const team = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/team/john-doe.jpg",
    bio: "John has 15 years of experience...",
  },
  // Add more team members...
];
```

### Styling

- **Colors**: Edit `tailwind.config.js` to change theme colors
- **Fonts**: Update `index.html` and `tailwind.config.js`
- **Components**: Modify components in `src/components/`

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Code Style
- Use **TypeScript** for all new code
- Follow **ESLint** rules: `npm run lint`
- Use **Prettier** for formatting
- Write **descriptive commit messages**

### Pull Request Process
1. Create a feature branch from `main`
2. Make your changes with clear commits
3. Run `npm run lint` and `npm run build`
4. Submit PR with description of changes

---

## 🔒 Security

- **Form Validation**: Client-side validation with Zod
- **Spam Protection**: Netlify's built-in spam filtering
- **File Upload**: Restricted to PDF, DOC, DOCX formats
- **HTTPS**: Enforced on all deployments

---

## 📄 License

Proprietary - All rights reserved by **PurpleRain Tech**

---

## 🔗 Related Projects

- [PurpleRain Dashboard](../Purplerain-new-dashboards/README.md) - Main application dashboard
- [PurpleRain Agent](../purplerain-agent/readme.md) - Backend services and agents
- [PurpleRain Edge](../purplerain-edge/README.md) - Edge node configuration

---

## 📞 Support

For questions or issues:
- **Email**: careers@purplerain.tech
- **Website**: [https://purplerain.tech](https://purplerain.tech)
- **Dashboard**: [https://dash.purplerain.tech](https://dash.purplerain.tech)

---

**Built with ❤️ by the PurpleRain Team**
