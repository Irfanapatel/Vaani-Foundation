/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing blue colors
        blue: {
          600: '#2563eb',
          700: '#1d4ed8',
        },
        // Field-specific colors
        field: {
          education: '#E3F2FD',  // Light blue for education
          health: '#0077B6',    // Very light blue for health
          environment: '#E6FFFA', // Light teal for environment
          herpower: '#FDF2F8',  // Light pink for her power
          livelihood: '#FFFBEB'  // Light amber for livelihood
        },
      },
    },
  },
  plugins: [],
}