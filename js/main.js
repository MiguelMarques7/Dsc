/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Script Principal da Aplicação Global (100% Português)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile (Drawer)
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

  // Fechar menu mobile ao pressionar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('menu-open')) {
      closeMobileMenu();
    }
  });

  // 2. Destacar Link de Navegação Ativo
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a, #mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 3. Sombra do Cabeçalho & Barra de Progresso de Leitura
  const header = document.querySelector('header');
  
  let progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress-bar';
    progressBar.className = 'fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-dsc-navy via-dsc-navy-light to-dsc-gold z-[100] transition-all duration-75 pointer-events-none';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);
  }

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
    
    if (header) {
      if (scrollY > 20) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    }

    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

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

  // 4. Observador de Animações de Scroll
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

  // 5. Inicializar Simulador de Gramagem GSM
  initGsmCalculator();

  // 6. Botão de Copiar Dados de Contacto
  document.querySelectorAll('.copy-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const copyVal = trigger.getAttribute('data-copy') || trigger.innerText.trim();
      if (!copyVal) return;

      navigator.clipboard.writeText(copyVal).then(() => {
        window.showDscToast(`Copiado "${copyVal}" para a área de transferência!`, 3500);
      }).catch(() => {});
    });
  });
});

/**
 * Motor do Simulador Técnico de Gramagem (GSM)
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
      cat: "Estruturas Waffle & Felpo Leve",
      touch: "Fresco, texturado, alveolar tridimensional",
      drying: "Ultra-rápida (20-30 min ao ar livre)",
      use: "Spas térmicos, resorts de praia e linhas de viagem compactas."
    },
    {
      max: 600,
      cat: "Toalhas Turco Penteado Premium (Equilíbrio Clássico)",
      touch: "Aveludado, denso, laçada homogénea equilibrada",
      drying: "Rápida (< 3 segundos absorção imediata)",
      use: "Retalho de luxo, boutiques exclusivas e uso residencial nobre."
    },
    {
      max: 750,
      cat: "Linha Hotelaria Pesada (Heavy Contract)",
      touch: "Encorpado, robusto, fio duplo retorcido 24/2",
      drying: "Absorção profunda, alta tolerância a lavagens contínuas a 90ºC",
      use: "Hotelaria 5 estrelas, cadeias internacionais e lavandarias industriais."
    },
    {
      max: 1000,
      cat: "Tapetes de Piso & Felpos Spa Ultra-Densos",
      touch: "Máxima densidade, pisada firme anti-derrapante",
      drying: "Retenção hídrica superior sem passagem de humidade ao piso",
      use: "Pisos de duche de grande tráfego, saídas de hidromassagem e suítes presidenciais."
    }
  ];

  function updateCalculator() {
    const gsm = parseInt(slider.value, 10);
    const tier = gsmTiers.find(t => gsm <= t.max) || gsmTiers[gsmTiers.length - 1];

    if (valEl) valEl.innerText = `${gsm} g/m²`;
    if (catEl) catEl.innerText = tier.cat;
    if (touchEl) touchEl.innerText = tier.touch;
    if (dryingEl) dryingEl.innerText = tier.drying;
    if (useEl) useEl.innerText = tier.use;

    if (ctaEl) {
      ctaEl.href = `contactos.html?scope=integral&gsm=${gsm}`;
    }
  }

  slider.addEventListener('input', updateCalculator);
  updateCalculator();
}

/**
 * Notificações Flutuantes (Toast)
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
