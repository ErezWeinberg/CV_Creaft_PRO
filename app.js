/* ==========================================================================
   CV Craft PRO - Main Application Logic & Translation Engine
   ========================================================================== */

(function () {
  'use strict';

  // --- UI DICTIONARY (i18n) ---
  const i18n = {
    he: {
      logoSub: 'מחולל קורות חיים דינמי וחכם',
      atsPrefix: 'ציון ATS:',
      translateBtn: 'תרגם אוטומטית',
      sampleBtn: 'דוגמה',
      exportJsonBtn: 'JSON',
      exportTxtBtn: 'TXT',
      importBtn: 'טען',
      exportPdfBtn: 'ייצוא ל-PDF',
      tabContent: 'תוכן',
      tabTemplates: 'תבניות',
      tabDesign: 'עיצוב וגופנים',
      tabTips: 'ניתוח ATS',
      accPersonal: 'פרטים אישיים',
      accSummary: 'תמצית מקצועית (About)',
      accExperience: 'ניסיון תעסוקתי',
      accEducation: 'השכלה ולימודים',
      accSkills: 'כישורים וטכנולוגיות',
      accProjects: 'פרויקטים בולטים',
      accExtras: 'שפות והסמכות',
      lblFullName: 'שם מלא *',
      phFullName: 'ישראל ישראלי',
      lblJobTitle: 'תואר מקצועי / הגדרת תפקיד *',
      phJobTitle: 'Senior Full-Stack Developer',
      lblEmail: 'אימייל',
      phEmail: 'israel@example.com',
      lblPhone: 'טלפון',
      phPhone: '050-1234567',
      lblLocation: 'עיר / מיקום',
      phLocation: 'תל אביב, ישראל',
      lblLinkedin: 'קישור LinkedIn',
      phLinkedin: 'linkedin.com/in/username',
      lblGithub: 'קישור GitHub / קורות חיים',
      phGithub: 'github.com/username',
      lblWebsite: 'אתר אישי / פורטפוליו',
      phWebsite: 'mywebsite.com',
      lblSummaryDesc: 'פסקה קצרה וממוקדת המדגישה את הניסיון והערך המרכזי שלך',
      lblAiEnhance: 'שדרג ניסוח',
      phSummary: 'מפתח תוכנה בכיר עם מעל 6 שנות ניסיון בפיתוח מערכות WEB מורכבות, ארכיטקטורת ענן והובלת צוותים...',
      lblAddExperience: 'הוסף תפקיד',
      lblAddEducation: 'הוסף השכלה',
      lblAddSkillCat: 'הוסף קטגוריית כישורים',
      lblAddProject: 'הוסף פרויקט',
      lblLanguages: 'שפות (מופרדות בפסיקים)',
      phLanguages: 'עברית (שפת אם), אנגלית (ברמה גבוהה מאוד)',
      lblCertifications: 'הסמכות ותעודות (מופרדות בפסיקים או בשורות חדשות)',
      phCertifications: 'AWS Certified Solutions Architect\nGoogle Cloud Professional Developer',
      headingTemplates: 'בחר תבנית עיצוב לקורות החיים',
      subTemplates: 'כל התבניות מותאמות לסריקת ATS ומיועדות להדפסה נקייה',
      tplModernTitle: 'Modern Tech (מומלץ)',
      tplModernDesc: 'עיצוב מודרני דו-עמודתי עם קו הדגשה צבעוני, קריא ומרשים.',
      tplAtsTitle: 'ATS Classic',
      tplAtsDesc: 'תבנית קלאסית בטור יחיד. 100% מותאמת לסורקי מערכות גיוס אוטומטיות.',
      tplMinimalTitle: 'Minimalist Executive',
      tplMinimalDesc: 'טיפוגרפיה נקיה ויוקרתית עם מרווחים נדיבים, מתאימה לתפקידי ניהול.',
      tplCreativeTitle: 'Creative Accent',
      tplCreativeDesc: 'עיצוב עם כותרת בולטת ותגיות צבעוניות לכישורים.',
      headingDesign: 'התאמה עיצובית',
      lblAccentColor: 'צבע הדגש (Accent Color)',
      lblFontFamily: 'גופן (Font Family)',
      lblFontSizeTitle: 'גודל גופן בבסיס המסמך:',
      lblSpacingTitle: 'צפיפות המרווחים:',
      headingTips: '📊 ניתוח התאמה למערכות סינון (ATS Score)',
      subTips: 'ניתוח בזמן אמת של איכות קורות החיים לפי קריטריונים של מגייסים',
      translationLoader: 'מתרגם תוכן...',
      saveStatus: 'נשמר בדפדפן'
    },
    en: {
      logoSub: 'Dynamic & Smart Resume Builder',
      atsPrefix: 'ATS Score:',
      translateBtn: 'Auto Translate',
      sampleBtn: 'Sample',
      exportJsonBtn: 'JSON',
      exportTxtBtn: 'TXT',
      importBtn: 'Import',
      exportPdfBtn: 'Export PDF',
      tabContent: 'Content',
      tabTemplates: 'Templates',
      tabDesign: 'Design & Fonts',
      tabTips: 'ATS Analysis',
      accPersonal: 'Personal Details',
      accSummary: 'Professional Summary',
      accExperience: 'Work Experience',
      accEducation: 'Education',
      accSkills: 'Technical Skills',
      accProjects: 'Featured Projects',
      accExtras: 'Languages & Certifications',
      lblFullName: 'Full Name *',
      phFullName: 'Alex Morgan',
      lblJobTitle: 'Professional Title / Role *',
      phJobTitle: 'Senior Full-Stack Engineer',
      lblEmail: 'Email',
      phEmail: 'alex@example.com',
      lblPhone: 'Phone',
      phPhone: '+1 (555) 019-2834',
      lblLocation: 'City / Location',
      phLocation: 'San Francisco, CA',
      lblLinkedin: 'LinkedIn Link',
      phLinkedin: 'linkedin.com/in/username',
      lblGithub: 'GitHub / Portfolio Link',
      phGithub: 'github.com/username',
      lblWebsite: 'Personal Website',
      phWebsite: 'mywebsite.com',
      lblSummaryDesc: 'Concise summary highlighting your key experience and core value',
      lblAiEnhance: 'Enhance with AI',
      phSummary: 'Results-oriented Senior Developer with 6+ years of experience in cloud architecture, web systems, and technical team leadership...',
      lblAddExperience: 'Add Position',
      lblAddEducation: 'Add Education',
      lblAddSkillCat: 'Add Skill Category',
      lblAddProject: 'Add Project',
      lblLanguages: 'Languages (comma separated)',
      phLanguages: 'English (Native), Hebrew (Fluent)',
      lblCertifications: 'Certifications & Credentials (comma or line separated)',
      phCertifications: 'AWS Certified Solutions Architect\nGoogle Cloud Professional Developer',
      headingTemplates: 'Choose Resume Template',
      subTemplates: 'All templates are ATS-optimized and print-ready',
      tplModernTitle: 'Modern Tech (Recommended)',
      tplModernDesc: 'Modern two-column design with colorful accent line, clear and impressive.',
      tplAtsTitle: 'ATS Classic',
      tplAtsDesc: 'Classic single-column template. 100% optimized for automated ATS parsers.',
      tplMinimalTitle: 'Minimalist Executive',
      tplMinimalDesc: 'Clean executive typography with generous margins, ideal for management.',
      tplCreativeTitle: 'Creative Accent',
      tplCreativeDesc: 'Distinctive layout with prominent headers and colored skill tags.',
      headingDesign: 'Design Customization',
      lblAccentColor: 'Accent Color',
      lblFontFamily: 'Font Family',
      lblFontSizeTitle: 'Base Font Size:',
      lblSpacingTitle: 'Spacing Density:',
      headingTips: '📊 ATS Match Analysis',
      subTips: 'Real-time analysis of resume quality based on recruiter criteria',
      translationLoader: 'Translating content...',
      saveStatus: 'Saved in browser'
    }
  };

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

  // DOM Cache
  const el = {};

  // Cache for translation results
  const translationCache = new Map();

  // Initialize
  function init() {
    cacheDOMElements();
    loadStateFromStorage();
    bindEvents();
    renderAll();
  }

  function cacheDOMElements() {
    el.btnLangHe = document.getElementById('btn-lang-he');
    el.btnLangEn = document.getElementById('btn-lang-en');
    el.btnAutoTranslate = document.getElementById('btn-auto-translate');
    el.lblTranslate = document.getElementById('lbl-translate');
    el.btnThemeToggle = document.getElementById('btn-theme-toggle');
    el.btnSampleData = document.getElementById('btn-sample-data');
    el.btnExportJson = document.getElementById('btn-export-json');
    el.btnExportTxt = document.getElementById('btn-export-txt');
    el.inputImportJson = document.getElementById('input-import-json');
    el.btnPrint = document.getElementById('btn-print');

    // ATS Score
    el.atsScoreVal = document.getElementById('ats-score-val');
    el.atsScoreFill = document.getElementById('ats-score-fill');
    el.atsSuggestionsList = document.getElementById('ats-suggestions-list');

    // Navigation Tabs
    el.navTabs = document.querySelectorAll('.nav-tab');
    el.tabContents = document.querySelectorAll('.tab-content');
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
    el.btnAiEnhanceSummary = document.getElementById('btn-ai-enhance-summary');
    el.fieldLanguages = document.getElementById('field-languages');
    el.fieldCertifications = document.getElementById('field-certifications');

    // Dynamic Lists
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

    // Zoom Controls & Status
    el.btnZoomOut = document.getElementById('btn-zoom-out');
    el.btnZoomIn = document.getElementById('btn-zoom-in');
    el.btnZoomReset = document.getElementById('btn-zoom-reset');
    el.zoomLevelText = document.getElementById('zoom-level');
    el.translationLoader = document.getElementById('translation-loader');

    // Resume Preview
    el.resumePreview = document.getElementById('resume-preview');
  }

  // --- LOCAL STORAGE ---
  function saveStateToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  function loadStateFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        state = { ...state, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Load state error:', e);
    }
  }

  // --- EVENT BINDINGS ---
  function bindEvents() {
    el.btnLangHe.addEventListener('click', () => setLanguage('he', true));
    el.btnLangEn.addEventListener('click', () => setLanguage('en', true));
    el.btnAutoTranslate.addEventListener('click', () => setLanguage(state.lang === 'he' ? 'en' : 'he', true));

    if (el.btnThemeToggle) {
      el.btnThemeToggle.addEventListener('click', toggleTheme);
    }

    el.btnSampleData.addEventListener('click', () => {
      const isHe = state.lang === 'he';
      state.cv = JSON.parse(JSON.stringify(isHe ? sampleDataHebrew : sampleDataEnglish));
      renderFormFromState();
      renderPreview();
      calculateAtsScore();
      saveStateToStorage();
    });

    el.btnExportJson.addEventListener('click', exportJson);
    el.btnExportTxt.addEventListener('click', exportTxt);
    el.inputImportJson.addEventListener('change', importJson);
    el.btnPrint.addEventListener('click', () => window.print());

    if (el.btnAiEnhanceSummary) {
      el.btnAiEnhanceSummary.addEventListener('click', aiEnhanceSummary);
    }

    el.navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;
        el.navTabs.forEach(t => t.classList.remove('active'));
        el.tabContents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`tab-${targetTab}`).classList.add('active');
      });
    });

    el.accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        header.closest('.accordion-item').classList.toggle('expanded');
      });
    });

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

    el.btnAddExperience.addEventListener('click', addExperienceItem);
    el.btnAddEducation.addEventListener('click', addEducationItem);
    el.btnAddSkillCat.addEventListener('click', addSkillItem);
    el.btnAddProject.addEventListener('click', addProjectItem);

    el.templateCards.forEach(card => {
      card.addEventListener('click', () => {
        el.templateCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        state.template = card.dataset.template;
        renderPreview();
        saveStateToStorage();
      });
    });

    el.colorSwatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        el.colorSwatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        setAccentColor(swatch.dataset.color);
      });
    });

    el.customColorPicker.addEventListener('input', (e) => setAccentColor(e.target.value));

    el.selectFontFamily.addEventListener('change', (e) => {
      state.fontFamily = e.target.value;
      renderPreview();
      saveStateToStorage();
    });

    el.sliderFontSize.addEventListener('input', (e) => {
      state.fontSize = parseFloat(e.target.value);
      el.valFontSize.textContent = `${state.fontSize}px`;
      renderPreview();
      saveStateToStorage();
    });

    el.sliderSpacing.addEventListener('input', (e) => {
      state.spacing = parseFloat(e.target.value);
      const isHe = state.lang === 'he';
      el.valSpacing.textContent = state.spacing < 1 ? (isHe ? 'דחוס' : 'Compact') : state.spacing === 1 ? (isHe ? 'רגיל' : 'Normal') : (isHe ? 'מרווח' : 'Spacious');
      renderPreview();
      saveStateToStorage();
    });

    el.btnZoomIn.addEventListener('click', () => adjustZoom(0.1));
    el.btnZoomOut.addEventListener('click', () => adjustZoom(-0.1));
    el.btnZoomReset.addEventListener('click', () => {
      state.zoom = 1;
      applyZoom();
    });
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
      calculateAtsScore();
      saveStateToStorage();
    });
  }

  // --- UI INTERNATIONALIZATION (i18n) ---
  function updateUILanguage(lang) {
    const t = i18n[lang] || i18n.he;

    const setTxt = (id, text) => {
      const elem = document.getElementById(id);
      if (elem) elem.textContent = text;
    };
    const setPh = (id, placeholder) => {
      const elem = document.getElementById(id);
      if (elem) elem.placeholder = placeholder;
    };

    setTxt('lbl-logo-sub', t.logoSub);
    setTxt('lbl-ats-prefix', t.atsPrefix);
    setTxt('lbl-translate', t.translateBtn);
    setTxt('lbl-btn-sample', t.sampleBtn);
    setTxt('lbl-btn-json', t.exportJsonBtn);
    setTxt('lbl-btn-txt', t.exportTxtBtn);
    setTxt('lbl-btn-import', t.importBtn);
    setTxt('lbl-btn-print', t.exportPdfBtn);

    setTxt('lbl-tab-content', t.tabContent);
    setTxt('lbl-tab-templates', t.tabTemplates);
    setTxt('lbl-tab-design', t.tabDesign);
    setTxt('lbl-tab-tips', t.tabTips);

    setTxt('lbl-acc-personal', t.accPersonal);
    setTxt('lbl-acc-summary', t.accSummary);
    setTxt('lbl-acc-experience', t.accExperience);
    setTxt('lbl-acc-education', t.accEducation);
    setTxt('lbl-acc-skills', t.accSkills);
    setTxt('lbl-acc-projects', t.accProjects);
    setTxt('lbl-acc-extras', t.accExtras);

    setTxt('lbl-fullName', t.lblFullName);
    setPh('field-fullName', t.phFullName);
    setTxt('lbl-jobTitle', t.lblJobTitle);
    setPh('field-jobTitle', t.phJobTitle);
    setTxt('lbl-email', t.lblEmail);
    setPh('field-email', t.phEmail);
    setTxt('lbl-phone', t.lblPhone);
    setPh('field-phone', t.phPhone);
    setTxt('lbl-location', t.lblLocation);
    setPh('field-location', t.phLocation);
    setTxt('lbl-linkedin', t.lblLinkedin);
    setPh('field-linkedin', t.phLinkedin);
    setTxt('lbl-github', t.lblGithub);
    setPh('field-github', t.phGithub);
    setTxt('lbl-website', t.lblWebsite);
    setPh('field-website', t.phWebsite);

    setTxt('lbl-summary-desc', t.lblSummaryDesc);
    setTxt('lbl-ai-enhance', t.lblAiEnhance);
    setPh('field-summary', t.phSummary);

    setTxt('lbl-add-experience', t.lblAddExperience);
    setTxt('lbl-add-education', t.lblAddEducation);
    setTxt('lbl-add-skill-cat', t.lblAddSkillCat);
    setTxt('lbl-add-project', t.lblAddProject);

    setTxt('lbl-languages', t.lblLanguages);
    setPh('field-languages', t.phLanguages);
    setTxt('lbl-certifications', t.lblCertifications);
    setPh('field-certifications', t.phCertifications);

    setTxt('lbl-heading-templates', t.headingTemplates);
    setTxt('lbl-sub-templates', t.subTemplates);
    setTxt('lbl-tpl-modern-title', t.tplModernTitle);
    setTxt('lbl-tpl-modern-desc', t.tplModernDesc);
    setTxt('lbl-tpl-ats-title', t.tplAtsTitle);
    setTxt('lbl-tpl-ats-desc', t.tplAtsDesc);
    setTxt('lbl-tpl-minimal-title', t.tplMinimalTitle);
    setTxt('lbl-tpl-minimal-desc', t.tplMinimalDesc);
    setTxt('lbl-tpl-creative-title', t.tplCreativeTitle);
    setTxt('lbl-tpl-creative-desc', t.tplCreativeDesc);

    setTxt('lbl-heading-design', t.headingDesign);
    setTxt('lbl-accent-color', t.lblAccentColor);
    setTxt('lbl-font-family', t.lblFontFamily);
    setTxt('lbl-font-size-title', t.lblFontSizeTitle);
    setTxt('lbl-spacing-title', t.lblSpacingTitle);

    setTxt('lbl-heading-tips', t.headingTips);
    setTxt('lbl-sub-tips', t.subTips);

    setTxt('lbl-translation-loader', t.translationLoader);
    setTxt('lbl-save-status', t.saveStatus);
  }

  // --- REAL-TIME TRANSLATION ENGINE ---
  async function translateTextOnline(text, fromLang, toLang) {
    if (!text || text.trim() === '') return text;
    const cacheKey = `${fromLang}_${toLang}_${text.trim()}`;
    if (translationCache.has(cacheKey)) {
      return translationCache.get(cacheKey);
    }

    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data && data.responseData && data.responseData.translatedText) {
        const result = data.responseData.translatedText;
        translationCache.set(cacheKey, result);
        return result;
      }
    } catch (e) {
      console.warn('Online translation error, falling back to original text:', e);
    }
    return text;
  }

  function isUsingSampleData(cv, sourceLang) {
    if (!cv || !cv.personal) return true;
    const name = (cv.personal.fullName || '').trim();
    if (sourceLang === 'he') {
      return !name || name === 'ישראל ישראלי' || name === sampleDataHebrew.personal.fullName;
    } else {
      return !name || name === 'Alex Morgan' || name === sampleDataEnglish.personal.fullName;
    }
  }

  async function translateCVContent(targetLang, sourceLang) {
    if (targetLang === sourceLang) return;

    if (isUsingSampleData(state.cv, sourceLang)) {
      state.cv = JSON.parse(JSON.stringify(targetLang === 'en' ? sampleDataEnglish : sampleDataHebrew));
      return;
    }

    if (el.translationLoader) el.translationLoader.style.display = 'flex';
    if (el.btnAutoTranslate) el.btnAutoTranslate.disabled = true;

    try {
      const tasks = [];

      // Personal Title & Location
      if (state.cv.personal) {
        if (state.cv.personal.jobTitle) {
          tasks.push(translateTextOnline(state.cv.personal.jobTitle, sourceLang, targetLang).then(res => state.cv.personal.jobTitle = res));
        }
        if (state.cv.personal.location) {
          tasks.push(translateTextOnline(state.cv.personal.location, sourceLang, targetLang).then(res => state.cv.personal.location = res));
        }
      }

      // Summary
      if (state.cv.summary) {
        tasks.push(translateTextOnline(state.cv.summary, sourceLang, targetLang).then(res => state.cv.summary = res));
      }

      // Experiences
      if (state.cv.experiences) {
        for (let exp of state.cv.experiences) {
          if (exp.jobTitle) tasks.push(translateTextOnline(exp.jobTitle, sourceLang, targetLang).then(res => exp.jobTitle = res));
          if (exp.company) tasks.push(translateTextOnline(exp.company, sourceLang, targetLang).then(res => exp.company = res));
          if (exp.location) tasks.push(translateTextOnline(exp.location, sourceLang, targetLang).then(res => exp.location = res));
          if (exp.endDate) {
            if (exp.endDate === 'היום' && targetLang === 'en') exp.endDate = 'Present';
            else if (exp.endDate === 'Present' && targetLang === 'he') exp.endDate = 'היום';
          }
          if (exp.description) tasks.push(translateTextOnline(exp.description, sourceLang, targetLang).then(res => exp.description = res));
        }
      }

      // Education
      if (state.cv.education) {
        for (let edu of state.cv.education) {
          if (edu.degree) tasks.push(translateTextOnline(edu.degree, sourceLang, targetLang).then(res => edu.degree = res));
          if (edu.institution) tasks.push(translateTextOnline(edu.institution, sourceLang, targetLang).then(res => edu.institution = res));
          if (edu.details) tasks.push(translateTextOnline(edu.details, sourceLang, targetLang).then(res => edu.details = res));
        }
      }

      // Skills
      if (state.cv.skills) {
        for (let sk of state.cv.skills) {
          if (sk.category) tasks.push(translateTextOnline(sk.category, sourceLang, targetLang).then(res => sk.category = res));
        }
      }

      // Projects
      if (state.cv.projects) {
        for (let proj of state.cv.projects) {
          if (proj.title) tasks.push(translateTextOnline(proj.title, sourceLang, targetLang).then(res => proj.title = res));
          if (proj.description) tasks.push(translateTextOnline(proj.description, sourceLang, targetLang).then(res => proj.description = res));
        }
      }

      // Languages & Certifications
      if (state.cv.languages) tasks.push(translateTextOnline(state.cv.languages, sourceLang, targetLang).then(res => state.cv.languages = res));
      if (state.cv.certifications) tasks.push(translateTextOnline(state.cv.certifications, sourceLang, targetLang).then(res => state.cv.certifications = res));

      await Promise.all(tasks);

    } catch (err) {
      console.error('Translation error:', err);
    } finally {
      if (el.translationLoader) el.translationLoader.style.display = 'none';
      if (el.btnAutoTranslate) el.btnAutoTranslate.disabled = false;
    }
  }

  // --- AI ENHANCE SUMMARY SIMULATOR ---
  function aiEnhanceSummary() {
    const isHe = state.lang === 'he';
    if (isHe) {
      state.cv.summary = 'מפתח Full-Stack בכיר בעל ניסיון מוכח של מעל 6 שנות בהובלת ארכיטקטורת תוכנה, פיתוח מערכות ענן מבוזרות ב-React, Node.js ו-AWS. מומחה באופטימיזציית ביצועי Client-Side, הקטנת זמני טעינה ב-45% והובלת צוותים טכנולוגיים להישגים יוצאי דופן.';
    } else {
      state.cv.summary = 'Results-oriented Senior Full-Stack Engineer with 6+ years of expertise designing and architecting scalable cloud platforms in React, Node.js, and AWS. Proven track record of optimizing client-side rendering latency by 45% and leading cross-functional developer teams to deliver mission-critical software.';
    }
    el.fieldSummary.value = state.cv.summary;
    renderPreview();
    calculateAtsScore();
    saveStateToStorage();
  }

  // --- REAL-TIME ATS SCORE CALCULATOR ---
  function calculateAtsScore() {
    let score = 0;
    const suggestions = [];
    const p = state.cv.personal || {};
    const isHe = state.lang === 'he';

    // 1. Personal details check (20 points)
    if (p.fullName && p.jobTitle && (p.email || p.phone)) {
      score += 20;
      suggestions.push({
        type: 'pass',
        title: isHe ? 'פרטי התקשרות מלאים' : 'Contact Details Complete',
        desc: isHe ? 'השם, התואר ופרטי ליצירת קשר הוזנו כראוי.' : 'Name, title, and contact details entered.'
      });
    } else {
      suggestions.push({
        type: 'warn',
        title: isHe ? 'חסרים פרטי התקשרות' : 'Missing Contact Info',
        desc: isHe ? 'מומלץ למלא אימייל, טלפון ועיר מגורים.' : 'Add your email, phone number, and location.'
      });
    }

    // 2. Summary check (20 points)
    const summaryLen = (state.cv.summary || '').length;
    if (summaryLen > 80 && summaryLen < 500) {
      score += 20;
      suggestions.push({
        type: 'pass',
        title: isHe ? 'תמצית מקצועית ממוקדת' : 'Strong Professional Summary',
        desc: isHe ? 'אורך הפסקה אידיאלי לקריאה מהירה של מגייסים.' : 'Ideal summary length for quick recruiter scanning.'
      });
    } else {
      suggestions.push({
        type: 'warn',
        title: isHe ? 'שפר תמצית מקצועית' : 'Optimize Summary',
        desc: isHe ? 'כתוב 2-4 משפטים המדגישים את הניסיון והמומחיות שלך.' : 'Write 2-4 punchy sentences summarizing your expertise.'
      });
    }

    // 3. Experience check & bullet points (25 points)
    const expCount = (state.cv.experiences || []).length;
    if (expCount >= 1) {
      score += 15;
      const hasBullets = state.cv.experiences.some(e => (e.description || '').includes('•') || (e.description || '').includes('-'));
      if (hasBullets) score += 10;
      suggestions.push({
        type: 'pass',
        title: isHe ? 'ניסיון תעסוקתי מפורט' : 'Work Experience Detailed',
        desc: isHe ? `הוזנו ${expCount} תפקידים עם תיאור נקודתי.` : `${expCount} roles listed with bullet points.`
      });
    } else {
      suggestions.push({
        type: 'warn',
        title: isHe ? 'הוסף ניסיון תעסוקתי' : 'Add Work Experience',
        desc: isHe ? 'מערכות ATS מחפשות לפחות תפקיד אחד מפורט.' : 'ATS systems search for detailed recent roles.'
      });
    }

    // 4. Quantifiable Metrics Check (Numbers/%) (20 points)
    const fullText = JSON.stringify(state.cv);
    const hasNumbers = /\d+%|\d+\+|\$\d+/.test(fullText);
    if (hasNumbers) {
      score += 20;
      suggestions.push({
        type: 'pass',
        title: isHe ? 'שילוב מדדים כמותיים (Metrics)' : 'Quantifiable Metrics Included',
        desc: isHe ? 'כלולים אחוזים ומספרים המוכחים הישגים (כמו 40%, 5+).' : 'Contains numbers and percentages showing tangible impact.'
      });
    } else {
      suggestions.push({
        type: 'warn',
        title: isHe ? 'הוסף מדדים כמותיים' : 'Add Quantifiable Results',
        desc: isHe ? 'מגייסים מעדיפים שורות כמו: "שיפרתי ביצועים ב-30%".' : 'Include metrics like: "Improved API latency by 35%".'
      });
    }

    // 5. Skills Density (15 points)
    const skillsCount = (state.cv.skills || []).length;
    if (skillsCount >= 1) {
      score += 15;
      suggestions.push({
        type: 'pass',
        title: isHe ? 'קטגוריות כישורים מוגדרות' : 'Technical Skills Categorized',
        desc: isHe ? 'מילות המפתח הטכנולוגיות מסודרות היטב לסורקי ATS.' : 'Keywords are organized for ATS parsers.'
      });
    }

    // Render ATS UI
    score = Math.min(100, Math.max(0, score));
    if (el.atsScoreVal) el.atsScoreVal.textContent = `${score}%`;
    if (el.atsScoreFill) el.atsScoreFill.style.width = `${score}%`;

    if (el.atsSuggestionsList) {
      el.atsSuggestionsList.innerHTML = suggestions.map(s => `
        <div class="tip-card ${s.type}">
          <h4><i class="fa-solid ${s.type === 'pass' ? 'fa-circle-check' : 'fa-circle-exclamation'}"></i> ${s.title}</h4>
          <p>${s.desc}</p>
        </div>
      `).join('');
    }
  }

  // --- STATE HANDLERS ---
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

  async function setLanguage(lang, autoTranslate = true) {
    const sourceLang = state.lang;
    state.lang = lang;
    document.body.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    el.btnLangHe.classList.toggle('active', lang === 'he');
    el.btnLangEn.classList.toggle('active', lang === 'en');
    
    if (lang === 'en' && state.fontFamily.includes('Heebo')) {
      state.fontFamily = "'Inter', sans-serif";
      if (el.selectFontFamily) el.selectFontFamily.value = state.fontFamily;
    } else if (lang === 'he' && state.fontFamily.includes('Inter')) {
      state.fontFamily = "'Heebo', 'Inter', sans-serif";
      if (el.selectFontFamily) el.selectFontFamily.value = state.fontFamily;
    }

    updateUILanguage(lang);

    if (autoTranslate && sourceLang !== lang) {
      await translateCVContent(lang, sourceLang);
    }

    renderFormFromState();
    renderPreview();
    calculateAtsScore();
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

  // Add Dynamic List Items
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
    calculateAtsScore();
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
    calculateAtsScore();
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
    calculateAtsScore();
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
    calculateAtsScore();
    saveStateToStorage();
  }

  // --- RENDER FORM UI ---
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

    el.templateCards.forEach(c => {
      c.classList.toggle('active', c.dataset.template === state.template);
    });

    renderDynamicLists();
  }

  function renderDynamicLists() {
    // Experience List
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
            <input type="text" class="edu-dates" value="${escapeHtml((item.startDate || '') + (item.endDate ? ' - ' + item.endDate : ''))}" data-idx="${idx}">
          </div>
          <div class="form-group span-2">
            <label>${state.lang === 'he' ? 'פירוט נוסף' : 'Details'}</label>
            <input type="text" class="edu-details" value="${escapeHtml(item.details)}" data-idx="${idx}">
          </div>
        </div>
      </div>
    `).join('');

    // Skill List
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

    // Project List
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
    document.querySelectorAll('.exp-title').forEach(inp => inp.addEventListener('input', e => {
      state.cv.experiences[e.target.dataset.idx].jobTitle = e.target.value;
      renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));
    document.querySelectorAll('.exp-company').forEach(inp => inp.addEventListener('input', e => {
      state.cv.experiences[e.target.dataset.idx].company = e.target.value;
      renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));
    document.querySelectorAll('.exp-start').forEach(inp => inp.addEventListener('input', e => {
      state.cv.experiences[e.target.dataset.idx].startDate = e.target.value;
      renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));
    document.querySelectorAll('.exp-end').forEach(inp => inp.addEventListener('input', e => {
      state.cv.experiences[e.target.dataset.idx].endDate = e.target.value;
      renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));
    document.querySelectorAll('.exp-desc').forEach(inp => inp.addEventListener('input', e => {
      state.cv.experiences[e.target.dataset.idx].description = e.target.value;
      renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));

    document.querySelectorAll('.btn-delete-exp').forEach(btn => btn.addEventListener('click', e => {
      state.cv.experiences.splice(e.currentTarget.dataset.idx, 1);
      renderDynamicLists(); renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));

    document.querySelectorAll('.sk-cat').forEach(inp => inp.addEventListener('input', e => {
      state.cv.skills[e.target.dataset.idx].category = e.target.value;
      renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));
    document.querySelectorAll('.sk-items').forEach(inp => inp.addEventListener('input', e => {
      state.cv.skills[e.target.dataset.idx].items = e.target.value;
      renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));
    document.querySelectorAll('.btn-delete-skill').forEach(btn => btn.addEventListener('click', e => {
      state.cv.skills.splice(e.currentTarget.dataset.idx, 1);
      renderDynamicLists(); renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));

    document.querySelectorAll('.edu-degree').forEach(inp => inp.addEventListener('input', e => {
      state.cv.education[e.target.dataset.idx].degree = e.target.value;
      renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));
    document.querySelectorAll('.edu-inst').forEach(inp => inp.addEventListener('input', e => {
      state.cv.education[e.target.dataset.idx].institution = e.target.value;
      renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));
    document.querySelectorAll('.edu-details').forEach(inp => inp.addEventListener('input', e => {
      state.cv.education[e.target.dataset.idx].details = e.target.value;
      renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));
    document.querySelectorAll('.btn-delete-edu').forEach(btn => btn.addEventListener('click', e => {
      state.cv.education.splice(e.currentTarget.dataset.idx, 1);
      renderDynamicLists(); renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));

    document.querySelectorAll('.proj-title').forEach(inp => inp.addEventListener('input', e => {
      state.cv.projects[e.target.dataset.idx].title = e.target.value;
      renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));
    document.querySelectorAll('.proj-link').forEach(inp => inp.addEventListener('input', e => {
      state.cv.projects[e.target.dataset.idx].link = e.target.value;
      renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));
    document.querySelectorAll('.proj-tech').forEach(inp => inp.addEventListener('input', e => {
      state.cv.projects[e.target.dataset.idx].tech = e.target.value;
      renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));
    document.querySelectorAll('.proj-desc').forEach(inp => inp.addEventListener('input', e => {
      state.cv.projects[e.target.dataset.idx].description = e.target.value;
      renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));
    document.querySelectorAll('.btn-delete-proj').forEach(btn => btn.addEventListener('click', e => {
      state.cv.projects.splice(e.currentTarget.dataset.idx, 1);
      renderDynamicLists(); renderPreview(); calculateAtsScore(); saveStateToStorage();
    }));
  }

  // --- RENDER PREVIEW ---
  function renderPreview() {
    const p = state.cv.personal || {};
    const isHe = state.lang === 'he';

    el.resumePreview.className = `resume-paper template-${state.template}`;
    el.resumePreview.dir = isHe ? 'rtl' : 'ltr';

    document.documentElement.style.setProperty('--paper-font', state.fontFamily);
    document.documentElement.style.setProperty('--paper-font-size', `${state.fontSize}px`);
    document.documentElement.style.setProperty('--paper-spacing-mult', state.spacing);
    document.documentElement.style.setProperty('--accent-color', state.accentColor);

    const contactItemsHTML = [
      p.email ? `<span class="cv-contact-item"><i class="fa-solid fa-envelope"></i> ${escapeHtml(p.email)}</span>` : '',
      p.phone ? `<span class="cv-contact-item"><i class="fa-solid fa-phone"></i> ${escapeHtml(p.phone)}</span>` : '',
      p.location ? `<span class="cv-contact-item"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(p.location)}</span>` : '',
      p.linkedin ? `<span class="cv-contact-item"><i class="fa-brands fa-linkedin"></i> ${escapeHtml(p.linkedin)}</span>` : '',
      p.github ? `<span class="cv-contact-item"><i class="fa-brands fa-github"></i> ${escapeHtml(p.github)}</span>` : '',
      p.website ? `<span class="cv-contact-item"><i class="fa-solid fa-globe"></i> ${escapeHtml(p.website)}</span>` : ''
    ].filter(Boolean).join('');

    const summaryHTML = state.cv.summary ? `
      <section class="cv-section">
        <h3 class="cv-section-title"><i class="fa-solid fa-user-tie"></i> ${isHe ? 'תמצית מקצועית' : 'Professional Summary'}</h3>
        <p class="cv-summary-text">${escapeHtml(state.cv.summary)}</p>
      </section>
    ` : '';

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
    document.documentElement.lang = state.lang;
    el.btnLangHe.classList.toggle('active', state.lang === 'he');
    el.btnLangEn.classList.toggle('active', state.lang === 'en');
    
    updateUILanguage(state.lang);
    applyTheme();
    setAccentColor(state.accentColor);

    renderFormFromState();
    renderPreview();
    calculateAtsScore();
    applyZoom();
  }

  // Exports
  function exportJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.cv, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = `cv_${state.cv.personal.fullName || 'resume'}.json`;
    a.click();
  }

  function exportTxt() {
    const p = state.cv.personal || {};
    let txt = `${p.fullName || ''}\n${p.jobTitle || ''}\nEmail: ${p.email || ''} | Phone: ${p.phone || ''} | ${p.location || ''}\n\n`;
    if (state.cv.summary) txt += `=== SUMMARY ===\n${state.cv.summary}\n\n`;
    if (state.cv.experiences) {
      txt += `=== EXPERIENCE ===\n`;
      state.cv.experiences.forEach(e => {
        txt += `${e.jobTitle} - ${e.company} (${e.startDate} - ${e.endDate})\n${e.description}\n\n`;
      });
    }
    if (state.cv.skills) {
      txt += `=== SKILLS ===\n`;
      state.cv.skills.forEach(s => txt += `${s.category}: ${s.items}\n`);
    }

    const dataStr = "data:text/plain;charset=utf-8," + encodeURIComponent(txt);
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = `cv_${p.fullName || 'resume'}.txt`;
    a.click();
  }

  function importJson(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        state.cv = JSON.parse(event.target.result);
        renderFormFromState();
        renderPreview();
        calculateAtsScore();
        saveStateToStorage();
        alert(state.lang === 'he' ? 'הנתונים נטענו בהצלחה!' : 'CV Data Imported Successfully!');
      } catch (err) {
        alert(state.lang === 'he' ? 'קובץ JSON לא תקין.' : 'Invalid JSON File.');
      }
    };
    reader.readAsText(file);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
