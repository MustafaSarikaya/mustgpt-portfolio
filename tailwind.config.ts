import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: '#FFF4F4',
  				dark: '#FFE5E5'
  			},
  			secondary: {
  				DEFAULT: '#4A4E57',
  				light: '#F5F5F5'
  			},
  			accent: {
  				DEFAULT: '#1EAEDB',
  				light: '#40BFED'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		keyframes: {
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'slide-in': {
  				'0%': {
  					transform: 'translateX(-5%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
        'typing': {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '100%'
          }
        },
        'content-fade': {
          '0%': {
            opacity: '0'
          },
          '50%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'content-typing': {
          '0%': {
            opacity: '0',
            transform: 'translateY(1rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
  		},
  		animation: {
  			'fade-in': 'fade-in 0.5s ease-out',
  			'slide-in': 'slide-in 0.5s ease-out',
        'typing': 'typing 1s ease-out forwards',
        'content-fade-in': 'content-fade 1.5s ease-out forwards',
        'content-type': 'content-typing 1s ease-out forwards'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
