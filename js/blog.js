/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Technical Blog & Article Reader Module (Fully Bilingual PT / EN)
 * Complete informative essays with in-depth technical analysis, specifications, and data.
 */

const DSC_ARTICLES = [
  {
    id: "gsm-durabilidade",
    pt: {
      category: "ESPECIFICAÇÕES B2B",
      date: "Setembro 2026",
      readTime: "6 min de leitura",
      title: "Gramagem (GSM) vs. Durabilidade: Como especificar toalhas para o setor contract",
      subtitle: "Porque é que a toalha mais pesada nem sempre é a mais rentável para cadeias hoteleiras e lavandarias industriais.",
      snippet: "Compreender porque nem sempre a toalha mais pesada é a mais eficiente. Analisamos tempos de secagem em lavandarias industriais, perda de fibras e custos energéticos operacionais.",
      readBtn: "Ler Artigo Completo",
      ctaBtn: "Falar Sobre Este Tema",
      closeBtn: "Fechar",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Síntese para Gestores de Compras & Hospitality:</strong> A gramagem (GSM) mede a densidade da massa têxtil, mas a verdadeira durabilidade e custo operacional (TCO) são determinados pela geometria do fio (retorcido 2-ply vs. singelo) e pela eficiência térmica nos ciclos de secagem industrial.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. O Mito da Gramagem Excessiva no Retalho vs. Hotelaria</h4>
        <p>No canal retalho de grande consumo, o utilizador final associa frequentemente uma gramagem elevada (700g a 850g/m²) ao luxo absoluto. No entanto, quando transpomos esta métrica para o setor <em>Contract</em> hoteleiro e para lavandarias industriais de grande capacidade, toalhas excessivamente densas transformam-se num pesado encargo financeiro e ecológico.</p>
        <p>Ao longo de um ciclo de vida típico de 150 a 200 lavagens industriais, o custo de aquisição inicial da toalha representa apenas <strong>12% a 15% do Custo Total de Propriedade (TCO)</strong>. Os restantes 85% a 88% do orçamento são absorvidos pelos custos de energia (gás/eletricidade) na secagem em túnel, detergentes industriais e frete logístico faturado ao quilo.</p>
        
        <div class="my-6 border border-dsc-line bg-slate-50 p-5 font-mono text-xs shadow-sm">
          <div class="font-bold text-dsc-navy uppercase mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-dsc-gold"></span>
            Simulação Laboratorial DSC: Consumo Energético em 10.000 Lavagens
          </div>
          <div class="space-y-2 text-dsc-body">
            <div class="flex justify-between border-b border-dsc-line/70 pb-1.5">
              <span>Toalha Standard (500 g/m²):</span>
              <span class="text-dsc-navy font-semibold">Secagem: 24 min | Custo Base: 1.00x (Referência)</span>
            </div>
            <div class="flex justify-between border-b border-dsc-line/70 pb-1.5">
              <span>Toalha Contract Pro (600 g/m²):</span>
              <span class="text-dsc-navy font-semibold">Secagem: 29 min | Custo Base: 1.21x (+21% energia)</span>
            </div>
            <div class="flex justify-between border-b border-dsc-line/70 pb-1.5">
              <span>Toalha Hi-Dense Luxo (750 g/m²):</span>
              <span class="text-dsc-navy font-semibold">Secagem: 41 min | Custo Base: 1.70x (+70% energia)</span>
            </div>
            <div class="flex justify-between pt-1 text-[11px] text-dsc-muted">
              <span>* Base de cálculo: Lavandaria industrial com túnel contínuo a 85°C e calandra de alta pressão.</span>
            </div>
          </div>
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. A Física da Resistência: Porque o Fio Retorcido 24/2 Supera o Singelo</h4>
        <p>A resistência mecânica ao rasgo e à tração longitudinal não decorre da acumulação bruta de fibras de algodão, mas sim da <strong>coesão da fiação</strong>. Uma toalha DSC de 550 g/m² tecida com urdidura e trama de fio retorcido Ne 24/2 (dois cabos torcidos em espiral):</p>
        <ul class="list-disc pl-5 space-y-1.5 text-xs font-light text-dsc-body my-3">
          <li>Apresenta <strong>+42% de resistência à tração (ISO 13934-1)</strong> comparativamente a uma toalha de 700 g/m² de fio singelo Ne 16/1;</li>
          <li>Reduz a perda de fibras soltas (<em>linting</em>) em mais de 65% nos primeiros 10 ciclos de lavagem;</li>
          <li>Mantém a estabilidade dimensional e previne o ondulamento nas bordaduras jacquard graças ao travamento duplo de ourelas.</li>
        </ul>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Matriz de Especificação Recomendada pela Engenharia DSC</h4>
        <div class="overflow-x-auto my-4">
          <table class="w-full text-xs font-sans border border-dsc-line text-left">
            <thead class="bg-dsc-canvas font-mono text-[10px] uppercase tracking-wider text-dsc-navy border-b border-dsc-line">
              <tr>
                <th class="p-3">Segmento Alvo</th>
                <th class="p-3">Gramagem Ideal</th>
                <th class="p-3">Estrutura de Fio</th>
                <th class="p-3">Acabamento / Costura</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-dsc-line/70 font-light text-dsc-body">
              <tr>
                <td class="p-3 font-medium text-dsc-navy">Hotéis 5 Estrelas & Suítes</td>
                <td class="p-3 font-mono">550 – 600 g/m²</td>
                <td class="p-3">100% Algodão Penteado Long-Staple</td>
                <td class="p-3">Bainha 4 cantos travados, laçada dupla</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-dsc-navy">Hotelaria Corporate & Resorts</td>
                <td class="p-3 font-mono">500 – 550 g/m²</td>
                <td class="p-3">Ne 24/2 Retorcido Anti-Puxão</td>
                <td class="p-3">Pesponto duplo de segurança reforçado</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-dsc-navy">Tapetes de Saída de Banho</td>
                <td class="p-3 font-mono">850 – 950 g/m²</td>
                <td class="p-3">Fio Retorcido Alta Tenacidade</td>
                <td class="p-3">Moldura grega estruturada anti-deslizamento</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-dsc-navy">Spas & Centros de Bem-Estar</td>
                <td class="p-3 font-mono">420 – 480 g/m²</td>
                <td class="p-3">Estrutura Waffle ou Zero-Twist</td>
                <td class="p-3">Secagem ultrarrápida entre tratamentos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">4. Conclusão Prática para Cadernos de Encargos</h4>
        <p>Ao redigir cadernos de encargos B2B, aconselhamos os compradores a estipular <strong>limiares de resistência mecânica (Newton), taxas de encolhimento pós-lavagem (&lt; 5%) e solidez de cor a lavagens a 90°C (ISO 105-C06)</strong>, em vez de fixar exclusivamente gramagens brutas elevadas. A equipa de I&D da DSC desenvolve fichas técnicas personalizadas à medida das rotinas de higienização de cada cliente.</p>
      `
    },
    en: {
      category: "B2B SPECIFICATIONS",
      date: "September 2026",
      readTime: "6 min read",
      title: "GSM vs. Durability: Specifying High-Performance Towels for the Contract Sector",
      subtitle: "Why the heaviest towel is not always the most cost-effective for luxury hotel chains and commercial laundries.",
      snippet: "Understanding why heavy towels can increase laundry operating costs. We analyze tumble dry cycles, lint shedding, and total cost of ownership.",
      readBtn: "Read Full Article",
      ctaBtn: "Inquire About This Topic",
      closeBtn: "Close",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Executive Summary for Sourcing Managers:</strong> Fabric weight (GSM) reflects mass density, but true operational longevity and Total Cost of Ownership (TCO) are governed by yarn twisting physics (2-ply plied vs. coarse singles) and thermal drying efficiency.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. The Myth of Excessive Fabric Weight in Retail vs. Contract</h4>
        <p>In consumer retail, high fabric weight (700 to 850 GSM) is commonly marketed as supreme luxury. However, when applied to industrial hospitality laundering, overly dense towels frequently turn into an operational and economic liability.</p>
        <p>Across an operational lifecycle of 150 to 200 industrial wash cycles, initial purchase price accounts for only <strong>12% to 15% of Total Cost of Ownership (TCO)</strong>. The remaining 85% to 88% is absorbed by tunnel dryer energy, detergents, and per-kilogram freight logistics.</p>

        <div class="my-6 border border-dsc-line bg-slate-50 p-5 font-mono text-xs shadow-sm">
          <div class="font-bold text-dsc-navy uppercase mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-dsc-gold"></span>
            DSC Laboratory Simulation: Energy Consumption Over 10,000 Wash Cycles
          </div>
          <div class="space-y-2 text-dsc-body">
            <div class="flex justify-between border-b border-dsc-line/70 pb-1.5">
              <span>Standard Towel (500 g/m²):</span>
              <span class="text-dsc-navy font-semibold">Dry Time: 24 min | Cost Index: 1.00x (Baseline)</span>
            </div>
            <div class="flex justify-between border-b border-dsc-line/70 pb-1.5">
              <span>Contract Pro Towel (600 g/m²):</span>
              <span class="text-dsc-navy font-semibold">Dry Time: 29 min | Cost Index: 1.21x (+21% thermal energy)</span>
            </div>
            <div class="flex justify-between border-b border-dsc-line/70 pb-1.5">
              <span>Hi-Dense Luxury (750 g/m²):</span>
              <span class="text-dsc-navy font-semibold">Dry Time: 41 min | Cost Index: 1.70x (+70% thermal energy)</span>
            </div>
            <div class="flex justify-between pt-1 text-[11px] text-dsc-muted">
              <span>* Simulation parameters: Industrial continuous batch washer with 85°C tunnel dry and iron calender.</span>
            </div>
          </div>
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. The Mechanics of Resilience: Why 24/2 Plied Yarn Outlasts Singles</h4>
        <p>Tensile burst resistance and snag durability do not come from raw bulk cotton weight, but from <strong>disciplined yarn construction</strong>. A 550 GSM DSC towel woven with Ne 24/2 plied ring-spun warp and weft:</p>
        <ul class="list-disc pl-5 space-y-1.5 text-xs font-light text-dsc-body my-3">
          <li>Delivers <strong>+42% higher tensile breaking strength (ISO 13934-1)</strong> than a 700 GSM single-yarn towel;</li>
          <li>Cuts tumble lint shedding by over 65% across initial commercial wash cycles;</li>
          <li>Preserves dimensional flatness and eliminates edge curling via 4-corner lock-stitched reinforced selvages.</li>
        </ul>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Recommended Specification Matrix by DSC Engineering</h4>
        <div class="overflow-x-auto my-4">
          <table class="w-full text-xs font-sans border border-dsc-line text-left">
            <thead class="bg-dsc-canvas font-mono text-[10px] uppercase tracking-wider text-dsc-navy border-b border-dsc-line">
              <tr>
                <th class="p-3">Target Application</th>
                <th class="p-3">Optimal GSM</th>
                <th class="p-3">Yarn Engineering</th>
                <th class="p-3">Hem / Construction</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-dsc-line/70 font-light text-dsc-body">
              <tr>
                <td class="p-3 font-medium text-dsc-navy">5-Star Luxury Suites</td>
                <td class="p-3 font-mono">550 – 600 g/m²</td>
                <td class="p-3">100% Long-Staple Combed Cotton</td>
                <td class="p-3">Double loop pile, 4-corner lock hems</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-dsc-navy">Corporate Hospitality & Resorts</td>
                <td class="p-3 font-mono">500 – 550 g/m²</td>
                <td class="p-3">Ne 24/2 Plied Anti-Snag Yarn</td>
                <td class="p-3">Reinforced double safety interlock seam</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-dsc-navy">Hotel Bath Mats</td>
                <td class="p-3 font-mono">850 – 950 g/m²</td>
                <td class="p-3">High-Tenacity 2-Ply Twisted Yarn</td>
                <td class="p-3">Greek key architectural border, anti-slip</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-dsc-navy">Wellness & Thermal Spas</td>
                <td class="p-3 font-mono">420 – 480 g/m²</td>
                <td class="p-3">3D Waffle Weave or Zero-Twist</td>
                <td class="p-3">Ultra-fast dry time between guest treatments</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">4. Practical Sourcing Advice</h4>
        <p>When preparing B2B tender documents, we advise sourcing directors to mandate <strong>tensile load limits (Newtons), dimensional shrinkage thresholds (&lt; 5%), and 90°C washfastness ratings (ISO 105-C06)</strong> rather than arbitrarily high GSM numbers. DSC's engineering department provides customized datasheets tailored to each client's laundry protocol.</p>
      `
    }
  },
  {
    id: "zero-twist-vs-retorcido",
    pt: {
      category: "I&D DE MATÉRIAS-PRIMAS",
      date: "Agosto 2026",
      readTime: "7 min de leitura",
      title: "Fios Zero-Twist vs. Fios Retorcidos: Qual a estrutura certa para o seu mercado?",
      subtitle: "Uma comparação técnica ao microscópio entre a laçada aberta de torção zero e o fio retorcido clássico 24/2.",
      snippet: "Uma comparação técnica ao microscópio entre a laçada aberta de torção zero e o fio retorcido clássico 24/2. Como o tipo de fiação dita o ciclo de vida do artigo de banho.",
      readBtn: "Ler Artigo Completo",
      ctaBtn: "Falar Sobre Este Tema",
      closeBtn: "Fechar",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Enquadramento Técnico:</strong> A física da torção do fio dita a relação entre maciez instantânea, absorção capilar e resistência ao atrito abrasivo. Conheça as diferenças fundamentais entre estas duas tecnologias de fiação.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. A Física da Torção no Fio de Algodão</h4>
        <p>A torção (medida em voltas por polegada &mdash; TPI, <em>Twists Per Inch</em>) é o processo mecânico fundamental que confere coesão e tenacidade às fibras descontínuas de algodão. Quanto maior a torção aplicada:</p>
        <ul class="list-disc pl-5 space-y-1 text-xs font-light text-dsc-body my-2">
          <li><strong>Maior a resistência à tração mecânica</strong> e ao desfiamento por atrito;</li>
          <li><strong>Menor o espaço intersticial</strong> entre as fibras, o que reduz a velocidade inicial de absorção capilar e confere um toque mais firme.</li>
        </ul>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Tecnologia Zero-Twist: O Segredo da Nuvem Têxtil</h4>
        <p>O fio Zero-Twist representa um dos maiores triunfos da fiação moderna de luxo. Para produzir um fio sem torção sem que este se desfaça no tear, utiliza-se <strong>algodão nobre de fibra extralonga (ELS)</strong> envolvido temporariamente por um filamento fino de álcool polivinílico solúvel em água (PVA).</p>
        <p>Durante a tecelagem nos nossos teares Jacquard em Roriz, o filamento de PVA proporciona a estabilidade estrutural necessária para suportar tensões mecânicas de alta velocidade. Subsequentemente, no processo de enobrecimento e lavagem a 90°C, o PVA dissolve-se por completo em meio aquoso, libertando as fibras nobres no interior da laçada.</p>
        <p>O resultado é uma estrutura de micro-câmaras de ar abertas com:</p>
        <ul class="list-disc pl-5 space-y-1 text-xs font-light text-dsc-body my-2">
          <li><strong>Absorção capilar instantânea (&lt; 2.0 segundos segundo a norma DIN 53923)</strong>;</li>
          <li>Toque extremamente fofo e aveludado sem recurso a amaciadores químicos de silicone;</li>
          <li>Volume visual expandido com menor peso por metro quadrado.</li>
        </ul>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Fio Retorcido 2-Cabos (2-Ply / 24/2): O Campeão da Resistência Contract</h4>
        <p>Por oposição, o fio retorcido clássico une dois fios singelos numa espiral contínua de elevada tenacidade. É a solução por excelência para a linha <em>Hospitality Contract</em> e toalhas submetidas a frequentes ciclos de lavandaria industrial com alvejantes clorados e secagem intensiva.</p>
        
        <div class="my-6 border border-dsc-line bg-slate-50 p-5 font-mono text-xs">
          <div class="font-bold text-dsc-navy uppercase mb-3">Tabela Comparativa de Propriedades Físicas (Testes DSC)</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-dsc-body">
            <div class="p-3 bg-white border border-dsc-line">
              <div class="font-semibold text-dsc-navy mb-1">Toalha Zero-Twist (600 g/m²)</div>
              <ul class="space-y-1 text-[11px] text-dsc-muted font-mono">
                <li>• Absorção DIN 53923: <span class="text-emerald-700 font-bold">1.8 segundos</span></li>
                <li>• Toque Tátil: <span class="text-dsc-navy font-medium">Extremamente Aveludado</span></li>
                <li>• Ciclos de Vida: <span class="text-dsc-navy font-medium">80 – 100 lavagens</span></li>
                <li>• Perfil: <span class="text-dsc-gold font-bold">Retalho Premium / Spas</span></li>
              </ul>
            </div>
            <div class="p-3 bg-white border border-dsc-line">
              <div class="font-semibold text-dsc-navy mb-1">Toalha Retorcido 24/2 (550 g/m²)</div>
              <ul class="space-y-1 text-[11px] text-dsc-muted font-mono">
                <li>• Absorção DIN 53923: <span class="text-dsc-navy font-medium">3.8 segundos</span></li>
                <li>• Toque Tátil: <span class="text-dsc-navy font-medium">Firme & Encorpado</span></li>
                <li>• Ciclos de Vida: <span class="text-emerald-700 font-bold">200+ lavagens</span></li>
                <li>• Perfil: <span class="text-dsc-gold font-bold">Hotelaria 4-5 Estrelas / Contract</span></li>
              </ul>
            </div>
          </div>
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">4. Recomendação Estratégica</h4>
        <p>Para marcas de retalho de posicionamento boutique ou premium, o Zero-Twist gera o maior impacto sensorial no ponto de venda. Para o setor hoteleiro e frotas de aluguer têxtil, o fio retorcido 24/2 é a escolha técnica indiscutível em termos de custo por utilização.</p>
      `
    },
    en: {
      category: "R&D & RAW MATERIALS",
      date: "August 2026",
      readTime: "7 min read",
      title: "Zero-Twist vs. 2-Ply Ring Spun: Selecting the Right Yarn Structure for Your Brand",
      subtitle: "A microscopic technical comparison between open zero-twist loops and classic 24/2 plied ring-spun yarns.",
      snippet: "How yarn twisting physics dictate towel life cycles, capillary water absorption speed, and anti-snag resistance.",
      readBtn: "Read Full Article",
      ctaBtn: "Inquire About This Topic",
      closeBtn: "Close",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Technical Framework:</strong> Yarn twisting physics establish the fundamental trade-off between tactile plushness, capillary moisture wicking speed, and abrasive friction resistance.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. The Physics of Cotton Yarn Twist</h4>
        <p>Twist (measured in Twists Per Inch &mdash; TPI) is the mechanical force that binds discontinuous cotton staple fibers into cohesive yarn. Applying higher twist:</p>
        <ul class="list-disc pl-5 space-y-1 text-xs font-light text-dsc-body my-2">
          <li><strong>Increases tensile burst strength</strong> and resistance to snagging;</li>
          <li><strong>Reduces interstitial air pockets</strong> between fibers, slightly delaying initial water uptake while creating a firmer hand-feel.</li>
        </ul>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Zero-Twist Engineering: The Cloud Effect</h4>
        <p>Zero-Twist yarn represents a pinnacle of modern spinning. To weave untwisted yarn on modern high-speed Jacquard looms without warp breakage, <strong>Extra-Long Staple (ELS) noble cotton</strong> is temporarily bundled with a fine water-soluble polyvinyl alcohol (PVA) carrier thread.</p>
        <p>During automated weaving at DSC's plant in Roriz, this PVA provides structural stability under loom tension. In subsequent hot wet-finishing baths at 90°C, the PVA dissolves completely, allowing the long staple fibers to bloom open inside each terry loop.</p>
        <p>Key performance characteristics:</p>
        <ul class="list-disc pl-5 space-y-1 text-xs font-light text-dsc-body my-2">
          <li><strong>Instantaneous capillary absorption (&lt; 2.0 seconds under DIN 53923)</strong>;</li>
          <li>Exceptional velour plushness without silicone softeners;</li>
          <li>High apparent loft and volume at lighter fabric weights.</li>
        </ul>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. 2-Ply Plied Yarn (Ne 24/2): Maximum Contract Longevity</h4>
        <p>Conversely, classic 2-ply yarn twists two individual threads into a continuous high-tenacity helix. It is the benchmark specification for commercial hospitality where towels undergo daily laundering with hot tumble drying and calender ironing.</p>

        <div class="my-6 border border-dsc-line bg-slate-50 p-5 font-mono text-xs">
          <div class="font-bold text-dsc-navy uppercase mb-3">Laboratory Physical Properties Comparison (DSC Tests)</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-dsc-body">
            <div class="p-3 bg-white border border-dsc-line">
              <div class="font-semibold text-dsc-navy mb-1">Zero-Twist Towel (600 g/m²)</div>
              <ul class="space-y-1 text-[11px] text-dsc-muted font-mono">
                <li>• Absorption (DIN 53923): <span class="text-emerald-700 font-bold">1.8 seconds</span></li>
                <li>• Hand-Feel: <span class="text-dsc-navy font-medium">Ultra-Plush Cloud Feel</span></li>
                <li>• Service Life: <span class="text-dsc-navy font-medium">80 – 100 wash cycles</span></li>
                <li>• Best Use: <span class="text-dsc-gold font-bold">Premium Retail / Luxury Spas</span></li>
              </ul>
            </div>
            <div class="p-3 bg-white border border-dsc-line">
              <div class="font-semibold text-dsc-navy mb-1">2-Ply 24/2 Towel (550 g/m²)</div>
              <ul class="space-y-1 text-[11px] text-dsc-muted font-mono">
                <li>• Absorption (DIN 53923): <span class="text-dsc-navy font-medium">3.8 seconds</span></li>
                <li>• Hand-Feel: <span class="text-dsc-navy font-medium">Crisp, Dense & Durable</span></li>
                <li>• Service Life: <span class="text-emerald-700 font-bold">200+ wash cycles</span></li>
                <li>• Best Use: <span class="text-dsc-gold font-bold">4-5 Star Hospitality / Contract</span></li>
              </ul>
            </div>
          </div>
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">4. Strategic Sourcing Guidance</h4>
        <p>For boutique consumer retail brands, Zero-Twist delivers unmatched tactile conversion in-store. For commercial hospitality chains and textile rental operators, 24/2 plied ring-spun yarn offers the lowest lifecycle cost per guest turnaround.</p>
      `
    }
  },
  {
    id: "algodao-reciclado-desafios",
    pt: {
      category: "SUSTENTABILIDADE APLICADA",
      date: "Julho 2026",
      readTime: "6 min de leitura",
      title: "Algodão Reciclado no Turco: Desafios de resistência mecânica e toque final",
      subtitle: "Como balancear fibras regeneradas com algodão virgem de fibra longa para garantir conformidade ESG sem sacrificar a qualidade.",
      snippet: "Como combinar fios reciclados com algodão virgem de fibra longa para atingir os critérios de sustentabilidade internacional sem abdicar da sensação aveludada.",
      readBtn: "Ler Artigo Completo",
      ctaBtn: "Falar Sobre Este Tema",
      closeBtn: "Fechar",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Engenharia Circular DSC:</strong> A incorporação de algodão reciclado pós-consumo e pré-consumo em tecidos de felpo exige uma arquitetura de mistura diferencial para evitar problemas de desprendimento de fibras (linting) e perda de resistência.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. O Desafio Técnico da Fibra Curta</h4>
        <p>O processo mecânico de desfibragem e regeneração de sobras têxteis encurta inevitavelmente o comprimento das fibras de algodão. Enquanto o algodão virgem de alta qualidade possui um comprimento de fibra de 28 a 34 mm, as fibras mecanicamente recicladas apresentam frequentemente comprimentos médios inferiores a 16 a 18 mm.</p>
        <p>Em tecidos planos (como sarjas ou camisaria), isto pode ser parcialmente compensado com uma maior torção na fiação. Contudo, numa toalha turco &mdash; onde as laçadas tridimensionais estão diretamente expostas ao atrito da pele e aos ciclos de centrifugação &mdash; o uso de 100% fio reciclado na laçada resultaria em desprendimento severo de cotão (<em>linting</em>) e endurecimento precoce.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. A Solução DSC: Blending Estrutural por Zonas</h4>
        <p>A DSC desenvolveu uma abordagem de engenharia têxtil em camadas que equilibra metas de sustentabilidade auditadas com a performance tátil exigida pelos retalhistas:</p>
        <ul class="list-disc pl-5 space-y-2 text-xs font-light text-dsc-body my-3">
          <li><strong>Estrutura de Base (Urdidura e Trama de Fundo):</strong> Incorporação de até <strong>40% a 50% de fio de algodão reciclado certificado GRS</strong> (<em>Global Recycled Standard</em>), conferindo sustentação e estabilidade dimensional;</li>
          <li><strong>Laçadas de Superfície (Turco em Contacto com a Pele):</strong> <strong>100% Algodão Biológico Virgem Certificado GOTS</strong> de fibra longa penteada, garantindo absorção rápida, maciez aveludada e zero libertação de microfibras na máquina de lavar.</li>
        </ul>

        <div class="my-6 border border-dsc-line bg-slate-50 p-5 font-mono text-xs">
          <div class="font-bold text-dsc-navy uppercase mb-3">Balanço Ambiental por Tonelada de Toalhas DSC Eco-Blend</div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-dsc-body">
            <div class="p-3 bg-white border border-dsc-line text-center">
              <div class="text-2xl font-serif text-dsc-gold font-bold">-48%</div>
              <div class="text-[10px] text-dsc-muted uppercase mt-1">Consumo Hídrico Agrícola</div>
            </div>
            <div class="p-3 bg-white border border-dsc-line text-center">
              <div class="text-2xl font-serif text-dsc-navy font-bold">-35%</div>
              <div class="text-[10px] text-dsc-muted uppercase mt-1">Pegada de Carbono (CO2e)</div>
            </div>
            <div class="p-3 bg-white border border-dsc-line text-center">
              <div class="text-2xl font-serif text-emerald-700 font-bold">100%</div>
              <div class="text-[10px] text-dsc-muted uppercase mt-1">Rastreabilidade GRS / GOTS</div>
            </div>
          </div>
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Certificação e Garantia Química</h4>
        <p>Todas as misturas recicladas processadas na DSC cumprem integralmente a norma <strong>OEKO-TEX Standard 100 Classe I</strong>, assegurando que nenhum corante residual ou agente químico contaminante proveniente da matéria-prima original permaneça no produto acabado.</p>
      `
    },
    en: {
      category: "APPLIED SUSTAINABILITY",
      date: "July 2026",
      readTime: "6 min read",
      title: "Recycled Cotton in Terry Fabrics: Overcoming Tensile and Hand-Feel Challenges",
      subtitle: "Balancing mechanically regenerated fibers with virgin long-staple cotton to meet ESG targets without sacrificing softness.",
      snippet: "Strategic blending techniques to meet circularity requirements and GRS standards while eliminating excessive linting.",
      readBtn: "Read Full Article",
      ctaBtn: "Inquire About This Topic",
      closeBtn: "Close",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>DSC Circular Engineering:</strong> Incorporating recycled pre- and post-consumer cotton into terry loop fabrics requires a zoned structural blend to prevent lint shedding and tensile loss.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. The Short-Fiber Mechanical Hurdle</h4>
        <p>Mechanical shredding of textile clips degrades staple fiber length. While virgin long-staple cotton spans 28 to 34 mm, mechanically regenerated fibers average under 16 to 18 mm.</p>
        <p>In flat woven fabrics, high twist can compensate for shorter fibers. However, in terry towels &mdash; where loops are directly exposed to skin abrasion and washing friction &mdash; 100% recycled cotton pile causes excessive tumble linting and coarse stiffness.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. The DSC Zoned Blending Architecture</h4>
        <p>DSC engineers developed a hybrid construction that meets rigorous circularity audits while safeguarding luxurious hand-feel:</p>
        <ul class="list-disc pl-5 space-y-2 text-xs font-light text-dsc-body my-3">
          <li><strong>Ground Foundation (Warp & Weft Core):</strong> Up to <strong>40% to 50% GRS-certified recycled cotton</strong> for dimensional stability;</li>
          <li><strong>Surface Terry Loops (Skin Contact):</strong> <strong>100% GOTS-certified organic virgin long-staple cotton</strong> to ensure rapid capillary wicking, velour plushness, and zero fiber shedding.</li>
        </ul>

        <div class="my-6 border border-dsc-line bg-slate-50 p-5 font-mono text-xs">
          <div class="font-bold text-dsc-navy uppercase mb-3">Environmental Footprint per Ton of DSC Eco-Blend Towels</div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-dsc-body">
            <div class="p-3 bg-white border border-dsc-line text-center">
              <div class="text-2xl font-serif text-dsc-gold font-bold">-48%</div>
              <div class="text-[10px] text-dsc-muted uppercase mt-1">Agricultural Water Use</div>
            </div>
            <div class="p-3 bg-white border border-dsc-line text-center">
              <div class="text-2xl font-serif text-dsc-navy font-bold">-35%</div>
              <div class="text-[10px] text-dsc-muted uppercase mt-1">Carbon Footprint (CO2e)</div>
            </div>
            <div class="p-3 bg-white border border-dsc-line text-center">
              <div class="text-2xl font-serif text-emerald-700 font-bold">100%</div>
              <div class="text-[10px] text-dsc-muted uppercase mt-1">GRS / GOTS Traceability</div>
            </div>
          </div>
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Chemical Safety & Certifications</h4>
        <p>All recycled blends processed at DSC undergo rigorous testing to ensure <strong>OEKO-TEX Standard 100 Class I</strong> compliance, guaranteeing no harmful residual auxiliaries remain in the finished linen.</p>
      `
    }
  },
  {
    id: "quimica-corantes-reativos",
    pt: {
      category: "ENOBRECIMENTO & COR",
      date: "Junho 2026",
      readTime: "5 min de leitura",
      title: "Química dos Corantes Reativos: Como atingir solidez 4-5 a lavagens a 90ºC",
      subtitle: "A ligação molecular covalente que impede a perda de cor em toalhas submetidas a desinfeção intensiva.",
      snippet: "Os segredos termodinâmicos da fixação de corantes sob banhos otimizados e a eliminação de substâncias perigosas para assegurar a conformidade OEKO-TEX Standard 100 Classe I.",
      readBtn: "Ler Artigo Completo",
      ctaBtn: "Falar Sobre Este Tema",
      closeBtn: "Fechar",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Processo Químico:</strong> A fixação de corantes reativos por ligação covalente com os grupos hidroxila da celulose garante solidez máxima mesmo sob desinfeção com cloro e lavagens a 90°C em ambiente hospitalar e hoteleiro.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. Ligação Covalente vs. Adsorção Física</h4>
        <p>Ao contrário dos corantes diretos ou pigmentos convencionais que apenas aderem superficialmente às fibras por forças fracas de Van der Waals, os <strong>corantes reativos</strong> formam uma verdadeira ligação química covalente irreversível com os grupos hidroxila (-OH) da celulose de algodão.</p>
        <p>Uma vez concluída a reação de fixação sob temperatura e pH alcalino controlados, o cromóforo do corante passa a constituir parte integrante da cadeia polimérica da fibra, tornando impossível a sua remoção por simples lavagem aquosa.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. As Etapas do Processo de Tinturaria na DSC</h4>
        <div class="space-y-3 my-4">
          <div class="p-3.5 bg-dsc-canvas border border-dsc-line">
            <div class="font-mono text-xs font-semibold text-dsc-navy">Fase 1: Esgotamento em Banho Curto (Relação 1:5)</div>
            <p class="text-xs text-dsc-body mt-1">Migração uniforme das moléculas de corante para o interior do núcleo das fibras com baixo consumo de água e eletrólitos.</p>
          </div>
          <div class="p-3.5 bg-dsc-canvas border border-dsc-line">
            <div class="font-mono text-xs font-semibold text-dsc-navy">Fase 2: Fixação Alcalina Controlada</div>
            <p class="text-xs text-dsc-body mt-1">Adição de carbonato de sódio a 60°C/80°C para ativação da reação vinilsulfona ou triazina com a celulose.</p>
          </div>
          <div class="p-3.5 bg-dsc-canvas border border-dsc-line">
            <div class="font-mono text-xs font-semibold text-dsc-navy">Fase 3: 'Soap-Off' Intensivo a 95°C</div>
            <p class="text-xs text-dsc-body mt-1">Lavagens sucessivas com agentes dispersantes biodegradáveis para eliminar 100% do corante hidrolisado não fixado, evitando sangramento futuro.</p>
          </div>
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Resultados de Ensaios Laboratoriais (Normas ISO)</h4>
        <ul class="list-disc pl-5 space-y-1.5 text-xs font-light text-dsc-body my-3">
          <li><strong>Solidez à Lavagem a 90°C (ISO 105-C06 / E2S):</strong> Classificação 4-5 (Sem degradação ou manchamento);</li>
          <li><strong>Solidez à Água Clorada de Piscina (ISO 105-E03):</strong> Classificação 4;</li>
          <li><strong>Solidez à Fricção a Seco e Húmido (ISO 105-X12):</strong> Classificação 4-5.</li>
        </ul>
      `
    },
    en: {
      category: "DYEING & FINISHING",
      date: "June 2026",
      readTime: "5 min read",
      title: "Reactive Dye Chemistry: Achieving 4-5 Colorfastness at 90°C Commercial Washes",
      subtitle: "The molecular covalent bond that prevents bleeding and discoloration in bath linens subjected to intensive laundering.",
      snippet: "Thermodynamic secrets of dye fixation in short-liquor ratio baths and OEKO-TEX Standard 100 Class I chemical safety compliance.",
      readBtn: "Read Full Article",
      ctaBtn: "Inquire About This Topic",
      closeBtn: "Close",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Chemical Process:</strong> Covalent bonding between reactive dye chromophores and cellulose hydroxyl groups yields peak colorfastness under chlorine sanitization and 90°C industrial washes.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. Covalent Chemical Bonds vs. Surface Adsorption</h4>
        <p>Unlike pigment or direct dyes that merely attach via weak surface Van der Waals forces, <strong>reactive dyes</strong> establish irreversible covalent chemical bonds with the hydroxyl (-OH) groups of cotton cellulose.</p>
        <p>Once the alkaline fixation reaction is complete, the dye molecule becomes an intrinsic part of the cotton polymer chain itself, preventing bleeding even during repeated commercial washes.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. DSC Dyehouse Quality Stages</h4>
        <div class="space-y-3 my-4">
          <div class="p-3.5 bg-dsc-canvas border border-dsc-line">
            <div class="font-mono text-xs font-semibold text-dsc-navy">Stage 1: Short Liquor Exhaustion (1:5 Ratio)</div>
            <p class="text-xs text-dsc-body mt-1">Homogeneous diffusion of dye molecules into fiber cores with reduced water and auxiliary electrolyte consumption.</p>
          </div>
          <div class="p-3.5 bg-dsc-canvas border border-dsc-line">
            <div class="font-mono text-xs font-semibold text-dsc-navy">Stage 2: Precision Alkaline Fixation</div>
            <p class="text-xs text-dsc-body mt-1">Computer-controlled dosing of soda ash at 60°C to 80°C to trigger vinylsulfone / monochlorotriazine covalent linkage.</p>
          </div>
          <div class="p-3.5 bg-dsc-canvas border border-dsc-line">
            <div class="font-mono text-xs font-semibold text-dsc-navy">Stage 3: Multi-Pass 95°C Soap-Off</div>
            <p class="text-xs text-dsc-body mt-1">Exhaustive hot scouring with biodegradable surfactants to strip 100% of hydrolyzed unreacted dye.</p>
          </div>
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Laboratory Fastness Standards (ISO Tests)</h4>
        <ul class="list-disc pl-5 space-y-1.5 text-xs font-light text-dsc-body my-3">
          <li><strong>Fastness to 90°C Commercial Washing (ISO 105-C06 / E2S):</strong> Grade 4-5 (Zero visible shade change);</li>
          <li><strong>Chlorinated Pool Water Fastness (ISO 105-E03):</strong> Grade 4;</li>
          <li><strong>Rubbing / Crock Fastness Dry & Wet (ISO 105-X12):</strong> Grade 4-5.</li>
        </ul>
      `
    }
  },
  {
    id: "diretiva-espr-passaporte-dpp",
    pt: {
      category: "REGULAMENTAÇÃO EUROPEIA",
      date: "Maio 2026",
      readTime: "7 min de leitura",
      title: "O Impacto da Diretiva Europeia ESPR & Passaporte Digital (DPP) nos Têxteis-Lar",
      subtitle: "O que as marcas europeias de banho e cama precisam de preparar para cumprir as metas de conformidade 2026/2027.",
      snippet: "Um guia prático sobre os novos requisitos comunitários de ecodesign, etiquetagem digital por QR Code e declaração de pegada hídrica e carbónica por lote produzido.",
      readBtn: "Ler Artigo Completo",
      ctaBtn: "Falar Sobre Este Tema",
      closeBtn: "Fechar",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Conformidade Regulatória UE:</strong> O novo Regulamento Ecodesign (ESPR) torna obrigatório o Passaporte Digital do Produto (DPP) para todos os artigos têxteis colocados no mercado comunitário até 2027.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. O Fim da Opacidade nas Cadeias de Valor</h4>
        <p>A União Europeia aprovou o <strong>Regulamento de Ecodesign para Produtos Sustentáveis (ESPR)</strong>, que estabelece critérios rigorosos de durabilidade, reparabilidade, circularidade e eliminação de químicos preocupantes no setor dos têxteis-lar.</p>
        <p>O pilar central desta diretiva é o <strong>Passaporte Digital do Produto (DPP &mdash; <em>Digital Product Passport</em>)</strong>: uma etiqueta física costurada na toalha com QR Code gravado por tecnologia laser ou tecida de alta densidade, resistente a mais de 100 lavagens.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Os 5 Dados Obrigatórios no DPP Têxtil</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 text-xs font-mono">
          <div class="p-3 bg-white border border-dsc-line">
            <span class="text-dsc-gold font-bold block mb-1">01. Origem da Fibra</span>
            <span class="text-dsc-body font-sans">País de cultivo do algodão e certificações da fiação (ex.: GOTS, BCI, GRS).</span>
          </div>
          <div class="p-3 bg-white border border-dsc-line">
            <span class="text-dsc-gold font-bold block mb-1">02. Pegada Carbónica (LCA)</span>
            <span class="text-dsc-body font-sans">Emissões de CO2 equivalente por kg de toalha fabricada e expedida.</span>
          </div>
          <div class="p-3 bg-white border border-dsc-line">
            <span class="text-dsc-gold font-bold block mb-1">03. Conformidade Química</span>
            <span class="text-dsc-body font-sans">Registo OEKO-TEX Standard 100 e declaração de conformidade REACH.</span>
          </div>
          <div class="p-3 bg-white border border-dsc-line">
            <span class="text-dsc-gold font-bold block mb-1">04. Instruções de Fim de Vida</span>
            <span class="text-dsc-body font-sans">Diretrizes de triagem para reciclagem mecânica ou circular de fibras.</span>
          </div>
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Como a DSC Prepara os seus Clientes de Marca Própria</h4>
        <p>Para clientes de Private Label e retalho internacional, a DSC já fornece <strong>dossiers técnicos de rastreabilidade lote a lote</strong> com metadados estruturados em formato JSON/XML prontos a integrar nos sistemas de ERP e plataformas DPP dos clientes, simplificando o desalfandegamento e auditorias aduaneiras em toda a Europa.</p>
      `
    },
    en: {
      category: "EU REGULATIONS",
      date: "May 2026",
      readTime: "7 min read",
      title: "The Impact of EU ESPR & Digital Product Passports (DPP) on Home Textiles",
      subtitle: "What European bath and bed linen brands must prepare for 2026/2027 Ecodesign compliance.",
      snippet: "A practical guide to EU ecodesign criteria, sewn-in QR code data architecture, and lot-level carbon and water footprint tracking.",
      readBtn: "Read Full Article",
      ctaBtn: "Inquire About This Topic",
      closeBtn: "Close",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>EU Regulatory Compliance:</strong> The Ecodesign for Sustainable Products Regulation (ESPR) mandates Digital Product Passports (DPP) for all home textiles entering the European single market by 2027.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. The Era of Traceability Across the European Union</h4>
        <p>The EU ESPR directive sets unprecedented requirements for product durability, recyclability, and chemical safety across the textile supply chain.</p>
        <p>The operational core of ESPR is the <strong>Digital Product Passport (DPP)</strong>: a sewn-in machine-readable QR code on high-density woven damask label designed to survive 100+ commercial wash cycles.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Five Mandatory DPP Data Pillars</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 text-xs font-mono">
          <div class="p-3 bg-white border border-dsc-line">
            <span class="text-dsc-gold font-bold block mb-1">01. Fiber Provenance</span>
            <span class="text-dsc-body font-sans">Country of cotton harvest and certified spinning mill audit numbers.</span>
          </div>
          <div class="p-3 bg-white border border-dsc-line">
            <span class="text-dsc-gold font-bold block mb-1">02. Life Cycle Assessment (LCA)</span>
            <span class="text-dsc-body font-sans">Embodied carbon (kg CO2e) and water consumption metrics per finished piece.</span>
          </div>
          <div class="p-3 bg-white border border-dsc-line">
            <span class="text-dsc-gold font-bold block mb-1">03. Chemical Clearance</span>
            <span class="text-dsc-body font-sans">OEKO-TEX Standard 100 Class I and REACH Annex XVII toxicology compliance.</span>
          </div>
          <div class="p-3 bg-white border border-dsc-line">
            <span class="text-dsc-gold font-bold block mb-1">04. Circular End-of-Life</span>
            <span class="text-dsc-body font-sans">Mechanical shredding and fiber recycling guidance for sorting facilities.</span>
          </div>
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. How DSC Equips Private Label Brands</h4>
        <p>DSC generates <strong>batch-level digital data packages in JSON/XML formats</strong>, allowing international brand partners to instantly synchronize our Portuguese production audits directly into their customer-facing DPP clouds.</p>
      `
    }
  },
  {
    id: "waffle-vs-turco-logistica",
    pt: {
      category: "ENGENHARIA DE PRODUTO",
      date: "Abril 2026",
      readTime: "5 min de leitura",
      title: "Estruturas Waffle vs. Turco Clássico: Otimização de Peso e Custos Logísticos",
      subtitle: "Como a densidade volumétrica do ninho de abelha permite expedir até +38% de peças por contentor marítimo ou camião rodoviário.",
      snippet: "Análise comparativa da eficiência espacial entre o felpo tradicional de laçada alta e as estruturas alveolar favo. Impacto direto nas margens operacionais de distribuidores internacionais.",
      readBtn: "Ler Artigo Completo",
      ctaBtn: "Falar Sobre Este Tema",
      closeBtn: "Fechar",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Logística & Eficiência:</strong> A geometria tridimensional do tecido favo (waffle) compacta-se de forma muito mais eficiente na embalagem primária, resultando em poupanças significativas de frete e redução de pegada carbónica de transporte.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. O Paradoxo do Ar no Transporte de Felpos</h4>
        <p>O felpo de banho tradicional transporta grandes volumes de ar retidos no interior das suas laçadas. No transporte marítimo ou rodoviário faturado por cubagem (peso volumétrico), uma percentagem substancial do orçamento logístico paga o transporte de espaço vazio.</p>
        <p>As toalhas com <strong>estrutura waffle (ninho de abelha 3D)</strong> possuem uma geometria celular que se compacta totalmente quando dobrada a seco, expandindo o seu relevo alveolar apenas após a primeira lavagem aquosa.</p>

        <div class="my-6 border border-dsc-line bg-slate-50 p-5 font-mono text-xs">
          <div class="font-bold text-dsc-navy uppercase mb-3">Simulação de Carga num Contentor Marítimo de 40 Pés HC</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-dsc-body">
            <div class="p-3 bg-white border border-dsc-line">
              <div class="font-semibold text-dsc-navy mb-1">Toalhas Felpo Clássico (550 g/m²)</div>
              <ul class="space-y-1 text-[11px] text-dsc-muted font-mono">
                <li>• Peças por Contentor: <span class="text-dsc-navy font-bold">14.200 unidades</span></li>
                <li>• Volume Médio Dobrado: <span class="text-dsc-navy font-medium">4.8 dm³ / peça</span></li>
                <li>• Custo de Frete Unitário: <span class="text-dsc-navy font-semibold">Base 1.00x</span></li>
              </ul>
            </div>
            <div class="p-3 bg-white border border-dsc-line">
              <div class="font-semibold text-dsc-navy mb-1">Toalhas Estrutura Waffle (420 g/m²)</div>
              <ul class="space-y-1 text-[11px] text-dsc-muted font-mono">
                <li>• Peças por Contentor: <span class="text-emerald-700 font-bold">19.600 unidades (+38%)</span></li>
                <li>• Volume Médio Dobrado: <span class="text-emerald-700 font-bold">3.1 dm³ / peça</span></li>
                <li>• Custo de Frete Unitário: <span class="text-emerald-700 font-bold">-27.5% de custo</span></li>
              </ul>
            </div>
          </div>
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Secagem Acelerada e Experiência do Consumidor</h4>
        <p>Além da vantagem logística na exportação, as toalhas waffle secam até <strong>40% mais depressa ao ar livre</strong> do que toalhas de felpo de igual capacidade absorvente, sendo ideais para spas, cadeias hoteleiras ecológicas e marcas de design escandinavo.</p>
      `
    },
    en: {
      category: "PRODUCT ENGINEERING",
      date: "April 2026",
      readTime: "5 min read",
      title: "Waffle Weave vs. Classic Terry: Volumetric Optimization and Freight Savings",
      subtitle: "How honeycomb 3D density enables shipping up to +38% more units per 40ft high-cube sea container or freight truck.",
      snippet: "Comparative analysis of spatial packaging efficiency and rapid drying speeds for eco-conscious luxury brands and resort spas.",
      readBtn: "Read Full Article",
      ctaBtn: "Inquire About This Topic",
      closeBtn: "Close",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Logistics & Efficiency:</strong> The 3D geometry of honeycomb waffle weave folds remarkably flat in secondary packaging, translating to significant freight savings and lower shipping carbon emissions.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. The Volume Penalty in Terry Freight</h4>
        <p>Standard loop terry toweling traps large volumes of dead air within its loops. In ocean and truck freight billed on volumetric cube, brands spend significant capital shipping empty air.</p>
        <p>DSC's engineered <strong>honeycomb waffle fabrics</strong> feature an alveolar weave that flattens completely in cartons, only blooming to full moisture-retention loft upon first wash.</p>

        <div class="my-6 border border-dsc-line bg-slate-50 p-5 font-mono text-xs">
          <div class="font-bold text-dsc-navy uppercase mb-3">Freight Simulation: 40ft High-Cube Shipping Container</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-dsc-body">
            <div class="p-3 bg-white border border-dsc-line">
              <div class="font-semibold text-dsc-navy mb-1">Classic Terry Towels (550 GSM)</div>
              <ul class="space-y-1 text-[11px] text-dsc-muted font-mono">
                <li>• Units per Container: <span class="text-dsc-navy font-bold">14,200 pieces</span></li>
                <li>• Folded Unit Volume: <span class="text-dsc-navy font-medium">4.8 dm³ / piece</span></li>
                <li>• Freight Unit Cost: <span class="text-dsc-navy font-semibold">1.00x Baseline</span></li>
              </ul>
            </div>
            <div class="p-3 bg-white border border-dsc-line">
              <div class="font-semibold text-dsc-navy mb-1">Honeycomb Waffle Towels (420 GSM)</div>
              <ul class="space-y-1 text-[11px] text-dsc-muted font-mono">
                <li>• Units per Container: <span class="text-emerald-700 font-bold">19,600 pieces (+38%)</span></li>
                <li>• Folded Unit Volume: <span class="text-emerald-700 font-bold">3.1 dm³ / piece</span></li>
                <li>• Freight Unit Cost: <span class="text-emerald-700 font-bold">-27.5% per piece</span></li>
              </ul>
            </div>
          </div>
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Rapid Line Drying and Resort Use</h4>
        <p>Beyond export freight savings, waffle weave bath linens dry <strong>up to 40% faster on towel warmers or clotheslines</strong>, making them the preferred choice for eco-conscious spa resorts and contemporary lifestyle retailers.</p>
      `
    }
  },

  /* ================= MARCOS HISTÓRICOS & EVENTOS DSC ================= */
  {
    id: "bodas-de-prata",
    pt: {
      category: "COMEMORAÇÃO HISTÓRICA",
      date: "Est. 2001 &middot; 25 Anos",
      readTime: "4 min de leitura",
      title: "Celebração das Bodas de Prata da DSC: 25 Anos de Engenharia Têxtil",
      subtitle: "Um quarto de século de manufatura contínua, inovação e dedicação familiar no coração do Vale do Ave.",
      snippet: "Comemoração de 25 anos de atividade fabril ininterrupta, reunindo a administração, os 46 mestres têxteis e parceiros comerciais num evento de homenagem à dedicação e continuidade geracional.",
      readBtn: "Ler História & Marco",
      ctaBtn: "Contactar a Administração",
      closeBtn: "Fechar",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Marco de Continuidade:</strong> Desde a sua fundação em 2001 em Roriz, Santo Tirso, a DSC consolidou-se como uma das mais respeitadas unidades de tecelagem de felpos e têxteis-lar em Portugal.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. Origens e Herança Familiar</h4>
        <p>A Domingos Silva & Cunha, Lda. (DSC) nasceu da paixão e do saber acumulado de gerações dedicadas à arte da fiação e tecelagem no Norte de Portugal. Ao longo de 25 anos de atividade ininterrupta, a empresa cresceu de uma estrutura fabril tradicional para uma moderna unidade industrial de 4.800 m² cobertos.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. O Capital Humano: 46 Mestres Têxteis</h4>
        <p>A celebração das Bodas de Prata reuniu os 46 colaboradores e mestres tecelões da empresa, muitos dos quais acompanham a DSC desde a sua primeira década. A transição de conhecimento técnico entre mestres seniores e novas gerações de operadores industriais garante a retenção do rigor no controlo visual e dimensional peça a peça.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Visão para o Futuro</h4>
        <p>Com investimentos contínuos em teares eletrónicos de última geração, energia solar e certificações ecológicas GOTS e OEKO-TEX, a DSC entra no seu próximo quarto de século com 85% da produção destinada aos mercados mais exigentes da Europa e América do Norte.</p>
      `
    },
    en: {
      category: "HISTORICAL MILESTONE",
      date: "Est. 2001 &middot; 25 Years",
      readTime: "4 min read",
      title: "DSC Silver Jubilee Celebration: 25 Years of Textile Engineering",
      subtitle: "A quarter-century of continuous manufacturing, innovation, and family dedication in Northern Portugal.",
      snippet: "Celebrating 25 years of uninterrupted industrial weaving, bringing together management, 46 textile artisans, and international partners.",
      readBtn: "Read Full Milestone",
      ctaBtn: "Contact Management",
      closeBtn: "Close",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Industrial Milestone:</strong> Founded in 2001 in Roriz, Santo Tirso, DSC has established itself as one of Portugal's most reputable terry weaving and home textile mills.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. Origins & Family Manufacturing Heritage</h4>
        <p>Domingos Silva & Cunha, Lda. (DSC) was built on decades of generational textile expertise in Northern Portugal's Ave Valley. Over 25 years, the company expanded from traditional weaving into a 4,800 m² state-of-the-art manufacturing facility.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Human Capital: 46 Textile Artisans</h4>
        <p>The Silver Jubilee honored our 46 skilled weavers and operators, many of whom have shaped DSC's quality culture since its founding decade. Knowledge transfer from senior weavers ensures uncompromising single-piece inspection.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Future Vision</h4>
        <p>Equipped with electronic Jacquard looms, rooftop solar energy, and GOTS/OEKO-TEX certifications, DSC embarks on its next 25 years with 85% of production serving top-tier international retailers and hotels.</p>
      `
    }
  },
  {
    id: "pme-lider-excelencia",
    pt: {
      category: "DISTINÇÃO EMPRESARIAL",
      date: "IAPMEI &middot; Distinção Consecutiva",
      readTime: "4 min de leitura",
      title: "Estatuto PME Líder & PME Excelência: Reconhecimento de Solidez e Desempenho",
      subtitle: "Distinção atribuída pelo IAPMEI e Turismo de Portugal que valida a solidez financeira, solvabilidade e governança da DSC.",
      snippet: "Atribuição consecutiva pelo IAPMEI dos galardões de PME Líder e PME Excelência, reconhecendo o desempenho económico-financeiro superior, solidez de balanço e baixos níveis de risco de crédito.",
      readBtn: "Ler Detalhes do Reconhecimento",
      ctaBtn: "Ver Dados Institucionais",
      closeBtn: "Fechar",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Mérito Económico:</strong> O estatuto de PME Líder e PME Excelência reconhece empresas com elevados rácios de autonomia financeira, rentabilidade sustentável e excelente perfil de risco.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. O que representa o Estatuto PME Líder e Excelência?</h4>
        <p>Criado pelo IAPMEI em parceria com os principais bancos portugueses e a CIP, o estatuto PME Líder e PME Excelência distingue as empresas nacionais que se destacam pelos seus indicadores de gestão superior, crescimento sustentável e sólida estrutura de capitais próprios.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Garantia de Estabilidade para Clientes B2B Globais</h4>
        <p>Para marcas internacionais e redes de retalho que confiam a produção das suas coleções à DSC, esta distinção financeira oferece a tranquilidade de operar com um parceiro fabril solvente, com capacidade de autofinanciamento para aquisição de matérias-primas nobres e investimento contínuo em inovação tecnológica.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Pilares da Gestão DSC</h4>
        <ul class="list-disc pl-5 space-y-1.5 text-xs font-light text-dsc-body my-3">
          <li><strong>Autonomia Financeira Superior a 45%:</strong> Balanço saudável e reinvestimento sistemático de lucros na modernização da fábrica;</li>
          <li><strong>Baixo Risco de Crédito (Rating AAA/AA):</strong> Cumprimento escrupuloso de prazos com fornecedores de fios e parceiros;</li>
          <li><strong>Eficiência Operacional:</strong> Rastreabilidade total de custos e controlo de produtividade por tear.</li>
        </ul>
      `
    },
    en: {
      category: "CORPORATE DISTINCTION",
      date: "IAPMEI &middot; Consecutive Distinction",
      readTime: "4 min read",
      title: "PME Líder & PME Excelência: Certified Financial Strength & Performance",
      subtitle: "Official distinction awarded by IAPMEI validating DSC's financial solvency, balance sheet strength, and governance.",
      snippet: "Recognized with consecutive PME Líder and PME Excelência distinctions for superior economic performance, balance sheet health, and low credit risk.",
      readBtn: "Read Full Details",
      ctaBtn: "View Corporate Data",
      closeBtn: "Close",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Economic Distinction:</strong> The PME Líder and PME Excelência awards honor European manufacturing companies with high equity autonomy, sustainable profitability, and top-tier credit profiles.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. What Does PME Líder & Excelência Signify?</h4>
        <p>Awarded by IAPMEI (Portuguese Institute for SMEs) in conjunction with banking consortiums, this seal identifies market-leading enterprises characterized by exemplary governance and solid financial resilience.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Reliability for Global B2B Brands</h4>
        <p>For international buyers contracting private label runs, this recognition confirms DSC's financial capacity to procure premium certified cotton inventories and sustain high production reliability without supply chain disruptions.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Core Governance Pillars</h4>
        <ul class="list-disc pl-5 space-y-1.5 text-xs font-light text-dsc-body my-3">
          <li><strong>High Equity Autonomy (&gt; 45%):</strong> Robust balance sheet and ongoing reinvestment in industrial weaving technology;</li>
          <li><strong>Top Credit Rating (AAA/AA):</strong> Prompt supplier settlements and dependable commercial ethics;</li>
          <li><strong>Operational Efficiency:</strong> Full cost traceability and per-loom digital monitoring.</li>
        </ul>
      `
    }
  },
  {
    id: "portugal-2020-internacionalizacao",
    pt: {
      category: "EXPANSÃO DE MERCADOS",
      date: "Portugal 2020 / Norte 2020",
      readTime: "5 min de leitura",
      title: "Missões de Internacionalização & Expansão: Da Europa às Américas",
      subtitle: "Como os projetos Portugal 2020 e Norte 2020 consolidaram 85% de quota de exportação para 24+ países.",
      snippet: "Aprovação e execução de projetos de internacionalização dedicados à promoção externa, captação de clientes B2B e consolidação de quota de exportação em mercados sofisticados.",
      readBtn: "Ler Sobre a Expansão",
      ctaBtn: "Sourcing Internacional",
      closeBtn: "Fechar",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Alcance Global:</strong> A presença da DSC nos mercados externos consolidou Portugal como polo de excelência no fabrico de toalhas de banho e têxteis-lar de gama alta.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. Estratégia de Internacionalização</h4>
        <p>Com o apoio dos programas comunitários Portugal 2020 e Norte 2020, a DSC desenvolveu um plano estratégico de prospeção em mercados com elevada exigência qualitativa, incluindo Alemanha, França, Reino Unido, Espanha, Suécia, Dinamarca, Estados Unidos e Canadá.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Presença nos Grandes Circuitos Internacionais</h4>
        <p>A participação em missões empresariais e fóruns internacionais permitiu à DSC estabelecer parcerias duradouras com prestigiadas marcas de retalho de luxo, operadores hoteleiros de 5 estrelas e distribuidores especializados.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Logística Eficiente a Partir do Porto de Leixões</h4>
        <p>Localizada a apenas 45 km do Porto de Leixões e a 38 km do Aeroporto Sá Carneiro, a DSC assegura tempos de trânsito rápidos e entregas pontuais com documentação aduaneira completa (EUR1, ATR, certificados de origem).</p>
      `
    },
    en: {
      category: "MARKET EXPANSION",
      date: "Portugal 2020 / Norte 2020",
      readTime: "5 min read",
      title: "Internationalization & Export Missions: From Europe to the Americas",
      subtitle: "How Portugal 2020 programs helped DSC establish an 85% export quota across 24+ global destinations.",
      snippet: "Execution of co-funded internationalization projects dedicated to overseas trade missions, B2B acquisition, and export growth across luxury retail channels.",
      readBtn: "Read Expansion Story",
      ctaBtn: "International Sourcing",
      closeBtn: "Close",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Global Footprint:</strong> DSC's international market expansion has established Northern Portugal as a premier global manufacturing source for luxury bath linens.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. Export Growth Strategy</h4>
        <p>Backed by European Union structural development frameworks (Portugal 2020 / Norte 2020), DSC executed strategic market entries across high-value markets including Germany, France, the UK, Scandinavia, the USA, and Canada.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Long-Standing Global Partnerships</h4>
        <p>Direct B2B missions enabled DSC to forge multi-year manufacturing relationships with heritage department stores, luxury boutique labels, and contract hospitality operators.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Streamlined Port Logistics</h4>
        <p>Located within 45 km of Leixões Container Port and 38 km from Porto International Airport, DSC guarantees rapid container turnaround and full EUR1/CMR customs clearance.</p>
      `
    }
  },
  {
    id: "modernizacao-parque-jacquard",
    pt: {
      category: "INFRAESTRUTURA & MAQUINARIA",
      date: "4.800 m² &middot; Parque de Teares",
      readTime: "4 min de leitura",
      title: "Modernização Fabril: Parque de Teares Jacquard e Dobby de Alta Precisão",
      subtitle: "Investimento contínuo na nave industrial de Roriz para alcançar 2.500 toneladas anuais de capacidade.",
      snippet: "Ampliação das instalações fabris na Rua Quinta do Pinheiro (Roriz) com investimento em teares eletrónicos Dobby e Jacquard de alta velocidade para tecelagem até 280 cm de largura.",
      readBtn: "Ver Capacidade Fabril",
      ctaBtn: "Agendar Visita à Fábrica",
      closeBtn: "Fechar",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Engenharia de Tecelagem:</strong> A fábrica da DSC dispõe de teares eletrónicos Jacquard e Dobby com sensores óticos de laçada e controlo micrométrico de tensão de urdidura.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. A Nave Industrial de Roriz (Santo Tirso)</h4>
        <p>Com 4.800 m² de área coberta construída na Rua Quinta do Pinheiro, as instalações fabris foram concebidas com layout de fluxo linear otimizado, desde a receção e climatização dos cones de fio de algodão até à tecelagem, inspeção, corte e paletização de exportação.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Versatilidade de Tecelagem Jacquard até 280 cm</h4>
        <p>O parque de teares permite produzir tecidos de felpo com larguras até 280 cm, viabilizando toalhas de praia de grandes dimensões, tapetes de banho pesados e relevos jacquard complexos com logótipos e texturas tridimensionais exclusivas para marcas de luxo.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Monitorização Digital e Controlo Peça a Peça</h4>
        <p>Todos os teares estão integrados em rede com software de controlo em tempo real, monitorizando a densidade de tramas por centímetro e parando instantaneamente em caso de qualquer quebra de fio, garantindo 0% defeitos estruturais.</p>
      `
    },
    en: {
      category: "MILL INFRASTRUCTURE",
      date: "4,800 m² &middot; Loom Park",
      readTime: "4 min read",
      title: "Mill Modernization: High-Speed Jacquard & Dobby Electronic Loom Park",
      subtitle: "Continuous capital investment in Roriz manufacturing plant delivering 2,500 tons of annual capacity.",
      snippet: "Expansion of our industrial plant on Rua Quinta do Pinheiro (Roriz) with high-speed electronic Jacquard and Dobby looms weaving widths up to 280 cm.",
      readBtn: "View Mill Infrastructure",
      ctaBtn: "Schedule Factory Tour",
      closeBtn: "Close",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Weaving Precision:</strong> DSC's weaving shed is equipped with electronic Jacquard and Dobby looms featuring optoelectronic loop sensors and tension controllers.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. The Roriz Mill (Santo Tirso)</h4>
        <p>With 4,800 m² of covered manufacturing space on Rua Quinta do Pinheiro, the plant is optimized for lean material flow: from conditioned yarn storage to high-speed weaving, automated confection, and export palletization.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Jacquard Weaving Versatility up to 280 cm</h4>
        <p>Our loom park weaves terry fabrics up to 280 cm wide, enabling oversized luxury beach towels, heavy contract bath mats, and intricate custom damask reliefs with millimeter accuracy.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Real-Time Quality Telemetry</h4>
        <p>Looms are networked to digital production monitors that track pick density per cm and halt immediately upon thread tension variances, ensuring flawless structural consistency.</p>
      `
    }
  },
  {
    id: "parque-solar-sustentabilidade",
    pt: {
      category: "SUSTENTABILIDADE ESG",
      date: "100% Solar &middot; Zero Resíduos",
      readTime: "4 min de leitura",
      title: "Transição Fotovoltaica & Descarbonização: Rumo ao Fabrico Limpo",
      subtitle: "Instalação de central solar fotovoltaica para autoconsumo na cobertura e certificação de economia circular.",
      snippet: "Instalação de central solar fotovoltaica para autoconsumo na cobertura da fábrica, acompanhada da certificação OEKO-TEX Standard 100 e GOTS para garantia de química limpa e 0% resíduos em aterro.",
      readBtn: "Ler Relatório de Sustentabilidade",
      ctaBtn: "Consultar Certificados",
      closeBtn: "Fechar",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Compromisso Ecológico Real:</strong> Produzir têxteis-lar de excelência com responsabilidade climática, minimizando a pegada carbónica através de energia solar limpa e gestão hídrica avançada.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. Central Solar Fotovoltaica na Cobertura</h4>
        <p>A DSC converteu a cobertura da sua nave fabril numa central solar fotovoltaica de autoconsumo, alimentando os teares e linhas de embalamento com energia 100% renovável nos períodos diurnos de maior consumo industrial.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. 0% de Resíduos Têxteis em Aterro</h4>
        <p>Todas as aparas de corte, ourelas e sobras de fio de algodão são rigorosamente separadas por cor e composição no ponto de corte, sendo encaminhadas para parceiros certificados de desfibragem para reincorporação em fios reciclados (economia circular).</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. Matriz de Certificações Internacionais</h4>
        <ul class="list-disc pl-5 space-y-1 text-xs font-light text-dsc-body my-3">
          <li><strong>OEKO-TEX Standard 100 (Classe I):</strong> Isenção total de substâncias nocivas, seguro para contacto com recém-nascidos;</li>
          <li><strong>GOTS (Global Organic Textile Standard):</strong> Algodão biológico cultivado sem pesticidas sintéticos com rastreabilidade total;</li>
          <li><strong>Sedex / SMETA:</strong> Auditoria ética independente de dignidade e segurança no trabalho.</li>
        </ul>
      `
    },
    en: {
      category: "SUSTAINABILITY ESG",
      date: "100% Solar &middot; Zero Landfill",
      readTime: "4 min read",
      title: "Solar Transition & Decarbonization: Moving Toward Net-Zero Weaving",
      subtitle: "Rooftop photovoltaic solar installation for industrial self-consumption and circular zero-waste operations.",
      snippet: "Rooftop solar photovoltaic installation powering weaving operations, combined with OEKO-TEX Standard 100 and GOTS certifications for clean chemistry and zero landfill waste.",
      readBtn: "Read Sustainability Report",
      ctaBtn: "View Certifications",
      closeBtn: "Close",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Ecological Accountability:</strong> Manufacturing luxury home textiles while safeguarding environmental resources via clean solar energy and closed-loop recycling.
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. Rooftop Photovoltaic Solar Generation</h4>
        <p>DSC converted its factory roof into an industrial photovoltaic solar power station, supplying clean on-site electricity to our weaving looms and automated confection lines during peak daytime production.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. 0% Textile Scrap to Landfill</h4>
        <p>All selvage trimmings, cut scraps, and yarn remnants are sorted at the source by fiber type and sent to certified mechanical regeneration partners for circular upcycling.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">3. International Verification Matrix</h4>
        <ul class="list-disc pl-5 space-y-1 text-xs font-light text-dsc-body my-3">
          <li><strong>OEKO-TEX Standard 100 (Class I):</strong> Rigorous toxicological clearance, certified safe for infant skin contact;</li>
          <li><strong>GOTS (Global Organic Textile Standard):</strong> Pesticide-free organic cotton with field-to-fabric audit trails;</li>
          <li><strong>Sedex / SMETA:</strong> Third-party social accountability and worker welfare compliance.</li>
        </ul>
      `
    }
  },
  {
    id: "foruns-cluster-citeve-atp",
    pt: {
      category: "ECOSSISTEMA SETORIAL",
      date: "ATP &middot; CITEVE &middot; Inovação",
      readTime: "4 min de leitura",
      title: "Participação Ativa no Cluster Têxtil: Fóruns CITEVE, ATP e Transição Digital",
      subtitle: "A cooperação técnica no Vale do Ave para liderar as novas exigências de rastreabilidade europeia.",
      snippet: "Participação nos encontros de inovação e sustentabilidade do cluster têxtil português, preparando a arquitetura de rastreabilidade digital e QR Code estruturado para a regulamentação europeia ESPR.",
      readBtn: "Ler Participação Setorial",
      ctaBtn: "Falar com Engenharia DSC",
      closeBtn: "Fechar",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Liderança de Cluster:</strong> A DSC integra as iniciativas de inovação do cluster têxtil do Norte de Portugal, trabalhando em conjunto com os centros tecnológicos CITEVE e a Associação Têxtil e Vestuário de Portugal (ATP).
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. O Polo Tecnológico do Vale do Ave</h4>
        <p>O ecossistema têxtil português reúne a maior densidade de conhecimento fabril, engenharia de fios e enobrecimento da Europa. A DSC colabora com laboratórios acreditados para testes de inflamabilidade, solidez de cor e ensaios mecânicos de tração.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Preparação para o Passaporte Digital Europeu</h4>
        <p>Nos grupos de trabalho setoriais, a equipa técnica da DSC tem estado na linha da frente da definição dos formatos de interoperabilidade de dados para etiquetagem inteligente e passaporte digital de produto (DPP), garantindo que as marcas parceiras estejam prontas para a legislação europeia de 2026/2027.</p>
      `
    },
    en: {
      category: "INDUSTRY ECOSYSTEM",
      date: "ATP &middot; CITEVE &middot; Innovation",
      readTime: "4 min read",
      title: "Textile Cluster Leadership: CITEVE, ATP Forums & Digital Transition",
      subtitle: "Collaborating within Portugal's textile innovation ecosystem to pioneer EU digital traceability standards.",
      snippet: "Active participation in Portuguese textile cluster sustainability forums, preparing digital traceability architectures and structured QR codes for EU ESPR regulations.",
      readBtn: "Read Industry Insight",
      ctaBtn: "Talk with DSC Engineering",
      closeBtn: "Close",
      content: `
        <div class="mb-6 p-4 bg-dsc-canvas border-l-2 border-dsc-gold font-sans text-xs text-dsc-navy leading-relaxed">
          <strong>Cluster Innovation:</strong> DSC actively participates in Northern Portugal's textile R&D consortiums alongside technology center CITEVE and the Portuguese Textile Association (ATP).
        </div>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">1. The Ave Valley Textile Hub</h4>
        <p>Northern Portugal hosts Europe's densest and most advanced textile engineering cluster. DSC collaborates with accredited testing laboratories to validate flammability, colorfastness, and tensile performance.</p>

        <h4 class="font-serif text-lg font-medium text-dsc-navy mt-6 mb-2">2. Spearheading Digital Product Passports (DPP)</h4>
        <p>Through industry workgroups, DSC technical leadership helps define open data schemas for smart sewn-in labeling, ensuring our private label partners remain ahead of upcoming EU 2026/2027 trade compliance mandates.</p>
      `
    }
  }
];

let activeArticleId = null;

function getBlogLang() {
  if (typeof window.getCurrentLanguage === 'function') {
    return window.getCurrentLanguage();
  }
  const saved = localStorage.getItem('dsc_lang');
  return saved === 'en' ? 'en' : 'pt';
}

function createArticleCardHTML(art, lang) {
  const data = art[lang] || art.pt;
  return `
    <article onclick="openArticleById('${art.id}')" class="p-7 sm:p-8 bg-dsc-white hover:bg-slate-50 transition-all duration-200 cursor-pointer flex flex-col justify-between h-full rounded-none interactive-card group border border-dsc-line shadow-sm">
      <div>
        <div class="font-mono text-[10px] text-dsc-navy uppercase tracking-widest mb-3.5 flex items-center justify-between">
          <span class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-dsc-gold micro-dot-pulse"></span>
            <span class="font-medium text-dsc-navy">${data.category}</span>
          </span>
          <span class="text-dsc-muted font-normal text-[11px]">${data.readTime}</span>
        </div>
        <h3 class="font-serif text-xl sm:text-2xl font-normal tracking-tight text-dsc-navy mb-3 leading-snug group-hover:text-dsc-gold transition-colors line-clamp-2">
          ${data.title}
        </h3>
        <p class="text-xs text-dsc-body font-light leading-relaxed mb-6 line-clamp-3">
          ${data.snippet}
        </p>
      </div>
      <div class="flex justify-between items-center border-t border-dsc-line/80 pt-4 mt-auto">
        <span class="font-mono text-[10px] uppercase tracking-widest text-dsc-muted">${data.date}</span>
        <span class="arrow-trigger font-sans text-xs uppercase font-medium tracking-wider text-dsc-navy flex items-center gap-1.5 group-hover:text-dsc-gold transition-colors">
          <span>${data.readBtn || (lang === 'en' ? 'Read Article' : 'Ler Artigo')}</span>
          <span class="arrow-target text-dsc-gold font-bold">&rarr;</span>
        </span>
      </div>
    </article>
  `;
}

function renderBlogCards() {
  const blogContainer = document.getElementById('blog-grid');
  const eventsContainer = document.getElementById('events-grid');
  const lang = getBlogLang();

  // 1. Render 6 Primary Technical Articles
  if (blogContainer) {
    const primaryArticles = DSC_ARTICLES.slice(0, 6);
    blogContainer.innerHTML = primaryArticles.map(art => createArticleCardHTML(art, lang)).join('');
  }

  // 2. Render 6 Historical / Event Milestone Articles with identical styling
  if (eventsContainer) {
    const eventArticles = DSC_ARTICLES.slice(6, 12);
    eventsContainer.innerHTML = eventArticles.map(art => createArticleCardHTML(art, lang)).join('');
  }
}

window.openArticleById = function(id) {
  const article = DSC_ARTICLES.find(a => a.id === id);
  if (!article) return;

  activeArticleId = id;
  const lang = getBlogLang();
  const data = article[lang] || article.pt;

  const modal = document.getElementById('article-reader-modal');
  if (!modal) return;

  const catEl = document.getElementById('reader-category');
  const dateEl = document.getElementById('reader-date');
  const titleEl = document.getElementById('reader-title');
  const subEl = document.getElementById('reader-subtitle');
  const bodyEl = document.getElementById('reader-body');
  const sampleBtn = document.getElementById('reader-sample-btn');

  if (catEl) catEl.innerText = data.category;
  if (dateEl) dateEl.innerHTML = `${data.date} &bull; ${data.readTime}`;
  if (titleEl) titleEl.innerText = data.title;
  if (subEl) subEl.innerText = data.subtitle;
  if (bodyEl) bodyEl.innerHTML = data.content;

  if (sampleBtn) {
    sampleBtn.innerText = `${data.ctaBtn} →`;
    sampleBtn.href = `contactos.html?subject=${encodeURIComponent(data.title)}`;
  }

  window.history.replaceState(null, null, `#${article.id}`);

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.closeArticleModal = function() {
  const modal = document.getElementById('article-reader-modal');
  if (!modal) return;

  activeArticleId = null;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';

  window.history.replaceState(null, null, window.location.pathname);
};

document.addEventListener('DOMContentLoaded', () => {
  renderBlogCards();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeArticleModal();
  });

  const modal = document.getElementById('article-reader-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeArticleModal();
    });
  }

  // Listen for languageChanged event to re-render in real-time
  window.addEventListener('languageChanged', (e) => {
    renderBlogCards();
    if (activeArticleId) {
      openArticleById(activeArticleId);
    }
  });

  // Handle URL hash directly on initial load
  if (window.location.hash) {
    const articleId = window.location.hash.replace('#', '');
    if (articleId) openArticleById(articleId);
  }
});
