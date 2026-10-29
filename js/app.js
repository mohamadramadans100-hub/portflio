/**
 * =========================================================================
 * تطبيق البورتفوليو الرئيسي (Portfolio Core Logic)
 * يقوم بربط البيانات من data.js وتفعيل التفاعلات، التصفية، ومعرض الصور التفاعلي
 * =========================================================================
 */

// مكتبة الأيقونات بصيغة SVG مضمّنة بدقة عالية
const ICONS = {
  brush: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/></svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  arrowUpLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17V7h10"/><path d="M17 17 7 7"/></svg>`,
  smartphone: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
  fingerprint: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 0 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/></svg>`,
  megaphone: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,
  frame: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="2" y1="6" y2="6"/><line x1="22" x2="2" y1="18" y2="18"/><line x1="6" x2="6" y1="2" y2="22"/><line x1="18" x2="18" y1="2" y2="22"/></svg>`,
  printer: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  googlePlay: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.793 12 3.61 22.186a2.22 2.22 0 0 1-.61-.926V2.74c0-.342.22-.66.61-.926zm11.3 11.3l2.55-2.55-12.01-6.95 9.46 9.5zm0 1.772l-9.46 9.5 12.01-6.95-2.55-2.55zm1.258-1.258l3.15 1.82a1.44 1.44 0 0 0 0-2.484l-3.15-1.82-1.42 1.42 1.42 1.064z"/></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
};

document.addEventListener("DOMContentLoaded", () => {
  const data = PORTFOLIO_DATA;
  let activeCategory = "الكل";

  // 0. إدارة الوضع النهاري والليلي (Light / Dark Theme) - الافتراضي هو الوضع النهاري
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeIconSlot = document.getElementById("theme-icon-slot");
  const themeTextSlot = document.getElementById("theme-text-slot");
  const mobileThemeToggleBtn = document.getElementById("mobile-theme-toggle-btn");
  const mobileThemeIconSlot = document.getElementById("mobile-theme-icon-slot");

  let currentTheme = localStorage.getItem("portfolio_theme") || "light";

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);

    const isDark = theme === "dark";
    if (themeIconSlot) themeIconSlot.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    if (themeTextSlot) themeTextSlot.textContent = isDark ? "الوضع النهاري" : "الوضع الليلي";
    if (mobileThemeIconSlot) mobileThemeIconSlot.innerHTML = isDark ? ICONS.sun : ICONS.moon;
  }

  function toggleTheme() {
    applyTheme(currentTheme === "light" ? "dark" : "light");
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);
  if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener("click", toggleTheme);

  // تفعيل الثيم الحالي
  applyTheme(currentTheme);

  // 1. حقن بيانات الهوية الشخصية
  document.title = `${data.profile.name} | ${data.profile.title}`;
  document.querySelectorAll("[data-bind='profile.name']").forEach(el => el.textContent = data.profile.name);
  document.querySelectorAll("[data-bind='profile.title']").forEach(el => el.textContent = data.profile.title);
  document.querySelectorAll("[data-bind='profile.experience']").forEach(el => el.textContent = data.profile.experience);
  document.querySelectorAll("[data-bind='profile.intro']").forEach(el => el.textContent = data.profile.intro);
  document.querySelectorAll("[data-bind='profile.location']").forEach(el => el.textContent = data.profile.location);
  document.querySelectorAll("[data-bind='profile.email']").forEach(el => el.textContent = data.profile.email);
  
  const mailLink = document.getElementById("email-contact-link");
  if (mailLink) mailLink.href = `mailto:${data.profile.email}`;

  const heroImg = document.getElementById("hero-profile-img");
  if (heroImg) heroImg.src = data.profile.heroImage;

  const aboutImg = document.getElementById("about-profile-img");
  if (aboutImg) aboutImg.src = data.profile.aboutImage;

  // فقرات النبذة الشخصية
  const bioContainer = document.getElementById("about-bio-container");
  if (bioContainer) {
    bioContainer.innerHTML = data.profile.bio.map(p => `<p>${p}</p>`).join("");
  }

  // 2. روابط القائمة (Desktop + Mobile)
  const desktopMenu = document.getElementById("desktop-nav-menu");
  const mobileMenu = document.getElementById("mobile-nav-menu");
  if (desktopMenu && mobileMenu) {
    desktopMenu.innerHTML = data.navLinks.map(l => `
      <li>
        <a href="${l.href}" class="nav-link">${l.label}</a>
      </li>
    `).join("");

    mobileMenu.innerHTML = data.navLinks.map(l => `
      <li>
        <a href="${l.href}" class="mobile-nav-link">${l.label}</a>
      </li>
    `).join("");
  }

  // تفعيل فتح/إغلاق القائمة في الموبايل
  const menuToggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileMenuDrawer = document.getElementById("mobile-menu-drawer");
  let isMenuOpen = false;

  if (menuToggleBtn && mobileMenuDrawer) {
    menuToggleBtn.innerHTML = ICONS.menu;
    menuToggleBtn.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;
      mobileMenuDrawer.classList.toggle("is-open", isMenuOpen);
      menuToggleBtn.innerHTML = isMenuOpen ? ICONS.x : ICONS.menu;
      menuToggleBtn.setAttribute("aria-expanded", isMenuOpen);
    });

    mobileMenuDrawer.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        isMenuOpen = false;
        mobileMenuDrawer.classList.remove("is-open");
        menuToggleBtn.innerHTML = ICONS.menu;
        menuToggleBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 3. أزرار تصفية المعرض (Filter Tabs)
  const filterContainer = document.getElementById("portfolio-filters");
  if (filterContainer) {
    filterContainer.innerHTML = data.categories.map(cat => `
      <button type="button" class="filter-btn ${cat === activeCategory ? 'active' : ''}" data-category="${cat}">
        ${cat}
      </button>
    `).join("");

    filterContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeCategory = btn.getAttribute("data-category");
      filterContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects();
    });
  }

  // 4. عرض المشاريع في المعرض (Projects Grid)
  const projectsGrid = document.getElementById("projects-grid-container");
  function renderProjects() {
    if (!projectsGrid) return;
    const filtered = activeCategory === "الكل" 
      ? data.projects 
      : data.projects.filter(p => p.category === activeCategory);

    projectsGrid.innerHTML = filtered.map((project) => {
      const totalPages = (project.gallery && project.gallery.length > 1) ? project.gallery.length : null;
      const hasApp = !!project.appUrl;

      return `
        <div class="project-card reveal is-visible" data-project-id="${project.id}">
          <img src="${project.image}" alt="${project.title}" loading="lazy" class="project-card-img" />
          <div class="project-card-gradient"></div>
          
          ${totalPages ? `<span class="project-badge pages-count">${totalPages} تصاميم ونماذج</span>` : ''}
          ${hasApp ? `<span class="project-badge app-badge">${ICONS.googlePlay} متوفر على Google Play</span>` : ''}
          
          <div class="project-card-content">
            <span class="eyebrow" style="font-size:0.75rem;">${project.category}</span>
            <div class="project-card-title-row">
              <h3 class="project-card-title">${project.title}</h3>
              <span class="project-card-arrow-btn">${ICONS.arrowUpLeft}</span>
            </div>
            <p class="project-card-summary">${project.summary}</p>
          </div>
        </div>
      `;
    }).join("");

    // ربط النقر لفتح المودال
    projectsGrid.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-project-id");
        openProjectModal(id);
      });
    });
  }
  renderProjects();

  // 5. قسم الخدمات (Services)
  const servicesGrid = document.getElementById("services-grid-container");
  if (servicesGrid) {
    servicesGrid.innerHTML = data.services.map(s => `
      <div class="service-card reveal">
        <div class="service-icon-box">${ICONS[s.icon] || ICONS.brush}</div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.description}</p>
      </div>
    `).join("");
  }

  // 6. قسم المهارات (Skills)
  const skillsGrid = document.getElementById("skills-grid-container");
  if (skillsGrid) {
    skillsGrid.innerHTML = data.skills.map(skill => `
      <div class="skill-card reveal">
        <span class="skill-name">${skill}</span>
        <span class="skill-pill">برنامج / تقنية</span>
      </div>
    `).join("");
  }

  // 7. وسائل التواصل وأرقام الهواتف
  const socialsList = document.getElementById("contact-socials-list");
  if (socialsList) {
    socialsList.innerHTML = data.profile.socials.map(soc => `
      <li>
        <a href="${soc.href}" target="_blank" rel="noopener noreferrer" class="contact-social-pill">
          ${ICONS[soc.icon] || ''}
          <span>${soc.label}</span>
        </a>
      </li>
    `).join("");
  }

  const phonesList = document.getElementById("contact-phones-list");
  if (phonesList) {
    phonesList.innerHTML = data.profile.phones.map(phone => `
      <li>
        <a href="tel:+2${phone}" class="contact-phone-link">
          ${ICONS.phone}
          <span>${phone}</span>
        </a>
      </li>
    `).join("");
  }

  // 8. نافذة تفاصيل المشروع وقارئ الصفحات الرأسي المتتالي كالكتاب (Vertical Book Reader & Lightbox)
  const modalBackdrop = document.getElementById("project-modal-backdrop");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalCategory = document.getElementById("modal-project-category");
  const modalTitle = document.getElementById("modal-project-title");
  const modalOverview = document.getElementById("modal-project-overview");
  const modalClient = document.getElementById("modal-project-client");
  const modalYear = document.getElementById("modal-project-year");
  const modalRole = document.getElementById("modal-project-role");
  const modalTools = document.getElementById("modal-project-tools");
  const modalAppLinkWrapper = document.getElementById("modal-app-link-wrapper");
  const readerPagesList = document.getElementById("modal-vertical-pages-list");
  const readerPagesBadge = document.getElementById("reader-total-pages-badge");

  // عناصر لايت بوكس التكبير بملء الشاشة
  const lightboxBackdrop = document.getElementById("fullscreen-lightbox");
  const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-project-title");
  const lightboxCounter = document.getElementById("lightbox-counter");
  const lightboxPrevBtn = document.getElementById("lightbox-prev-btn");
  const lightboxNextBtn = document.getElementById("lightbox-next-btn");

  let currentProject = null;
  let currentGallery = [];
  let currentLightboxIdx = 0;

  function openProjectModal(id, pushToHistory = true) {
    const project = data.projects.find(p => p.id === id);
    if (!project || !modalBackdrop) return;

    currentProject = project;
    // تجهيز مصفوفة الصور
    currentGallery = (project.gallery && project.gallery.length > 0) 
      ? project.gallery 
      : [project.image];

    if (modalCategory) modalCategory.textContent = project.category;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalOverview) modalOverview.textContent = project.overview;
    if (modalClient) modalClient.textContent = project.client;
    if (modalYear) modalYear.textContent = project.year;
    if (modalRole) modalRole.textContent = project.role;

    if (modalTools) {
      modalTools.innerHTML = (project.tools && project.tools.length > 0)
        ? project.tools.map(t => `<span class="tool-tag">${t}</span>`).join("")
        : `<span class="tool-tag">Adobe InDesign</span>`;
    }

    // زر تحميل التطبيق من متجر Google Play إن وُجد
    if (modalAppLinkWrapper) {
      if (project.appUrl) {
        modalAppLinkWrapper.innerHTML = `
          <a href="${project.appUrl}" target="_blank" rel="noopener noreferrer" class="btn-google-play">
            ${ICONS.googlePlay}
            <span>تحميل واستعراض التطبيق على Google Play</span>
          </a>
        `;
      } else {
        modalAppLinkWrapper.innerHTML = "";
      }
    }

    // تحديث شارة عدد الصفحات
    if (readerPagesBadge) {
      readerPagesBadge.textContent = `${currentGallery.length} ${currentGallery.length > 10 ? 'صفحة ونموذج' : 'صفحات ونماذج'}`;
    }

    // بناء قائمة الصفحات الرأسية المتتالية كالكتاب
    if (readerPagesList) {
      readerPagesList.innerHTML = currentGallery.map((imgSrc, idx) => `
        <div class="book-page-card" data-idx="${idx}" role="button" tabindex="0" aria-label="عرض صفحة ${idx + 1} وتكبيرها">
          <div class="book-page-top-bar">
            <span class="page-tag">
              <span>📄</span>
              <span>صفحة / نموذج رقم ${idx + 1}</span>
            </span>
            <span class="zoom-hint-pill">
              <span>🔍</span>
              <span>اضغط للتكبير بملء الشاشة</span>
            </span>
          </div>
          <div class="book-page-img-wrapper">
            <img src="${imgSrc}" alt="صفحة ${idx + 1} من ${project.title}" loading="${idx < 3 ? 'eager' : 'lazy'}" />
            <div class="book-page-hover-overlay">
              <span class="zoom-btn-pill">
                <span>🔍</span>
                <span>تكبير الصفحة بملء الشاشة</span>
              </span>
            </div>
          </div>
        </div>
      `).join("");

      // ربط النقر على أي صفحة لفتح التكبير
      readerPagesList.querySelectorAll(".book-page-card").forEach(card => {
        card.addEventListener("click", () => {
          const idx = parseInt(card.getAttribute("data-idx"), 10);
          openLightbox(idx);
        });
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const idx = parseInt(card.getAttribute("data-idx"), 10);
            openLightbox(idx);
          }
        });
      });
    }

    modalBackdrop.classList.add("is-active");
    document.body.style.overflow = "hidden";

    // ضمان بدء التمرير من أعلى النافذة تماماً (وليس من المنتصف)
    const modalDialog = modalBackdrop.querySelector(".modal-dialog");
    if (modalDialog) {
      modalDialog.scrollTop = 0;
      requestAnimationFrame(() => {
        modalDialog.scrollTop = 0;
      });
      setTimeout(() => {
        modalDialog.scrollTop = 0;
      }, 30);
    }

    // إضافة خطوة في سجل المتصفح لدعم زر الرجوع في الهاتف (Back Button)
    if (pushToHistory && window.location.hash !== "#project-" + id) {
      history.pushState({ modalOpen: true, projectId: id }, "", "#project-" + id);
    }
  }

  function closeProjectModal(handleHistory = true) {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove("is-active");
    document.body.style.overflow = "";
    closeLightbox(false);

    const modalDialog = modalBackdrop.querySelector(".modal-dialog");
    if (modalDialog) modalDialog.scrollTop = 0;

    // مزامنة حالة السجل عند الإغلاق اليدوي
    if (handleHistory && window.location.hash.startsWith("#project-")) {
      history.back();
    }
  }

  // دوال لايت بوكس التكبير (Fullscreen Lightbox)
  function openLightbox(index, pushToHistory = true) {
    if (!lightboxBackdrop || !currentGallery || currentGallery.length === 0) return;
    currentLightboxIdx = (index >= 0 && index < currentGallery.length) ? index : 0;
    updateLightboxStage();
    lightboxBackdrop.classList.add("is-active");
    lightboxBackdrop.setAttribute("aria-hidden", "false");

    if (pushToHistory && window.location.hash !== "#lightbox") {
      history.pushState({ modalOpen: true, lightboxOpen: true, index }, "", "#lightbox");
    }
  }

  function closeLightbox(handleHistory = true) {
    if (!lightboxBackdrop) return;
    lightboxBackdrop.classList.remove("is-active");
    lightboxBackdrop.setAttribute("aria-hidden", "true");

    if (handleHistory && window.location.hash === "#lightbox") {
      history.back();
    }
  }

  function updateLightboxStage() {
    if (!lightboxImg || !currentGallery || currentGallery.length === 0) return;
    lightboxImg.src = currentGallery[currentLightboxIdx];
    
    if (lightboxTitle && currentProject) {
      lightboxTitle.textContent = currentProject.title;
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = `صفحة ${currentLightboxIdx + 1} من ${currentGallery.length}`;
    }

    const hasMultiple = currentGallery.length > 1;
    if (lightboxPrevBtn) lightboxPrevBtn.style.display = hasMultiple ? "flex" : "none";
    if (lightboxNextBtn) lightboxNextBtn.style.display = hasMultiple ? "flex" : "none";
  }

  function showLightboxNext() {
    if (currentGallery.length <= 1) return;
    currentLightboxIdx = (currentLightboxIdx + 1) % currentGallery.length;
    updateLightboxStage();
  }

  function showLightboxPrev() {
    if (currentGallery.length <= 1) return;
    currentLightboxIdx = (currentLightboxIdx - 1 + currentGallery.length) % currentGallery.length;
    updateLightboxStage();
  }

  // أحداث اللايت بوكس
  if (lightboxNextBtn) lightboxNextBtn.addEventListener("click", showLightboxNext);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener("click", showLightboxPrev);
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", () => closeLightbox(true));

  if (lightboxBackdrop) {
    lightboxBackdrop.addEventListener("click", (e) => {
      if (e.target === lightboxBackdrop || e.target.id === "lightbox-stage-wrapper") {
        closeLightbox(true);
      }
    });
  }

  // دعم السحب على شاشات اللمس للتنقل (Touch Swipe)
  let touchStartX = 0;
  let touchEndX = 0;
  if (lightboxBackdrop) {
    lightboxBackdrop.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxBackdrop.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleLightboxSwipe();
    }, { passive: true });
  }

  function handleLightboxSwipe() {
    const swipeThreshold = 50;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        showLightboxPrev();
      } else {
        showLightboxNext();
      }
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.innerHTML = ICONS.x;
    modalCloseBtn.addEventListener("click", () => closeProjectModal(true));
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeProjectModal(true);
    });
  }

  // الاستماع لمفاتيح الكيبورد
  window.addEventListener("keydown", (e) => {
    if (lightboxBackdrop && lightboxBackdrop.classList.contains("is-active")) {
      if (e.key === "Escape") {
        closeLightbox(true);
        return;
      }
      if (e.key === "ArrowLeft") {
        showLightboxNext();
        return;
      }
      if (e.key === "ArrowRight") {
        showLightboxPrev();
        return;
      }
    }

    if (modalBackdrop && modalBackdrop.classList.contains("is-active")) {
      if (e.key === "Escape") closeProjectModal(true);
    }
  });

  // معالجة زر الرجوع في الهاتف والمتصفح (Phone Hardware / Browser Back Button)
  window.addEventListener("popstate", (e) => {
    // إذا كان اللايت بوكس مفتوحاً، نغلقه فقط ونبقى في تفاصيل المشروع
    if (lightboxBackdrop && lightboxBackdrop.classList.contains("is-active")) {
      closeLightbox(false);
      return;
    }
    // إذا كانت نافذة المشروع مفتوحة، نغلقها ونعود للبورتفليو دون مغادرة الموقع أو جوجل
    if (modalBackdrop && modalBackdrop.classList.contains("is-active")) {
      closeProjectModal(false);
      return;
    }
  });

  // فتح المشروع مباشرة إذا كان الرابط يطلب ذلك (Deep Linking)
  if (window.location.hash.startsWith("#project-")) {
    const targetProjectId = window.location.hash.replace("#project-", "");
    if (targetProjectId) {
      setTimeout(() => {
        openProjectModal(targetProjectId, false);
      }, 200);
    }
  }

  // 9. تفعيل حركة الظهور عند التمرير (Intersection Observer)
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
});
