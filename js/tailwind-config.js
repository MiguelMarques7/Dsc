/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Centralized Tailwind CSS Configuration — v3.0 Editorial Premium
 */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dsc: {
          white:      '#FFFFFF',
          canvas:     '#F7F5F2',   /* warm linen off-white */
          surface:    '#F0EDE8',
          line:       '#E4DDD5',   /* warm dividers */
          'line-dark':'#C9BFB5',
          muted:      '#7A6F65',   /* warm muted brown */
          body:       '#3D3530',
          navy: {
            DEFAULT: '#0F172A',
            deep:    '#060C1A',
            light:   '#1E293B',
            slate:   '#334155',
          },
          gold: {
            DEFAULT: '#B39860',   /* warm editorial antique gold */
            light:   '#C9AE7A',
            dark:    '#8C7444',
            subtle:  'rgba(179,152,96,0.08)',
          }
        }
      },
      animation: {
        'marquee': 'marquee-scroll 36s linear infinite',
      },
      keyframes: {
        'marquee-scroll': {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
    }
  }
};
