/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Centralized Tailwind CSS Configuration
 */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        dsc: {
          white: '#FFFFFF',
          canvas: '#F8FAFD',
          surface: '#EEF3F9',
          line: '#DCE5F2',
          'line-dark': '#CBD5E1',
          muted: '#62748E',
          body: '#2D3E56',
          navy: {
            deep: '#070D1E',
            DEFAULT: '#0B1E48',
            light: '#142C69',
            slate: '#1E3A70',
            subtle: '#1E2E4A',
            accent: '#2563EB',
          },
          gold: {
            subtle: '#FEF3C7',
            light: '#FBBF24',
            DEFAULT: '#F59E0B',
            dark: '#D97706',
          }
        }
      }
    }
  }
};
