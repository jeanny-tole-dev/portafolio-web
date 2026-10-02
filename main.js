document.addEventListener("DOMContentLoaded", () => {
    const designContainer = document.getElementById("design-grid-container");
    const frontendContainer = document.getElementById("frontend-grid-container");

    if (!designContainer || !frontendContainer) {
        console.error("Faltan los contenedores en el HTML");
        return;
    }

    if (typeof projectsData === 'undefined') {
        console.error("projects.data.js no está cargando");
        return;
    }

    const designProjects = projectsData.filter(p => p.category === "design");
    const frontendProjects = projectsData.filter(p => p.category === "frontend");

    // Actualizar indicadores de página iniciales (ej: 1 / 3 y 1 / 4)
    const designIndicator = document.getElementById("design-indicator");
    const frontendIndicator = document.getElementById("frontend-indicator");

    if (designIndicator) designIndicator.textContent = `1 / ${designProjects.length}`;
    if (frontendIndicator) frontendIndicator.textContent = `1 / ${frontendProjects.length}`;

    const getTechIconSVG = (tag) => {
        const cleanTag = tag.toLowerCase().trim();
        if (cleanTag.includes('figma')) {
            return `<svg class="tech-icon-svg" viewBox="0 0 38 57" width="12" height="12"><path fill="#EA4C1D" d="M19 19a9.5 9.5 0 1 1 0-19h9.5a9.5 9.5 0 0 1 0 19H19z"/><path fill="#F24E1E" d="M9.5 19a9.5 9.5 0 0 1 0-19H19v19H9.5z"/><path fill="#A259FF" d="M9.5 38a9.5 9.5 0 0 1 0-19H19v19H9.5z"/><path fill="#1ABCFE" d="M9.5 57a9.5 9.5 0 0 1 0-19H19v9.5a9.5 9.5 0 0 1-9.5 9.5z"/><path fill="#0ACF83" d="M28.5 28.5a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0z"/></svg>`;
        }
        if (cleanTag.includes('photoshop')) {
            return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="12" height="12"><rect width="24" height="24" rx="4" fill="#001E36"/><text x="12" y="16.5" font-size="11" font-weight="900" fill="#31A8FF" text-anchor="middle">Ps</text></svg>`;
        }
        if (cleanTag.includes('canva')) {
            return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="12" height="12"><circle cx="12" cy="12" r="11" fill="#00C4CC"/><text x="12" y="16.5" font-size="13" font-style="italic" font-weight="900" fill="#FFF" text-anchor="middle">c</text></svg>`;
        }
        if (cleanTag.includes('illustrator')) {
            return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="12" height="12"><rect width="24" height="24" rx="4" fill="#330000"/><text x="12" y="16.5" font-size="11" font-weight="900" fill="#FF9A00" text-anchor="middle">Ai</text></svg>`;
        }
        if (cleanTag.includes('react')) {
            return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="12" height="12"><circle cx="12" cy="12" r="2.5" fill="#61DAFB"/><g stroke="#61DAFB" stroke-width="1.2" fill="none"><ellipse cx="12" cy="12" rx="9" ry="3.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/></g></svg>`;
        }
        if (cleanTag.includes('html')) {
            return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="12" height="12"><path fill="#E34F26" d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3z"/><path fill="#FFF" d="M12 17.6l4.2-1.2.5-5.4H9.4l-.2-2h7.8l.2-2H7l.6 7.4h6.8l-.3 3-2.4.7-2.4-.7-.2-2H7.2l.4 4.2 4.4 1.2z"/></svg>`;
        }
        if (cleanTag.includes('css')) {
            return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="12" height="12"><path fill="#1572B6" d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3z"/><path fill="#FFF" d="M12 17.6l4.2-1.2.5-5.4H7.4l.2 2h7.1l-.2 2.2-2.5.7-2.5-.7-.2-2H7.2l.4 4.2 4.4 1.2z"/></svg>`;
        }
        if (cleanTag.includes('javascript') || cleanTag === 'js') {
            return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="12" height="12"><rect width="24" height="24" rx="3" fill="#F7DF1E"/><path fill="#000" d="M13.5 17.5c0 1.5 1.1 2.3 2.6 2.3 1.4 0 2.2-.7 2.2-1.7 0-2.4-5.2-1.5-5.2-5.4 0-2 1.6-3.3 4.1-3.3 2.1 0 3.6 1 4 2.2l-2 1.2c-.3-.7-.9-1.2-2-1.2-1.1 0-1.7.5-1.7 1.2 0 2.2 5.2 1.4 5.2 5.4 0 2.3-1.8 3.5-4.4 3.5-2.6 0-4.3-1.2-4.9-2.7l2.1-1.5z"/></svg>`;
        }
        if (cleanTag.includes('vite')) {
            return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="12" height="12"><path fill="#646CFF" d="M22.5 4.5L12 21 1.5 4.5h21z"/><path fill="#FFD42A" d="M15.5 4.5L11 13l-1.5-3.5L15.5 4.5z"/></svg>`;
        }
        if (cleanTag.includes('supabase')) {
            return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="12" height="12"><path fill="#3ECF8E" d="M13.3 2.4a1 1 0 0 0-1.6 0L2.5 14.7a1 1 0 0 0 .8 1.6H11v6.3a1 1 0 0 0 1.6 0l9.2-12.3a1 1 0 0 0-.8-1.6H13.3V2.4z"/></svg>`;
        }
        if (cleanTag.includes('whatsapp')) {
            return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="12" height="12"><path fill="#25D366" d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.479 1.332 5.001L2 22l5.133-1.343c1.472.802 3.141 1.226 4.877 1.227h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.667-1.037-5.176-2.922-7.062A9.923 9.923 0 0 0 12.012 2z"/></svg>`;
        }
        if (cleanTag.includes('three') || cleanTag.includes('3d')) {
            return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#FFF" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`;
        }
        if (cleanTag.includes('laravel') || cleanTag.includes('php')) {
            return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="12" height="12"><path fill="#FF2D20" d="M12 2L2 7v10l10 5 10-5V7L12 2z"/></svg>`;
        }
        if (cleanTag.includes('delivery')) {
            return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="12" height="12"><path fill="#FF7849" d="M19 7h-3V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h1a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h1v-5l-4-4zm-6-2a1 1 0 0 1 1 1v1H4V6a1 1 0 0 1 1-1h8z"/></svg>`;
        }
        return `<svg class="tech-icon-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#d946ef" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    };

    const createFlipCardHTML = (project, projectIdx, isFirst = false) => {
        const categoryLabel = project.category === 'frontend' ? 'Desarrollo Web & Frontend' : 'Diseño & Branding';
        const projectImages = (project.images && project.images.length > 0) ? project.images : [project.image];
        const hasMultipleImages = projectImages.length > 1;

        const imagesHTML = projectImages.map((imgObj, imgIdx) => {
            const imgSrc = typeof imgObj === 'object' ? imgObj.url : imgObj;
            const imgLabel = typeof imgObj === 'object' ? imgObj.label : '';
            const labelClass = imgLabel ? `badge-${imgLabel.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}` : '';
            const labelBadge = imgLabel ? `
                <span class="photo-label-badge ${labelClass}">
                    ${imgLabel}
                </span>
            ` : '';

            const isVideo = typeof imgSrc === 'string' && (imgSrc.endsWith('.mp4') || imgSrc.endsWith('.webm'));
            const mediaElement = isVideo ? `
                <video src="${imgSrc}" autoplay loop muted playsinline controls class="card-slider-img card-slider-video" title="Usa los controles para escuchar el audio"></video>
            ` : `
                <img src="${imgSrc}" alt="${project.title} - Foto ${imgIdx + 1}" class="card-slider-img" onerror="this.classList.add('img-error');">
            `;

            return `
                <div class="card-slider-item ${imgIdx === 0 ? 'active' : ''}">
                    ${mediaElement}
                    ${labelBadge}
                </div>
            `;
        }).join('');

        const navDotsHTML = hasMultipleImages ? `
            <div class="mini-carousel-arrow prev" data-action="prev" title="Ver foto anterior">&lsaquo;</div>
            <div class="mini-carousel-arrow next" data-action="next" title="Ver foto siguiente">&rsaquo;</div>
            <div class="mini-card-dots">
                ${projectImages.map((_, dotIdx) => `<span class="mini-card-dot ${dotIdx === 0 ? 'active' : ''}" data-index="${dotIdx}"></span>`).join('')}
            </div>
        ` : '';

        const projectMetricsList = Array.isArray(project.metrics) 
            ? project.metrics 
            : (project.metric ? [project.metric] : []);

        const metricBadgeHTML = projectMetricsList.map(mText => `
            <div class="project-impact-badge">
                <span class="impact-icon">📈</span>
                <span class="impact-text">${mText}</span>
            </div>
        `).join('');

        return `
            <div class="project-flip-card ${isFirst ? 'active' : ''}" data-project-index="${projectIdx}">
                <div class="flip-card-inner">
                    <!-- CARA FRONTAL -->
                    <div class="flip-card-front">
                        <div class="card-image-preview" data-active-index="0" data-total-images="${projectImages.length}">
                            ${imagesHTML}
                            <div class="fallback-overlay">
                                <span class="fallback-icon">✦</span>
                                <span class="fallback-title">${project.title}</span>
                            </div>
                            ${navDotsHTML}
                        </div>
                        <div class="card-front-info">
                            <div class="card-front-header">
                                <span class="editorial-tag">${categoryLabel}</span>
                                <span class="flip-hint">Girar ↻</span>
                            </div>
                            <h3>${project.title}</h3>
                        </div>
                    </div>

                    <!-- CARA TRASERA -->
                    <div class="flip-card-back">
                        <div class="flip-card-back-scroll">
                            <span class="editorial-tag-back">${categoryLabel}</span>
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            ${metricBadgeHTML}
                        </div>
                        <div class="flip-card-back-footer">
                            <span class="tech-section-title">Herramientas Utilizadas</span>
                            <div class="editorial-tags">
                                ${project.tags.map(tag => `<span class="tech-badge">${getTechIconSVG(tag)} <span>${tag}</span></span>`).join('')}
                            </div>
                            <div class="editorial-links">
                                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="repo-link">${project.liveLabel || 'Ver Proyecto &rarr;'}</a>` : ''}
                                ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" class="repo-link">GitHub &rarr;</a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    designContainer.innerHTML = designProjects.map((p, i) => createFlipCardHTML(p, i, i === 0)).join("");
    frontendContainer.innerHTML = frontendProjects.map((p, i) => createFlipCardHTML(p, i, i === 0)).join("");

    // --- LÓGICA DE NAVEGACIÓN EN BUCLE POR COLUMNA (◄ 1/3 ►) ---
    const initCategoryLoop = (containerId, projectsList, indicatorId) => {
        const container = document.getElementById(containerId);
        const indicator = document.getElementById(indicatorId);
        const controls = document.querySelector(`.category-carousel-controls[data-target="${containerId}"]`);
        
        if (!container || !controls) return;

        let currentIndex = 0;
        const total = projectsList.length;

        const stopCardVideos = (element) => {
            if (!element) return;
            element.querySelectorAll('video').forEach(v => {
                v.pause();
                v.currentTime = 0;
                v.muted = true;
            });
        };

        const updateActiveCard = (newIndex) => {
            if (total === 0) return;
            currentIndex = (newIndex + total) % total;

            const cards = container.querySelectorAll('.project-flip-card');
            cards.forEach((card, idx) => {
                const isActive = idx === currentIndex;
                card.classList.toggle('active', isActive);
                if (!isActive) {
                    card.classList.remove('is-flipped');
                    stopCardVideos(card);
                }
            });

            if (indicator) {
                indicator.textContent = `${currentIndex + 1} / ${total}`;
            }
        };

        const prevBtn = controls.querySelector('.cat-nav-btn.prev');
        const nextBtn = controls.querySelector('.cat-nav-btn.next');

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                updateActiveCard(currentIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                updateActiveCard(currentIndex + 1);
            });
        }
    };

    // Inicializar bucles para ambas columnas
    initCategoryLoop('design-grid-container', designProjects, 'design-indicator');
    initCategoryLoop('frontend-grid-container', frontendProjects, 'frontend-indicator');

    // --- MANEJO DE EVENTOS DE MINI-CARRUSEL DE FOTOS & GIRO 3D ---
    document.querySelectorAll('.project-flip-card').forEach(card => {
        const imagePreviewBox = card.querySelector('.card-image-preview');
        const dots = card.querySelectorAll('.mini-card-dot');
        const sliderItems = card.querySelectorAll('.card-slider-item');

        const updateActiveImage = (newIdx) => {
            const total = sliderItems.length;
            if (total <= 1) return;

            let validIdx = (newIdx + total) % total;
            imagePreviewBox.setAttribute('data-active-index', validIdx);

            sliderItems.forEach((item, idx) => {
                const isActive = idx === validIdx;
                item.classList.toggle('active', isActive);
                
                const video = item.querySelector('video');
                if (video && !isActive) {
                    video.pause();
                    video.currentTime = 0;
                    video.muted = true;
                }
            });

            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === validIdx);
            });
        };

        // 1. Al hacer clic en las flechas de navegación del mini-carrusel (‹ y ›)
        const miniArrows = card.querySelectorAll('.mini-carousel-arrow');
        miniArrows.forEach(arrow => {
            arrow.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Evita el giro 3D y clics indeseados
                let currentIdx = parseInt(imagePreviewBox.getAttribute('data-active-index') || 0);
                const action = arrow.getAttribute('data-action');
                if (action === 'prev') {
                    updateActiveImage(currentIdx - 1);
                } else {
                    updateActiveImage(currentIdx + 1);
                }
            });
        });

        // 2. Al hacer clic en la foto, avanza a la siguiente foto si el proyecto tiene varias
        if (imagePreviewBox && sliderItems.length > 1) {
            imagePreviewBox.addEventListener('click', (e) => {
                if (e.target.tagName === 'VIDEO' || e.target.closest('video') || e.target.closest('.mini-carousel-arrow') || e.target.closest('.mini-card-dot')) {
                    return; // Permitir usar controles de video o flechas sin interferencia
                }
                e.stopPropagation(); // Evita que la tarjeta se voltee al tocar la imagen
                let currentIdx = parseInt(imagePreviewBox.getAttribute('data-active-index') || 0);
                updateActiveImage(currentIdx + 1);
            });
        }

        // 3. Al hacer clic en los puntitos inferiores, va directamente a esa foto
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Evita el giro 3D y el clic en la imagen
                let targetIdx = parseInt(dot.getAttribute('data-index') || 0);
                updateActiveImage(targetIdx);
            });
        });

        // 4. Giro 3D al hacer clic en la franja de título inferior o en la cara trasera
        card.addEventListener('click', (e) => {
            if (e.target.closest('.mini-card-dot') || e.target.closest('.mini-carousel-arrow') || e.target.tagName === 'A' || e.target.closest('a') || e.target.tagName === 'VIDEO' || e.target.closest('video')) {
                return;
            }
            const isFlipped = card.classList.toggle('is-flipped');
            if (isFlipped) {
                card.querySelectorAll('video').forEach(v => {
                    v.pause();
                    v.currentTime = 0;
                    v.muted = true;
                });
            }
        });
    });

    // --- LÓGICA DE INTEGRACIÓN API EN VIVO DE GITHUB ---
    const initGitHubFeed = async () => {
        const username = "jeanny-tole-dev";
        const reposContainer = document.getElementById("github-repos-container");
        const reposCountBadge = document.getElementById("gh-repos-count");
        if (!reposContainer) return;

        const fallbackRepos = [
            {
                name: "bradescard-training",
                description: "Módulos de juegos de entrenamiento interactivo adaptados para la plataforma LearningAI (Positivo S+ / Algar Tech).",
                language: "JavaScript / React",
                stargazers_count: 0,
                html_url: "https://github.com/jeanny-tole-dev/bradescard-training",
                updated_at: "2026-10-02T15:19:00Z"
            },
            {
                name: "jhaular-joyeria",
                description: "Plataforma e-commerce y laboratorio 3D interactivo en Three.js + React + Supabase para Jhaular Joyería.",
                language: "TypeScript / React",
                stargazers_count: 0,
                html_url: "https://github.com/jeanny-tole-dev/jhaular-joyeria",
                updated_at: "2026-10-02T14:54:00Z"
            },
            {
                name: "heladeria-react-supabase",
                description: "Taller de Heladería e-commerce interactivo en React + Vite + Supabase. Autenticación y roles de usuario.",
                language: "JavaScript",
                stargazers_count: 0,
                html_url: "https://github.com/jeanny-tole-dev/heladeria-react-supabase",
                updated_at: "2026-06-03T22:00:19Z"
            },
            {
                name: "portafolio-web",
                description: "Portafolio web profesional e interactivo con diseño editorial, animaciones y conexión directa a la API de GitHub.",
                language: "CSS / JS",
                stargazers_count: 0,
                html_url: "https://github.com/jeanny-tole-dev/portafolio-web",
                updated_at: "2026-10-01T22:37:13Z"
            },
            {
                name: "Biblioteca-virtual-infantil",
                description: "Sistema web frontend interactivo para exploración de recursos educativos infantiles.",
                language: "JavaScript",
                stargazers_count: 0,
                html_url: "https://github.com/jeanny-tole-dev/Biblioteca-virtual-infantil",
                updated_at: "2026-04-30T14:25:17Z"
            },
            {
                name: "reto-claro-laravel",
                description: "Sistema CRUD en Laravel (PHP) para el programa de Tecnóloga en Desarrollo Publicitario (SENA).",
                language: "PHP / Laravel",
                stargazers_count: 0,
                html_url: "https://github.com/jeanny-tole-dev/reto-claro-laravel",
                updated_at: "2026-03-25T19:56:04Z"
            },
            {
                name: "jeanny-tole-dev",
                description: "Perfil especial y documentación pública de GitHub.",
                language: "Markdown",
                stargazers_count: 0,
                html_url: "https://github.com/jeanny-tole-dev/jeanny-tole-dev",
                updated_at: "2026-09-28T20:30:25Z"
            }
        ];

        const getLangColor = (lang) => {
            if (!lang) return "#a855f7";
            const l = lang.toLowerCase();
            if (l.includes("javascript") || l.includes("js")) return "#f7df1e";
            if (l.includes("react")) return "#61dafb";
            if (l.includes("css")) return "#1572b6";
            if (l.includes("html")) return "#e34f26";
            if (l.includes("php") || l.includes("laravel")) return "#777bb4";
            if (l.includes("three")) return "#000000";
            return "#d946ef";
        };

        const formatDate = (isoStr) => {
            if (!isoStr) return "";
            const d = new Date(isoStr);
            return d.toLocaleDateString("es-ES", { year: 'numeric', month: 'short', day: 'numeric' });
        };

        const renderRepos = (reposList) => {
            reposContainer.innerHTML = reposList.map(repo => {
                const langColor = getLangColor(repo.language);
                const descText = repo.description || "Repositorio público de código en GitHub.";
                const starsCount = repo.stargazers_count || 0;
                const updatedStr = formatDate(repo.updated_at);

                return `
                    <div class="github-repo-card">
                        <div class="github-repo-header">
                            <span class="github-repo-icon">📦</span>
                            <h4 class="github-repo-title">${repo.name}</h4>
                        </div>
                        <p class="github-repo-desc">${descText}</p>
                        <div class="github-repo-footer">
                            <div class="github-repo-meta">
                                <span class="repo-lang-badge" style="--lang-color: ${langColor}">
                                    <span class="lang-dot"></span>
                                    <span>${repo.language || 'Código'}</span>
                                </span>
                                ${starsCount > 0 ? `<span class="repo-stars">★ ${starsCount}</span>` : ''}
                                ${updatedStr ? `<span class="repo-date">Editado: ${updatedStr}</span>` : ''}
                            </div>
                            <a href="${repo.html_url}" target="_blank" class="github-repo-link" title="Ver código en GitHub">
                                <span>Ver Repositorio</span>
                                <span>&rarr;</span>
                            </a>
                        </div>
                    </div>
                `;
            }).join("");
        };

        // Mostrar cargando temporalmente
        reposContainer.innerHTML = `
            <div class="github-loading-box">
                <span class="github-spinner"></span>
                <p>Cargando repositorios desde GitHub API...</p>
            </div>
        `;

        try {
            const [userRes, reposRes] = await Promise.all([
                fetch(`https://api.github.com/users/${username}`),
                fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
            ]);

            if (userRes.ok) {
                const userData = await userRes.json();
                if (reposCountBadge && userData.public_repos !== undefined) {
                    reposCountBadge.textContent = userData.public_repos;
                }
            }

            if (reposRes.ok) {
                const reposData = await reposRes.json();
                if (Array.isArray(reposData) && reposData.length > 0) {
                    renderRepos(reposData);
                    return;
                }
            }
            // Fallback si la respuesta viene vacía o con límite superado
            renderRepos(fallbackRepos);
        } catch (err) {
            console.warn("No se pudo conectar a GitHub API (usando datos locales de respaldo):", err);
            renderRepos(fallbackRepos);
        }
    };

    initGitHubFeed();
});