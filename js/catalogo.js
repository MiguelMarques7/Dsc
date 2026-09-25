/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Catalog Filtering & Interaction Module
 */

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('#filter-controls button');
  const items = document.querySelectorAll('#catalog-grid > div');
  const countEl = document.getElementById('item-count');

  if (!buttons.length || !items.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Update filter buttons styles
      buttons.forEach(b => {
        b.classList.remove('bg-dsc-navy', 'text-white', 'border-dsc-navy');
        b.classList.add('bg-dsc-white', 'text-dsc-body', 'border-dsc-line');
      });
      btn.classList.remove('bg-dsc-white', 'text-dsc-body', 'border-dsc-line');
      btn.classList.add('bg-dsc-navy', 'text-white', 'border-dsc-navy');

      // 2. Filter catalog items
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

      // 3. Update counter element
      if (countEl) {
        countEl.innerText = visibleCount;
      }
    });
  });

  // 4. Check URL query parameters (e.g. ?cat=contract from footer)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam) {
    const targetBtn = Array.from(buttons).find(b => b.getAttribute('data-filter') === catParam);
    if (targetBtn) {
      targetBtn.click();
    }
  }
});

// Technical Specification Modal Handlers
window.openSpecModal = function(ref, title, gsm, comp, yarn, loop, absorb, wash, cert) {
  const modal = document.getElementById('spec-modal');
  if (!modal) return;

  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-ref').innerText = ref;
  document.getElementById('modal-gsm').innerText = gsm;
  document.getElementById('modal-comp').innerText = comp;
  document.getElementById('modal-yarn').innerText = yarn;
  document.getElementById('modal-loop').innerText = loop;
  document.getElementById('modal-absorb').innerText = absorb;
  document.getElementById('modal-wash').innerText = wash;
  document.getElementById('modal-cert').innerText = cert;

  const sampleLink = document.getElementById('modal-sample-link');
  if (sampleLink) {
    sampleLink.href = `contactos.html?ref=${encodeURIComponent(ref)}&name=${encodeURIComponent(title)}`;
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.closeSpecModal = function() {
  const modal = document.getElementById('spec-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
};

