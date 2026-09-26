/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Módulo de Formulário de Contactos & Mapa da Unidade Fabril (100% Português)
 */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref');
  const name = params.get('name');
  const scope = params.get('scope');

  const contactSection = document.getElementById('contact-section');
  const sampleBadge = document.getElementById('sample-badge');
  const sampleRefName = document.getElementById('sample-ref-name');
  const scopeSelect = document.getElementById('form-scope-select');
  const textarea = document.getElementById('form-specs');
  const contactForm = document.getElementById('b2b-contact-form');

  // 1. Controlo do Mapa Google (Ruas vs Satélite HD)
  const gmapIframe = document.getElementById('dsc-google-map-iframe');
  const btnGmap = document.getElementById('map-btn-gmap');
  const btnSat = document.getElementById('map-btn-sat');

  function setMapActive(type) {
    if (type === 'gmap') {
      if (gmapIframe) {
        gmapIframe.src = "https://maps.google.com/maps?q=41.342554,-8.384385+(DSC+-+Domingos+Silva+%26+Cunha+Lda)&t=m&z=17&ie=UTF8&iwloc=B&output=embed";
      }
      if (btnGmap) btnGmap.className = "px-3 py-1.5 bg-dsc-navy text-white font-medium transition-all";
      if (btnSat) btnSat.className = "px-3 py-1.5 text-dsc-body hover:text-dsc-navy transition-all";
    } else if (type === 'sat') {
      if (gmapIframe) {
        gmapIframe.src = "https://maps.google.com/maps?q=41.342554,-8.384385+(DSC+-+Domingos+Silva+%26+Cunha+Lda)&t=k&z=18&ie=UTF8&iwloc=B&output=embed";
      }
      if (btnSat) btnSat.className = "px-3 py-1.5 bg-dsc-navy text-white font-medium transition-all";
      if (btnGmap) btnGmap.className = "px-3 py-1.5 text-dsc-body hover:text-dsc-navy transition-all";
    }
  }

  if (btnGmap) btnGmap.addEventListener('click', () => setMapActive('gmap'));
  if (btnSat) btnSat.addEventListener('click', () => setMapActive('sat'));

  // Preenchimento Rápido com Presets
  window.prefillSpecs = function(type) {
    if (!textarea) return;
    
    if (type === 'hotel') {
      textarea.value = "Pedido de cotação para Linha Hotelaria Contract: 2.500 toalhas de rosto (550g/m², fio retorcido 24/2 algodão penteado, cor branca) + 1.000 toalhões de banho (700g/m²).";
      if (scopeSelect) scopeSelect.value = 'opt0';
    } else if (type === 'plabel') {
      textarea.value = "Desenvolvimento de Coleção Private Label: Linha completa de banho com barra Jacquard personalizada, tinturaria em cor Pantone TCX exclusiva e etiquetas tecidas em cetim.";
      if (scopeSelect) scopeSelect.value = 'opt1';
    } else if (type === 'zerotwist') {
      textarea.value = "Envio de Amostras: Coleção de banho Zero-Twist 600g/m² de toque aveludado + Linha Waffle. Pretendemos testar toque, absorção e estabilidade dimensional.";
      if (scopeSelect) scopeSelect.value = 'opt0';
    } else if (type === 'visit') {
      textarea.value = "Agendamento de Reunião & Visita Fabril: Reunião com a equipa de engenharia e compras nas instalações da DSC em Roriz, Santo Tirso, para inspecionar teares Jacquard e arquivo de artigos.";
      if (scopeSelect) scopeSelect.value = 'opt4';
    }
    textarea.focus();
  };

  // 2. Pré-seleção de Amostra Vinda do Catálogo
  if (ref) {
    if (sampleBadge && sampleRefName) {
      sampleBadge.classList.remove('hidden');
      sampleRefName.innerText = `${ref} — ${name ? decodeURIComponent(name).replace(/\+/g, ' ') : ''}`;
    }

    if (scopeSelect) {
      const optSample = scopeSelect.querySelector('option[value="opt_sample"]');
      if (optSample) optSample.classList.remove('hidden');
      scopeSelect.value = 'opt_sample';
      scopeSelect.classList.add('bg-dsc-surface', 'text-dsc-navy', 'border-dsc-navy');
    }

    if (textarea) {
      textarea.value = `Gostaria de solicitar uma amostra física do artigo [${ref}] para avaliação técnica de toque, gramagem e acabamento.`;
    }

    if (contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }

  // 3. Pré-seleção de Âmbito Modular Vindo de Serviços
  if (scope && !ref) {
    if (textarea) {
      textarea.value = `Fases modulares selecionadas: ${scope.toUpperCase()}\nPor favor forneça mais detalhes sobre o seu projeto...`;
    }

    if (scopeSelect) {
      scopeSelect.value = 'opt2'; // Produção Modular
    }

    if (contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }

  // 4. Submissão do Formulário com Feedback Visual
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const successMessage = "Pedido técnico enviado com sucesso! O nosso departamento comercial entrará em contacto em menos de 24 horas úteis.";

      if (typeof window.showDscToast === 'function') {
        window.showDscToast(successMessage, 5000);
      } else {
        alert(successMessage);
      }

      contactForm.reset();
      if (sampleBadge) sampleBadge.classList.add('hidden');
    });
  }
});
