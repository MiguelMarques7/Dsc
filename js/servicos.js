/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Services Production Matrix Interaction Module
 */

document.addEventListener('DOMContentLoaded', () => {
  const btnModeA = document.getElementById('btn-mode-a');
  const btnModeB = document.getElementById('btn-mode-b');
  const boxes = document.querySelectorAll('.matrix-box');
  const quoteBtn = document.getElementById('dynamic-quote-btn');

  if (!btnModeA || !btnModeB || !quoteBtn) return;

  let mode = 'A';
  let selectedStages = new Set(['design', 'yarn', 'weaving', 'finishing', 'cutting']);

  function updateUI() {
    if (mode === 'A') {
      btnModeA.className = "w-full md:w-auto bg-dsc-navy text-white font-mono text-xs uppercase tracking-widest px-6 py-3.5 transition-all duration-200 rounded-none border border-dsc-navy";
      btnModeB.className = "w-full md:w-auto bg-dsc-white border border-dsc-line text-dsc-body font-mono text-xs uppercase tracking-widest px-6 py-3.5 hover:border-dsc-navy hover:text-dsc-navy transition-all duration-200 rounded-none";

      boxes.forEach(box => {
        box.classList.add('border-dsc-navy');
        box.classList.remove('border-transparent', 'opacity-50', 'bg-dsc-surface', 'opacity-40');
        
        const h3 = box.querySelector('h3');
        if (h3) {
          h3.classList.remove('text-dsc-muted');
          h3.classList.add('text-dsc-navy');
        }

        const badge = box.querySelector('.matrix-badge');
        if (badge) {
          badge.classList.remove('text-dsc-muted');
          badge.classList.add('text-dsc-navy-accent');
        }
      });
      quoteBtn.href = "contactos.html?scope=integral";
    } else {
      btnModeB.className = "w-full md:w-auto bg-dsc-navy text-white font-mono text-xs uppercase tracking-widest px-6 py-3.5 transition-all duration-200 rounded-none border border-dsc-navy";
      btnModeA.className = "w-full md:w-auto bg-dsc-white border border-dsc-line text-dsc-body font-mono text-xs uppercase tracking-widest px-6 py-3.5 hover:border-dsc-navy hover:text-dsc-navy transition-all duration-200 rounded-none";

      boxes.forEach(box => {
        const stage = box.getAttribute('data-stage');
        const badge = box.querySelector('.matrix-badge');
        const h3 = box.querySelector('h3');

        if (selectedStages.has(stage)) {
          box.classList.add('border-dsc-navy');
          box.classList.remove('border-transparent', 'opacity-40', 'bg-dsc-surface');
          if (h3) {
            h3.classList.remove('text-dsc-muted');
            h3.classList.add('text-dsc-navy');
          }
          if (badge) {
            badge.classList.remove('text-dsc-muted');
            badge.classList.add('text-dsc-navy-accent');
          }
        } else {
          box.classList.remove('border-dsc-navy');
          box.classList.add('border-transparent', 'opacity-40', 'bg-dsc-surface');
          if (h3) {
            h3.classList.add('text-dsc-muted');
            h3.classList.remove('text-dsc-navy');
          }
          if (badge) {
            badge.classList.remove('text-dsc-navy-accent');
            badge.classList.add('text-dsc-muted');
          }
        }
      });
      const stagesParam = selectedStages.size > 0 ? Array.from(selectedStages).join(',') : 'none';
      quoteBtn.href = "contactos.html?scope=" + stagesParam;
    }
  }

  // Initialize UI
  updateUI();

  btnModeA.addEventListener('click', () => {
    mode = 'A';
    selectedStages = new Set(['design', 'yarn', 'weaving', 'finishing', 'cutting']);
    updateUI();
  });

  btnModeB.addEventListener('click', () => {
    mode = 'B';
    if (selectedStages.size === 5) selectedStages.clear();
    updateUI();
  });

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      if (mode === 'A') return;
      const stage = box.getAttribute('data-stage');
      if (selectedStages.has(stage)) {
        selectedStages.delete(stage);
      } else {
        selectedStages.add(stage);
      }
      updateUI();
    });
  });
});
