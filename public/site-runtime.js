(() => {
  'use strict';
  const CONSENT_KEY = 'ergofect-cookie-consent';
  let consent = null, trackingStarted = false;
  try { consent = localStorage.getItem(CONSENT_KEY); } catch { /* Forms stay usable without storage. */ }
  function addScript(src, onload) {
    const script = document.createElement('script');
    script.async = true; script.src = src;
    if (onload) script.onload = onload;
    document.head.appendChild(script);
  }
  function startTracking() {
    if (trackingStarted || consent !== 'accepted') return;
    trackingStarted = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    addScript('https://www.googletagmanager.com/gtm.js?id=GTM-KXNQNZF5');
    addScript('https://www.googletagmanager.com/gtag/js?id=G-BG0L3Q3QBB');
    window.gtag('js', new Date()); window.gtag('config', 'G-BG0L3Q3QBB');
    addScript('https://assets.apollo.io/micro/website-tracker/tracker.iife.js', () => window.trackingFunctions?.onLoad({ appId: '6a9194244fedf0000c31ff6b' }));
    addScript('https://assets.apollo.io/js/apollo-inbound.js', () => {
      try { window.ApolloInbound?.formEnrichment.init({ appId: '6a9258dba20b68000c4a4d3e' }); } catch { /* Optional enrichment never hides or blocks the form. */ }
    });
  }
  const consentUI = document.createElement('aside');
  consentUI.className = 'cookie-consent'; consentUI.setAttribute('aria-label', 'Cookie consent');
  consentUI.innerHTML = '<h2>Cookie settings</h2><p>We use optional analytics and tracking cookies to understand website usage and improve our services. You can accept or reject them. Read our <a href="/privacy">Privacy Policy</a>.</p><div class="consent-actions"><button class="btn btn-primary" type="button" data-consent="accepted">Accept</button><button class="btn btn-outline" type="button" data-consent="rejected">Reject</button></div>';
  consentUI.hidden = consent === 'accepted' || consent === 'rejected';
  document.body.appendChild(consentUI);
  consentUI.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
    const previouslyAccepted = consent === 'accepted';
    consent = button.dataset.consent;
    try { localStorage.setItem(CONSENT_KEY, consent); } catch { /* Use the choice for this page. */ }
    consentUI.hidden = true;
    if (consent === 'accepted') startTracking();
    else if (previouslyAccepted && trackingStarted) {
      window.gtag?.('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
      location.reload();
    }
  }));
  const settings = document.createElement('button');
  settings.type = 'button'; settings.className = 'cookie-settings'; settings.textContent = 'Cookie settings';
  settings.addEventListener('click', () => { consentUI.hidden = false; consentUI.querySelector('button').focus(); });
  document.querySelector('.copyright')?.appendChild(settings);
  startTracking();

  const form = document.querySelector('#audit-form');
  if (!form) return;
  const privacyNote = form.querySelector('[data-form-step]:nth-of-type(3) .fine-print');
  if (privacyNote) privacyNote.innerHTML = 'Review your details before sending your audit request. See our <a href="/privacy" class="text-link" style="font-size:inherit;padding:0">Privacy Policy</a>.';
  const review = form.querySelector('.form-review'), actions = review.querySelector('.form-actions');
  const submit = document.createElement('button');
  submit.type = 'button'; submit.className = 'btn btn-primary send-audit-request'; submit.textContent = 'Send audit request';
  const status = document.createElement('p'); status.className = 'delivery-status'; status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite');
  actions.appendChild(submit); review.appendChild(status);
  const emailDraft = review.querySelector('#email-request');
  emailDraft.classList.remove('btn-primary'); emailDraft.classList.add('btn-outline');
  form.addEventListener('submit', () => {
    if (review.hidden) return;
    review.querySelector('.review-note').textContent = 'Nothing has been sent. Check the details below, then send your request. Email and copy options are also available.';
    status.textContent = ''; status.removeAttribute('data-state');
  });
  submit.addEventListener('click', async () => {
    if (submit.disabled) return;
    const data = new FormData(form);
    const labels = { name: 'Full name', email: 'Work email', company: 'Company name', role: 'Role', team: 'Team size', services: 'Services interested in', spend: 'Monthly operational spend', bottleneck: 'Biggest operational bottleneck', success: 'Success criteria', referral: 'How they heard about Ergofect' };
    const payload = {};
    Object.entries(labels).forEach(([key, label]) => { const values = data.getAll(key).filter(Boolean); payload[label] = key === 'services' ? values : String(values[0] || '').trim(); });
    const params = new URLSearchParams(location.search);
    for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content']) if (params.has(key)) payload[key] = params.get(key).slice(0, 200);
    payload['Landing page'] = location.href;
    submit.disabled = true; form.querySelector('#edit-request').disabled = true; form.setAttribute('aria-busy', 'true');
    status.dataset.state = 'pending'; status.textContent = 'Sending your request…';
    const controller = new AbortController(), timer = setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch('/api/send-audit-email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal: controller.signal });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true) throw new Error('delivery-failed');
      status.dataset.state = 'success'; status.textContent = 'Thank you. Your audit request has been received. Akis will review your workflow and contact you about the next step.';
      review.querySelector('#review-title').textContent = 'Your request has been received.';
      review.querySelector('.review-note').textContent = 'Your details were sent to Ergofect.';
      actions.hidden = true;
      if (consent === 'accepted') window.gtag?.('event', 'generate_lead', { lead_source: params.get('utm_source') || 'direct', lead_campaign: params.get('utm_campaign') || 'none' });
      status.setAttribute('tabindex', '-1'); status.focus();
    } catch {
      status.dataset.state = 'error'; status.textContent = 'We couldn’t confirm delivery. Your details are still here. You can retry or use the email draft to contact us directly.';
      submit.disabled = false; form.querySelector('#edit-request').disabled = false;
    } finally { clearTimeout(timer); form.removeAttribute('aria-busy'); }
  });
})();
