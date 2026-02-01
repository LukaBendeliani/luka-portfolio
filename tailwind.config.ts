import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00D4FF',
          dark: '#0066FF',
        },
        background: {
          primary: '#0A0A0A',
          secondary: '#1A1A1A',
          card: 'rgba(26, 26, 26, 0.6)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B0B0',
        },
        accent: {
          blue: '#00D4FF',
          purple: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'hero-name': ['3rem', { lineHeight: '1.2' }],      // 48px desktop
        'hero-title': ['1.5rem', { lineHeight: '1.4' }],   // 24px desktop
        'section-title': ['2rem', { lineHeight: '1.3' }],  // 32px desktop
        'body': ['1rem', { lineHeight: '1.6' }],           // 16px base
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',   // Tablet breakpoint
        'lg': '1024px',  // Desktop breakpoint
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        'section': '6rem',
        'container': '1.5rem',
        'card': '1.5rem',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#0A0A0A",
            foreground: "#FFFFFF",
            primary: {
              DEFAULT: "#00D4FF",
              foreground: "#000000",
            },
            focus: "#00D4FF",
          },
        },
      },
    }),
  ],
};

export default config;
