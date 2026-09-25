/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Catalog Filtering & Technical Spec Modal Module (Bilingual PT / EN)
 */

const DSC_SPECS = {
  "DSC-T550-COM": {
    ref: "DSC-T550-COM",
    gsm: "550 g/m²",
    pt: {
      title: "Toalha Turco Algodão Penteado",
      comp: "100% Algodão Penteado Long-Staple",
      yarn: "Ne 16/1 Ring Spun",
      loop: "Dupla laçada reforçada 4.5mm",
      absorb: "< 3.5 segundos (DIN 53923)",
      wash: "Lavagem a 60°C / Secagem industrial",
      cert: "OEKO-TEX Standard 100 Classe I",
      btnSample: "Solicitar Amostra Deste Artigo →",
      btnClose: "Fechar"
    },
    en: {
      title: "Combed Cotton Terry Towel",
      comp: "100% Long-Staple Combed Cotton",
      yarn: "Ne 16/1 Ring Spun",
      loop: "Reinforced double loop pile 4.5mm",
      absorb: "< 3.5 seconds (DIN 53923)",
      wash: "Commercial laundering 60°C / Tumble dry",
      cert: "OEKO-TEX Standard 100 Class I",
      btnSample: "Request Sample for This Article →",
      btnClose: "Close"
    }
  },
  "DSC-T700-HT": {
    ref: "DSC-T700-HT",
    gsm: "700 g/m²",
    pt: {
      title: "Toalha Linha Heavy Contract",
      comp: "100% Algodão Cardado Retorcido",
      yarn: "Ne 24/2 Fio Duplo",
      loop: "Laçada curta compacta anti-desfiamento",
      absorb: "< 4.0 segundos (DIN 53923)",
      wash: "Lavagem intensiva a 90°C e cloro-resistente",
      cert: "OEKO-TEX Standard 100 / ISO 9001",
      btnSample: "Solicitar Amostra Deste Artigo →",
      btnClose: "Fechar"
    },
    en: {
      title: "Heavy Contract Hospitality Towel",
      comp: "100% Plied Carded Ring-Spun Cotton",
      yarn: "Ne 24/2 Two-Ply Yarn",
      loop: "Dense anti-snag loop construction",
      absorb: "< 4.0 seconds (DIN 53923)",
      wash: "90°C intensive wash & chlorine resistant",
      cert: "OEKO-TEX Standard 100 / ISO 9001",
      btnSample: "Request Sample for This Article →",
      btnClose: "Close"
    }
  },
  "DSC-W420-ECO": {
    ref: "DSC-W420-ECO",
    gsm: "420 g/m²",
    pt: {
      title: "Toalha Ninho de Abelha (Waffle)",
      comp: "80% Algodão Orgânico GOTS / 20% Linho Europeu",
      yarn: "Ne 20/2 Urdidura e Trama",
      loop: "Estrutura Honeycomb 3D aerada",
      absorb: "< 2.0 segundos (DIN 53923)",
      wash: "Lavagem suave a 40°C / Secagem rápida ao ar",
      cert: "GOTS & OEKO-TEX Standard 100",
      btnSample: "Solicitar Amostra Deste Artigo →",
      btnClose: "Fechar"
    },
    en: {
      title: "Honeycomb Waffle Weave Towel",
      comp: "80% GOTS Organic Cotton / 20% European Flax",
      yarn: "Ne 20/2 Warp and Weft",
      loop: "Aerated 3D Honeycomb structure",
      absorb: "< 2.0 seconds (DIN 53923)",
      wash: "Gentle wash 40°C / Rapid line dry",
      cert: "GOTS & OEKO-TEX Standard 100",
      btnSample: "Request Sample for This Article →",
      btnClose: "Close"
    }
  },
  "DSC-Z600-PL": {
    ref: "DSC-Z600-PL",
    gsm: "600 g/m²",
    pt: {
      title: "Toalha Turco Zero-Twist Premium",
      comp: "100% Algodão Egípcio Nobre",
      yarn: "Zero-Twist com dissolução de PVA",
      loop: "Laçada aberta ultra volumosa",
      absorb: "< 2.5 segundos (DIN 53923)",
      wash: "Lavagem a 40°C com amaciador moderado",
      cert: "OEKO-TEX Standard 100 Classe I",
      btnSample: "Solicitar Amostra Deste Artigo →",
      btnClose: "Fechar"
    },
    en: {
      title: "Premium Zero-Twist Plush Towel",
      comp: "100% Premium Long-Staple Cotton",
      yarn: "Zero-Twist with PVA dissolution",
      loop: "Ultra-plush open aerated loop pile",
      absorb: "< 2.5 seconds (DIN 53923)",
      wash: "Delicate wash 40°C / Low tumble dry",
      cert: "OEKO-TEX Standard 100 Class I",
      btnSample: "Request Sample for This Article →",
      btnClose: "Close"
    }
  },
  "DSC-M950-HT": {
    ref: "DSC-M950-HT",
    gsm: "950 g/m²",
    pt: {
      title: "Tapete de Banho Pé de Hotel Greca",
      comp: "100% Algodão Puro 2-Ply",
      yarn: "Ne 20/2 Urdidura e Trama",
      loop: "Laçada compactada anti-deslizamento",
      absorb: "< 3.0 segundos (DIN 53923)",
      wash: "Lavável a 95°C / Apto para calandra industrial",
      cert: "OEKO-TEX Standard 100 / ISO 9001",
      btnSample: "Solicitar Amostra Deste Artigo →",
      btnClose: "Fechar"
    },
    en: {
      title: "Greek Key Framed Hotel Bath Mat",
      comp: "100% 2-Ply Plied Cotton",
      yarn: "Ne 20/2 Warp and Weft",
      loop: "Ultra-compact anti-slip looped ground",
      absorb: "< 3.0 seconds (DIN 53923)",
      wash: "Boil-washable 95°C / Calender iron ready",
      cert: "OEKO-TEX Standard 100 / ISO 9001",
      btnSample: "Request Sample for This Article →",
      btnClose: "Close"
    }
  },
  "DSC-R850-SPA": {
    ref: "DSC-R850-SPA",
    gsm: "450 g/m² (850g total)",
    pt: {
      title: "Roupão Velour Gola Xale Spa Luxury",
      comp: "100% Algodão Penteado de Fibra Nobre",
      yarn: "Dual-Face: Veludo tosquiado exterior / Turco interior",
      loop: "Gola xale com reforço de entretela macia",
      absorb: "Absorção imediata e retenção térmica",
      wash: "Lavagem industrial a 60°C",
      cert: "OEKO-TEX Standard 100 Classe I",
      btnSample: "Solicitar Amostra Deste Artigo →",
      btnClose: "Fechar"
    },
    en: {
      title: "Luxury Shawl-Collar Velour Spa Bathrobe",
      comp: "100% Long-Staple Combed Cotton",
      yarn: "Dual-Face: Sheared velour exterior / Terry interior",
      loop: "Shawl collar with reinforced soft interlining",
      absorb: "Instant absorption & thermal retention",
      wash: "Commercial laundering 60°C",
      cert: "OEKO-TEX Standard 100 Class I",
      btnSample: "Request Sample for This Article →",
      btnClose: "Close"
    }
  },
  "DSC-J500-RIB": {
    ref: "DSC-J500-RIB",
    gsm: "500 g/m²",
    pt: {
      title: "Toalha Canelada Puro Algodão & Linho",
      comp: "90% Algodão Nobre / 10% Fio de Linho Europeu",
      yarn: "Ne 16/1 Penteado + Linho Nm 26",
      loop: "Canelado estruturado anti-achatamento",
      absorb: "< 3.0 segundos (DIN 53923)",
      wash: "Lavagem a 60°C / Secagem standard",
      cert: "OEKO-TEX Standard 100 / European Flax",
      btnSample: "Solicitar Amostra Deste Artigo →",
      btnClose: "Fechar"
    },
    en: {
      title: "Linear Ribbed Cotton & Linen Towel",
      comp: "90% Combed Cotton / 10% European Linen",
      yarn: "Ne 16/1 Combed + Nm 26 Linen",
      loop: "Architectural ribbing anti-crush structure",
      absorb: "< 3.0 seconds (DIN 53923)",
      wash: "Wash at 60°C / Standard tumble dry",
      cert: "OEKO-TEX Standard 100 / European Flax",
      btnSample: "Request Sample for This Article →",
      btnClose: "Close"
    }
  },
  "DSC-P480-JAC": {
    ref: "DSC-P480-JAC",
    gsm: "480 g/m²",
    pt: {
      title: "Piquet Favo Triplo Relevo Alto",
      comp: "100% Algodão Orgânico Certificado GOTS",
      yarn: "Ne 24/2 Algodão Orgânico Penteado",
      loop: "Padrão alveolar triplo de alta profundidade",
      absorb: "< 2.2 segundos (DIN 53923)",
      wash: "Lavagem a 60°C / Não necessita engomagem",
      cert: "GOTS & OEKO-TEX Standard 100",
      btnSample: "Solicitar Amostra Deste Artigo →",
      btnClose: "Fechar"
    },
    en: {
      title: "Triple Waffle Jacquard Piqué Towel",
      comp: "100% GOTS Certified Organic Cotton",
      yarn: "Ne 24/2 Combed Organic Cotton",
      loop: "Deep triple-cell 3D alveolar weave",
      absorb: "< 2.2 seconds (DIN 53923)",
      wash: "Wash at 60°C / No ironing required",
      cert: "GOTS & OEKO-TEX Standard 100",
      btnSample: "Request Sample for This Article →",
      btnClose: "Close"
    }
  }
};

let activeSpecRef = null;

function getCatalogLang() {
  if (typeof window.getCurrentLanguage === 'function') {
    return window.getCurrentLanguage();
  }
  const saved = localStorage.getItem('dsc_lang');
  return saved === 'en' ? 'en' : 'pt';
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('#filter-controls button');
  const items = document.querySelectorAll('#catalog-grid > div');
  const countEl = document.getElementById('item-count');

  if (buttons.length && items.length) {
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => {
          b.classList.remove('bg-dsc-navy', 'text-white', 'border-dsc-navy');
          b.classList.add('bg-dsc-white', 'text-dsc-body', 'border-dsc-line');
        });
        btn.classList.remove('bg-dsc-white', 'text-dsc-body', 'border-dsc-line');
        btn.classList.add('bg-dsc-navy', 'text-white', 'border-dsc-navy');

        const filter = btn.getAttribute('data-filter');
        let visibleCount = 0;

        items.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          if (filter === 'all' || itemCategory === filter) {
            item.style.display = 'flex';
            setTimeout(() => { 
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 30);
            visibleCount++;
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(6px)';
            setTimeout(() => { 
              item.style.display = 'none'; 
            }, 250);
          }
        });

        if (countEl) {
          countEl.innerText = visibleCount;
        }
      });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    if (catParam) {
      const targetBtn = Array.from(buttons).find(b => b.getAttribute('data-filter') === catParam);
      if (targetBtn) {
        targetBtn.click();
      }
    }
  }

  // Listen for language change to update modal in real time
  window.addEventListener('languageChanged', () => {
    if (activeSpecRef) {
      window.openSpecModal(activeSpecRef);
    }
  });
});

// Technical Specification Modal Handlers
window.openSpecModal = function(ref) {
  const modal = document.getElementById('spec-modal');
  if (!modal) return;

  const item = DSC_SPECS[ref];
  if (!item) return;

  activeSpecRef = ref;
  const lang = getCatalogLang();
  const data = item[lang] || item.pt;

  const titleEl = document.getElementById('modal-title');
  const refEl = document.getElementById('modal-ref');
  const gsmEl = document.getElementById('modal-gsm');
  const compEl = document.getElementById('modal-comp');
  const yarnEl = document.getElementById('modal-yarn');
  const loopEl = document.getElementById('modal-loop');
  const absorbEl = document.getElementById('modal-absorb');
  const washEl = document.getElementById('modal-wash');
  const certEl = document.getElementById('modal-cert');
  const sampleLink = document.getElementById('modal-sample-link');
  const closeBtn = document.getElementById('modal-close-btn');

  if (titleEl) titleEl.innerText = data.title;
  if (refEl) refEl.innerText = item.ref;
  if (gsmEl) gsmEl.innerText = item.gsm;
  if (compEl) compEl.innerText = data.comp;
  if (yarnEl) yarnEl.innerText = data.yarn;
  if (loopEl) loopEl.innerText = data.loop;
  if (absorbEl) absorbEl.innerText = data.absorb;
  if (washEl) washEl.innerText = data.wash;
  if (certEl) certEl.innerText = data.cert;

  if (sampleLink) {
    sampleLink.innerText = data.btnSample;
    sampleLink.href = `contactos.html?ref=${encodeURIComponent(item.ref)}&name=${encodeURIComponent(data.title)}`;
  }
  if (closeBtn) {
    closeBtn.innerText = data.btnClose;
  }

  if (typeof window.translateElement === 'function') {
    window.translateElement(modal);
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.closeSpecModal = function() {
  const modal = document.getElementById('spec-modal');
  if (!modal) return;
  activeSpecRef = null;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
};
