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
          canvas: '#F8FAFC',
          surface: '#F1F5F9',
          line: '#E2E8F0',
          muted: '#64748B',
          body: '#334155',
          navy: {
            subtle: '#1E293B',
            DEFAULT: '#0F172A',
            deep: '#0A0F1D',
            accent: '#1D4ED8',
          }
        }
      }
    }
  }
};
