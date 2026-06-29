/* ============================================
   VISITOR ANALYTICS · Telegram notifications
   ============================================ */

(function () {
  const TOKEN   = '8838023140:AAE6SK2IB1xmSq21JuqTSGyiGDk-aGNCGoQ';
  const CHAT_ID = '339864667';

  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') return;

  const API       = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const startTime = Date.now();
  let exitSent    = false;

  function device() {
    return /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent) ? '📱 Móvil' : '💻 Desktop';
  }

  function formatDuration(ms) {
    const s = Math.round(ms / 1000);
    return s < 60 ? `${s}s` : `${Math.floor(s / 60)}m ${s % 60}s`;
  }

  function timestamp() {
    return new Date().toLocaleString('es-CL', {
      timeZone: 'America/Santiago',
      dateStyle: 'short',
      timeStyle: 'short'
    });
  }

  function send(text) {
    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' })
    }).catch(() => {});
  }

  function sendBeaconMsg(text) {
    const blob = new Blob(
      [JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' })],
      { type: 'application/json' }
    );
    navigator.sendBeacon(API, blob);
  }

  // ── Notificación de llegada ────────────────────
  const page = document.title || location.pathname;
  const ref  = document.referrer
    ? `\nDesde: ${new URL(document.referrer).hostname}`
    : '\nAcceso directo';

  send(
    `👀 <b>Visita nueva</b>\n` +
    `📄 ${page}\n` +
    `${device()}${ref}\n` +
    `🕐 ${timestamp()}`
  );

  // ── Notificación de salida con tiempo de sesión ─
  function onExit() {
    if (exitSent) return;
    exitSent = true;
    sendBeaconMsg(
      `⏱ <b>Sesión finalizada</b>\n` +
      `📄 ${page}\n` +
      `Tiempo navegando: <b>${formatDuration(Date.now() - startTime)}</b>`
    );
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') onExit();
  });
  window.addEventListener('pagehide', onExit);
})();
