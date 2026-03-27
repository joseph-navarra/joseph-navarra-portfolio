# Jnvrr. Portfolio

Personal portfolio website for Joseph Navarra - Full Stack Developer at Petnet Inc.

## Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Pinia** - State management
- **Lucide Vue Next** - Icon library

## Features

- Dark fintech-themed design with glassmorphism effects
- Responsive layout for all devices
- Interactive project cards with hover animations
- Live transaction simulation demo
- OTP verification popup flow
- Transaction receipt preview
- Contact form with validation
- Smooth scroll navigation
- Custom scrollbar styling

## Project Structure

```
├── src/
│   ├── App.vue              # Main application component
│   ├── main.js              # Application entry point
│   ├── style.css            # Global styles
│   ├── components/
│   │   ├── Navbar.vue       # Navigation bar
│   │   ├── Hero.vue         # Hero section
│   │   ├── Projects.vue      # Projects grid
│   │   ├── ProjectCard.vue  # Individual project card
│   │   ├── DashboardPreview.vue # Interactive demo
│   │   ├── Skills.vue       # Skills section
│   │   ├── About.vue        # About section
│   │   ├── Contact.vue      # Contact form
│   │   ├── OtpPopup.vue     # OTP verification modal
│   │   └── ReceiptPopup.vue # Transaction receipt modal
│   ├── stores/
│   │   └── portfolio.js     # Pinia store for state management
│   └── data/
│       └── portfolioData.js  # Project data and configurations
├── public/
│   └── favicon.svg
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/JNavarraa/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The development server runs on `http://localhost:5173` by default.

### Build

```bash
npm run build
```

Output will be in the `dist` directory.

## Portfolio Sections

1. **Hero** - Introduction with name, title, and call-to-action buttons
2. **Projects** - Showcase of fintech projects (Cash-In/Out, Transaction Inquiry, Payment Gateway, E-Load, KMS Signing)
3. **Dashboard Preview** - Interactive simulation demonstrating the transaction flow
4. **Skills** - Technical skills and proficiency levels
5. **About** - Personal information and statistics
6. **Contact** - Contact form and social links

## Interactive Demo

The Dashboard Preview section allows users to:

1. Select a project
2. Enter transaction details (amount, recipient)
3. Process a simulated payment
4. Verify with OTP
5. View transaction receipt

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

- **Email:** joseph.agustin.navarra@gmail.com
- **GitHub:** [JNavarraa](https://github.com/joseph-navarra)
- **LinkedIn:** [Joseph Navarra](www.linkedin.com/in/navarrajosh)
