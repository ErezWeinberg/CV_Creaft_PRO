/* ==========================================================================
   CV Craft PRO - Main Application Logic (Vanilla ES6)
   ========================================================================== */

(function () {
  'use strict';

  // --- STATE ---
  let state = {
    lang: 'he', // 'he' | 'en'
    theme: 'light', // 'light' | 'dark'
    template: 'modern', // 'modern' | 'ats-classic' | 'minimalist' | 'creative'
    accentColor: '#2563eb',
    fontFamily: "'Heebo', 'Inter', sans-serif",
    fontSize: 14,
    spacing: 1,
    zoom: 1,
    cv: JSON.parse(JSON.stringify(sampleDataHebrew))
  };

  // LocalStorage Key
  const STORAGE_KEY = 'cv_craft_pro_state_v1';

  // DOM Elements Cache
  const el = {};

  // Initialize App
  function init() {
    cacheDOMElements();
    loadStateFromStorage();
    bindEvents();
    renderAll();
  }

  function cacheDOMElements() {
    // Buttons & Header
    el.btnLangHe = document.getElementById('btn-lang-he');
    el.btnLangEn = document.getElementById('btn-lang-en');
    el.btnThemeToggle = document.getElementById('btn-theme-toggle');
    el.btnSampleData = document.getElementById('btn-sample-data');
    el.btnExportJson = document.getElementById('btn-export-json');
    el.inputImportJson = document.getElementById('input-import-json');
    el.btnPrint = document.getElementById('btn-print');

    // Tabs
    el.navTabs = document.querySelectorAll('.nav-tab');
    el.tabContents = document.querySelectorAll('.tab-content');

    // Accordions
    el.accordionHeaders = document.querySelectorAll('.accordion-header');

    // Form Personal Fields
    el.fieldFullName = document.getElementById('field-fullName');
    el.fieldJobTitle = document.getElementById('field-jobTitle');
    el.fieldEmail = document.getElementById('field-email');
    el.fieldPhone = document.getElementById('field-phone');
    el.fieldLocation = document.getElementById('field-location');
    el.fieldLinkedin = document.getElementById('field-linkedin');
    el.fieldGithub = document.getElementById('field-github');
    el.fieldWebsite = document.getElementById('field-website');
    el.fieldSummary = document.getElementById('field-summary');
    el.fieldLanguages = document.getElementById('field-languages');
    el.fieldCertifications = document.getElementById('field-certifications');

    // Dynamic Lists Containers
    el.experienceList = document.getElementById('experience-list');
    el.educationList = document.getElementById('education-list');
    el.skillsList = document.getElementById('skills-list');
    el.projectsList = document.getElementById('projects-list');

    // Add Item Buttons
    el.btnAddExperience = document.getElementById('btn-add-experience');
    el.btnAddEducation = document.getElementById('btn-add-education');
    el.btnAddSkillCat = document.getElementById('btn-add-skill-cat');
    el.btnAddProject = document.getElementById('btn-add-project');

    // Templates Picker Cards
    el.templateCards = document.querySelectorAll('.template-card');

    // Design Controls
    el.colorSwatches = document.querySelectorAll('.color-swatch');
    el.customColorPicker = document.getElementById('custom-color-picker');
    el.selectFontFamily = document.getElementById('select-font-family');
    el.sliderFontSize = document.getElementById('slider-font-size');
    el.valFontSize = document.getElementById('val-font-size');
    el.sliderSpacing = document.getElementById('slider-spacing');
    el.valSpacing = document.getElementById('val-spacing');

    // Zoom Controls
    el.btnZoomOut = document.getElementById('btn-zoom-out');
    el.btnZoomIn = document.getElementById('btn-zoom-in');
    el.btnZoomReset = document.getElementById('btn-zoom-reset');
    el.zoomLevelText = document.getElementById('zoom-level');

    // Resume Preview Element
    el.resumePreview = document.getElementById('resume-preview');
  }

  // --- LOCAL STORAGE ---
  function saveStateToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save to LocalStorage:', e);
    }
  }

  function loadStateFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state = { ...state, ...parsed };
      }
    } catch (e) {
      console.warn('Could not load state:', e);
    }
  }

  // --- EVENT BINDING ---
  function bindEvents() {
    // Language Toggle
    el.btnLangHe.addEventListener('click', () => setLanguage('he'));
    el.btnLangEn.addEventListener('click', () => setLanguage('en'));

    // Theme Toggle
    if (el.btnThemeToggle) {
      el.btnThemeToggle.addEventListener('click', toggleTheme);
    }

    // Sample Data Button
    el.btnSampleData.addEventListener('click', () => {
      const isHe = state.lang === 'he';
      state.cv = JSON.parse(JSON.stringify(isHe ? sampleDataHebrew : sampleDataEnglish));
      renderFormFromState();
      renderPreview();
      saveStateToStorage();
    });

    // JSON Export / Import
    el.btnExportJson.addEventListener('click', exportJson);
    el.inputImportJson.addEventListener('change', importJson);

    // Print / PDF Export
    el.btnPrint.addEventListener('click', () => {
      window.print();
    });

    // Navigation Tabs Switcher
    el.navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;
        el.navTabs.forEach(t => t.classList.remove('active'));
        el.tabContents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`tab-${targetTab}`).classList.add('active');
      });
    });

    // Accordion Toggle
    el.accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.accordion-item');
        item.classList.toggle('expanded');
      });
    });

    // Form inputs change listeners
    bindFormInput(el.fieldFullName, 'personal', 'fullName');
    bindFormInput(el.fieldJobTitle, 'personal', 'jobTitle');
    bindFormInput(el.fieldEmail, 'personal', 'email');
    bindFormInput(el.fieldPhone, 'personal', 'phone');
    bindFormInput(el.fieldLocation, 'personal', 'location');
    bindFormInput(el.fieldLinkedin, 'personal', 'linkedin');
    bindFormInput(el.fieldGithub, 'personal', 'github');
    bindFormInput(el.fieldWebsite, 'personal', 'website');
    bindFormInput(el.fieldSummary, 'summary');
    bindFormInput(el.fieldLanguages, 'languages');
    bindFormInput(el.fieldCertifications, 'certifications');

    // Add Dynamic Items
    el.btnAddExperience.addEventListener('click', addExperienceItem);
    el.btnAddEducation.addEventListener('click', addEducationItem);
    el.btnAddSkillCat.addEventListener('click', addSkillItem);
    el.btnAddProject.addEventListener('click', addProjectItem);

    // Template Picker
    el.templateCards.forEach(card => {
      card.addEventListener('click', () => {
        el.templateCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        state.template = card.dataset.template;
        renderPreview();
        saveStateToStorage();
      });
    });

    // Design Color Swatches
    el.colorSwatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        el.colorSwatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        setAccentColor(swatch.dataset.color);
      });
    });

    el.customColorPicker.addEventListener('input', (e) => {
      setAccentColor(e.target.value);
    });

    // Font Family Select
    el.selectFontFamily.addEventListener('change', (e) => {
      state.fontFamily = e.target.value;
      renderPreview();
      saveStateToStorage();
    });

    // Font Size Slider
    el.sliderFontSize.addEventListener('input', (e) => {
      state.fontSize = parseFloat(e.target.value);
      el.valFontSize.textContent = `${state.fontSize}px`;
      renderPreview();
      saveStateToStorage();
    });

    // Spacing Slider
    el.sliderSpacing.addEventListener('input', (e) => {
      state.spacing = parseFloat(e.target.value);
      el.valSpacing.textContent = state.spacing < 1 ? 'דחוס' : state.spacing === 1 ? 'רגיל' : 'מרווח';
      renderPreview();
      saveStateToStorage();
    });

    // Zoom Controls
    el.btnZoomIn.addEventListener('click', () => adjustZoom(0.1));
    el.btnZoomOut.addEventListener('click', () => adjustZoom(-0.1));
    el.btnZoomReset.addEventListener('click', () => {
      state.zoom = 1;
      applyZoom();
    });
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveStateToStorage();
  }

  function applyTheme() {
    if (state.theme === 'dark') {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
      if (el.btnThemeToggle) el.btnThemeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
      if (el.btnThemeToggle) el.btnThemeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }

  function bindFormInput(inputElement, statePath1, statePath2) {
    if (!inputElement) return;
    inputElement.addEventListener('input', (e) => {
      if (statePath2) {
        state.cv[statePath1][statePath2] = e.target.value;
      } else {
        state.cv[statePath1] = e.target.value;
      }
      renderPreview();
      saveStateToStorage();
    });
  }

  // Set Language (RTL vs LTR)
  function setLanguage(lang) {
    state.lang = lang;
    document.body.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    el.btnLangHe.classList.toggle('active', lang === 'he');
    el.btnLangEn.classList.toggle('active', lang === 'en');

    // Auto update font default if switching language
    if (lang === 'en' && state.fontFamily.includes('Heebo')) {
      state.fontFamily = "'Inter', sans-serif";
      el.selectFontFamily.value = state.fontFamily;
    }

    renderPreview();
    saveStateToStorage();
  }

  function setAccentColor(colorHex) {
    state.accentColor = colorHex;
    document.documentElement.style.setProperty('--accent-color', colorHex);
    renderPreview();
    saveStateToStorage();
  }

  function adjustZoom(delta) {
    state.zoom = Math.min(Math.max(0.6, state.zoom + delta), 1.4);
    applyZoom();
  }

  function applyZoom() {
    el.resumePreview.style.transform = `scale(${state.zoom})`;
    el.zoomLevelText.textContent = `${Math.round(state.zoom * 100)}%`;
  }

  // --- DYNAMIC ITEMS HANDLERS ---
  function addExperienceItem() {
    state.cv.experiences.push({
      id: 'exp-' + Date.now(),
      jobTitle: state.lang === 'he' ? 'תפקיד חדש' : 'New Role',
      company: state.lang === 'he' ? 'שם החברה' : 'Company Name',
      location: '',
      startDate: '2023',
      endDate: state.lang === 'he' ? 'היום' : 'Present',
      description: ''
    });
    renderDynamicLists();
    renderPreview();
    saveStateToStorage();
  }

  function addEducationItem() {
    state.cv.education.push({
      id: 'edu-' + Date.now(),
      degree: state.lang === 'he' ? 'תואר / תעודה' : 'Degree / Certificate',
      institution: state.lang === 'he' ? 'מוסד הלימודים' : 'Institution',
      location: '',
      startDate: '2020',
      endDate: '2023',
      details: ''
    });
    renderDynamicLists();
    renderPreview();
    saveStateToStorage();
  }

  function addSkillItem() {
    state.cv.skills.push({
      id: 'sk-' + Date.now(),
      category: state.lang === 'he' ? 'קטגוריית כישורים' : 'Skill Category',
      items: 'Skill 1, Skill 2, Skill 3'
    });
    renderDynamicLists();
    renderPreview();
    saveStateToStorage();
  }

  function addProjectItem() {
    state.cv.projects.push({
      id: 'proj-' + Date.now(),
      title: state.lang === 'he' ? 'שם הפרויקט' : 'Project Name',
      link: '',
      tech: 'React, Node.js',
      description: ''
    });
    renderDynamicLists();
    renderPreview();
    saveStateToStorage();
  }

  // --- RENDER FORM UI FROM STATE ---
  function renderFormFromState() {
    const p = state.cv.personal || {};
    el.fieldFullName.value = p.fullName || '';
    el.fieldJobTitle.value = p.jobTitle || '';
    el.fieldEmail.value = p.email || '';
    el.fieldPhone.value = p.phone || '';
    el.fieldLocation.value = p.location || '';
    el.fieldLinkedin.value = p.linkedin || '';
    el.fieldGithub.value = p.github || '';
    el.fieldWebsite.value = p.website || '';
    el.fieldSummary.value = state.cv.summary || '';
    el.fieldLanguages.value = state.cv.languages || '';
    el.fieldCertifications.value = state.cv.certifications || '';

    // Active Template Card
    el.templateCards.forEach(c => {
      c.classList.toggle('active', c.dataset.template === state.template);
    });

    renderDynamicLists();
  }

  function renderDynamicLists() {
    // Experiences List
    el.experienceList.innerHTML = (state.cv.experiences || []).map((item, idx) => `
      <div class="dynamic-card" data-id="${item.id}">
        <div class="dynamic-card-header">
          <span class="dynamic-card-title">${item.jobTitle || (state.lang === 'he' ? 'תפקיד' : 'Role')}</span>
          <button class="btn-icon-danger btn-delete-exp" data-idx="${idx}"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label>${state.lang === 'he' ? 'תפקיד' : 'Title'}</label>
            <input type="text" class="exp-title" value="${escapeHtml(item.jobTitle)}" data-idx="${idx}">
          </div>
          <div class="form-group">
            <label>${state.lang === 'he' ? 'חברה' : 'Company'}</label>
            <input type="text" class="exp-company" value="${escapeHtml(item.company)}" data-idx="${idx}">
          </div>
          <div class="form-group">
            <label>${state.lang === 'he' ? 'תאריך התחלה' : 'Start Date'}</label>
            <input type="text" class="exp-start" value="${escapeHtml(item.startDate)}" data-idx="${idx}">
          </div>
          <div class="form-group">
            <label>${state.lang === 'he' ? 'תאריך סיום' : 'End Date'}</label>
            <input type="text" class="exp-end" value="${escapeHtml(item.endDate)}" data-idx="${idx}">
          </div>
          <div class="form-group span-2">
            <label>${state.lang === 'he' ? 'תיאור והישגים (תבליטים)' : 'Bullet Points'}</label>
            <textarea class="exp-desc" rows="3" data-idx="${idx}">${escapeHtml(item.description)}</textarea>
          </div>
        </div>
      </div>
    `).join('');

    // Education List
    el.educationList.innerHTML = (state.cv.education || []).map((item, idx) => `
      <div class="dynamic-card" data-id="${item.id}">
        <div class="dynamic-card-header">
          <span class="dynamic-card-title">${item.degree || (state.lang === 'he' ? 'השכלה' : 'Education')}</span>
          <button class="btn-icon-danger btn-delete-edu" data-idx="${idx}"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label>${state.lang === 'he' ? 'תואר / תעודה' : 'Degree'}</label>
            <input type="text" class="edu-degree" value="${escapeHtml(item.degree)}" data-idx="${idx}">
          </div>
          <div class="form-group">
            <label>${state.lang === 'he' ? 'מוסד לימודים' : 'Institution'}</label>
            <input type="text" class="edu-inst" value="${escapeHtml(item.institution)}" data-idx="${idx}">
          </div>
          <div class="form-group">
            <label>${state.lang === 'he' ? 'שנים' : 'Dates'}</label>
            <input type="text" class="edu-dates" value="${escapeHtml(item.startDate + ' - ' + item.endDate)}" data-idx="${idx}">
          </div>
          <div class="form-group span-2">
            <label>${state.lang === 'he' ? 'פירוט נוסף' : 'Details'}</label>
            <input type="text" class="edu-details" value="${escapeHtml(item.details)}" data-idx="${idx}">
          </div>
        </div>
      </div>
    `).join('');

    // Skills List
    el.skillsList.innerHTML = (state.cv.skills || []).map((item, idx) => `
      <div class="dynamic-card" data-id="${item.id}">
        <div class="dynamic-card-header">
          <span class="dynamic-card-title">${item.category || (state.lang === 'he' ? 'קטגוריה' : 'Category')}</span>
          <button class="btn-icon-danger btn-delete-skill" data-idx="${idx}"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label>${state.lang === 'he' ? 'שם הקטגוריה' : 'Category Name'}</label>
            <input type="text" class="sk-cat" value="${escapeHtml(item.category)}" data-idx="${idx}">
          </div>
          <div class="form-group span-2">
            <label>${state.lang === 'he' ? 'כישורים (מופרדים בפסיק)' : 'Skills (Comma separated)'}</label>
            <input type="text" class="sk-items" value="${escapeHtml(item.items)}" data-idx="${idx}">
          </div>
        </div>
      </div>
    `).join('');

    // Projects List
    el.projectsList.innerHTML = (state.cv.projects || []).map((item, idx) => `
      <div class="dynamic-card" data-id="${item.id}">
        <div class="dynamic-card-header">
          <span class="dynamic-card-title">${item.title || (state.lang === 'he' ? 'פרויקט' : 'Project')}</span>
          <button class="btn-icon-danger btn-delete-proj" data-idx="${idx}"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label>${state.lang === 'he' ? 'שם הפרויקט' : 'Project Name'}</label>
            <input type="text" class="proj-title" value="${escapeHtml(item.title)}" data-idx="${idx}">
          </div>
          <div class="form-group">
            <label>${state.lang === 'he' ? 'קישור' : 'Link/URL'}</label>
            <input type="text" class="proj-link" value="${escapeHtml(item.link)}" data-idx="${idx}">
          </div>
          <div class="form-group span-2">
            <label>${state.lang === 'he' ? 'טכנולוגיות' : 'Technologies'}</label>
            <input type="text" class="proj-tech" value="${escapeHtml(item.tech)}" data-idx="${idx}">
          </div>
          <div class="form-group span-2">
            <label>${state.lang === 'he' ? 'תיאור הפרויקט' : 'Description'}</label>
            <textarea class="proj-desc" rows="2" data-idx="${idx}">${escapeHtml(item.description)}</textarea>
          </div>
        </div>
      </div>
    `).join('');

    bindDynamicInputs();
  }

  function bindDynamicInputs() {
    // Experience inputs
    document.querySelectorAll('.exp-title').forEach(inp => inp.addEventListener('input', e => {
      state.cv.experiences[e.target.dataset.idx].jobTitle = e.target.value;
      renderPreview(); saveStateToStorage();
    }));
    document.querySelectorAll('.exp-company').forEach(inp => inp.addEventListener('input', e => {
      state.cv.experiences[e.target.dataset.idx].company = e.target.value;
      renderPreview(); saveStateToStorage();
    }));
    document.querySelectorAll('.exp-start').forEach(inp => inp.addEventListener('input', e => {
      state.cv.experiences[e.target.dataset.idx].startDate = e.target.value;
      renderPreview(); saveStateToStorage();
    }));
    document.querySelectorAll('.exp-end').forEach(inp => inp.addEventListener('input', e => {
      state.cv.experiences[e.target.dataset.idx].endDate = e.target.value;
      renderPreview(); saveStateToStorage();
    }));
    document.querySelectorAll('.exp-desc').forEach(inp => inp.addEventListener('input', e => {
      state.cv.experiences[e.target.dataset.idx].description = e.target.value;
      renderPreview(); saveStateToStorage();
    }));

    // Delete Buttons
    document.querySelectorAll('.btn-delete-exp').forEach(btn => btn.addEventListener('click', e => {
      const idx = e.currentTarget.dataset.idx;
      state.cv.experiences.splice(idx, 1);
      renderDynamicLists(); renderPreview(); saveStateToStorage();
    }));

    // Skill inputs
    document.querySelectorAll('.sk-cat').forEach(inp => inp.addEventListener('input', e => {
      state.cv.skills[e.target.dataset.idx].category = e.target.value;
      renderPreview(); saveStateToStorage();
    }));
    document.querySelectorAll('.sk-items').forEach(inp => inp.addEventListener('input', e => {
      state.cv.skills[e.target.dataset.idx].items = e.target.value;
      renderPreview(); saveStateToStorage();
    }));
    document.querySelectorAll('.btn-delete-skill').forEach(btn => btn.addEventListener('click', e => {
      const idx = e.currentTarget.dataset.idx;
      state.cv.skills.splice(idx, 1);
      renderDynamicLists(); renderPreview(); saveStateToStorage();
    }));

    // Education inputs
    document.querySelectorAll('.edu-degree').forEach(inp => inp.addEventListener('input', e => {
      state.cv.education[e.target.dataset.idx].degree = e.target.value;
      renderPreview(); saveStateToStorage();
    }));
    document.querySelectorAll('.edu-inst').forEach(inp => inp.addEventListener('input', e => {
      state.cv.education[e.target.dataset.idx].institution = e.target.value;
      renderPreview(); saveStateToStorage();
    }));
    document.querySelectorAll('.edu-details').forEach(inp => inp.addEventListener('input', e => {
      state.cv.education[e.target.dataset.idx].details = e.target.value;
      renderPreview(); saveStateToStorage();
    }));
    document.querySelectorAll('.btn-delete-edu').forEach(btn => btn.addEventListener('click', e => {
      const idx = e.currentTarget.dataset.idx;
      state.cv.education.splice(idx, 1);
      renderDynamicLists(); renderPreview(); saveStateToStorage();
    }));

    // Project inputs
    document.querySelectorAll('.proj-title').forEach(inp => inp.addEventListener('input', e => {
      state.cv.projects[e.target.dataset.idx].title = e.target.value;
      renderPreview(); saveStateToStorage();
    }));
    document.querySelectorAll('.proj-link').forEach(inp => inp.addEventListener('input', e => {
      state.cv.projects[e.target.dataset.idx].link = e.target.value;
      renderPreview(); saveStateToStorage();
    }));
    document.querySelectorAll('.proj-tech').forEach(inp => inp.addEventListener('input', e => {
      state.cv.projects[e.target.dataset.idx].tech = e.target.value;
      renderPreview(); saveStateToStorage();
    }));
    document.querySelectorAll('.proj-desc').forEach(inp => inp.addEventListener('input', e => {
      state.cv.projects[e.target.dataset.idx].description = e.target.value;
      renderPreview(); saveStateToStorage();
    }));
    document.querySelectorAll('.btn-delete-proj').forEach(btn => btn.addEventListener('click', e => {
      const idx = e.currentTarget.dataset.idx;
      state.cv.projects.splice(idx, 1);
      renderDynamicLists(); renderPreview(); saveStateToStorage();
    }));
  }

  // --- RENDER PRINTABLE RESUME PREVIEW ---
  function renderPreview() {
    const p = state.cv.personal || {};
    const isHe = state.lang === 'he';

    // Apply template class and root properties
    el.resumePreview.className = `resume-paper template-${state.template}`;
    el.resumePreview.dir = isHe ? 'rtl' : 'ltr';

    document.documentElement.style.setProperty('--paper-font', state.fontFamily);
    document.documentElement.style.setProperty('--paper-font-size', `${state.fontSize}px`);
    document.documentElement.style.setProperty('--paper-spacing-mult', state.spacing);
    document.documentElement.style.setProperty('--accent-color', state.accentColor);

    // Build Contact Items HTML
    const contactItemsHTML = [
      p.email ? `<span class="cv-contact-item"><i class="fa-solid fa-envelope"></i> ${escapeHtml(p.email)}</span>` : '',
      p.phone ? `<span class="cv-contact-item"><i class="fa-solid fa-phone"></i> ${escapeHtml(p.phone)}</span>` : '',
      p.location ? `<span class="cv-contact-item"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(p.location)}</span>` : '',
      p.linkedin ? `<span class="cv-contact-item"><i class="fa-brands fa-linkedin"></i> ${escapeHtml(p.linkedin)}</span>` : '',
      p.github ? `<span class="cv-contact-item"><i class="fa-brands fa-github"></i> ${escapeHtml(p.github)}</span>` : '',
      p.website ? `<span class="cv-contact-item"><i class="fa-solid fa-globe"></i> ${escapeHtml(p.website)}</span>` : ''
    ].filter(Boolean).join('');

    // Summary Section
    const summaryHTML = state.cv.summary ? `
      <section class="cv-section">
        <h3 class="cv-section-title"><i class="fa-solid fa-user-tie"></i> ${isHe ? 'תמצית מקצועית' : 'Professional Summary'}</h3>
        <p class="cv-summary-text">${escapeHtml(state.cv.summary)}</p>
      </section>
    ` : '';

    // Experience Section
    const experiencesHTML = (state.cv.experiences || []).length > 0 ? `
      <section class="cv-section">
        <h3 class="cv-section-title"><i class="fa-solid fa-briefcase"></i> ${isHe ? 'ניסיון מקצועי' : 'Work Experience'}</h3>
        ${state.cv.experiences.map(exp => `
          <div class="cv-item">
            <div class="cv-item-header">
              <div>
                <span class="cv-item-title">${escapeHtml(exp.jobTitle)}</span>
                <span class="cv-item-subtitle"> | ${escapeHtml(exp.company)}</span>
              </div>
              <span class="cv-item-date">${escapeHtml(exp.startDate)} - ${escapeHtml(exp.endDate)}</span>
            </div>
            ${exp.description ? `<div class="cv-item-desc">${escapeHtml(exp.description)}</div>` : ''}
          </div>
        `).join('')}
      </section>
    ` : '';

    // Education Section
    const educationHTML = (state.cv.education || []).length > 0 ? `
      <section class="cv-section">
        <h3 class="cv-section-title"><i class="fa-solid fa-graduation-cap"></i> ${isHe ? 'השכלה ולימודים' : 'Education'}</h3>
        ${state.cv.education.map(edu => `
          <div class="cv-item">
            <div class="cv-item-header">
              <div>
                <span class="cv-item-title">${escapeHtml(edu.degree)}</span>
                <span class="cv-item-subtitle"> - ${escapeHtml(edu.institution)}</span>
              </div>
              <span class="cv-item-date">${escapeHtml(edu.startDate)} ${edu.endDate ? '- ' + escapeHtml(edu.endDate) : ''}</span>
            </div>
            ${edu.details ? `<div class="cv-item-desc">${escapeHtml(edu.details)}</div>` : ''}
          </div>
        `).join('')}
      </section>
    ` : '';

    // Skills Section
    const skillsHTML = (state.cv.skills || []).length > 0 ? `
      <section class="cv-section">
        <h3 class="cv-section-title"><i class="fa-solid fa-screwdriver-wrench"></i> ${isHe ? 'כישורים וטכנולוגיות' : 'Technical Skills'}</h3>
        ${state.cv.skills.map(sk => `
          <div class="cv-skills-group">
            <span class="cv-skill-cat">${escapeHtml(sk.category)}:</span>
            <span class="cv-skill-items">${escapeHtml(sk.items)}</span>
          </div>
        `).join('')}
      </section>
    ` : '';

    // Projects Section
    const projectsHTML = (state.cv.projects || []).length > 0 ? `
      <section class="cv-section">
        <h3 class="cv-section-title"><i class="fa-solid fa-diagram-project"></i> ${isHe ? 'פרויקטים בולטים' : 'Key Projects'}</h3>
        ${state.cv.projects.map(proj => `
          <div class="cv-item">
            <div class="cv-item-header">
              <div>
                <span class="cv-item-title">${escapeHtml(proj.title)}</span>
                ${proj.tech ? `<span class="cv-item-subtitle"> (${escapeHtml(proj.tech)})</span>` : ''}
              </div>
              ${proj.link ? `<span class="cv-item-date">${escapeHtml(proj.link)}</span>` : ''}
            </div>
            ${proj.description ? `<div class="cv-item-desc">${escapeHtml(proj.description)}</div>` : ''}
          </div>
        `).join('')}
      </section>
    ` : '';

    // Extras Section (Languages & Certifications)
    const extrasHTML = (state.cv.languages || state.cv.certifications) ? `
      <section class="cv-section">
        <h3 class="cv-section-title"><i class="fa-solid fa-certificate"></i> ${isHe ? 'שפות והסמכות' : 'Languages & Certifications'}</h3>
        ${state.cv.languages ? `
          <div class="cv-skills-group">
            <span class="cv-skill-cat">${isHe ? 'שפות' : 'Languages'}:</span>
            <span class="cv-skill-items">${escapeHtml(state.cv.languages)}</span>
          </div>
        ` : ''}
        ${state.cv.certifications ? `
          <div class="cv-skills-group">
            <span class="cv-skill-cat">${isHe ? 'הסמכות' : 'Certifications'}:</span>
            <span class="cv-skill-items">${escapeHtml(state.cv.certifications)}</span>
          </div>
        ` : ''}
      </section>
    ` : '';

    // Assemble Full Paper
    el.resumePreview.innerHTML = `
      <header class="cv-header">
        <h1 class="cv-name">${escapeHtml(p.fullName || (isHe ? 'שם מלא' : 'Full Name'))}</h1>
        <div class="cv-title">${escapeHtml(p.jobTitle || (isHe ? 'הגדרת תפקיד' : 'Professional Title'))}</div>
        <div class="cv-contact-bar">${contactItemsHTML}</div>
      </header>

      ${summaryHTML}
      ${experiencesHTML}
      ${educationHTML}
      ${skillsHTML}
      ${projectsHTML}
      ${extrasHTML}
    `;
  }

  function renderAll() {
    document.body.dir = state.lang === 'he' ? 'rtl' : 'ltr';
    el.btnLangHe.classList.toggle('active', state.lang === 'he');
    el.btnLangEn.classList.toggle('active', state.lang === 'en');
    
    applyTheme();
    setAccentColor(state.accentColor);

    renderFormFromState();
    renderPreview();
    applyZoom();
  }

  // JSON Backup / Import
  function exportJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.cv, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `cv_${state.cv.personal.fullName || 'resume'}.json`);
    dlAnchorElem.click();
  }

  function importJson(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        state.cv = importedData;
        renderFormFromState();
        renderPreview();
        saveStateToStorage();
        alert(state.lang === 'he' ? 'הנתונים נטענו בהצלחה!' : 'CV Data Imported Successfully!');
      } catch (err) {
        alert('קובץ JSON לא תקין.');
      }
    };
    reader.readAsText(file);
  }

  // Helper
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Run init on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
