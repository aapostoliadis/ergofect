(() => {
  'use strict';
  const tabs = [...document.querySelectorAll('.guide-tab')];
  const panels = [...document.querySelectorAll('.guide-panel')];
  function select(index, focus) {
    document.querySelector('.handoff-guide').dataset.step = String(index);
    document.querySelector('.guide-position').textContent = `0${index + 1} / 03`;
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    if (focus) tabs[index].focus();
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i, false));
    tab.addEventListener('keydown', e => {
      const next = { ArrowRight:(i+1)%tabs.length, ArrowLeft:(i+tabs.length-1)%tabs.length, Home:0, End:tabs.length-1 }[e.key];
      if (next !== undefined) { e.preventDefault(); select(next, true); }
    });
  });
})();
