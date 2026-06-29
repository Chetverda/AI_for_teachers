(function () {
  const sections = document.querySelectorAll('.portal-section');
  const links = document.querySelectorAll('.nav-link[data-section]');
  const homeCards = document.querySelectorAll('.home-card[data-section]');
  const nav = document.querySelector('.portal-nav');
  const toggle = document.querySelector('.nav-toggle');

  function showSection(id) {
    sections.forEach(s => s.classList.toggle('active', s.id === id));
    links.forEach(a => a.classList.toggle('active', a.dataset.section === id));
    if (nav) nav.classList.remove('open');
    history.replaceState(null, '', '#' + id);
    window.scrollTo(0, 0);
  }

  function initFromHash() {
    const id = location.hash.slice(1);
    if (id && document.getElementById(id)) showSection(id);
    else showSection('home');
  }

  links.forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    showSection(a.dataset.section);
  }));

  homeCards.forEach(c => c.addEventListener('click', e => {
    e.preventDefault();
    showSection(c.dataset.section);
  }));

  if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));
  window.addEventListener('hashchange', initFromHash);
  initFromHash();

  // MK1 prompts
  if (window.MK1_PROMPTS) {
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('b1', MK1_PROMPTS.mission1);
    set('b2a', MK1_PROMPTS.mission2_chatgpt);
    set('b2b', (MK1_PROMPTS.mission2_nanobanana || '').replace(/Nano Banana/g, 'генератор изображений'));
    set('b3', MK1_PROMPTS.mission3);
    set('b4', MK1_PROMPTS.mission4);
    set('b5a', MK1_PROMPTS.mission5a);
    set('b5b-public', `1. «Какие требования к [оцениванию / проектной деятельности / проведению урока] описаны в этом документе? Укажи разделы.»
2. «Составь краткую памятку для учителя на 5 пунктов на основе этого документа.»
3. «Есть ли в документе ограничения или запреты, о которых важно знать?»

Ограничения: отвечай только на основе загруженного файла. Если информации нет — скажи прямо.`);
    set('b6', MK1_PROMPTS.mission6);
  }

  // MK2 prompts
  if (window.MK2_PROMPTS) {
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('gen-prompt', MK2_PROMPTS.generate_system_prompt);
    set('improve-prompt', MK2_PROMPTS.improve_system_prompt);
    set('test-prompt', MK2_PROMPTS.test_queries_template);
  }
})();
