/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Core Global Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Ensure Footer B2B Translation Keys (Standard SIDI pattern)
  if (window.dictionary) {
    if (window.dictionary.pt) {
      Object.assign(window.dictionary.pt, {
        footer_cta_badge: "Capacidade Fabril Europeia",
        footer_cta_title: "Pronto para elevar os padrões da sua coleção têxtil?",
        footer_cta_btn: "Iniciar Diálogo Técnico",
        footer_bio: "Desenvolvimento e engenharia de têxteis-lar e felpos de alto rendimento. Combinamos coleções de marca própria com produção modular flexível para mercados internacionais.",
        footer_col_nav: "Estrutura",
        footer_col_spec: "Especialidade",
        footer_col_mill: "Instalações & Logística",
        nav_about: "Sobre nós",
        nav_services: "Serviços",
        nav_catalog: "Produtos",
        nav_sustainability: "Sustentabilidade",
        nav_blog: "Blog",
        nav_contact: "Contactos",
        footer_legal_terms: "Termos B2B",
        footer_legal_privacy: "Privacidade",
        footer_legal_complaints: "Livro de Reclamações"
      });
    }
    if (window.dictionary.en) {
      Object.assign(window.dictionary.en, {
        footer_cta_badge: "European Manufacturing Capacity",
        footer_cta_title: "Ready to engineer your upcoming home textile collection?",
        footer_cta_btn: "Initiate Technical Sourcing",
        footer_bio: "Engineering and manufacturing high-performance home and bath linens. Uniting in-house brand collections with flexible modular manufacturing for global export.",
        footer_col_nav: "Navigation",
        footer_col_spec: "Specialization",
        footer_col_mill: "Mill Facilities & Logistics",
        nav_about: "About Us",
        nav_services: "Services",
        nav_catalog: "Products",
        nav_sustainability: "Sustainability",
        nav_blog: "Blog",
        nav_contact: "Contact",
        footer_legal_terms: "B2B Terms",
        footer_legal_privacy: "Privacy Policy",
        footer_legal_complaints: "Complaints Book"
      });
    }
  }

  // 1. Initialize Internationalization
  const initLang = (typeof window.getCurrentLanguage === 'function') 
    ? window.getCurrentLanguage() 
    : (localStorage.getItem('dsc_lang') || 'pt');

  if (typeof window.applyLanguage === 'function') {
    window.applyLanguage(initLang);
  } else if (typeof window.setLanguage === 'function') {
    window.setLanguage(initLang);
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn');

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('menu-closed');
    mobileMenu.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('menu-open');
    mobileMenu.classList.add('menu-closed');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileMenu.classList.contains('menu-open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMobileMenu();
    });
  }

  // Close mobile menu on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('menu-open')) {
      closeMobileMenu();
    }
  });

  // 3. Highlight Active Navigation Links
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a, #mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 4. Header Shadow & Reading Scroll Progress Bar
  const header = document.querySelector('header');
  
  // Inject Scroll Progress Bar if not present
  let progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress-bar';
    progressBar.className = 'fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-dsc-navy via-dsc-navy-light to-dsc-gold z-[100] transition-all duration-75 pointer-events-none';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);
  }

  // Inject Back to Top Button if not present
  let backToTop = document.getElementById('back-to-top');
  if (!backToTop) {
    backToTop = document.createElement('button');
    backToTop.id = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Voltar ao topo');
    backToTop.className = 'fixed bottom-6 right-6 z-40 p-3 bg-dsc-navy text-white border border-dsc-navy hover:border-dsc-gold hover:bg-dsc-navy-deep shadow-2xl opacity-0 pointer-events-none transition-all duration-300 active:scale-95 group rounded-none';
    backToTop.innerHTML = `
      <svg class="w-4 h-4 text-dsc-gold transition-transform duration-200 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    `;
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Header shadow
    if (header) {
      if (scrollY > 20) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    }

    // Scroll progress bar
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    // Back to top visibility
    if (backToTop) {
      if (scrollY > 350) {
        backToTop.classList.remove('opacity-0', 'pointer-events-none');
        backToTop.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTop.classList.remove('opacity-100', 'pointer-events-auto');
        backToTop.classList.add('opacity-0', 'pointer-events-none');
      }
    }
  }, { passive: true });

  // 5. Lightweight Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // 6. Interactive GSM Spec Calculator Engine
  initGsmCalculator();

  // 7. Click-to-copy helper for contact channels
  document.querySelectorAll('.copy-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const copyVal = trigger.getAttribute('data-copy') || trigger.innerText.trim();
      if (!copyVal) return;

      navigator.clipboard.writeText(copyVal).then(() => {
        const lang = (typeof window.getCurrentLanguage === 'function') ? window.getCurrentLanguage() : 'pt';
        const msg = (lang === 'en')
          ? `Copied "${copyVal}" to clipboard!`
          : `Copiado "${copyVal}" para a área de transferência!`;
        window.showDscToast(msg, 3500);
      }).catch(() => {});
    });
  });
});

/**
 * Interactive GSM Spec Calculator Engine
 */
function initGsmCalculator() {
  const slider = document.getElementById('gsm-slider-input');
  if (!slider) return;

  const valEl = document.getElementById('gsm-val-display');
  const catEl = document.getElementById('gsm-cat-display');
  const touchEl = document.getElementById('gsm-touch-display');
  const dryingEl = document.getElementById('gsm-drying-display');
  const useEl = document.getElementById('gsm-use-display');
  const ctaEl = document.getElementById('gsm-cta-link');

  const gsmTiers = [
    {
      max: 450,
      pt: {
        cat: "Estruturas Waffle & Felpo Leve",
        touch: "Fresco, texturado, alveolar tridimensional",
        drying: "Ultra-rápida (20-30 min ao ar livre)",
        use: "Spas térmicos, resorts de praia e linhas de viagem compactas."
      },
      en: {
        cat: "Waffle Structures & Lightweight Terry",
        touch: "Crisp, textured, three-dimensional honeycomb",
        drying: "Ultra-rapid (20-30 min line dry)",
        use: "Thermal spas, wellness resorts, and compact travel collections."
      }
    },
    {
      max: 600,
      pt: {
        cat: "Toalhas Turco Penteado Premium (Equilíbrio Nobre)",
        touch: "Aveludado, denso, laçada homogénea equilibrada",
        drying: "Rápida (< 3 segundos absorção imediata)",
        use: "Retalho de luxo, boutiques exclusivas e uso residencial nobre."
      },
      en: {
        cat: "Premium Combed Cotton Terry (Classic Balance)",
        touch: "Velvety, plush, balanced uniform loop ground",
        drying: "Rapid (< 3 seconds instant moisture wicking)",
        use: "Prestige retail boutiques and high-end residential bath lines."
      }
    },
    {
      max: 750,
      pt: {
        cat: "Linha Hotelaria Pesada (Heavy Contract)",
        touch: "Encorpado, robusto, fio duplo retorcido 2-ply",
        drying: "Absorção profunda, alta tolerância a lavagem a 90ºC",
        use: "Hotelaria 5 estrelas, cadeias internacionais e lavandaria industrial."
      },
      en: {
        cat: "Heavy Commercial Hospitality (Heavy Contract)",
        touch: "Substantial, robust, two-ply 2-ply ring-spun yarn",
        drying: "Deep absorption, engineered for continuous 90ºC boiling wash",
        use: "5-star luxury hotels, international resorts, and industrial turnarounds."
      }
    },
    {
      max: 1000,
      pt: {
        cat: "Tapetes de Piso & Felpos Spa Ultra-Densos",
        touch: "Máxima densidade, pisada firme anti-derrapante",
        drying: "Retenção hídrica superior sem passagem de humidade ao piso",
        use: "Pisos de duche de grande tráfego, saídas de hidromassagem e suítes presidenciais."
      },
      en: {
        cat: "Bath Mats & Ultra-Plush Spa Terry",
        touch: "Maximum density, heavy framed ground, anti-slip step",
        drying: "Superior water barrier preventing floor moisture seepage",
        use: "High-traffic shower floors, jacuzzi exits, and presidential suites."
      }
    }
  ];

  function updateCalculator() {
    const gsm = parseInt(slider.value, 10);
    const lang = (typeof window.getCurrentLanguage === 'function') ? window.getCurrentLanguage() : 'pt';
    const tier = gsmTiers.find(t => gsm <= t.max) || gsmTiers[gsmTiers.length - 1];
    const data = tier[lang] || tier.pt;

    if (valEl) valEl.innerText = `${gsm} g/m²`;
    if (catEl) catEl.innerText = data.cat;
    if (touchEl) touchEl.innerText = data.touch;
    if (dryingEl) dryingEl.innerText = data.drying;
    if (useEl) useEl.innerText = data.use;

    if (ctaEl) {
      ctaEl.href = `contactos.html?scope=integral&gsm=${gsm}`;
    }
  }

  slider.addEventListener('input', updateCalculator);
  window.addEventListener('languageChanged', updateCalculator);
  updateCalculator();
}

/**
 * Global Toast Notification Helper
 * @param {string} message - Message to display
 * @param {number} duration - Milliseconds before hiding
 */
window.showDscToast = function(message, duration = 4000) {
  let toast = document.getElementById('dsc-toast-container');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'dsc-toast-container';
    toast.className = 'dsc-toast';
    document.body.appendChild(toast);
  }
  
  toast.innerText = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
};
