import colors from 'tailwindcss/colors';
import { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
  theme: {
    extend: {
      // https://vercel.com/design/color
      colors: {
        gray: colors.zinc,
        'gray-1000': 'rgb(17,17,19)',
        'gray-1100': 'rgb(10,10,11)',
        vercel: {
          pink: '#FF0080',
          blue: '#0070F3',
          cyan: '#50E3C2',
          orange: '#F5A623',
          violet: '#7928CA',
        },
      },
      backgroundImage: ({ theme }) => ({
        'vc-border-gradient': `radial-gradient(at left top, ${theme(
          'colors.gray.500',
        )}, 50px, ${theme('colors.gray.800')} 50%)`,
      }),
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            ['border-color']: theme('colors.vercel.pink'),
          },
          '40%': {
            ['border-color']: theme('colors.vercel.pink'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
        },
        loading: {
          '0%': {
            opacity: '.2',
          },
          '20%': {
            opacity: '1',
            transform: 'translateX(1px)',
          },
          to: {
            opacity: '.2',
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: '1',
          },
          '40%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        fadeToOpacity: {
          '0%': {
            opacity: '0',
          },
          '40%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeToOpacityFromLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '40%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeToOpacityFromRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%)',
          },
          '40%': {
            opacity: '0',
            transform: 'translateX(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeToTransparentTowardsLeft: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '40%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
        },
        fadeToTransparentTowardsRight: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '40%': {
            opacity: '1',
            transform: 'translateX(0)',
          },

          '100%': {
            opacity: '0',
            transform: 'translateX(100%)',
          },
        },
        flicker: {
          '0%': {
            opacity: '0.2',
          },
          '5%': {
            opacity: '1',
          },
          '10%': {
            opacity: '0.2',
          },
          '15%': {
            opacity: '1',
          },
          '20%': {
            opacity: '0.2',
          },
          '25%': {
            opacity: '1',
          },
          '30%': {
            opacity: '0.2',
          },
          '35%': {
            opacity: '1',
          },
          '40%': {
            opacity: '0.2',
          },
          '45%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.2',
          },
          '55%': {
            opacity: '1',
          },
          '60%': {
            opacity: '0.2',
          },
          '65%': {
            opacity: '1',
          },
          '70%': {
            opacity: '0.2',
          },
          '75%': {
            opacity: '1',
          },
          '80%': {
            opacity: '0.2',
          },
          '85%': {
            opacity: '1',
          },
          '90%': {
            opacity: '0.2',
          },
          '95%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0.2',
          },
        },
        blurOut: {
          '0%': {
            filter: 'blur(0)',
            opacity: '1',
          },
          '100%': {
            filter: 'blur(10px)',
            opacity: '0',
          },
        },
        sonar: {
          '0%': {
            transform: 'scale(1)',
            opacity: '0.9',
          },
          '100%': {
            transform: 'scale(1.1)',
            opacity: '0',
          },
        },
      }),
      animation: {
        rerender: 'rerender 1s ease-in-out infinite',
        highlight: 'highlight 1s ease-in-out infinite',
        loading: 'loading 1s ease-in-out infinite',
        shimmer: 'shimmer 1s ease-in-out infinite',

        translateXReset: 'translateXReset 1s ease-in-out',
        fadeToTransparent: 'fadeToTransparent 1s ease-in-out',
        fadeToOpacity: 'fadeToOpacity 1s ease-in-out',
        fadeToOpacityFromLeft: 'fadeToOpacityFromLeft 1s ease-in-out',
        fadeToOpacityFromRight: 'fadeToOpacityFromRight 1s ease-in-out',
        fadeToTransparentTowardsLeft:
          'fadeToTransparentTowardsLeft 2s ease-in-out',
        fadeToTransparentTowardsRight:
          'fadeToTransparentTowardsRight 2s ease-in-out',

        pulseSlow: 'pulse 6s ease-in-out infinite',
        pulseFast: 'pulse 0.25s ease-in-out infinite',
        pulseSuperFast: 'pulse 0.125s ease-in-out infinite',
        bounceSuperFast: 'bounce 0.125s ease-in-out infinite',

        flicker: 'flicker 0.5s ease-in-out',
        flickerInfinite: 'flicker 0.5s ease-in-out infinite',
        fastFlicker: 'flicker 0.2s ease-in-out',
        superFastFlicker: 'flicker 0.1s ease-in-out',

        blurOut: 'blurOut 1s ease-in-out',

        sonar: 'sonar 0.2s ease-in-out infinite',
        sonarFast: 'sonar 0.36s ease-in-out infinite',
        sonarSlow: 'sonar 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
} satisfies Config;
