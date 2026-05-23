// MimoKitchen — Fridge to Recipe · AI Chef
// Free, no-key. Pollinations.ai → MiMo V2.5.

const $ = (id) => document.getElementById(id);
const qs = (s, p = document) => p.querySelector(s);
const qsa = (s, p = document) => Array.from(p.querySelectorAll(s));

const T = {
  en: {
    eyebrow: '100T · Powered by Xiaomi MiMo V2.5',
    h1Pre: "What's in your fridge, ",
    h1Em: 'cooked three ways',
    h1Post: '.',
    lead: 'Tell MimoKitchen the ingredients you have. Get three recipes back — fast, fancy, healthy — each with its own steps, prep time, and leftover ideas.',
    metaIngredients: 'ingredients',
    metaIngredientsLabel: 'min',
    metaRecipes: 'recipes',
    metaRecipesLabel: 'per cook',
    metaFree: 'Free',
    metaFreeNo: 'no key',
    metaPrivate: 'Private',
    metaPrivateNo: 'no upload',
    scanLabel: "What's in your fridge?",
    placeholder: 'tomato, garlic, basil, pasta…',
    inputHintPre: 'Press',
    inputHintMid: 'Enter',
    inputHintPost: 'or comma to add. Type at least 3 ingredients.',
    quickLabel: 'Common pantry',
    quickItems: ['salt', 'pepper', 'olive oil', 'garlic', 'onion', 'butter', 'eggs', 'flour', 'rice', 'pasta', 'soy sauce', 'lemon', 'chicken', 'tomato', 'cheese'],
    filterLabel: 'Filters',
    filters: {
      quick: 'Under 20 min',
      vegetarian: 'Vegetarian',
      halal: 'Halal',
      vegan: 'Vegan',
      glutenFree: 'Gluten-free',
      lowCarb: 'Low-carb',
    },
    cook: 'Cook three ways',
    errMin: 'Add at least 3 ingredients.',
    errFetch: "Couldn't reach the kitchen. Try again in a moment.",
    errBusy: "Kitchen is busy. Wait 20 seconds and tap Cook again.",
    errParse: "Recipe came back malformed. Cooking again…",
    loadingFetch: 'Browsing the pantry…',
    loadingCompose: 'Three chefs at the stove…',
    loadingPlate: 'Plating up…',
    resultEyebrow: 'Three recipes ready',
    resultTitleTpl: 'From {n} ingredients, {fast}, {fancy}, and {healthy}.',
    resultTags: '{ingredients} · {filters}',
    tabFastEyebrow: '◯ Fast lane',
    tabFancyEyebrow: '◐ Slow craft',
    tabHealthyEyebrow: '● Light and bright',
    statTime: 'Total time',
    statServings: 'Servings',
    statDifficulty: 'Difficulty',
    statTimeUnit: 'min',
    statServingsUnit: '',
    sectionSteps: 'Steps',
    sectionTips: 'Chef notes',
    sectionIngredients: 'Ingredients',
    sectionLeftover: 'Got leftovers?',
    haveLabel: 'You have',
    needLabel: 'You\'ll need',
    aboutEyebrow: 'How it works',
    aboutH2: 'Three chefs in your pocket, no key needed.',
    aboutP1: "MimoKitchen is a multi-stage agent pipeline. You list what's in your fridge — the kitchen does the rest. Three recipes appear: a fast lane for tonight, a slow craft for the weekend, and something light and bright in between.",
    aboutP2: 'Free. Read-only. No signup, no upload, no key. Your ingredient list never leaves the page except as a prompt to MiMo V2.5 via Pollinations.',
    pipe1Title: 'Pantry parser',
    pipe1Desc: 'Normalizes your messy comma-separated ingredients into a clean grocery list.',
    pipe2Title: 'Cuisine matcher',
    pipe2Desc: 'Detects which cuisines your ingredients lean toward — Italian, Japanese, Indonesian, Mexican.',
    pipe3Title: 'Three chefs',
    pipe3Desc: 'MiMo V2.5 runs three parallel agents: speed, technique, and balance. Each composes its own recipe.',
    pipe4Title: 'Step formatter',
    pipe4Desc: 'Validates JSON, splits prep vs cook, calculates total time, marks ingredients you already have.',
    pipe5Title: 'Leftover agent',
    pipe5Desc: 'Suggests one creative reuse per recipe so nothing goes to waste.',
    footerTag: 'Three recipes from whatever you have. Fast, fancy, healthy. Composed in real time by a kitchen of agents. Free — no key, no signup, no upload.',
    footerColophon1: 'Recipe agents: Xiaomi MiMo V2.5 via Pollinations.',
    footerColophon2: 'No tracking, no analytics, no images uploaded.',
    footerColophon3: 'Hosted on GitHub Pages. Built with Hermes Agent.',
    sourceLink: 'Source',
    mimoOrbitLink: 'MiMo Orbit 100T',
    pollinationsLink: 'Pollinations',
    hermesLink: 'Hermes Agent',
    langBtnAria: 'Switch language',
    themeBtnAria: 'Toggle theme',
    themeLight: 'Light',
    themeDark: 'Dark',
  },
  id: {
    eyebrow: '100T · Didukung Xiaomi MiMo V2.5',
    h1Pre: 'Apa isi kulkasmu, ',
    h1Em: 'dimasak tiga cara',
    h1Post: '.',
    lead: 'Sebutkan bahan yang kamu punya. MimoKitchen kasih tiga resep — cepat, mewah, sehat — masing-masing dengan langkah, waktu prep, dan ide sisa makanan.',
    metaIngredients: 'bahan',
    metaIngredientsLabel: 'min',
    metaRecipes: 'resep',
    metaRecipesLabel: 'per masak',
    metaFree: 'Gratis',
    metaFreeNo: 'tanpa key',
    metaPrivate: 'Privat',
    metaPrivateNo: 'tanpa upload',
    scanLabel: 'Apa isi kulkasmu?',
    placeholder: 'tomat, bawang, kemangi, pasta…',
    inputHintPre: 'Tekan',
    inputHintMid: 'Enter',
    inputHintPost: 'atau koma untuk menambah. Minimal 3 bahan.',
    quickLabel: 'Bumbu dasar',
    quickItems: ['garam', 'merica', 'minyak goreng', 'bawang putih', 'bawang merah', 'mentega', 'telur', 'tepung', 'nasi', 'mie', 'kecap', 'jeruk nipis', 'ayam', 'tomat', 'keju'],
    filterLabel: 'Filter',
    filters: {
      quick: 'Di bawah 20 menit',
      vegetarian: 'Vegetarian',
      halal: 'Halal',
      vegan: 'Vegan',
      glutenFree: 'Bebas gluten',
      lowCarb: 'Rendah karbo',
    },
    cook: 'Masak tiga cara',
    errMin: 'Tambah minimal 3 bahan.',
    errFetch: 'Dapur tidak terjangkau. Coba lagi sebentar.',
    errBusy: 'Dapur lagi sibuk. Tunggu 20 detik lalu tekan Masak lagi.',
    errParse: 'Resep agak berantakan. Memasak ulang…',
    loadingFetch: 'Membuka isi pantry…',
    loadingCompose: 'Tiga chef di kompor…',
    loadingPlate: 'Plating…',
    resultEyebrow: 'Tiga resep siap',
    resultTitleTpl: 'Dari {n} bahan, {fast}, {fancy}, dan {healthy}.',
    resultTags: '{ingredients} · {filters}',
    tabFastEyebrow: '◯ Jalur cepat',
    tabFancyEyebrow: '◐ Karya lambat',
    tabHealthyEyebrow: '● Ringan dan segar',
    statTime: 'Total waktu',
    statServings: 'Porsi',
    statDifficulty: 'Tingkat',
    statTimeUnit: 'mnt',
    statServingsUnit: '',
    sectionSteps: 'Langkah',
    sectionTips: 'Catatan chef',
    sectionIngredients: 'Bahan',
    sectionLeftover: 'Sisa makanan?',
    haveLabel: 'Kamu punya',
    needLabel: 'Kamu butuh',
    aboutEyebrow: 'Cara kerjanya',
    aboutH2: 'Tiga chef di sakumu, tanpa key.',
    aboutP1: 'MimoKitchen adalah pipeline multi-agen. Sebut isi kulkasmu — dapur kerja sisanya. Tiga resep muncul: jalur cepat untuk malam ini, karya lambat untuk akhir minggu, dan yang ringan-segar di antaranya.',
    aboutP2: 'Gratis. Read-only. Tanpa daftar, tanpa upload, tanpa key. Daftar bahanmu tidak pernah meninggalkan halaman kecuali sebagai prompt ke MiMo V2.5 via Pollinations.',
    pipe1Title: 'Parser pantry',
    pipe1Desc: 'Menormalkan daftar bahan koma-pisah jadi daftar belanja yang rapi.',
    pipe2Title: 'Pencocok masakan',
    pipe2Desc: 'Mendeteksi arah masakan dari bahanmu — Indonesia, Italia, Jepang, Meksiko.',
    pipe3Title: 'Tiga chef',
    pipe3Desc: 'MiMo V2.5 jalankan tiga agen paralel: kecepatan, teknik, keseimbangan. Tiap-tiap menulis resepnya.',
    pipe4Title: 'Pemformat langkah',
    pipe4Desc: 'Validasi JSON, pisahkan prep vs masak, hitung total waktu, tandai bahan yang sudah kamu punya.',
    pipe5Title: 'Agen sisa makanan',
    pipe5Desc: 'Saran satu cara kreatif memakai sisa per resep biar tidak terbuang.',
    footerTag: 'Tiga resep dari apa pun yang kamu punya. Cepat, mewah, sehat. Disusun real-time oleh dapur agen. Gratis — tanpa key, tanpa daftar, tanpa upload.',
    footerColophon1: 'Agen resep: Xiaomi MiMo V2.5 via Pollinations.',
    footerColophon2: 'Tanpa tracking, tanpa analytics, tanpa upload gambar.',
    footerColophon3: 'Di-host di GitHub Pages. Dibangun dengan Hermes Agent.',
    sourceLink: 'Source',
    mimoOrbitLink: 'MiMo Orbit 100T',
    pollinationsLink: 'Pollinations',
    hermesLink: 'Hermes Agent',
    langBtnAria: 'Ganti bahasa',
    themeBtnAria: 'Ganti tema',
    themeLight: 'Terang',
    themeDark: 'Gelap',
  },
};

const state = {
  lang: localStorage.getItem('mk_lang') || 'en',
  theme: localStorage.getItem('mk_theme') || 'light',
  ingredients: [],
  filters: new Set(),
  recipes: null,
  activeTab: 0,
  currentLoadKey: null,
  busy: false,
};

const t = (k) => T[state.lang][k] || k;

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ─── i18n / theme ───
function applyLang() {
  document.documentElement.lang = state.lang;
  $('langBtn').textContent = state.lang === 'en' ? 'EN' : 'ID';
  $('langBtn').setAttribute('aria-label', t('langBtnAria'));
  $('themeBtn').setAttribute('aria-label', t('themeBtnAria'));

  $('eyebrow').textContent = t('eyebrow');
  $('heroH1').innerHTML = `${escapeHtml(t('h1Pre'))}<em>${escapeHtml(t('h1Em'))}</em>${escapeHtml(t('h1Post'))}`;
  $('heroLead').textContent = t('lead');
  $('heroMeta').innerHTML = `
    <span><b>3+</b> ${t('metaIngredients')}</span>
    <span><b>3</b> ${t('metaRecipes')} ${t('metaRecipesLabel')}</span>
    <span><b>${t('metaFree')}</b> · ${t('metaFreeNo')}</span>
    <span><b>${t('metaPrivate')}</b> · ${t('metaPrivateNo')}</span>`;

  $('scanLabel').textContent = t('scanLabel');
  $('ingredientIn').placeholder = t('placeholder');
  $('ingredientHint').innerHTML = `${escapeHtml(t('inputHintPre'))} <b>${escapeHtml(t('inputHintMid'))}</b> ${escapeHtml(t('inputHintPost'))}`;

  $('quickLabel').textContent = t('quickLabel');
  $('quickGrid').innerHTML = T[state.lang].quickItems
    .map((x) => `<button class="quick-btn" type="button" data-add="${escapeHtml(x)}">${escapeHtml(x)}</button>`)
    .join('');
  qsa('.quick-btn').forEach((el) => {
    el.addEventListener('click', () => {
      addIngredient(el.dataset.add);
      $('ingredientIn').focus();
    });
  });

  $('filterLabel').textContent = t('filterLabel');
  const filters = T[state.lang].filters;
  $('filterGrid').innerHTML = Object.entries(filters)
    .map(
      ([k, label]) =>
        `<button class="filter-btn${state.filters.has(k) ? ' on' : ''}" type="button" data-filter="${k}">${escapeHtml(label)}</button>`
    )
    .join('');
  qsa('.filter-btn').forEach((el) => {
    el.addEventListener('click', () => {
      const k = el.dataset.filter;
      if (state.filters.has(k)) state.filters.delete(k);
      else state.filters.add(k);
      el.classList.toggle('on');
    });
  });

  $('cookBtn').textContent = t('cook');
  if ($('loadBox').classList.contains('on') && state.currentLoadKey) {
    $('loadMsg').textContent = t(state.currentLoadKey);
  }

  $('aboutEyebrow').textContent = t('aboutEyebrow');
  $('aboutH2').textContent = t('aboutH2');
  $('aboutP1').textContent = t('aboutP1');
  $('aboutP2').textContent = t('aboutP2');
  $('aboutPipeline').innerHTML = [1, 2, 3, 4, 5]
    .map(
      (n) => `
    <div class="pipe-step">
      <span class="num">0${n}</span>
      <div class="title">${escapeHtml(t('pipe' + n + 'Title'))}</div>
      <div class="desc">${escapeHtml(t('pipe' + n + 'Desc'))}</div>
    </div>`
    )
    .join('');

  $('footerTag').textContent = t('footerTag');
  $('footerColophon').innerHTML = `${escapeHtml(t('footerColophon1'))}<br>${escapeHtml(
    t('footerColophon2')
  )}<br>${escapeHtml(t('footerColophon3'))}`;
  $('footerLinks').innerHTML = `
    <a href="https://pollinations.ai" target="_blank" rel="noopener">${escapeHtml(t('pollinationsLink'))}</a>
    <a href="https://huolinger010.github.io/mimoorbit/" target="_blank" rel="noopener">${escapeHtml(t('mimoOrbitLink'))}</a>
    <a href="https://github.com/gyoomei/mimokitchen" target="_blank" rel="noopener">${escapeHtml(t('sourceLink'))}</a>`;

  renderChips();
  if (state.recipes) renderResult();
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.style.colorScheme = state.theme;
  document.querySelector('meta[name="theme-color"]').setAttribute('content', state.theme === 'dark' ? '#1c1814' : '#fdf6e3');
  $('themeBtn').textContent = state.theme === 'dark' ? t('themeLight') : t('themeDark');
}

// ─── chips / ingredients ───
function addIngredient(raw) {
  const v = raw.trim().toLowerCase();
  if (!v) return;
  if (state.ingredients.includes(v)) return;
  if (state.ingredients.length >= 30) return;
  state.ingredients.push(v);
  renderChips();
}
function removeIngredient(v) {
  state.ingredients = state.ingredients.filter((x) => x !== v);
  renderChips();
}
function renderChips() {
  $('chipsRow').innerHTML = state.ingredients
    .map(
      (x) => `
    <span class="chip"><span>${escapeHtml(x)}</span><span class="x" data-remove="${escapeHtml(x)}" role="button" tabindex="0" aria-label="Remove">×</span></span>`
    )
    .join('');
  qsa('.chip .x').forEach((el) => {
    el.addEventListener('click', () => removeIngredient(el.dataset.remove));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        removeIngredient(el.dataset.remove);
      }
    });
  });
}

// ─── Pollinations call ───
async function callPollinations(prompt, maxTokens = 1200) {
  const ctrl = new AbortController();
  const tid = setTimeout(() => ctrl.abort(), 60000);
  try {
    const res = await fetch('https://text.pollinations.ai/openai?referrer=mimokitchen', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        model: 'openai-fast',
        messages: [
          { role: 'system', content: 'You are MimoKitchen, a strict JSON-only chef. Output one JSON object. No prose, no markdown fences, no reasoning text.' },
          { role: 'user', content: prompt }
        ],
        referrer: 'mimokitchen',
        temperature: 0.7,
        max_tokens: maxTokens,
      }),
      signal: ctrl.signal,
    });
    if (res.status === 429) throw new Error('pollinations:429');
    if (!res.ok) throw new Error('pollinations:' + res.status);
    const data = await res.json();
    return data?.choices?.[0]?.message?.content || '';
  } finally {
    clearTimeout(tid);
  }
}

function extractJson(text) {
  if (!text) return null;
  const tryParse = (s) => {
    try { return JSON.parse(s); } catch {}
    try { return JSON.parse(s.replace(/,(\s*[}\]])/g, '$1')); } catch {}
    return null;
  };

  // 1. Try the raw text
  let parsed = tryParse(text.trim());
  if (parsed) return parsed;

  // 2. Strip markdown fence
  const fence = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (fence) {
    parsed = tryParse(fence[1].trim());
    if (parsed) return parsed;
  }

  // 3. Find balanced { ... } scan, skipping reasoning prefix
  const start = text.indexOf('{');
  if (start < 0) return null;
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let i = start; i < text.length; i++) {
    const ch = text[i];
    if (escape) { escape = false; continue; }
    if (ch === '\\') { escape = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (inString) continue;
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        const slice = text.slice(start, i + 1);
        parsed = tryParse(slice);
        if (parsed) return parsed;
        break;
      }
    }
  }

  // 4. Last-resort: greedy first { to last }
  const end = text.lastIndexOf('}');
  if (end > start) {
    parsed = tryParse(text.slice(start, end + 1));
    if (parsed) return parsed;
  }
  return null;
}

// ─── recipe generation ───
function buildOnePrompt(variant) {
  const lang = state.lang === 'id' ? 'Indonesian (Bahasa Indonesia)' : 'English';
  const ingredients = state.ingredients.join(', ');
  const filters = Array.from(state.filters);
  const filterDesc = filters.length
    ? filters.map((f) => T[state.lang].filters[f]).join(', ')
    : 'none';

  const variantSpec = {
    fast: 'a FAST weeknight recipe under 20 minutes total time, easy difficulty, simple technique',
    fancy: 'a FANCY weekend recipe with more technique, medium-to-hard difficulty, restaurant-style plating',
    healthy: 'a HEALTHY light recipe, vegetable-forward, fresh flavors, balanced nutrition',
  }[variant];

  return `User has these ingredients: ${ingredients}.
Filters to respect: ${filterDesc}.
Language for ALL strings: ${lang}.

Compose ${variantSpec}.

Output exactly ONE JSON object, no prose, no markdown, no fences. Schema:

{"name":"recipe name","tagline":"one short line no period","time_min":15,"servings":2,"difficulty":"easy","ingredients_have":["3-4 items from user list"],"ingredients_need":["1-3 pantry extras"],"steps":["s1","s2","s3","s4","s5"],"tips":["t1","t2"],"leftover":"one short sentence"}

Constraints:
- Exactly 5 steps, action-verb first, under 100 chars per step
- Exactly 2 tips, under 80 chars per tip
- ALL strings in ${lang}
- Output starts with { and ends with }`;
}

function detectCuisineLean() {
  const i = state.ingredients.join(' ').toLowerCase();
  const cuisines = [];
  if (/(soy|miso|sake|nori|wasabi|dashi|mirin|udon|ramen)/.test(i)) cuisines.push('Japanese');
  if (/(kecap|sambal|terasi|kemiri|santan|serai|laos|tempeh|tahu|kunyit)/.test(i)) cuisines.push('Indonesian');
  if (/(pasta|parmesan|basil|prosciutto|mozzarella|risotto|pesto)/.test(i)) cuisines.push('Italian');
  if (/(tortilla|jalapeno|cilantro|lime|cumin|chipotle|avocado|salsa)/.test(i)) cuisines.push('Mexican');
  if (/(ginger|garlic|sesame|scallion|sriracha|hoisin|five-spice)/.test(i)) cuisines.push('Asian');
  if (/(curry|garam masala|turmeric|coriander|cardamom|paneer)/.test(i)) cuisines.push('South Asian');
  if (/(olive oil|tomato|garlic|herb|lemon|feta)/.test(i) && !cuisines.includes('Italian')) cuisines.push('Mediterranean');
  return cuisines.length ? cuisines.slice(0, 3).join(', ') : (state.lang === 'id' ? 'Bebas' : 'Free-form');
}

async function cookOne(variant) {
  let lastErr = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const raw = await callPollinations(buildOnePrompt(variant), 900);
      const parsed = extractJson(raw);
      if (parsed && Array.isArray(parsed.steps) && parsed.steps.length >= 3) {
        return parsed;
      }
      lastErr = new Error('malformed:' + variant + ':len=' + (raw?.length || 0));
      console.warn(lastErr.message);
    } catch (e) {
      lastErr = e;
      const code = String(e.message || '');
      if (code.includes('429')) {
        // Queue-full from Pollinations — back off increasingly
        await new Promise((r) => setTimeout(r, 3500 + attempt * 2500));
      } else if (code.includes('aborted') || code.includes('Failed to fetch')) {
        await new Promise((r) => setTimeout(r, 2000));
      }
    }
  }
  throw lastErr || new Error('cook failed: ' + variant);
}

async function cook() {
  if (state.busy) return;
  if (state.ingredients.length < 3) {
    showError(t('errMin'));
    return;
  }
  $('errBox').classList.remove('on');
  $('resultBox').classList.remove('on');
  state.busy = true;
  $('cookBtn').disabled = true;

  state.currentLoadKey = 'loadingFetch';
  $('loadBox').classList.add('on');
  $('loadMsg').textContent = t('loadingFetch');
  await new Promise((r) => setTimeout(r, 200));

  state.currentLoadKey = 'loadingCompose';
  $('loadMsg').textContent = t('loadingCompose');

  // Sequential per-variant calls — small responses fit comfortably,
  // each parses cleanly, gentle on Pollinations queue.
  const variants = ['fast', 'fancy', 'healthy'];
  const recipes = { cuisine_lean: detectCuisineLean() };
  let succeeded = 0;
  let lastErr = null;

  for (let i = 0; i < variants.length; i++) {
    const v = variants[i];
    try {
      recipes[v] = await cookOne(v);
      succeeded++;
      // Update load message with progress
      $('loadMsg').textContent = `${t('loadingCompose')} (${succeeded}/3)`;
    } catch (e) {
      lastErr = e;
      console.error('cookOne failed:', v, e.message || e);
    }
    // Larger gap between calls to clear Pollinations queue slot
    if (i < variants.length - 1) {
      await new Promise((r) => setTimeout(r, 2500));
    }
  }

  if (succeeded === 0) {
    const code = String(lastErr?.message || '');
    showError(code.includes('429') ? t('errBusy') : t('errFetch'));
    $('loadBox').classList.remove('on');
    state.busy = false;
    $('cookBtn').disabled = false;
    return;
  }

  state.currentLoadKey = 'loadingPlate';
  $('loadMsg').textContent = t('loadingPlate');
  await new Promise((r) => setTimeout(r, 200));

  state.recipes = recipes;
  state.activeTab = variants.findIndex((v) => recipes[v]);
  if (state.activeTab < 0) state.activeTab = 0;
  $('loadBox').classList.remove('on');
  $('resultBox').classList.add('on');
  state.busy = false;
  $('cookBtn').disabled = false;
  renderResult();
  setTimeout(() => {
    $('resultBox').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function showError(msg) {
  const e = $('errBox');
  e.textContent = msg;
  e.classList.add('on');
}

// ─── render result ───
function renderResult() {
  if (!state.recipes) return;
  const r = state.recipes;
  // Title — use only available recipes
  const fastName = r.fast?.name || '';
  const fancyName = r.fancy?.name || '';
  const healthyName = r.healthy?.name || '';
  const titleNames = [fastName, fancyName, healthyName].filter(Boolean);
  const titleStr = titleNames.length === 3
    ? t('resultTitleTpl').replace('{n}', state.ingredients.length).replace('{fast}', fastName).replace('{fancy}', fancyName).replace('{healthy}', healthyName)
    : `${t('resultEyebrow')}: ${titleNames.join(', ')}`;

  // Header
  const filtersText = Array.from(state.filters)
    .map((f) => T[state.lang].filters[f])
    .join(', ');
  $('resultHeader').innerHTML = `
    <div class="result-eyebrow">${escapeHtml(t('resultEyebrow'))}</div>
    <h2 class="result-title">${escapeHtml(titleStr)}</h2>
    <div class="result-tags"><b>${escapeHtml(state.ingredients.join(', '))}</b>${
    filtersText ? ' · ' + escapeHtml(filtersText) : ''
  } · <b>${escapeHtml(r.cuisine_lean || '')}</b></div>`;

  // Tabs (skip null recipes)
  const tabs = [
    { key: 'fast', recipe: r.fast, eyebrow: t('tabFastEyebrow') },
    { key: 'fancy', recipe: r.fancy, eyebrow: t('tabFancyEyebrow') },
    { key: 'healthy', recipe: r.healthy, eyebrow: t('tabHealthyEyebrow') },
  ].filter((tab) => tab.recipe);
  $('recipeTabs').innerHTML = tabs
    .map(
      (tab, i) => `
    <button class="recipe-tab${i === state.activeTab ? ' on' : ''}" type="button" data-tab="${i}">
      <span class="tab-eyebrow">${escapeHtml(tab.eyebrow)}</span>
      <span class="tab-name">${escapeHtml(tab.recipe?.name || '')}</span>
      <span class="tab-meta">${tab.recipe?.time_min || '?'} ${escapeHtml(t('statTimeUnit'))} · ${escapeHtml(tab.recipe?.difficulty || '')}</span>
    </button>`
    )
    .join('');
  qsa('.recipe-tab').forEach((el) => {
    el.addEventListener('click', () => {
      state.activeTab = parseInt(el.dataset.tab, 10);
      renderResult();
    });
  });

  const active = tabs[state.activeTab].recipe;
  renderRecipePane(active);
}

function renderRecipePane(recipe) {
  if (!recipe) {
    $('recipePane').innerHTML = '';
    return;
  }
  const have = (recipe.ingredients_have || []).map(
    (x) => `<li class="ingredient-have">${escapeHtml(x)}</li>`
  );
  const need = (recipe.ingredients_need || []).map(
    (x) => `<li class="ingredient-need">${escapeHtml(x)}</li>`
  );
  const steps = (recipe.steps || [])
    .map((s) => `<li>${escapeHtml(s)}</li>`)
    .join('');
  const tips = (recipe.tips || [])
    .map((s) => `<li>${escapeHtml(s)}</li>`)
    .join('');

  $('recipePane').innerHTML = `
    <div class="recipe-main">
      <h2>${escapeHtml(recipe.name || '')}</h2>
      <p class="recipe-tagline">${escapeHtml(recipe.tagline || '')}</p>
      <div class="recipe-stats">
        <div class="recipe-stat">
          <div class="label">${escapeHtml(t('statTime'))}</div>
          <div class="value">${escapeHtml(String(recipe.time_min || '?'))} ${escapeHtml(t('statTimeUnit'))}</div>
        </div>
        <div class="recipe-stat">
          <div class="label">${escapeHtml(t('statServings'))}</div>
          <div class="value">${escapeHtml(String(recipe.servings || '?'))}</div>
        </div>
        <div class="recipe-stat">
          <div class="label">${escapeHtml(t('statDifficulty'))}</div>
          <div class="value">${escapeHtml(recipe.difficulty || '?')}</div>
        </div>
      </div>
      <div class="section-title"><span class="ornament">❦</span> ${escapeHtml(t('sectionSteps'))}</div>
      <ol class="steps-list">${steps}</ol>
      ${
        tips
          ? `<div class="tips-block"><h3>${escapeHtml(t('sectionTips'))}</h3><ul>${tips}</ul></div>`
          : ''
      }
    </div>
    <aside class="recipe-side">
      <div class="side-card">
        <h3>${escapeHtml(t('sectionIngredients'))}</h3>
        ${
          have.length
            ? `<div style="font-family:var(--mono);font-size:.66rem;color:var(--basil-deep);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px;">${escapeHtml(t('haveLabel'))}</div><ul class="ingredients-list" style="margin-bottom:16px;">${have.join('')}</ul>`
            : ''
        }
        ${
          need.length
            ? `<div style="font-family:var(--mono);font-size:.66rem;color:var(--tomato-deep);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px;">${escapeHtml(t('needLabel'))}</div><ul class="ingredients-list">${need.join('')}</ul>`
            : ''
        }
      </div>
      ${
        recipe.leftover
          ? `<div class="leftover-card">
        <h3>${escapeHtml(t('sectionLeftover'))}</h3>
        <p>${escapeHtml(recipe.leftover)}</p>
      </div>`
          : ''
      }
    </aside>`;
}

// ─── init ───
function init() {
  applyTheme();
  applyLang();

  $('langBtn').addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'id' : 'en';
    localStorage.setItem('mk_lang', state.lang);
    applyTheme();
    applyLang();
  });
  $('themeBtn').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('mk_theme', state.theme);
    applyTheme();
  });

  const inp = $('ingredientIn');
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const parts = inp.value
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      parts.forEach(addIngredient);
      inp.value = '';
    } else if (e.key === 'Backspace' && !inp.value && state.ingredients.length) {
      removeIngredient(state.ingredients[state.ingredients.length - 1]);
    }
  });
  inp.addEventListener('blur', () => {
    if (inp.value.trim()) {
      inp.value
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .forEach(addIngredient);
      inp.value = '';
    }
  });

  $('cookBtn').addEventListener('click', cook);
}

document.addEventListener('DOMContentLoaded', init);
