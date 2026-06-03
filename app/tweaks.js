/* TYT Matematik — Tweaks Panel
 * Tema, aksan rengi, animasyon yoğunluğu kontrolleri
 */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accent": "purple",
  "anim": "full",
  "textSize": "normal"
}/*EDITMODE-END*/;

const TWEAK_KEY = 'tyt_matematik_tweaks';

function loadTweaks() {
  try {
    const s = localStorage.getItem(TWEAK_KEY);
    if (s) return { ...TWEAK_DEFAULTS, ...JSON.parse(s) };
  } catch (e) {}
  return { ...TWEAK_DEFAULTS };
}

function saveTweaks(t) {
  try { localStorage.setItem(TWEAK_KEY, JSON.stringify(t)); } catch (e) {}
  // persist to parent if running in editor frame
  if (window.parent !== window) {
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: t }, '*');
    } catch (e) {}
  }
}

function applyTweaks(t) {
  const root = document.documentElement;
  root.setAttribute('data-theme', t.theme);
  root.setAttribute('data-accent', t.accent);
  root.setAttribute('data-anim', t.anim);
  root.setAttribute('data-text-size', t.textSize);
}

let tweakState = loadTweaks();
applyTweaks(tweakState);

// ────────────────────────────────────────────────────────────
// Panel Rendering
// ────────────────────────────────────────────────────────────

function ensurePanel() {
  let panel = document.querySelector('.tweaks-panel');
  if (panel) return panel;
  panel = document.createElement('div');
  panel.className = 'tweaks-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Tweaks');
  document.body.appendChild(panel);
  return panel;
}

function renderPanel() {
  const panel = ensurePanel();
  panel.innerHTML = `
    <header>
      <h3>Tweaks</h3>
      <button class="icon-btn" data-tweak-act="close" aria-label="Kapat" style="background:transparent;width:28px;height:28px">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </header>

    <section>
      <div class="label">Tema</div>
      <div class="seg">
        <button class="${tweakState.theme === 'dark' ? 'active' : ''}" data-tweak-act="set" data-key="theme" data-value="dark">🌙 Koyu</button>
        <button class="${tweakState.theme === 'light' ? 'active' : ''}" data-tweak-act="set" data-key="theme" data-value="light">☀ Açık</button>
      </div>
    </section>

    <section>
      <div class="label">Aksan Rengi</div>
      <div class="swatches">
        <button class="swatch ${tweakState.accent === 'purple' ? 'active' : ''}" data-tweak-act="set" data-key="accent" data-value="purple"
                style="background:linear-gradient(135deg,#7C77FF,#5852D9)" aria-label="Mor"></button>
        <button class="swatch ${tweakState.accent === 'pink' ? 'active' : ''}" data-tweak-act="set" data-key="accent" data-value="pink"
                style="background:linear-gradient(135deg,#FF6584,#D94468)" aria-label="Pembe"></button>
        <button class="swatch ${tweakState.accent === 'teal' ? 'active' : ''}" data-tweak-act="set" data-key="accent" data-value="teal"
                style="background:linear-gradient(135deg,#4ECDC4,#2DA59C)" aria-label="Turkuaz"></button>
        <button class="swatch ${tweakState.accent === 'amber' ? 'active' : ''}" data-tweak-act="set" data-key="accent" data-value="amber"
                style="background:linear-gradient(135deg,#F7971E,#C97608)" aria-label="Amber"></button>
      </div>
    </section>

    <section>
      <div class="label">Animasyon Yoğunluğu</div>
      <div class="seg">
        <button class="${tweakState.anim === 'full' ? 'active' : ''}" data-tweak-act="set" data-key="anim" data-value="full">Tam</button>
        <button class="${tweakState.anim === 'low' ? 'active' : ''}" data-tweak-act="set" data-key="anim" data-value="low">Hafif</button>
        <button class="${tweakState.anim === 'off' ? 'active' : ''}" data-tweak-act="set" data-key="anim" data-value="off">Kapalı</button>
      </div>
    </section>

    <section>
      <div class="label">Metin Boyutu</div>
      <div class="seg">
        <button class="${tweakState.textSize === 'normal' ? 'active' : ''}" data-tweak-act="set" data-key="textSize" data-value="normal">Normal</button>
        <button class="${tweakState.textSize === 'large' ? 'active' : ''}" data-tweak-act="set" data-key="textSize" data-value="large">Büyük</button>
        <button class="${tweakState.textSize === 'xlarge' ? 'active' : ''}" data-tweak-act="set" data-key="textSize" data-value="xlarge">Çok Büyük</button>
      </div>
      <div class="text-preview">Örnek: Doğal sayılar kümesi N ile gösterilir.</div>
    </section>

    <button class="reset" data-tweak-act="reset">Varsayılana sıfırla</button>
  `;
}

function openTweaks() {
  const panel = ensurePanel();
  renderPanel();
  panel.classList.add('open');
}

function closeTweaks() {
  const panel = document.querySelector('.tweaks-panel');
  if (panel) panel.classList.remove('open');
  if (window.parent !== window) {
    try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (e) {}
  }
}

window.openTweaks = openTweaks;
window.closeTweaks = closeTweaks;

document.addEventListener('click', e => {
  const target = e.target.closest('[data-tweak-act]');
  if (!target) {
    // close panel if clicked outside
    const panel = document.querySelector('.tweaks-panel.open');
    if (panel && !e.target.closest('.tweaks-panel') && !e.target.closest('[data-act="open-tweaks"]')) {
      closeTweaks();
    }
    return;
  }
  const act = target.dataset.tweakAct;
  if (act === 'close') closeTweaks();
  else if (act === 'reset') {
    tweakState = { ...TWEAK_DEFAULTS };
    applyTweaks(tweakState);
    saveTweaks(tweakState);
    renderPanel();
  } else if (act === 'set') {
    const key = target.dataset.key;
    const value = target.dataset.value;
    tweakState[key] = value;
    applyTweaks(tweakState);
    saveTweaks(tweakState);
    renderPanel();
  }
});

// Listen for host-driven mode toggles
window.addEventListener('message', e => {
  if (!e.data || typeof e.data !== 'object') return;
  if (e.data.type === '__activate_edit_mode') openTweaks();
  if (e.data.type === '__deactivate_edit_mode') closeTweaks();
});

// Announce availability
setTimeout(() => {
  if (window.parent !== window) {
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}
  }
}, 50);
