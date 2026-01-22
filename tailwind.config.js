/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#f7d8e2',
        lavender: '#e8e0ff',
        cream: '#fff6ec',
        rose: '#f9c6d7',
        ruby: '#e96a8d',
        gold: '#f5d070',
        mist: '#fef9f6'
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        script: ['"Dancing Script"', 'cursive']
      },
      boxShadow: {
        glow: '0 15px 80px rgba(233,106,141,0.35)'
      },
      backgroundImage: {
        sparkle:
          'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6) 0, transparent 25%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.45) 0, transparent 20%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.4) 0, transparent 30%)'
      }
    }
  },
  plugins: []
}
