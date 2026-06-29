/* ============================================
   CLOUDFLARE WORKER · Telegram notification proxy
   ============================================
   Secrets requeridos (Cloudflare dashboard → Worker → Settings → Variables):
     TELEGRAM_TOKEN   → token del bot
     TELEGRAM_CHAT_ID → tu chat id
   ============================================ */

export default {
  async fetch(request, env) {

    // Preflight CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('Bad request', { status: 400 });
    }

    if (!body.text) {
      return new Response('Missing text', { status: 400 });
    }

    await fetch(`https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text: body.text,
        parse_mode: 'HTML'
      })
    });

    return new Response(null, {
      status: 200,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
};
