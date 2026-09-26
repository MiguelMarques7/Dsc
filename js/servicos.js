/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Services Production Matrix Interaction Module
 */

document.addEventListener('DOMContentLoaded', () => {
  const btnModeA = document.getElementById('btn-mode-a');
  const btnModeB = document.getElementById('btn-mode-b');
  const boxes = document.querySelectorAll('.matrix-box');
  const quoteBtn = document.getElementById('dynamic-quote-btn');
  const quoteBtnText = document.getElementById('quote-btn-text');
  const statusText = document.getElementById('mode-status-text');

  if (!btnModeA || !btnModeB || !quoteBtn) return;

  let mode = 'A';
  let selectedStages = new Set(['design', 'yarn', 'weaving', 'finishing', 'cutting']);

  function updateUI() {
    const isPt = document.documentElement.lang !== 'en';

    if (mode === 'A') {
      btnModeA.className = "w-full sm:w-auto bg-dsc-navy text-white font-sans text-xs uppercase font-medium tracking-wider px-6 py-3.5 transition-all duration-200 border border-dsc-navy active:scale-95 shadow-sm flex items-center justify-center gap-2";
      btnModeB.className = "w-full sm:w-auto bg-dsc-white border border-dsc-line text-dsc-body font-sans text-xs uppercase font-medium tracking-wider px-6 py-3.5 hover:border-dsc-navy hover:text-dsc-navy transition-all duration-200 active:scale-95 flex items-center justify-center gap-2";

      if (statusText) {
        statusText.innerHTML = isPt
          ? '<span class="text-emerald-700 font-medium">&#10003; Modo A Ativo:</span> Ciclo Integral — todas as 5 etapas integradas sob responsabilidade DSC.'
          : '<span class="text-emerald-700 font-medium">&#10003; Mode A Active:</span> Full Turnkey Cycle — all 5 manufacturing stages integrated under DSC.';
      }

      boxes.forEach(box => {
        box.classList.add('border-dsc-navy', 'bg-white');
        box.classList.remove('border-dsc-line', 'opacity-40', 'bg-dsc-canvas');
        
        const chk = box.querySelector('.stage-checkbox');
        if (chk) chk.classList.add('hidden');

        const h3 = box.querySelector('h3');
        if (h3) {
          h3.classList.remove('text-dsc-muted');
          h3.classList.add('text-dsc-navy');
        }

        const badge = box.querySelector('.matrix-badge');
        if (badge) {
          badge.classList.remove('text-dsc-muted');
          badge.classList.add('text-dsc-gold');
        }
      });

      quoteBtn.href = "contactos.html?scope=integral";
      if (quoteBtnText) {
        quoteBtnText.textContent = isPt
          ? "Solicitar Cotação para o Ciclo Integral (5 Etapas)"
          : "Request Quotation for Full Cycle (5 Stages)";
      }
    } else {
      btnModeB.className = "w-full sm:w-auto bg-dsc-navy text-white font-sans text-xs uppercase font-medium tracking-wider px-6 py-3.5 transition-all duration-200 border border-dsc-navy active:scale-95 shadow-sm flex items-center justify-center gap-2";
      btnModeA.className = "w-full sm:w-auto bg-dsc-white border border-dsc-line text-dsc-body font-sans text-xs uppercase font-medium tracking-wider px-6 py-3.5 hover:border-dsc-navy hover:text-dsc-navy transition-all duration-200 active:scale-95 flex items-center justify-center gap-2";

      const count = selectedStages.size;
      if (statusText) {
        statusText.innerHTML = isPt
          ? `<span class="text-dsc-gold font-semibold">&#9679; Modo B Modular:</span> ${count} de 5 etapas selecionadas (clique nos cartões para ativar/desativar).`
          : `<span class="text-dsc-gold font-semibold">&#9679; Mode B Modular:</span> ${count} of 5 stages selected (click cards to toggle).`;
      }

      boxes.forEach(box => {
        const stage = box.getAttribute('data-stage');
        const badge = box.querySelector('.matrix-badge');
        const h3 = box.querySelector('h3');
        const chk = box.querySelector('.stage-checkbox');

        if (selectedStages.has(stage)) {
          box.classList.add('border-dsc-navy', 'bg-white');
          box.classList.remove('border-dsc-line', 'opacity-40', 'bg-dsc-canvas');
          if (chk) chk.classList.remove('hidden');
          if (h3) {
            h3.classList.remove('text-dsc-muted');
            h3.classList.add('text-dsc-navy');
          }
          if (badge) {
            badge.classList.remove('text-dsc-muted');
            badge.classList.add('text-dsc-gold');
          }
        } else {
          box.classList.remove('border-dsc-navy', 'bg-white');
          box.classList.add('border-dsc-line', 'opacity-40', 'bg-dsc-canvas');
          if (chk) chk.classList.add('hidden');
          if (h3) {
            h3.classList.add('text-dsc-muted');
            h3.classList.remove('text-dsc-navy');
          }
          if (badge) {
            badge.classList.remove('text-dsc-gold');
            badge.classList.add('text-dsc-muted');
          }
        }
      });

      const stagesParam = selectedStages.size > 0 ? Array.from(selectedStages).join(',') : 'none';
      quoteBtn.href = "contactos.html?scope=" + stagesParam;

      if (quoteBtnText) {
        if (count === 0) {
          quoteBtnText.textContent = isPt
            ? "Selecione pelo menos 1 etapa"
            : "Select at least 1 stage";
        } else {
          quoteBtnText.textContent = isPt
            ? `Solicitar Cotação Modular (${count} de 5 Etapas)`
            : `Request Modular Quotation (${count} of 5 Stages)`;
        }
      }
    }
  }

  // Initialize UI
  updateUI();

  // Listen to language change to update dynamic text
  window.addEventListener('languageChanged', updateUI);

  btnModeA.addEventListener('click', () => {
    mode = 'A';
    selectedStages = new Set(['design', 'yarn', 'weaving', 'finishing', 'cutting']);
    updateUI();
  });

  btnModeB.addEventListener('click', () => {
    mode = 'B';
    if (selectedStages.size === 5) {
      selectedStages = new Set(['weaving', 'finishing']);
    }
    updateUI();
  });

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      if (mode === 'A') {
        // Auto switch to modular mode when user clicks a specific box
        mode = 'B';
        const clickedStage = box.getAttribute('data-stage');
        selectedStages = new Set([clickedStage]);
      } else {
        const stage = box.getAttribute('data-stage');
        if (selectedStages.has(stage)) {
          selectedStages.delete(stage);
        } else {
          selectedStages.add(stage);
        }
      }
      updateUI();
    });
  });
});
