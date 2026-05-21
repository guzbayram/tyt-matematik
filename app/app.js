/* TYT Matematik — App Logic
 * State + Navigation + Render + Quiz + Gamification
 */

// ─────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────

const STORAGE_KEY = 'tyt_matematik_progress_v1';

const BADGES = [
  { id: 'starter',       name: 'Başlangıç',       desc: '1 konu tamamla', icon: '🎯', test: p => p.completed.length >= 1 },
  { id: 'sayilar_hero',  name: 'Sayılar Ustası',  desc: 'Ünite 1 bitir',  icon: '🔢', test: p => unitDone(p, 1) },
  { id: 'cebir_hero',    name: 'Cebir Savaşçısı', desc: 'Ünite 2 bitir',  icon: '⚔️', test: p => unitDone(p, 2) },
  { id: 'veri_hero',     name: 'Veri Uzmanı',     desc: 'Ünite 3 bitir',  icon: '📊', test: p => unitDone(p, 3) },
  { id: 'geometri_hero', name: 'Geometri Şamp.',  desc: 'Ünite 4 bitir',  icon: '📐', test: p => unitDone(p, 4) },
  { id: 'perfectionist', name: 'Mükemmeliyetçi',  desc: '5/5 quiz çöz',   icon: '⭐', test: p => Object.values(p.scores).some(s => s >= 100) },
  { id: 'streak_7',      name: 'Haftalık Kahraman',desc: '7 gün üst üste', icon: '🔥', test: p => p.streak >= 7 },
  { id: 'tyt_ready',     name: 'TYT\'ye Hazırım!',desc: 'Hepsini bitir',  icon: '🏆', test: p => p.completed.length >= TOPICS.length }
];

const LEVELS = [
  { id: 1, name: 'Matematik Yolcusu',   min: 0,    max: 500 },
  { id: 2, name: 'Sayı Kaşifi',         min: 500,  max: 1500 },
  { id: 3, name: 'Cebir Öğrencisi',     min: 1500, max: 3000 },
  { id: 4, name: 'Geometri Uzmanı',     min: 3000, max: 5000 },
  { id: 5, name: 'TYT Şampiyonu',       min: 5000, max: 99999 }
];

function defaultProgress() {
  return {
    completed: [...DEMO_COMPLETED],
    scores: { ...DEMO_SCORES },
    weak: [...DEMO_WEAK],
    xp: 1250,
    streak: 5,
    badges: ['starter', 'streak_7'],
    lastSession: new Date().toISOString().slice(0, 10),
    name: 'Öğrenci'
  };
}

let state = {
  screen: 'dashboard', // dashboard | unit | topic | quiz | progress | profile
  unitId: null,
  topicId: null,
  topicTab: 'theory', // theory | example | quiz-intro
  geometryViewer: null, // { topicId, cardIndex }
  quiz: null,         // { topicId, index, answers, correct, finished, selected }
  progress: loadProgress(),
  toast: null
};

function loadProgress() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch (e) {}
  return defaultProgress();
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  } catch (e) {}
}

function resetProgress() {
  state.progress = defaultProgress();
  saveProgress();
}

function unitDone(p, uid) {
  const inUnit = TOPICS.filter(t => t.unit === uid);
  return inUnit.every(t => p.completed.includes(t.id));
}

function unitCounts(uid) {
  const inUnit = TOPICS.filter(t => t.unit === uid);
  const done = inUnit.filter(t => state.progress.completed.includes(t.id)).length;
  return { done, total: inUnit.length };
}

function totalCounts() {
  return { done: state.progress.completed.length, total: TOPICS.length };
}

function currentLevel() {
  return LEVELS.find(l => state.progress.xp >= l.min && state.progress.xp < l.max) || LEVELS[LEVELS.length - 1];
}

function findTopic(id) { return TOPICS.find(t => t.id === id); }
function findUnit(id)  { return UNITS.find(u => u.id === id); }

function recommendedTopic() {
  // weak first
  const weakId = state.progress.weak.find(id => findTopic(id) && findTopic(id).full);
  if (weakId) return { type: 'review', topic: findTopic(weakId) };
  // otherwise next undone with full content
  const next = TOPICS.find(t => t.full && !state.progress.completed.includes(t.id));
  if (next) return { type: 'new', topic: next };
  return { type: 'new', topic: TOPICS.find(t => !state.progress.completed.includes(t.id)) };
}

// ─────────────────────────────────────────────────────────────
// XP / GAMIFICATION
// ─────────────────────────────────────────────────────────────

function awardXP(amount, reason) {
  state.progress.xp += amount;
  showToast(`+${amount} XP · ${reason}`, 'xp');
  checkBadges();
  saveProgress();
  // re-render current screen XP indicators if visible
  if (state.screen === 'dashboard' || state.screen === 'progress') render();
}

function checkBadges() {
  const newBadges = [];
  for (const b of BADGES) {
    if (!state.progress.badges.includes(b.id) && b.test(state.progress)) {
      state.progress.badges.push(b.id);
      newBadges.push(b);
    }
  }
  if (newBadges.length) {
    setTimeout(() => {
      showToast(`🏅 Yeni rozet: ${newBadges[0].name}`, 'success');
    }, 1200);
  }
}

function completeTopic(id) {
  if (!state.progress.completed.includes(id)) {
    state.progress.completed.push(id);
    awardXP(200, 'Konu tamamlandı');
  }
}

// ─────────────────────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────────────────────

function showToast(text, kind = '') {
  const old = document.querySelector('.toast');
  if (old) old.remove();
  const el = document.createElement('div');
  el.className = `toast ${kind}`;
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2900);
}

// ─────────────────────────────────────────────────────────────
// ICONS (inline SVG)
// ─────────────────────────────────────────────────────────────

const ICON = {
  home:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1V9.5z"/></svg>',
  book:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 012-2h13v18H6a2 2 0 01-2-2V5z"/><path d="M4 19a2 2 0 012-2h13"/></svg>',
  chart:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><rect x="6" y="11" width="3" height="8" rx="1"/><rect x="11" y="6" width="3" height="13" rx="1"/><rect x="16" y="14" width="3" height="5" rx="1"/></svg>',
  user:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
  back:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  close:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  check:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>',
  zap:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
  flame:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c0 4-5 5-5 11a5 5 0 0010 0c0-2-1-3-2-4 0 2-1 3-2 3 1-3-1-6-1-10z"/></svg>',
  star:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>',
  fire:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c0 4-5 5-5 11a5 5 0 0010 0c0-2-1-3-2-4 0 2-1 3-2 3 1-3-1-6-1-10z"/></svg>',
  arrow:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  sliders:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>',
  clock:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
};

// ─────────────────────────────────────────────────────────────
// KaTeX rendering helper
// ─────────────────────────────────────────────────────────────

function renderKatex(root) {
  if (!window.katex) return;
  root.querySelectorAll('[data-tex]').forEach(el => {
    try {
      katex.render(el.dataset.tex, el, {
        throwOnError: false,
        displayMode: el.dataset.display === 'true',
        output: 'html'
      });
    } catch (e) {
      el.textContent = el.dataset.tex;
    }
  });
  // inline $..$ in text nodes
  root.querySelectorAll('[data-inline-tex]').forEach(el => {
    const text = el.textContent;
    if (text.includes('$')) {
      el.innerHTML = text.replace(/\$([^$]+)\$/g, (m, tex) => {
        try {
          return katex.renderToString(tex, { throwOnError: false });
        } catch (e) { return m; }
      });
    }
  });
}

function tex(s, display = false) {
  // helper for inline rendering in template literal
  return `<span data-tex="${escapeAttr(s)}" data-display="${display}"></span>`;
}
function escapeAttr(s) { return String(s).replace(/"/g, '&quot;'); }
function escapeHtml(s) { return String(s).replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }

// ─────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────

function go(screen, payload = {}) {
  state.screen = screen;
  Object.assign(state, payload);
  if (screen !== 'topic') state.topicTab = 'theory';
  render();
  // scroll to top
  document.getElementById('app').scrollTop = 0;
  window.scrollTo(0, 0);
}

function openTopic(id) {
  go('topic', { topicId: id });
  // mark XP for reading theory the first time
  if (!state.progress.completed.includes(id)) {
    const t = findTopic(id);
    if (t && t.full) awardXP(10, 'Konu açıldı');
  }
}

function openUnit(id) { go('unit', { unitId: id }); }

function geometryTopics() {
  return TOPICS.filter(t => t.unit === 4 && t.cards && t.cards.length);
}

function geometryViewerData() {
  if (!state.geometryViewer) return null;
  const topic = findTopic(state.geometryViewer.topicId);
  if (!topic || !topic.cards || !topic.cards.length) return null;

  const cardIndex = Math.min(Math.max(state.geometryViewer.cardIndex, 0), topic.cards.length - 1);
  const card = topic.cards[cardIndex];
  const topicList = geometryTopics();
  const topicIndex = topicList.findIndex(t => t.id === topic.id);

  return { topic, card, cardIndex, topicList, topicIndex };
}

function openGeometryViewer(topicId, cardIndex = 0) {
  const topic = findTopic(topicId);
  if (!topic || !topic.cards || !topic.cards.length) return;
  state.geometryViewer = {
    topicId,
    cardIndex: Math.min(Math.max(cardIndex, 0), topic.cards.length - 1),
    zoom: 1,
    panX: 0,
    panY: 0
  };
  render();
  requestGeometryLandscape();
}

function closeGeometryViewer() {
  state.geometryViewer = null;
  releaseGeometryLandscape();
  render();
}

function moveGeometryViewer(delta) {
  const data = geometryViewerData();
  if (!data) return closeGeometryViewer();

  let nextTopic = data.topic;
  let nextIndex = data.cardIndex + delta;

  if (nextIndex >= data.topic.cards.length) {
    nextTopic = data.topicList[data.topicIndex + 1];
    nextIndex = 0;
  } else if (nextIndex < 0) {
    nextTopic = data.topicList[data.topicIndex - 1];
    nextIndex = nextTopic ? nextTopic.cards.length - 1 : 0;
  }

  if (!nextTopic) return;

  state.topicId = nextTopic.id;
  state.geometryViewer = { topicId: nextTopic.id, cardIndex: nextIndex, zoom: 1, panX: 0, panY: 0 };
  render();
}

function requestGeometryLandscape() {
  const viewer = document.querySelector('.geometry-viewer');
  if (!viewer) return;

  try {
    if (viewer.requestFullscreen && !document.fullscreenElement) {
      viewer.requestFullscreen().catch(() => {});
    }
  } catch (e) {}

  try {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch(() => {});
    }
  } catch (e) {}
}

function releaseGeometryLandscape() {
  try {
    if (screen.orientation && screen.orientation.unlock) screen.orientation.unlock();
  } catch (e) {}

  try {
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
  } catch (e) {}
}

function setGeometryZoom(zoom, panX = state.geometryViewer.panX, panY = state.geometryViewer.panY) {
  if (!state.geometryViewer) return;
  const nextZoom = Math.min(Math.max(zoom, 1), 4);
  state.geometryViewer.zoom = nextZoom;
  state.geometryViewer.panX = nextZoom === 1 ? 0 : panX;
  state.geometryViewer.panY = nextZoom === 1 ? 0 : panY;
  updateGeometryTransform();
}

function updateGeometryTransform() {
  if (!state.geometryViewer) return;
  const canvas = document.querySelector('.geometry-viewer-canvas');
  if (!canvas) return;
  canvas.style.setProperty('--zoom', state.geometryViewer.zoom);
  canvas.style.setProperty('--pan-x', `${state.geometryViewer.panX}px`);
  canvas.style.setProperty('--pan-y', `${state.geometryViewer.panY}px`);
  canvas.dataset.zoomed = state.geometryViewer.zoom > 1 ? 'true' : 'false';
}

function renderGeometryViewer() {
  const data = geometryViewerData();
  if (!data) return '';

  const totalTopics = data.topicList.length;
  const alt = data.card.alt || data.topic.title;
  const zoom = state.geometryViewer.zoom || 1;
  const panX = state.geometryViewer.panX || 0;
  const panY = state.geometryViewer.panY || 0;

  return `
    <div class="geometry-viewer" role="dialog" aria-modal="true" aria-label="${escapeAttr(data.topic.title)}">
      <div class="geometry-viewer-top">
        <button class="icon-btn" data-act="geometry-close" aria-label="Kapat">${ICON.close}</button>
        <div class="geometry-viewer-title">
          <span class="geometry-viewer-topic">${escapeHtml(data.topic.title)}</span>
          <span class="geometry-viewer-meta">Konu ${data.topicIndex + 1}/${totalTopics} · Kart ${data.cardIndex + 1}/${data.topic.cards.length}</span>
        </div>
      </div>
      <div class="geometry-viewer-stage" data-geometry-swipe>
        <div class="geometry-viewer-card-number">${data.card.no}</div>
        <div class="geometry-viewer-canvas" data-zoomed="${zoom > 1 ? 'true' : 'false'}" style="--zoom:${zoom};--pan-x:${panX}px;--pan-y:${panY}px">
          <img src="${escapeAttr(data.card.src)}" alt="${escapeAttr(alt)}" draggable="false">
        </div>
      </div>
    </div>
  `;
}

function startQuiz(topicId) {
  state.quiz = {
    topicId,
    index: 0,
    answers: [],   // index of selected option for each question
    finished: false,
    selected: null,
    revealed: false
  };
  go('quiz');
}

// ─────────────────────────────────────────────────────────────
// SCREENS — render functions return HTML strings
// ─────────────────────────────────────────────────────────────

function renderDashboard() {
  const { done, total } = totalCounts();
  const pct = Math.round(done / total * 100);
  const level = currentLevel();
  const lvlPct = Math.round((state.progress.xp - level.min) / (level.max - level.min) * 100);
  const rec = recommendedTopic();
  const recUnit = findUnit(rec.topic.unit);

  return `
    <header class="app-header">
      <div class="title" style="margin-left:4px">
        <span style="display:flex;align-items:center;gap:8px">
          <span style="width:24px;height:24px;border-radius:6px;background:linear-gradient(135deg,var(--accent),var(--accent-lo));display:inline-flex;align-items:center;justify-content:center;color:var(--text-on-accent);font-weight:900;font-size:13px;">∑</span>
          TYT Matematik
        </span>
      </div>
      <button class="icon-btn" data-act="open-tweaks" title="Tweaks">${ICON.sliders}</button>
    </header>

    <div class="dash-hero">
      <div class="greeting">Hoş geldin,</div>
      <div class="user-name">${escapeHtml(state.progress.name)} 👋</div>

      <div class="hero-stats">
        <div class="stat-pill xp">
          <div class="icon">${ICON.zap}</div>
          <div><div class="value">${state.progress.xp.toLocaleString('tr-TR')}</div><div class="label">XP</div></div>
        </div>
        <div class="stat-pill streak">
          <div class="icon">${ICON.flame}</div>
          <div><div class="value">${state.progress.streak} gün</div><div class="label">seri</div></div>
        </div>
        <div class="stat-pill level">
          <div class="icon">${ICON.star}</div>
          <div><div class="value">Lv ${level.id}</div><div class="label">${level.name}</div></div>
        </div>
      </div>

      <div class="level-bar">
        <div class="level-row">
          <span>${level.name}</span>
          <span><b>${state.progress.xp - level.min}</b> / ${level.max - level.min} XP</span>
        </div>
        <div class="progress tall"><i style="width:${lvlPct}%"></i></div>
      </div>
    </div>

    <div class="section">
      <div class="section-title"><span>Bugün için önerilen</span></div>
      <div class="rec-card" data-act="open-topic" data-id="${rec.topic.id}">
        <div class="unit-mark" style="background:${recUnit.color}22;color:${recUnit.color}">${rec.topic.id}</div>
        <div class="body">
          <div class="title">${escapeHtml(rec.topic.title)}</div>
          <div class="meta">
            <span class="chip ${rec.type === 'review' ? 'warning' : 'accent'}">${rec.type === 'review' ? 'Tekrar' : 'Yeni'}</span>
            <span>${ICON.clock} ${rec.topic.minutes} dk</span>
            <span class="stars">${[1,2,3,4,5].map(n => `<span class="${n <= rec.topic.difficulty ? 'on' : ''}">★</span>`).join('')}</span>
          </div>
        </div>
        <div class="arrow">${ICON.arrow}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">
        <span>Toplam ilerleme · ${done}/${total} (%${pct})</span>
      </div>
      <div class="progress tall" style="margin-bottom:var(--space-4)"><i style="width:${pct}%"></i></div>

      <div class="unit-grid">
        ${UNITS.map(u => {
          const c = unitCounts(u.id);
          const upct = Math.round(c.done / c.total * 100);
          return `
            <div class="unit-card" data-act="open-unit" data-id="${u.id}" style="--u-color:${u.color};--u-bg:${u.color}22">
              <div class="glyph">${u.icon}</div>
              <div class="name">${escapeHtml(u.name)}</div>
              <div class="counts"><b>${c.done}</b> / ${c.total} konu</div>
              <div class="progress unit-${u.id}"><i style="width:${upct}%"></i></div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div style="height:32px"></div>
  `;
}

// ─────────────────────────────────────────────────────────────

function renderUnit() {
  const u = findUnit(state.unitId);
  const topics = TOPICS.filter(t => t.unit === u.id);
  const c = unitCounts(u.id);
  const pct = Math.round(c.done / c.total * 100);

  return `
    <header class="app-header">
      <button class="icon-btn back-btn" data-act="back" data-to="dashboard">${ICON.back}</button>
      <div class="title">${escapeHtml(u.name)}</div>
      <div style="width:40px"></div>
    </header>

    <div class="unit-header" style="--u-color:${u.color};--u-bg:${u.color}22">
      <div class="glyph">${u.icon}</div>
      <h1>${escapeHtml(u.name)}</h1>
      <div class="sub">Konu ${u.range[0]} – ${u.range[1]} · ${c.total} başlık</div>
      <div class="progress unit-${u.id} tall"><i style="width:${pct}%"></i></div>
      <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:var(--text-xs);color:var(--text-secondary)">
        <span><b style="color:var(--text-primary)">${c.done}</b> / ${c.total} tamamlandı</span>
        <span>%${pct}</span>
      </div>
    </div>

    <div class="topic-list">
      ${topics.map(t => {
        const isDone = state.progress.completed.includes(t.id);
        const isWeak = state.progress.weak.includes(t.id);
        const score = state.progress.scores[t.id];
        let stateEl = '';
        if (isDone) stateEl = `<div class="state done">${ICON.check}</div>`;
        else if (isWeak) stateEl = `<div class="state weak">!</div>`;
        else if (score != null) stateEl = `<div class="state partial">${score}</div>`;
        else stateEl = `<div class="state" style="background:var(--bg-glass);color:var(--text-tertiary);font-size:14px">·</div>`;

        return `
          <div class="topic-row ${isDone ? 'completed' : ''} ${isWeak ? 'weak' : ''}" data-act="open-topic" data-id="${t.id}">
            <div class="num">${t.id}</div>
            <div class="info">
              <div class="title">${escapeHtml(t.title)}</div>
              <div class="meta">
                <span class="stars">${[1,2,3,4,5].map(n => `<span class="${n <= t.difficulty ? 'on' : ''}">★</span>`).join('')}</span>
                <span>· ${t.minutes} dk</span>
                ${(t.full || (t.cards && t.cards.length)) ? '<span class="chip accent" style="padding:2px 7px;font-size:10px">İçerik var</span>' : ''}
              </div>
            </div>
            ${stateEl}
          </div>
        `;
      }).join('')}
    </div>

    <div style="height:32px"></div>
  `;
}

// ─────────────────────────────────────────────────────────────

function renderTopic() {
  const t = findTopic(state.topicId);
  const u = findUnit(t.unit);
  const isDone = state.progress.completed.includes(t.id);
  const score = state.progress.scores[t.id];

  let body = '';
  if (t.cards && t.cards.length) {
    body = `
      <div class="tab-content">
        <div class="callout info">
          <div>
            <strong>Konu Kartları</strong>
            <div class="copy">${escapeHtml(t.summary)}</div>
          </div>
        </div>
        <div class="geometry-card-list">
          ${t.cards.map((card, i) => `
            <article class="geometry-card" data-geometry-card data-card-index="${i}" tabindex="0" aria-label="${escapeAttr((card.alt || t.title) + ' kartını tam ekranda aç')}">
              <div class="geometry-card-number">${card.no}</div>
              <img src="${escapeAttr(card.src)}" alt="${escapeAttr(card.alt || t.title)}" loading="lazy">
            </article>
          `).join('')}
        </div>
      </div>
    `;
  } else if (!t.full) {
    body = `
      <div class="tab-content">
        <div class="callout info">
          <div>
            <strong>Kısa Özet</strong>
            <div class="copy">${escapeHtml(t.summary)}</div>
          </div>
        </div>
        <div class="card" style="text-align:center;padding:32px 16px;color:var(--text-secondary)">
          <div style="font-size:32px;margin-bottom:8px;opacity:0.7">📝</div>
          <div style="font-weight:600;color:var(--text-primary);margin-bottom:6px">Tam içerik yakında</div>
          <div style="font-size:var(--text-sm)">Bu konu için detaylı teori, çözümlü örnek ve quiz hazırlanıyor.</div>
        </div>
      </div>
    `;
  } else if (state.topicTab === 'theory') {
    body = `
      <div class="tab-content">
        ${t.theory.rules.map((r, i) => `
          <div class="rule">
            <h3>${escapeHtml(r.title)}</h3>
            <div class="formula"><div data-tex="${escapeAttr(r.formula)}" data-display="true"></div></div>
            <div class="tip">${escapeHtml(r.tip)}</div>
          </div>
        `).join('')}

        ${t.theory.warning ? `
          <div class="callout warn">
            <div>
              <strong>⚠ Dikkat</strong>
              <div class="copy">${escapeHtml(t.theory.warning)}</div>
            </div>
          </div>
        ` : ''}

        ${t.theory.facts && t.theory.facts.length ? `
          <div class="facts">
            <h3>Bilmen Gerekenler</h3>
            <ul>
              ${t.theory.facts.map(f => `<li><span data-tex="${escapeAttr(f)}" data-display="true"></span></li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
    `;
  } else if (state.topicTab === 'example') {
    body = `
      <div class="tab-content">
        ${t.examples.map((ex, i) => `
          <div class="example">
            <div class="q">Örnek ${i + 1}. ${escapeHtml(ex.question)}</div>
            <div class="steps">
              ${ex.steps.map((s, si) => `
                <div class="step">
                  <div class="step-n">${si + 1}</div>
                  <div><span data-tex="${escapeAttr(s)}" data-display="false"></span></div>
                </div>
              `).join('')}
            </div>
            <div class="answer"><span data-tex="${escapeAttr(ex.answer)}" data-display="false"></span></div>
          </div>
        `).join('')}

        <div class="callout info">
          <div>
            <strong>İyi gidiyorsun!</strong>
            <div class="copy">Şimdi quiz'e geçip öğrendiklerini test edelim. 5 soruluk hızlı bir alıştırma.</div>
          </div>
        </div>
      </div>
    `;
  } else if (state.topicTab === 'quiz-intro') {
    body = `
      <div class="tab-content">
        <div class="card" style="text-align:center;padding:24px 16px">
          <div style="font-size:48px;margin-bottom:12px">🎯</div>
          <h2 style="font-size:var(--text-xl);font-weight:700;margin-bottom:6px">${t.quiz.length} soruluk quiz</h2>
          <div style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:20px">
            Her doğru +50 XP · Sayfa başında kazanabileceğin: <b style="color:var(--xp-gold)">+${t.quiz.length * 50} XP</b>
            ${score === 100 ? '' : '<br>5/5 yaparsan: <b style="color:var(--xp-gold)">+100 XP bonus</b>'}
          </div>
          ${score != null ? `
            <div class="chip ${score >= 80 ? 'success' : score >= 60 ? 'warning' : 'danger'}" style="margin-bottom:16px">
              Önceki skorun: ${score}/100
            </div><br>
          ` : ''}
          <button class="btn btn-primary btn-block" data-act="start-quiz" data-id="${t.id}">Quiz'e Başla</button>
        </div>
      </div>
    `;
  }

  return `
    <header class="app-header">
      <button class="icon-btn back-btn" data-act="back" data-to="unit" data-id="${u.id}">${ICON.back}</button>
      <div class="title">${escapeHtml(t.title)}</div>
      <div style="width:40px"></div>
    </header>

    <div class="topic-hero">
      <div class="crumb" style="color:${u.color}">Ünite ${u.id} · ${escapeHtml(u.name)}</div>
      <h1>${escapeHtml(t.title)}</h1>
      <div class="meta">
        <span class="stars">${[1,2,3,4,5].map(n => `<span class="${n <= t.difficulty ? 'on' : ''}">★</span>`).join('')}</span>
        <span class="chip">${ICON.clock} ${t.minutes} dk</span>
        ${isDone ? '<span class="chip success">✓ Tamamlandı</span>' : ''}
        ${score != null ? `<span class="chip ${score >= 80 ? 'success' : score >= 60 ? 'warning' : 'danger'}">Quiz: ${score}/100</span>` : ''}
      </div>
    </div>

    ${t.full ? `
      <div class="tabs">
        <button class="${state.topicTab === 'theory' ? 'active' : ''}" data-act="topic-tab" data-tab="theory">📖 Özet</button>
        <button class="${state.topicTab === 'example' ? 'active' : ''}" data-act="topic-tab" data-tab="example">🎯 Örnek</button>
        <button class="${state.topicTab === 'quiz-intro' ? 'active' : ''}" data-act="topic-tab" data-tab="quiz-intro">✏ Quiz</button>
      </div>
    ` : ''}

    ${body}

    ${t.full && state.topicTab === 'theory' ? `
      <div class="float-cta">
        <button class="btn btn-ghost" data-act="topic-tab" data-tab="example">Örneği Gör</button>
        <button class="btn btn-primary" data-act="topic-tab" data-tab="quiz-intro">Quiz'e Geç</button>
      </div>
    ` : ''}

    <div style="height:16px"></div>
  `;
}

// ─────────────────────────────────────────────────────────────

function renderQuiz() {
  const t = findTopic(state.quiz.topicId);
  const q = state.quiz;

  if (q.finished) return renderQuizResult();

  const question = t.quiz[q.index];
  const total = t.quiz.length;
  const pct = Math.round((q.index + (q.revealed ? 1 : 0)) / total * 100);

  return `
    <div class="quiz-top">
      <button class="close" data-act="close-quiz">${ICON.close}</button>
      <div class="progress tall"><i style="width:${pct}%"></i></div>
      <div class="count">${q.index + 1}/${total}</div>
    </div>

    <div class="quiz-body">
      <div class="quiz-num">Soru ${q.index + 1} · ${escapeHtml(t.title)}</div>
      <div class="quiz-q" data-inline-tex>${escapeHtml(question.q)}</div>

      <div class="options">
        ${question.opt.map((opt, i) => {
          let cls = 'option';
          if (q.revealed) {
            if (i === question.a) cls += ' correct';
            else if (i === q.selected) cls += ' wrong';
          } else if (q.selected === i) cls += ' selected';

          const key = String.fromCharCode(65 + i); // A, B, C, D
          return `
            <button class="${cls}" ${q.revealed ? 'disabled' : ''} data-act="quiz-select" data-idx="${i}">
              <div class="key">${key}</div>
              <div data-inline-tex>${escapeHtml(String(opt))}</div>
            </button>
          `;
        }).join('')}
      </div>

      ${q.revealed ? `
        <div class="feedback ${q.selected === question.a ? 'correct' : 'wrong'}">
          <div class="head">
            ${q.selected === question.a ? '✓ Doğru!' : '✗ Yanlış'}
          </div>
          <div class="copy">
            <span data-tex="${escapeAttr(question.e)}" data-display="false"></span>
          </div>
          <div class="xp">${q.selected === question.a ? '+50 XP' : '+5 XP (deneme bonusu)'}</div>
        </div>
        <button class="btn btn-primary btn-block" style="margin-top:var(--space-4)" data-act="quiz-next">
          ${q.index + 1 < total ? 'Sonraki Soru →' : 'Sonuçları Gör'}
        </button>
      ` : `
        <button class="btn btn-primary btn-block" data-act="quiz-check" ${q.selected == null ? 'disabled' : ''}>
          Kontrol Et
        </button>
      `}
    </div>
  `;
}

function renderQuizResult() {
  const t = findTopic(state.quiz.topicId);
  const correct = state.quiz.answers.filter((a, i) => a === t.quiz[i].a).length;
  const total = t.quiz.length;
  const pct = Math.round(correct / total * 100);
  const earnedXP = correct * 50 + (total - correct) * 5 + (correct === total ? 100 : 0);

  let title, sub, emoji;
  if (correct === total) { title = 'Mükemmel!'; sub = 'Tam puan — efsanesin 🌟'; emoji = '🏆'; }
  else if (correct >= total * 0.8) { title = 'Harika!'; sub = 'Konuyu çok iyi anlamışsın.'; emoji = '✨'; }
  else if (correct >= total * 0.6) { title = 'İyi gidiyorsun!'; sub = 'Birkaç eksiğin var, tekrar bak.'; emoji = '👍'; }
  else { title = 'Devam et!'; sub = 'Konuyu tekrar gözden geçirelim.'; emoji = '💪'; }

  // ring SVG
  const r = 70;
  const C = 2 * Math.PI * r;
  const off = C - (C * pct / 100);
  const ringColor = pct >= 80 ? 'var(--success)' : pct >= 60 ? 'var(--warning)' : 'var(--danger)';

  return `
    <div class="quiz-top">
      <button class="close" data-act="close-quiz">${ICON.close}</button>
      <div class="progress tall"><i style="width:100%"></i></div>
      <div class="count">${total}/${total}</div>
    </div>

    <div class="result">
      <div style="font-size:48px">${emoji}</div>
      <div class="ring">
        <svg viewBox="0 0 160 160" style="width:100%;height:100%">
          <circle cx="80" cy="80" r="${r}" fill="none" stroke="var(--bg-glass)" stroke-width="12"/>
          <circle cx="80" cy="80" r="${r}" fill="none" stroke="${ringColor}" stroke-width="12"
            stroke-dasharray="${C}" stroke-dashoffset="${off}" stroke-linecap="round"
            transform="rotate(-90 80 80)"
            style="transition: stroke-dashoffset 1s cubic-bezier(0.2,0.8,0.2,1);"/>
          <text x="80" y="82" text-anchor="middle" font-size="32" font-weight="900" fill="var(--text-primary)">${correct}/${total}</text>
          <text x="80" y="105" text-anchor="middle" font-size="13" fill="var(--text-secondary)">%${pct}</text>
        </svg>
      </div>

      <div>
        <h1>${title}</h1>
        <div class="sub">${sub}</div>
      </div>

      <div class="reward">${ICON.zap} +${earnedXP} XP kazandın!</div>

      <div class="actions">
        <button class="btn btn-ghost" data-act="retry-quiz">Tekrar</button>
        <button class="btn btn-primary" data-act="finish-quiz">Bitir</button>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────

function renderProgress() {
  const level = currentLevel();
  const lvlPct = Math.round((state.progress.xp - level.min) / (level.max - level.min) * 100);
  const r = 38;
  const C = 2 * Math.PI * r;
  const off = C - (C * lvlPct / 100);
  const earned = BADGES.filter(b => state.progress.badges.includes(b.id));
  const nextLevel = LEVELS[Math.min(level.id, LEVELS.length - 1)];

  return `
    <header class="app-header">
      <div class="title" style="margin-left:4px">İlerlemem</div>
      <button class="icon-btn" data-act="open-tweaks">${ICON.sliders}</button>
    </header>

    <div class="level-card">
      <div style="display:flex;gap:16px;align-items:center">
        <div class="ring">
          <svg viewBox="0 0 90 90" style="width:100%;height:100%">
            <circle cx="45" cy="45" r="${r}" fill="none" stroke="var(--bg-glass)" stroke-width="6"/>
            <circle cx="45" cy="45" r="${r}" fill="none" stroke="var(--xp-gold)" stroke-width="6"
              stroke-dasharray="${C}" stroke-dashoffset="${off}" stroke-linecap="round"
              transform="rotate(-90 45 45)"
              style="filter: drop-shadow(0 0 6px var(--xp-gold-glow));"/>
          </svg>
          <div class="lvl">${level.id}</div>
        </div>
        <div style="flex:1;min-width:0">
          <h2>${escapeHtml(level.name)}</h2>
          <div class="copy">${level.id < 5 ? `Bir sonraki seviye: ${LEVELS[level.id].name}` : 'En yüksek seviye — TYT\'ye hazırsın!'}</div>
        </div>
      </div>
      <div class="xp-row">
        <span>Bu seviye XP'si</span>
        <span><b>${state.progress.xp - level.min}</b> / ${level.max - level.min}</span>
      </div>
      <div class="progress tall" style="margin-top:6px"><i style="width:${lvlPct}%;background:linear-gradient(90deg,var(--xp-gold),#FFAA28)"></i></div>
    </div>

    <div class="section">
      <div class="section-title"><span>Rozet Koleksiyonu · ${earned.length}/${BADGES.length}</span></div>
      <div class="badges-grid">
        ${BADGES.map(b => {
          const isEarned = state.progress.badges.includes(b.id);
          return `
            <div class="badge ${isEarned ? 'earned' : 'locked'}">
              <div class="ico">${b.icon}</div>
              <div class="name">${escapeHtml(b.name)}</div>
              <div class="desc">${escapeHtml(b.desc)}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title"><span>Üniteye Göre İlerleme</span></div>
      <div class="unit-progress-list">
        ${UNITS.map(u => {
          const c = unitCounts(u.id);
          const pct = Math.round(c.done / c.total * 100);
          return `
            <div class="unit-progress-row">
              <div class="dot" style="background:${u.color}"></div>
              <div class="name">${escapeHtml(u.name)}</div>
              <div class="progress unit-${u.id}"><i style="width:${pct}%"></i></div>
              <div class="count">${c.done}/${c.total}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title"><span>İstatistikler</span></div>
      <div class="card">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4)">
          <div>
            <div style="font-size:var(--text-2xl);font-weight:800;color:var(--accent)">${state.progress.completed.length}</div>
            <div style="font-size:var(--text-xs);color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.05em">Tamamlanan</div>
          </div>
          <div>
            <div style="font-size:var(--text-2xl);font-weight:800;color:var(--success)">${Object.values(state.progress.scores).filter(s => s >= 80).length}</div>
            <div style="font-size:var(--text-xs);color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.05em">Yüksek Skor</div>
          </div>
          <div>
            <div style="font-size:var(--text-2xl);font-weight:800;color:var(--warning)">${state.progress.streak}</div>
            <div style="font-size:var(--text-xs);color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.05em">Günlük Seri</div>
          </div>
          <div>
            <div style="font-size:var(--text-2xl);font-weight:800;color:var(--xp-gold)">${state.progress.xp.toLocaleString('tr-TR')}</div>
            <div style="font-size:var(--text-xs);color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.05em">Toplam XP</div>
          </div>
        </div>
      </div>
    </div>

    <div style="height:32px"></div>
  `;
}

// ─────────────────────────────────────────────────────────────

function renderTopicsIndex() {
  return `
    <header class="app-header">
      <div class="title" style="margin-left:4px">Konular</div>
      <button class="icon-btn" data-act="open-tweaks">${ICON.sliders}</button>
    </header>

    <div class="section" style="padding-top:var(--space-4)">
      <div class="unit-grid">
        ${UNITS.map(u => {
          const c = unitCounts(u.id);
          const pct = Math.round(c.done / c.total * 100);
          return `
            <div class="unit-card" data-act="open-unit" data-id="${u.id}" style="--u-color:${u.color};--u-bg:${u.color}22">
              <div class="glyph">${u.icon}</div>
              <div class="name">${escapeHtml(u.name)}</div>
              <div class="counts"><b>${c.done}</b> / ${c.total} konu · %${pct}</div>
              <div class="progress unit-${u.id}"><i style="width:${pct}%"></i></div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title"><span>Hızlı Erişim · Tam İçerikli</span></div>
      <div class="topic-list" style="padding:0">
        ${TOPICS.filter(t => t.full).map(t => {
          const u = findUnit(t.unit);
          const isDone = state.progress.completed.includes(t.id);
          const score = state.progress.scores[t.id];
          return `
            <div class="topic-row" data-act="open-topic" data-id="${t.id}">
              <div class="num" style="color:${u.color}">${t.id}</div>
              <div class="info">
                <div class="title">${escapeHtml(t.title)}</div>
                <div class="meta">
                  <span style="color:${u.color}">${u.short}</span> ·
                  <span class="stars">${[1,2,3,4,5].map(n => `<span class="${n <= t.difficulty ? 'on' : ''}">★</span>`).join('')}</span>
                </div>
              </div>
              ${isDone ? `<div class="state done">${ICON.check}</div>` :
                score != null ? `<div class="state partial">${score}</div>` :
                `<div class="state" style="background:var(--bg-glass);color:var(--text-tertiary)">${ICON.arrow}</div>`}
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div style="height:32px"></div>
  `;
}

// ─────────────────────────────────────────────────────────────

function renderProfile() {
  const level = currentLevel();
  return `
    <header class="app-header">
      <div class="title" style="margin-left:4px">Profil</div>
      <button class="icon-btn" data-act="open-tweaks">${ICON.sliders}</button>
    </header>

    <div class="section" style="padding-top:var(--space-4)">
      <div class="card" style="text-align:center;padding:24px 16px">
        <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent-lo));margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:900;color:var(--text-on-accent);box-shadow:0 0 24px var(--accent-glow)">
          ${state.progress.name.charAt(0)}
        </div>
        <h2 style="font-size:var(--text-xl);font-weight:700">${escapeHtml(state.progress.name)}</h2>
        <div style="color:var(--text-secondary);font-size:var(--text-sm);margin-top:4px">${escapeHtml(level.name)} · Lv ${level.id}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title"><span>Tema ve Görünüm</span></div>
      <div class="card" style="padding:6px">
        <button class="topic-row" style="background:transparent;border:none;width:100%" data-act="open-tweaks">
          <div class="info">
            <div class="title">Tweaks Paneli</div>
            <div class="meta">Tema, aksan rengi, animasyon yoğunluğu</div>
          </div>
          <div class="state" style="background:var(--bg-glass);color:var(--text-tertiary)">${ICON.arrow}</div>
        </button>
      </div>
    </div>

    <div class="section">
      <div class="section-title"><span>İlerleme</span></div>
      <div class="card" style="padding:6px">
        <button class="topic-row" style="background:transparent;border:none;width:100%" data-act="reset-confirm">
          <div class="info">
            <div class="title" style="color:var(--danger)">Tüm ilerlemeyi sıfırla</div>
            <div class="meta">Demo durumuna geri dön</div>
          </div>
        </button>
      </div>
    </div>

    <div class="section">
      <div style="text-align:center;color:var(--text-tertiary);font-size:var(--text-xs);padding:20px 0">
        TYT Matematik · v1.0<br>
        125 konu · 4 ünite · ${BADGES.length} rozet
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────

function renderTabBar() {
  const tabs = [
    { id: 'dashboard', label: 'Ana Sayfa', icon: ICON.home },
    { id: 'topics',    label: 'Konular',   icon: ICON.book },
    { id: 'progress',  label: 'İlerleme',  icon: ICON.chart },
    { id: 'profile',   label: 'Profil',    icon: ICON.user }
  ];
  const active = ['dashboard'].includes(state.screen) ? 'dashboard'
              : ['unit','topic','topics'].includes(state.screen) ? 'topics'
              : ['progress'].includes(state.screen) ? 'progress'
              : 'profile';

  return `
    <nav class="tabbar">
      ${tabs.map(t => `
        <button class="tab ${active === t.id ? 'active' : ''}" data-act="tab" data-tab="${t.id}">
          ${t.icon}
          <span>${t.label}</span>
        </button>
      `).join('')}
    </nav>
  `;
}

// ─────────────────────────────────────────────────────────────
// MAIN RENDER
// ─────────────────────────────────────────────────────────────

function render() {
  const app = document.getElementById('app');
  let inner;
  switch (state.screen) {
    case 'dashboard': inner = renderDashboard(); break;
    case 'unit':      inner = renderUnit(); break;
    case 'topic':     inner = renderTopic(); break;
    case 'quiz':      inner = renderQuiz(); break;
    case 'progress':  inner = renderProgress(); break;
    case 'topics':    inner = renderTopicsIndex(); break;
    case 'profile':   inner = renderProfile(); break;
    default:          inner = renderDashboard();
  }

  const showTab = state.screen !== 'quiz';
  app.innerHTML = `<div class="screen">${inner}</div>${showTab ? renderTabBar() : ''}${renderGeometryViewer()}`;
  document.body.classList.toggle('geometry-viewer-open', Boolean(state.geometryViewer));

  // render KaTeX
  renderKatex(app);
}

// ─────────────────────────────────────────────────────────────
// EVENT HANDLING
// ─────────────────────────────────────────────────────────────

document.addEventListener('click', e => {
  const target = e.target.closest('[data-act]');
  if (!target) return;
  const act = target.dataset.act;
  const id = parseInt(target.dataset.id);
  const tab = target.dataset.tab;
  const idx = parseInt(target.dataset.idx);
  const to = target.dataset.to;

  switch (act) {
    case 'open-topic': openTopic(id); break;
    case 'open-unit':  openUnit(id); break;
    case 'topic-tab':
      state.topicTab = tab;
      // award XP for viewing example first time
      if (tab === 'example' && findTopic(state.topicId).full) {
        // (no extra XP for tab switches in production; demo keeps quiet)
      }
      render();
      break;
    case 'back':
      if (to === 'unit') go('unit', { unitId: id });
      else go(to || 'dashboard');
      break;
    case 'tab':
      if (tab === 'dashboard') go('dashboard');
      else if (tab === 'topics') go('topics');
      else if (tab === 'progress') go('progress');
      else if (tab === 'profile') go('profile');
      break;
    case 'start-quiz': startQuiz(id); break;
    case 'quiz-select':
      if (state.quiz.revealed) return;
      state.quiz.selected = idx;
      render();
      break;
    case 'quiz-check':
      if (state.quiz.selected == null) return;
      state.quiz.revealed = true;
      state.quiz.answers.push(state.quiz.selected);
      // immediate XP
      const tq = findTopic(state.quiz.topicId).quiz[state.quiz.index];
      const correct = state.quiz.selected === tq.a;
      state.progress.xp += correct ? 50 : 5;
      saveProgress();
      render();
      break;
    case 'quiz-next':
      const total = findTopic(state.quiz.topicId).quiz.length;
      if (state.quiz.index + 1 < total) {
        state.quiz.index++;
        state.quiz.selected = null;
        state.quiz.revealed = false;
        render();
      } else {
        // finished
        const q = state.quiz;
        const t = findTopic(q.topicId);
        const correctCount = q.answers.filter((a, i) => a === t.quiz[i].a).length;
        const score = Math.round(correctCount / t.quiz.length * 100);
        state.progress.scores[t.id] = score;
        // perfect bonus
        if (correctCount === t.quiz.length) state.progress.xp += 100;
        // remove from weak if score is good
        if (score >= 80) state.progress.weak = state.progress.weak.filter(id => id !== t.id);
        else if (!state.progress.weak.includes(t.id)) state.progress.weak.push(t.id);
        // mark completed
        if (!state.progress.completed.includes(t.id)) {
          state.progress.completed.push(t.id);
          state.progress.xp += 200;
        }
        q.finished = true;
        saveProgress();
        checkBadges();
        render();
      }
      break;
    case 'retry-quiz': startQuiz(state.quiz.topicId); break;
    case 'finish-quiz': go('topic', { topicId: state.quiz.topicId }); state.quiz = null; break;
    case 'geometry-close':
      closeGeometryViewer();
      break;
    case 'geometry-next':
      moveGeometryViewer(1);
      break;
    case 'geometry-prev':
      moveGeometryViewer(-1);
      break;
    case 'close-quiz':
      if (confirm('Quiz\'i kapatmak istediğinden emin misin? İlerleme kaybolur.')) {
        go('topic', { topicId: state.quiz.topicId });
        state.quiz = null;
      }
      break;
    case 'open-tweaks':
      window.openTweaks && window.openTweaks();
      break;
    case 'reset-confirm':
      if (confirm('Tüm ilerleme silinecek ve demo durumuna dönülecek. Emin misin?')) {
        resetProgress();
        showToast('İlerleme sıfırlandı', 'success');
        go('dashboard');
      }
      break;
  }
});

let geometryLastTap = { element: null, time: 0 };

document.addEventListener('dblclick', e => {
  const card = e.target.closest('[data-geometry-card]');
  if (!card || state.screen !== 'topic') return;
  openGeometryViewer(state.topicId, parseInt(card.dataset.cardIndex, 10) || 0);
});

document.addEventListener('click', e => {
  const card = e.target.closest('[data-geometry-card]');
  if (!card || state.screen !== 'topic') return;

  const now = Date.now();
  if (geometryLastTap.element === card && now - geometryLastTap.time < 320) {
    openGeometryViewer(state.topicId, parseInt(card.dataset.cardIndex, 10) || 0);
    geometryLastTap = { element: null, time: 0 };
    return;
  }

  geometryLastTap = { element: card, time: now };
});

document.addEventListener('keydown', e => {
  if (state.geometryViewer) {
    if (e.key === 'Escape') closeGeometryViewer();
    else if (e.key === 'ArrowRight') moveGeometryViewer(1);
    else if (e.key === 'ArrowLeft') moveGeometryViewer(-1);
    return;
  }

  if (e.key === 'Enter') {
    const card = document.activeElement && document.activeElement.closest('[data-geometry-card]');
    if (card && state.screen === 'topic') openGeometryViewer(state.topicId, parseInt(card.dataset.cardIndex, 10) || 0);
  }
});

let geometrySwipe = null;
let geometryPointers = new Map();
let geometryGesture = null;
let geometrySuppressTap = false;

document.addEventListener('pointerdown', e => {
  if (!state.geometryViewer || !e.target.closest('[data-geometry-swipe]') || e.target.closest('button')) return;
  const stage = e.target.closest('[data-geometry-swipe]');
  stage.setPointerCapture && stage.setPointerCapture(e.pointerId);

  geometryPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

  if (geometryPointers.size === 1) {
    geometrySwipe = { x: e.clientX, y: e.clientY, id: e.pointerId, panX: state.geometryViewer.panX, panY: state.geometryViewer.panY };
  } else if (geometryPointers.size === 2) {
    const points = [...geometryPointers.values()];
    geometryGesture = {
      distance: Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y),
      zoom: state.geometryViewer.zoom,
      panX: state.geometryViewer.panX,
      panY: state.geometryViewer.panY,
      centerX: (points[0].x + points[1].x) / 2,
      centerY: (points[0].y + points[1].y) / 2
    };
  }
});

document.addEventListener('pointermove', e => {
  if (!state.geometryViewer || !geometryPointers.has(e.pointerId)) return;
  geometryPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

  if (geometryPointers.size >= 2 && geometryGesture) {
    e.preventDefault();
    const points = [...geometryPointers.values()];
    const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
    const centerX = (points[0].x + points[1].x) / 2;
    const centerY = (points[0].y + points[1].y) / 2;
    const nextZoom = geometryGesture.zoom * (distance / geometryGesture.distance);
    setGeometryZoom(
      nextZoom,
      geometryGesture.panX + centerX - geometryGesture.centerX,
      geometryGesture.panY + centerY - geometryGesture.centerY
    );
    return;
  }

  if (!geometrySwipe || geometrySwipe.id !== e.pointerId || state.geometryViewer.zoom <= 1) return;
  e.preventDefault();
  setGeometryZoom(
    state.geometryViewer.zoom,
    geometrySwipe.panX + e.clientX - geometrySwipe.x,
    geometrySwipe.panY + e.clientY - geometrySwipe.y
  );
});

document.addEventListener('pointerup', e => {
  if (!state.geometryViewer || !geometryPointers.has(e.pointerId)) return;
  geometryPointers.delete(e.pointerId);

  if (geometryPointers.size < 2) geometryGesture = null;
  if (!geometrySwipe || e.pointerId !== geometrySwipe.id) return;

  const dx = e.clientX - geometrySwipe.x;
  const dy = e.clientY - geometrySwipe.y;
  geometrySwipe = null;

  if (state.geometryViewer.zoom > 1) return;
  if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.25) return;
  geometrySuppressTap = true;
  moveGeometryViewer(dx < 0 ? 1 : -1);
  setTimeout(() => { geometrySuppressTap = false; }, 0);
});

document.addEventListener('pointercancel', e => {
  geometryPointers.delete(e.pointerId);
  if (geometryPointers.size < 2) geometryGesture = null;
  if (geometrySwipe && geometrySwipe.id === e.pointerId) geometrySwipe = null;
});

document.addEventListener('wheel', e => {
  if (!state.geometryViewer || !e.target.closest('[data-geometry-swipe]')) return;
  e.preventDefault();
  const delta = e.deltaY < 0 ? 0.18 : -0.18;
  setGeometryZoom(state.geometryViewer.zoom + delta);
}, { passive: false });

document.addEventListener('click', e => {
  if (!state.geometryViewer || geometrySuppressTap || state.geometryViewer.zoom > 1) return;
  const stage = e.target.closest('[data-geometry-swipe]');
  if (!stage || e.target.closest('button')) return;

  const rect = stage.getBoundingClientRect();
  const isRightSide = e.clientX >= rect.left + rect.width / 2;
  moveGeometryViewer(isRightSide ? 1 : -1);
});

// ─────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  render();
  // signal tweaks availability
  setTimeout(() => {
    if (window.parent !== window) {
      try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}
    }
  }, 100);
});
