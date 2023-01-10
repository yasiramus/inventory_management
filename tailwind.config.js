/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' | 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          surface: '#FFF5F0',
          border: '#F9BDA7',
          main: '#F15A24',
          hover: '#913616',
          pressed: '#301207'
        },
        secondary: {
          surface: '#E5EFFF',
          border: '#8AB8FF',
          main: '#0055D6',
          hover: '#0065FF',
          pressed: '#003585'
        },
        neutral: {
          'secondary-background': '#F9FAFB',
          'background-pressed': '#F3F4F6',
          border: '#E5E7EB',
          'disabled-icon': '#D1D5DB',
          'disabled-text': '#9CA3AF',
          placeholder: '#6B7280',
          caption: '#4B5563',
          inactive: '#374151',
          body: '#1F2937',
          'body-dark': '#111827',
          active: '#0A0A0A'
        },
        danger: {
          surface: '#FEF2F2',
          border: '#FECACA',
          main: '#EF4444',
          hover: '#B91C1C',
          pressed: '#7F1D1D'
        },
        success: {
          surface: '#F0FDF4',
          border: '#BBF7D0',
          main: '#22C55E',
          hover: '#15803D',
          pressed: '#14532D'
        },
        warning: {
          surface: '#FEFCE8',
          border: '#FEF08A',
          main: '#EAB308',
          hover: '#A16207',
          pressed: '#713F12'
        }
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1.125rem',
        '3xl': '1.375rem',
        '4xl': '1.75rem',
        full: '9999px',
        large: '12px'
      },
      spacing: {
        label: '#4px',
        swv: '#16px',
        swv2x1: '#32px'
      },
      fontFamily: {},
      fontSize: {
        '3xs': '0.5rem',
        '2xs': '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '16px',
        lg: '1.25rem',
        xl: '1.375rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem'
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding'
      }
    }
  },
  variants: {
    extend: {
      textColor: ['active'],
      textColor: ['disabled']
    },
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: []
}