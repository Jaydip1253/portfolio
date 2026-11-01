/**
 * =========================================================================
 * Jaydip - Portfolio Main JavaScript Application
 * =========================================================================
 * Features:
 * - Dynamic rendering from portfolioData (easy to update)
 * - Canvas interactive particle constellation background
 * - 3D Card tilt effect on hover
 * - Interactive Hero code typing & tab preview
 * - Category filtering & live search for projects
 * - Skills progress bar animations & filtering
 * - Experience & Education timeline toggle
 * - Project modal deep dive
 * - Theme accent switcher (Cyan, Violet, Emerald, Sapphire)
 * - Synthesized futuristic audio feedback (Web Audio API)
 * - Form validation, clipboard copy & toast alerts
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize App
  initThemeEngine();
  initAudioEngine();
  initAmbientCanvas();
  initAmbientSpotlight();
  initNavigation();
  initHeroCodeVisual();
  renderAboutSection();
  renderStatsCounters();
  renderSkillsSection();
  renderProjectsSection();
  renderTimelineSection();
  renderAchievementsSection();
  initContactForm();
  initProjectModal();
  initScrollAnimations();
});

/* =========================================================================
   1. Theme Accent Switcher (Cyan, Violet, Emerald, Sapphire)
   ========================================================================= */
function initThemeEngine() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  const themeDropdown = document.getElementById("theme-dropdown");
  const themeOptions = document.querySelectorAll(".theme-option");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("jaydip-portfolio-theme") || "default";
  if (savedTheme !== "default") {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  if (themeBtn && themeDropdown) {
    themeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      themeDropdown.classList.toggle("open");
      playAudioCue("click");
    });

    document.addEventListener("click", (e) => {
      if (!themeDropdown.contains(e.target) && !themeBtn.contains(e.target)) {
        themeDropdown.classList.remove("open");
      }
    });

    themeOptions.forEach((option) => {
      option.addEventListener("click", () => {
        const selectedTheme = option.getAttribute("data-set-theme");
        if (selectedTheme === "default") {
          document.documentElement.removeAttribute("data-theme");
          localStorage.removeItem("jaydip-portfolio-theme");
        } else {
          document.documentElement.setAttribute("data-theme", selectedTheme);
          localStorage.setItem("jaydip-portfolio-theme", selectedTheme);
        }
        themeDropdown.classList.remove("open");
        playAudioCue("success");
        showToast(`Theme switched to ${option.textContent.trim()}!`);
      });
    });
  }
}

/* =========================================================================
   2. Web Audio API - Subtle Cyber Sound Synthesizer
   ========================================================================= */
let audioCtx = null;
let soundEnabled = false;

function initAudioEngine() {
  const soundBtn = document.getElementById("audio-toggle-btn");
  if (!soundBtn) return;

  soundBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundBtn.classList.toggle("active", soundEnabled);

    if (soundEnabled && !audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }

    if (soundEnabled) {
      playAudioCue("power-on");
      showToast("Sound effects enabled 🔊");
    } else {
      showToast("Sound effects muted 🔇");
    }
  });
}

function playAudioCue(type) {
  if (!soundEnabled || !audioCtx) return;

  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === "hover") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, now);
      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc.start(now);
      osc.stop(now + 0.03);
    } else if (type === "success") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === "power-on") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.15);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  } catch (err) {
    // Ignore audio autoplay restrictions gracefully
  }
}

/* =========================================================================
   3. Interactive Ambient Particle Mesh Canvas
   ========================================================================= */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const mouse = { x: null, y: null, radius: 140 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle Class
  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.density = Math.random() * 20 + 1;
    }

    update() {
      // Mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.hypot(dx, dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;

          this.x -= directionX * 0.4;
          this.y -= directionY * 0.4;
        }
      }

      this.x += this.vx;
      this.y += this.vy;

      // Screen loop bounds
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.fillStyle = "rgba(56, 189, 248, 0.4)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Create particle pool (scaled to viewport size)
  const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 18000), 75);
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Connect particles
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.hypot(dx, dy);

        if (dist < 110) {
          const alpha = 1 - dist / 110;
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.15})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
      particles[a].update();
      particles[a].draw();
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* =========================================================================
   4. Ambient Spotlight Follower
   ========================================================================= */
function initAmbientSpotlight() {
  const spotlight = document.querySelector(".ambient-spotlight");
  if (!spotlight) return;

  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;

  window.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function renderSpotlight() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    spotlight.style.left = `${currentX}px`;
    spotlight.style.top = `${currentY}px`;
    requestAnimationFrame(renderSpotlight);
  }

  renderSpotlight();
}

/* =========================================================================
   5. Navigation, Scroll Spy & Progress Bar
   ========================================================================= */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const progressBar = document.getElementById("scroll-progress");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-item a");
  const sections = document.querySelectorAll("section[id]");

  // Scroll Handler
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Header Blur Effect
    if (scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Scroll Progress
    if (progressBar && docHeight > 0) {
      const progressPercent = (scrollY / docHeight) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }

    // Active Section Spy
    let currentSectionId = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSectionId = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  // Mobile Menu Toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("open");
      mobileToggle.classList.toggle("active", isOpen);
      playAudioCue("click");
    });

    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        mobileToggle.classList.remove("active");
      });
    });
  }

  // Audio effect on clicking nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => playAudioCue("click"));
  });
}

/* =========================================================================
   6. Hero Interactive Code Visual & Terminal Tabs
   ========================================================================= */
function initHeroCodeVisual() {
  const codeLinesContainer = document.getElementById("terminal-code-body");
  const terminalCopyBtn = document.getElementById("terminal-copy-btn");
  if (!codeLinesContainer) return;

  const lines = portfolioData.heroCodeSnippet.lines;
  let currentLineIndex = 0;
  let currentCharIndex = 0;
  let fullText = "";

  // Render initial pre-formatted code with syntax coloring
  function formatCodeLine(text) {
    if (text.startsWith("//")) {
      return `<span class="c-comment">${escapeHtml(text)}</span>`;
    }

    return escapeHtml(text)
      .replace(/\b(const|let|var|return)\b/g, '<span class="c-keyword">$1</span>')
      .replace(/\b(DeveloperProfile|Array|Object)\b/g, '<span class="c-var">$1</span>')
      .replace(/('([^'\\]|\\.)*')/g, '<span class="c-string">$1</span>')
      .replace(/(`([^`\\]|\\.)*`)/g, '<span class="c-string">$1</span>')
      .replace(/\b(name|craft|coreValues|currentStatus|sayHello)\b/g, '<span class="c-prop">$1</span>')
      .replace(/\b(console\.log)\b/g, '<span class="c-fn">$1</span>');
  }

  let htmlContent = "";
  lines.forEach((line) => {
    htmlContent += `<div class="code-line">${formatCodeLine(line)}</div>`;
    fullText += line + "\n";
  });

  codeLinesContainer.innerHTML = htmlContent + '<span class="code-cursor"></span>';

  // Copy Code Button
  if (terminalCopyBtn) {
    terminalCopyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(fullText).then(() => {
        playAudioCue("success");
        terminalCopyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        showToast("Code copied to clipboard!");
        setTimeout(() => {
          terminalCopyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
        }, 2000);
      });
    });
  }
}

/* =========================================================================
   7. About Me Section Dynamic Content
   ========================================================================= */
function renderAboutSection() {
  const bioContainer = document.getElementById("about-bio-container");
  const goalsContainer = document.getElementById("about-goals-text");

  if (bioContainer && portfolioData.personal.aboutBioParagraphs) {
    bioContainer.innerHTML = portfolioData.personal.aboutBioParagraphs
      .map((p) => `<p class="about-bio-text">${p}</p>`)
      .join("");
  }

  if (goalsContainer && portfolioData.personal.goals) {
    goalsContainer.textContent = portfolioData.personal.goals;
  }
}

/* =========================================================================
   8. Stats Counter Numbers
   ========================================================================= */
function renderStatsCounters() {
  const statsContainer = document.getElementById("stats-grid");
  if (!statsContainer || !portfolioData.stats) return;

  statsContainer.innerHTML = portfolioData.stats
    .map(
      (stat, idx) => `
      <div class="stat-card fade-in-up" data-count="${stat.value}" data-suffix="${stat.suffix}">
        <div class="stat-number" id="stat-num-${idx}">0${stat.suffix}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `
    )
    .join("");

  // Intersection observer to animate stats
  let animated = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          animateStats();
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(statsContainer);

  function animateStats() {
    const cards = document.querySelectorAll(".stat-card");
    cards.forEach((card, idx) => {
      const target = parseInt(card.getAttribute("data-count"), 10);
      const suffix = card.getAttribute("data-suffix") || "";
      const numElem = document.getElementById(`stat-num-${idx}`);
      let current = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        numElem.textContent = current + suffix;
      }, 35);
    });
  }
}

/* =========================================================================
   9. Skills & Technologies Section (Category Filter & Interactive Cards)
   ========================================================================= */
function renderSkillsSection() {
  const controlsContainer = document.getElementById("skills-controls");
  const gridContainer = document.getElementById("skills-grid");
  if (!gridContainer || !portfolioData.skills) return;

  // Render Filter Buttons
  if (controlsContainer && portfolioData.skillCategories) {
    controlsContainer.innerHTML = portfolioData.skillCategories
      .map(
        (cat, i) => `
        <button class="filter-btn ${i === 0 ? "active" : ""}" data-skill-category="${cat.id}">
          ${cat.name}
        </button>
      `
      )
      .join("");

    controlsContainer.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        controlsContainer.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        playAudioCue("click");
        const category = btn.getAttribute("data-skill-category");
        filterSkills(category);
      });
    });
  }

  function filterSkills(categoryId) {
    const cards = gridContainer.querySelectorAll(".skill-card");
    cards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");
      if (categoryId === "all" || cardCategory === categoryId) {
        card.style.display = "flex";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 10);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 200);
      }
    });
  }

  // Render Skill Cards
  gridContainer.innerHTML = portfolioData.skills
    .map(
      (skill) => `
      <div class="skill-card fade-in-up" data-category="${skill.category}">
        <div class="skill-card-top">
          <div class="skill-icon-box">
            <i class="${skill.icon}"></i>
          </div>
          <div class="skill-meta">
            <h4 class="skill-name">${skill.name}</h4>
            <span class="skill-level-badge">${skill.levelLabel} • ${skill.level}%</span>
          </div>
        </div>
        <p class="skill-highlight">${skill.highlight}</p>
        <div class="skill-progress-bar-bg">
          <div class="skill-progress-fill" data-level="${skill.level}"></div>
        </div>
      </div>
    `
    )
    .join("");

  // Animate skill progress bars when visible
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll(".skill-progress-fill");
          fills.forEach((f) => {
            f.style.width = f.getAttribute("data-level") + "%";
          });
        }
      });
    },
    { threshold: 0.15 }
  );

  skillObserver.observe(gridContainer);
}

/* =========================================================================
   10. Projects Showcase (Cards, Search, Category Filter & 3D Tilt)
   ========================================================================= */
function renderProjectsSection() {
  const categoriesContainer = document.getElementById("projects-categories");
  const searchInput = document.getElementById("project-search-input");
  const gridContainer = document.getElementById("projects-grid");
  if (!gridContainer || !portfolioData.projects) return;

  let activeCategory = "all";
  let searchQuery = "";

  // Render category buttons
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend & Web" },
    { id: "backend", name: "Backend & AI" }
  ];

  if (categoriesContainer) {
    categoriesContainer.innerHTML = categories
      .map(
        (cat, i) => `
        <button class="filter-btn ${i === 0 ? "active" : ""}" data-project-category="${cat.id}">
          ${cat.name}
        </button>
      `
      )
      .join("");

    categoriesContainer.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        categoriesContainer.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        playAudioCue("click");
        activeCategory = btn.getAttribute("data-project-category");
        applyProjectFilters();
      });
    });
  }

  // Search input event
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyProjectFilters();
    });
  }

  // Render Projects Cards
  function renderCards(projectsToRender) {
    if (projectsToRender.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem; color: var(--text-dim);"></i>
          <h3>No matching projects found</h3>
          <p>Try searching with another keyword or technology.</p>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = projectsToRender
      .map((project) => {
        const featuredBadge = project.featured
          ? `<span class="project-featured-badge"><i class="fa-solid fa-star"></i> Featured</span>`
          : "";

        const techTags = project.technologies
          .map((tech) => `<span class="tech-tag">${tech}</span>`)
          .join("");

        return `
        <article class="project-card fade-in-up" data-id="${project.id}">
          <div class="project-thumb-container">
            ${featuredBadge}
            <img src="${project.thumbnail}" alt="${project.title}" class="project-thumb" loading="lazy">
            <div class="project-thumb-overlay">
              <button class="quick-view-btn" data-project-id="${project.id}">
                <i class="fa-solid fa-eye"></i> Quick Details
              </button>
            </div>
          </div>
          <div class="project-body">
            <div>
              <span class="project-category-tag">${project.categoryLabel}</span>
              <h3 class="project-title">${project.title}</h3>
              <p class="project-description">${project.description}</p>
              <div class="project-tech-tags">${techTags}</div>
            </div>
            <div class="project-actions">
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-btn demo">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
              </a>
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-btn code">
                <i class="fa-brands fa-github"></i> Source Code
              </a>
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    // Attach quick-view listeners
    gridContainer.querySelectorAll(".quick-view-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const pid = btn.getAttribute("data-project-id");
        openProjectModal(pid);
      });
    });

    // Attach 3D tilt hover physics
    attachTiltPhysics();
  }

  function applyProjectFilters() {
    const filtered = portfolioData.projects.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery));

      return matchesCategory && matchesSearch;
    });

    renderCards(filtered);
  }

  // Initial render
  renderCards(portfolioData.projects);
}

/* =========================================================================
   11. Smooth 3D Card Tilt Effect on Mouse Move
   ========================================================================= */
function attachTiltPhysics() {
  const cards = document.querySelectorAll(".project-card");
  if (window.innerWidth < 992) return; // Disable tilt on mobile for performance

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });
}

/* =========================================================================
   12. Experience & Education Timeline (Tabs & Accordion Layout)
   ========================================================================= */
function renderTimelineSection() {
  const toggleTabs = document.getElementById("timeline-toggle-tabs");
  const container = document.getElementById("timeline-container");
  if (!container) return;

  let activeTab = "experience"; // 'experience' or 'education'

  function renderTimeline() {
    if (activeTab === "experience") {
      container.innerHTML = portfolioData.experience
        .map(
          (item) => `
          <div class="timeline-item fade-in-up">
            <div class="timeline-node">
              <div class="timeline-node-inner"></div>
            </div>
            <div class="timeline-card">
              <div class="timeline-header-row">
                <div>
                  <h3 class="timeline-role">${item.role}</h3>
                  <div class="timeline-company">${item.company}</div>
                </div>
                <span class="timeline-period-badge">${item.period}</span>
              </div>
              <div class="timeline-location">
                <i class="fa-solid fa-location-dot"></i> ${item.location} • <span style="color:var(--accent-primary);">${item.type}</span>
              </div>
              <p class="timeline-description">${item.description}</p>
              <ul class="timeline-bullets">
                ${item.achievements.map((a) => `<li class="timeline-bullet-item">${a}</li>`).join("")}
              </ul>
              <div class="timeline-tech-stack">
                ${item.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
              </div>
            </div>
          </div>
        `
        )
        .join("");
    } else {
      container.innerHTML = portfolioData.education
        .map(
          (item) => `
          <div class="timeline-item fade-in-up">
            <div class="timeline-node">
              <div class="timeline-node-inner"></div>
            </div>
            <div class="timeline-card">
              <div class="timeline-header-row">
                <div>
                  <h3 class="timeline-role">${item.degree}</h3>
                  <div class="timeline-company">${item.institution}</div>
                </div>
                <span class="timeline-period-badge">${item.period}</span>
              </div>
              <div class="timeline-location">
                <i class="fa-solid fa-graduation-cap"></i> ${item.location} • <span style="color:#10b981; font-weight:600;">${item.score}</span>
              </div>
              <p class="timeline-description">${item.description}</p>
              <ul class="timeline-bullets">
                ${item.highlights.map((h) => `<li class="timeline-bullet-item">${h}</li>`).join("")}
              </ul>
            </div>
          </div>
        `
        )
        .join("");
    }
  }

  if (toggleTabs) {
    toggleTabs.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        toggleTabs.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        playAudioCue("click");
        activeTab = btn.getAttribute("data-tab");
        renderTimeline();
      });
    });
  }

  // Initial Render
  renderTimeline();
}

/* =========================================================================
   13. Achievements & Certifications Grid
   ========================================================================= */
function renderAchievementsSection() {
  const container = document.getElementById("achievements-grid");
  if (!container || !portfolioData.achievements) return;

  container.innerHTML = portfolioData.achievements
    .map(
      (item) => `
      <div class="achievement-card fade-in-up">
        <div class="achievement-icon">
          <i class="${item.icon}"></i>
        </div>
        <div class="achievement-info">
          <h4 class="achievement-title">${item.title}</h4>
          <div class="achievement-issuer">${item.issuer} • ${item.year}</div>
          <p class="achievement-desc">${item.description}</p>
        </div>
      </div>
    `
    )
    .join("");
}

/* =========================================================================
   14. Project Quick View Modal
   ========================================================================= */
function initProjectModal() {
  const backdrop = document.getElementById("project-modal-backdrop");
  const closeBtn = document.getElementById("modal-close-btn");
  if (!backdrop) return;

  closeBtn?.addEventListener("click", closeModal);

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("open")) {
      closeModal();
    }
  });

  function closeModal() {
    backdrop.classList.remove("open");
    playAudioCue("click");
    document.body.style.overflow = "auto";
  }
}

function openProjectModal(projectId) {
  const backdrop = document.getElementById("project-modal-backdrop");
  if (!backdrop) return;

  const project = portfolioData.projects.find((p) => p.id === projectId);
  if (!project) return;

  document.getElementById("modal-img").src = project.thumbnail;
  document.getElementById("modal-img").alt = project.title;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-category").textContent = project.categoryLabel;
  document.getElementById("modal-desc").textContent = project.fullDescription;
  document.getElementById("modal-metric-num").textContent = project.stats.metric;
  document.getElementById("modal-metric-label").textContent = project.stats.label;
  document.getElementById("modal-live-link").href = project.liveUrl;
  document.getElementById("modal-github-link").href = project.githubUrl;

  const techContainer = document.getElementById("modal-tech-tags");
  techContainer.innerHTML = project.technologies
    .map((t) => `<span class="tech-tag">${t}</span>`)
    .join("");

  backdrop.classList.add("open");
  playAudioCue("click");
  document.body.style.overflow = "hidden";
}

/* =========================================================================
   15. Contact Form, Email Copy & Toast Notification
   ========================================================================= */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const copyBtn = document.getElementById("copy-email-btn");

  // Copy Email to Clipboard
  if (copyBtn) {
    copyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = portfolioData.personal.email;
      navigator.clipboard.writeText(email).then(() => {
        playAudioCue("success");
        showToast("Email address copied to clipboard!");
      });
    });
  }

  // Form Submit Handler
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !message) {
        showToast("Please fill in all required fields.");
        return;
      }

      // Simulate sending with loading state
      const submitBtn = form.querySelector(".form-submit-btn");
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending message...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> Message Delivered!`;
        playAudioCue("success");
        showToast(`Thank you, ${name}! Your message has been sent successfully.`);
        form.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
        }, 3500);
      }, 1200);
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById("toast-notification");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/* =========================================================================
   16. Scroll Animations Observer (Fade In & Slide Up)
   ========================================================================= */
function initScrollAnimations() {
  const animatedElems = document.querySelectorAll(".fade-in-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElems.forEach((el) => observer.observe(el));
}

// Utility: Escape HTML for security
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
