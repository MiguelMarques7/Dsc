/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Technical Blog & Article Reader Module
 */

const DSC_ARTICLES = [
  {
    id: "gsm-durabilidade",
    category: "ESPECIFICAÇÕES B2B",
    date: "Setembro 2026",
    readTime: "5 min de leitura",
    title: "Gramagem (GSM) vs. Durabilidade: Como especificar toalhas para o setor contract",
    subtitle: "Porque é que a toalha mais pesada nem sempre é a mais rentável para cadeias hoteleiras e lavandarias industriais.",
    snippet: "Compreender porque nem sempre a toalha mais pesada é a mais eficiente. Analisamos tempos de secagem em lavandarias industriais, perda de fibras e custos energéticos operacionais.",
    content: `
      <h4>O Mito da Gramagem Excessiva</h4>
      <p>No retalho de consumo, o consumidor associa frequentemente a gramagem elevada (GSM &mdash; gramas por metro quadrado) a um artigo de luxo supremo. Toalhas de 700g a 800g transmitem uma sensação de opulência e volume imediato. No entanto, quando transpomos esta especificação para o universo do contract hoteleiro e das lavandarias industriais, uma toalha excessivamente pesada pode transformar-se num passivo financeiro e operacional.</p>
      
      <h4>A Equação Económica do Ciclo de Lavagem</h4>
      <p>Em operações hoteleiras com rotações diárias de centenas ou milhares de quartos, o custo de aquisição da toalha representa menos de 15% do seu custo total de propriedade (TCO) ao longo do ciclo de vida. Os restantes 85% concentram-se no consumo energético de lavagem, secagem em túnel ou calandra e no custo de transporte logístico por quilo.</p>
      
      <div class="my-6 border border-dsc-line bg-slate-50 p-5 font-mono text-xs">
        <div class="font-bold text-dsc-navy uppercase mb-2">Simulação DSC: Impacto Energético em 10.000 Lavagens</div>
        <div class="space-y-1.5 text-dsc-body">
          <div class="flex justify-between border-b border-dsc-line/60 pb-1">
            <span>Toalha Standard 500 g/m²:</span>
            <span class="text-dsc-navy font-semibold">Tempo médio de secagem: 24 min | Custo base: 1.00x</span>
          </div>
          <div class="flex justify-between border-b border-dsc-line/60 pb-1">
            <span>Toalha Contract 600 g/m²:</span>
            <span class="text-dsc-navy font-semibold">Tempo médio de secagem: 29 min | Custo base: 1.21x (+21%)</span>
          </div>
          <div class="flex justify-between">
            <span>Toalha Hi-Dense 750 g/m²:</span>
            <span class="text-dsc-navy font-semibold">Tempo médio de secagem: 41 min | Custo base: 1.70x (+70%)</span>
          </div>
        </div>
      </div>

      <h4>O Ponto Ótimo: Gramagem vs. Estrutura do Fio</h4>
      <p>A engenharia têxtil desenvolvida na DSC demonstra que a resistência mecânica não advém da quantidade bruta de algodão, mas sim da seleção criteriosa do fio. Uma toalha de <strong>550 a 600 g/m² construída com fio retorcido 24/2 na urdidura e laçada de turco dupla</strong> apresenta maior resistência à tração e menor perda de fibras (linting) do que uma toalha de 700 g/m² tecida com fio cardado simples de baixa torção.</p>

      <h4>Recomendações Práticas para Especificadores B2B</h4>
      <ul class="list-disc pl-5 space-y-2 text-xs font-light text-dsc-body my-4">
        <li><strong>Hotéis Boutique & Suítes de Luxo:</strong> 550 a 600 g/m² em algodão penteado de fibra longa para um equilíbrio perfeito entre opulência tátil e tempo de secagem.</li>
        <li><strong>Hotelaria Corporate & Resorts de Alto Tráfego:</strong> 500 a 550 g/m² com laçada curta compacta e bainhas com pesponto duplo e travamento de 4 cantos.</li>
        <li><strong>Tapetes de Saída de Banho:</strong> 850 a 950 g/m² em fio retorcido 2-ply para garantir ancoragem no piso e absorção ultrarrápida sem deslizamento.</li>
      </ul>
    `
  },
  {
    id: "zero-twist-vs-retorcido",
    category: "I&D DE MATÉRIAS-PRIMAS",
    date: "Agosto 2026",
    readTime: "6 min de leitura",
    title: "Fios Zero-Twist vs. Fios Retorcidos: Qual a estrutura certa para o seu mercado?",
    subtitle: "Uma comparação técnica ao microscópio entre a laçada aberta de torção zero e o fio retorcido clássico 24/2.",
    snippet: "Uma comparação técnica ao microscópio entre a laçada aberta de torção zero e o fio retorcido clássico 24/2. Como o tipo de fiação dita o ciclo de vida do artigo de banho.",
    content: `
      <h4>A Física da Torção no Fio de Algodão</h4>
      <p>A torção é o processo mecânico fundamental que confere coesão às fibras descontínuas de algodão. Quanto mais torções por polegada (TPI) forem aplicadas, mais compacto, rígido e resistente à tração se torna o fio. No entanto, este aumento de resistência reduz o espaço intersticial entre as fibras, diminuindo a maciez inicial e a velocidade instantânea de absorção capilar.</p>

      <h4>Tecnologia Zero-Twist: O Segredo da Nuvem Têxtil</h4>
      <p>O fio Zero-Twist representa um dos maiores triunfos da fiação moderna. As fibras nobres de algodão de fibra extralonga (ELS) são envolvidas por um filamento auxiliar de álcool polivinílico solúvel em água (PVA). Durante a tecelagem, o fio possui a rigidez necessária para suportar a tensão dos teares de alta velocidade.</p>
      <p>Na etapa de enobrecimento e lavagem industrial a quente na unidade DSC, o filamento de PVA dissolve-se por completo, libertando as fibras de algodão no interior da laçada. O resultado é uma estrutura alveolar aberta que retém micro-bolsas de ar, proporcionando:</p>
      <ul class="list-disc pl-5 space-y-1.5 text-xs text-dsc-body my-3">
        <li>Absorção de água por capilaridade quase instantânea (&lt; 2 segundos).</li>
        <li>Toque extremamente aveludado e macio, mesmo sem recurso a amaciadores químicos intensivos.</li>
        <li>Volume visual inflado com peso físico moderado.</li>
      </ul>

      <h4>Fio Retorcido 2-Cabos (2-Ply / 24/2): O Campeão da Resistência</h4>
      <p>Por oposição, o fio retorcido une dois cabos individuais numa espiral contínua de elevada tenacidade. É a solução por excelência para a linha Contract. A laçada compacta resiste ao atrito constante, não desfila facilmente com anéis ou relógios dos hóspedes e suporta centenas de ciclos de lavagem agressiva com cloro e calandragem sob alta pressão.</p>

      <div class="my-6 border border-dsc-line bg-white overflow-hidden shadow-sm">
        <table class="w-full text-xs text-left">
          <thead class="bg-dsc-navy text-white font-mono text-[11px] uppercase">
            <tr>
              <th class="p-3">Critério</th>
              <th class="p-3">Zero-Twist DSC</th>
              <th class="p-3">Retorcido 24/2 DSC</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-dsc-line font-light">
            <tr>
              <td class="p-3 font-mono font-medium text-dsc-navy">Toque & Maciez</td>
              <td class="p-3 text-emerald-700 font-medium">Extraordinário / Plush</td>
              <td class="p-3">Firme / Estruturado</td>
            </tr>
            <tr>
              <td class="p-3 font-mono font-medium text-dsc-navy">Velocidade Absorção</td>
              <td class="p-3 text-emerald-700 font-medium">&lt; 2.5 seg. (Imediata)</td>
              <td class="p-3">&lt; 4.0 seg.</td>
            </tr>
            <tr>
              <td class="p-3 font-mono font-medium text-dsc-navy">Resistência a Puxões</td>
              <td class="p-3">Média (Requer cuidado)</td>
              <td class="p-3 text-emerald-700 font-medium">Máxima (Anti-Snag)</td>
            </tr>
            <tr>
              <td class="p-3 font-mono font-medium text-dsc-navy">Segmento Ideal</td>
              <td class="p-3">Retalho Premium & Spas</td>
              <td class="p-3">Hotelaria & Lavandaria</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: "algodao-reciclado-desafios",
    category: "SUSTENTABILIDADE APLICADA",
    date: "Julho 2026",
    readTime: "5 min de leitura",
    title: "Algodão Reciclado no Turco: Desafios de resistência mecânica e toque final",
    subtitle: "Como balancear fibras regeneradas com algodão virgem de fibra longa para garantir conformidade ESG sem sacrificar a qualidade.",
    snippet: "Como combinar fios reciclados com algodão virgem de fibra longa para atingir os critérios de sustentabilidade internacional sem abdicar da sensação aveludada.",
    content: `
      <h4>O Desafio Técnico da Fibra Curta</h4>
      <p>A desfibragem mecânica de sobras têxteis pré-consumo corta inevitavelmente o comprimento das fibras de algodão. Enquanto o algodão virgem de qualidade possui um comprimento de fibra de 28 a 34 mm, o algodão reciclado pós-desfibragem apresenta frequentemente comprimentos inferiores a 18 mm.</p>
      <p>Num artigo plano (como uma camisa ou lençol), isto pode ser compensado com maior torção. Mas numa toalha turco &mdash; onde as laçadas estão expostas e sofrem atrito direto &mdash; fibras curtas resultam em desprendimento de cotão excessivo (linting) e perda acelerada de espessura pós-lavagem.</p>

      <h4>A Fórmula de Engenharia DSC: Blending Estratégico</h4>
      <p>Para ultrapassar esta barreira e oferecer aos nossos clientes toalhas ecologicamente responsáveis com durabilidade exemplar, a equipa de I&D da DSC desenvolveu uma abordagem de blending diferenciado:</p>
      <ul class="list-disc pl-5 space-y-2 text-xs text-dsc-body my-4">
        <li><strong>Urdidura e Trama (Estrutura de Suporte):</strong> Incorporação de até 40% de algodão reciclado rastreado, conferindo estabilidade dimensional e mantendo a pegada de carbono reduzida.</li>
        <li><strong>Fio de Felpo (Laçada de Contacto):</strong> Algodão virgem biológico certificado GOTS ou algodão penteado de fibra longa, assegurando que o toque na pele se mantém macio e livre de pontas curtas ásperas.</li>
      </ul>

      <h4>Rastreabilidade e Certificação Global Recycled Standard (GRS)</h4>
      <p>Todas as matérias recicladas introduzidas na nossa unidade passam por auditoria de cadeia de custódia GRS, garantindo aos compradores B2B que as percentagens declaradas de fibras circulares são verificáveis por testes laboratoriais e documentação aduaneira oficial.</p>
    `
  },
  {
    id: "quimica-corantes-reativos",
    category: "ENOBRECIMENTO & COR",
    date: "Junho 2026",
    readTime: "4 min de leitura",
    title: "Química dos Corantes Reativos: Como atingir solidez 4-5 a lavagens a 90ºC",
    subtitle: "A ligação molecular covalente que impede a perda de cor em toalhas brancas ou coloridas sujeitas a desinfeção intensiva.",
    snippet: "Os segredos termodinâmicos da fixação de corantes sob banhos otimizados e a eliminação de substâncias perigosas para assegurar a conformidade OEKO-TEX Standard 100 Classe I.",
    content: `
      <h4>Ligação Covalente vs. Adsorção Física</h4>
      <p>Ao contrário dos corantes diretos ou pigmentares que aderem apenas à superfície da fibra por forças fracas de van der Waals, os <strong>corantes reativos</strong> formam uma verdadeira ligação química covalente com os grupos hidroxila (-OH) da celulose do algodão. Uma vez fixada, a molécula de cor passa a fazer parte integrante da própria cadeia polimérica do tecido.</p>

      <h4>O Protocolo de Tinturaria DSC</h4>
      <p>Para assegurar que as nossas toalhas tingidas em azul marinho, cinza antracite, terracota ou branco ótico mantêm a vivacidade após dezenas de lavagens a quente, aplicamos um protocolo trifásico rigoroso:</p>
      <ol class="list-decimal pl-5 space-y-2 text-xs text-dsc-body my-3">
        <li><strong>Pré-Tratamento Enzimático:</strong> Eliminação de ceras naturais e pectinas do algodão cru sem degradar a resistência da fibra, garantindo absorção uniforme do banho de tingimento.</li>
        <li><strong>Curva de Temperatura e Alcalinização Controlada:</strong> Doseamento progressivo de eletrólitos e álcalis para favorecer a difusão do corante no interior da fibra antes da reação de fixação.</li>
        <li><strong>Lavagem Extensiva de Saboagem (Soap-Off):</strong> Remoção total do corante não fixado (hidrolisado), prevenindo o manchamento de outras peças e garantindo solidez à lavagem nota 4-5 segundo a norma ISO 105-C06.</li>
      </ol>

      <h4>Resistência ao Cloro e Desinfeção Hospitalar</h4>
      <p>Para linhas contract hospitalares ou de cruzeiros onde a esterilização por hipoclorito de sódio é mandatória, a DSC emprega corantes da gama Indanthren (Vat Dyes), que resistem à oxidação química severa sem desbotamento.</p>
    `
  },
  {
    id: "diretiva-espr-passaporte-dpp",
    category: "REGULAMENTAÇÃO EUROPEIA",
    date: "Maio 2026",
    readTime: "7 min de leitura",
    title: "O Impacto da Diretiva Europeia ESPR & Passaporte Digital (DPP) nos Têxteis-Lar",
    subtitle: "O que as marcas europeias de banho e cama precisam de preparar para cumprir as metas de conformidade 2026/2027.",
    snippet: "Um guia prático sobre os novos requisitos comunitários de ecodesign, etiquetagem digital por QR Code e declaração de pegada hídrica e carbónica por lote produzido.",
    content: `
      <h4>O Fim da Era da Opacidade Têxtil na Europa</h4>
      <p>O regulamento da União Europeia sobre Ecodesign para Produtos Sustentáveis (ESPR &mdash; Ecodesign for Sustainable Products Regulation) marca uma transição histórica no retalho comunitário. A partir do biénio 2026/2027, todos os têxteis comercializados no espaço europeu terão de dispor de um <strong>Passaporte Digital do Produto (Digital Product Passport &mdash; DPP)</strong> acessível eletronicamente pelo consumidor e pelas autoridades aduaneiras.</p>

      <h4>Que Dados Terá de Conter o DPP de Uma Toalha?</h4>
      <p>O passaporte digital não é uma simples ficha comercial em PDF. Trata-se de um conjunto padronizado de dados interoperáveis indexados a um identificador exclusivo (QR Code ou NFC) cosido na etiqueta do artigo:</p>
      <ul class="list-disc pl-5 space-y-2 text-xs text-dsc-body my-3">
        <li><strong>Origem e Cadeia de Fiação:</strong> País de cultivo da fibra de algodão e local de fiação e tecelagem.</li>
        <li><strong>Composição Centesimal Rigorosa:</strong> Percentagens exatas de fibras virgens, orgânicas ou recicladas.</li>
        <li><strong>Pegada Ambiental do Produto (PEF):</strong> Litros de água consumidos por unidade e emissões equivalentes de CO2 do berço ao portão da fábrica (Cradle-to-Gate).</li>
        <li><strong>Substâncias Químicas Notificadas:</strong> Certificados de isenção de substâncias que suscitam elevada preocupação (SVHC) nos termos do REACH.</li>
        <li><strong>Guia de Fim de Vida e Reciclabilidade:</strong> Instruções sobre desmontagem de elementos não-têxteis (como fechos ou botões) e método adequado de reencaminhamento para reciclagem.</li>
      </ul>

      <h4>Como a DSC Prepara os Seus Clientes</h4>
      <p>Na DSC, os nossos sistemas de gestão fabril já rastreiam cada ordem de fabrico por lote individual. Quando desenvolvemos a sua coleção de Private Label, entregamos a matriz de dados técnicos necessária para alimentar a plataforma DPP da sua marca, evitando custos avultados de consultoria externa e assegurando que os seus produtos entram sem entraves no mercado único da UE.</p>
    `
  },
  {
    id: "waffle-vs-turco-logistica",
    category: "ENGENHARIA DE PRODUTO",
    date: "Abril 2026",
    readTime: "5 min de leitura",
    title: "Estruturas Waffle vs. Turco Clássico: Otimização de Peso e Custos Logísticos",
    subtitle: "Como a densidade volumétrica do ninho de abelha permite expedir até +38% de peças por contentor marítimo ou camião rodoviário.",
    snippet: "Análise comparativa da eficiência espacial entre o felpo tradicional de laçada alta e as estruturas alveolar favo. Impacto direto nas margens operacionais de distribuidores internacionais.",
    content: `
      <h4>O Paradoxo do Ar no Transporte Têxtil</h4>
      <p>O felpo clássico de banho é, por natureza, um produto que transporta imenso ar. As laçadas salientes conferem volume e maciez, mas exigem caixas master de grandes dimensões. Em expedições transfronteiriças de longa distância &mdash; onde o frete é faturado pelo peso volumétrico (cubagem) &mdash; grande parte do orçamento logístico de uma marca é gasto a transportar espaço vazio.</p>

      <h4>A Geometria Alveolar da Estrutura Waffle</h4>
      <p>A textura em ninho de abelha (waffle / honeycomb) é tecida com um cruzamento especial de fios que cria uma matriz tridimensional de alvéolos em relevo. Quando dobrada sob leve compressão, a estrutura compacta-se com eficiência máxima, expandindo-se imediatamente após a primeira lavagem e contacto com a humidade.</p>

      <div class="my-6 border border-dsc-line bg-slate-50 p-5 font-mono text-xs">
        <div class="font-bold text-dsc-navy uppercase mb-2">Comparativo Logístico DSC: Contentor Standard 40 Pés HC</div>
        <div class="space-y-1.5 text-dsc-body">
          <div class="flex justify-between border-b border-dsc-line/60 pb-1">
            <span>Toalha Turco 550 g/m² (70x140 cm):</span>
            <span class="text-dsc-navy font-semibold">Capacidade média: 14.200 toalhas</span>
          </div>
          <div class="flex justify-between">
            <span>Toalha Waffle 420 g/m² (70x140 cm):</span>
            <span class="text-emerald-700 font-semibold">Capacidade média: 19.600 toalhas (+38% de volume útil)</span>
          </div>
        </div>
      </div>

      <h4>Conclusão para Marcas de E-Commerce e Hospitality</h4>
      <p>Além de reduzir o frete marítimo ou rodoviário em quase 40%, o tecido waffle seca em metade do tempo do turco clássico em ambientes residenciais ou quartos de hotel, tornando-se numa opção prioritária para marcas de luxo ecológicas e centros de spa modernos que procuram estética sofisticada e pegada sustentável comprovada.</p>
    `
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderBlogCards();
  setupModalEvents();

  // Check URL hash for direct article opening
  if (window.location.hash) {
    const articleId = window.location.hash.replace('#', '');
    if (articleId) {
      openArticleById(articleId);
    }
  }
});

function renderBlogCards() {
  const container = document.getElementById('blog-grid');
  if (!container) return;

  container.innerHTML = DSC_ARTICLES.map((art, idx) => `
    <article onclick="openArticleById('${art.id}')" class="p-8 bg-dsc-white hover:bg-slate-50 transition-all duration-200 cursor-pointer flex flex-col justify-between h-full rounded-none interactive-card group border border-dsc-line">
      <div>
        <div class="font-mono text-[10px] text-dsc-navy uppercase tracking-widest mb-4 flex items-center justify-between">
          <span class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-dsc-gold"></span>
            <span>${art.category}</span>
          </span>
          <span class="text-dsc-muted font-normal">${art.readTime}</span>
        </div>
        <h3 class="text-xl font-medium tracking-tight text-dsc-navy mb-3 leading-snug group-hover:text-dsc-navy transition-colors">
          ${art.title}
        </h3>
        <p class="text-xs text-dsc-body font-light leading-relaxed mb-8 line-clamp-3">
          ${art.snippet}
        </p>
      </div>
      <div class="flex justify-between items-center border-t border-dsc-line/80 pt-4 mt-auto">
        <span class="font-mono text-[10px] uppercase tracking-widest text-dsc-muted">${art.date}</span>
        <span class="arrow-trigger font-mono text-[10px] uppercase tracking-widest text-dsc-navy font-semibold flex items-center gap-1.5">
          <span>Ler Artigo Completo</span>
          <span class="arrow-target text-dsc-gold font-bold">&rarr;</span>
        </span>
      </div>
    </article>
  `).join('');
}

window.openArticleById = function(id) {
  const article = DSC_ARTICLES.find(a => a.id === id);
  if (!article) return;

  const modal = document.getElementById('article-reader-modal');
  if (!modal) return;

  document.getElementById('reader-category').innerText = article.category;
  document.getElementById('reader-date').innerText = `${article.date} • ${article.readTime}`;
  document.getElementById('reader-title').innerText = article.title;
  document.getElementById('reader-subtitle').innerText = article.subtitle;
  document.getElementById('reader-body').innerHTML = article.content;

  // Set sample request link
  const sampleBtn = document.getElementById('reader-sample-btn');
  if (sampleBtn) {
    sampleBtn.href = `contactos.html?subject=${encodeURIComponent('Artigo Técnico: ' + article.title)}`;
  }

  // Update hash
  window.history.replaceState(null, null, `#${article.id}`);

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.closeArticleModal = function() {
  const modal = document.getElementById('article-reader-modal');
  if (!modal) return;

  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';

  // Clear hash
  window.history.replaceState(null, null, window.location.pathname);
};

function setupModalEvents() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeArticleModal();
    }
  });

  const modal = document.getElementById('article-reader-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeArticleModal();
      }
    });
  }
}
