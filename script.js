/* =========================================================
   DURANGI VISHMIKA
   QA PORTFOLIO
   COMPLETE SCRIPT.JS

   Includes:
   - Page load animation
   - Mobile navigation
   - Scroll reveal
   - Staggered animations
   - Hero animations
   - Hero mouse movement
   - Project card tilt
   - Skill card effects
   - Active navigation
   - Smooth scrolling
   - Image loading animation
   - Back to top
   - Current year
   - Reduced motion support
   - Keyboard accessibility
========================================================= */


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-ready");
    document.body.style.opacity = "1";
    document.body.style.visibility = "visible";


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");


    if (menuToggle && mainNav) {

        /* -----------------------------------------------
           Initial Accessibility State
        ------------------------------------------------ */

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );


        /* -----------------------------------------------
           OPEN / CLOSE MENU
        ------------------------------------------------ */

        menuToggle.addEventListener("click", () => {

            mainNav.classList.toggle("active");

            const isOpen =
                mainNav.classList.contains("active");


            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close menu"
                    : "Open menu"
            );


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
                    ? "true"
                    : "false"
            );


            menuToggle.textContent =
                isOpen
                    ? "✕"
                    : "☰";


            /* Prevent background scrolling */

            if (isOpen) {

                document.body.classList.add(
                    "menu-open"
                );

            } else {

                document.body.classList.remove(
                    "menu-open"
                );

            }

        });


        /* -----------------------------------------------
           CLOSE MENU AFTER CLICKING LINK
        ------------------------------------------------ */

        const navLinks =
            mainNav.querySelectorAll("a");


        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mainNav.classList.remove(
                    "active"
                );

                menuToggle.textContent =
                    "☰";

                menuToggle.setAttribute(
                    "aria-label",
                    "Open menu"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            });

        });


        /* -----------------------------------------------
           CLOSE MENU WITH ESCAPE KEY
        ------------------------------------------------ */

        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Escape" &&
                    mainNav.classList.contains("active")
                ) {

                    mainNav.classList.remove(
                        "active"
                    );

                    menuToggle.textContent =
                        "☰";

                    menuToggle.setAttribute(
                        "aria-label",
                        "Open menu"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                }

            }
        );


        /* -----------------------------------------------
           CLOSE MENU WHEN RESIZING TO DESKTOP
        ------------------------------------------------ */

        window.addEventListener(
            "resize",
            () => {

                if (window.innerWidth > 850) {

                    mainNav.classList.remove(
                        "active"
                    );

                    menuToggle.textContent =
                        "☰";

                    menuToggle.setAttribute(
                        "aria-label",
                        "Open menu"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                }

            }
        );

    }


    /* =====================================================
       SUPPORT OTHER NAVIGATION STRUCTURES
       Some portfolio pages may use .nav-links
    ===================================================== */

    const alternativeNav =
        document.querySelector(
            ".nav-links"
        );


    if (
        menuToggle &&
        alternativeNav &&
        !mainNav
    ) {

        menuToggle.addEventListener(
            "click",
            () => {

                alternativeNav.classList.toggle(
                    "active"
                );

                const isOpen =
                    alternativeNav.classList.contains(
                        "active"
                    );


                menuToggle.textContent =
                    isOpen
                        ? "✕"
                        : "☰";


                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                        ? "true"
                        : "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close menu"
                        : "Open menu"
                );

            }
        );


        alternativeNav
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        alternativeNav.classList.remove(
                            "active"
                        );

                        menuToggle.textContent =
                            "☰";

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                const header =
                    document.querySelector(
                        ".header"
                    );


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 80;


                const targetPosition =
                    target.getBoundingClientRect()
                        .top +
                    window.scrollY -
                    headerHeight -
                    20;


                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }
        );

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver" in window &&
        revealElements.length
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "active"
                                );

                                entry.target.classList.add(
                                    "visible"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -50px 0px"
                }
            );


        revealElements.forEach(
            (element, index) => {

                /* Stagger animation */

                element.style.setProperty(
                    "--reveal-delay",
                    `${Math.min(
                        index * 50,
                        300
                    )}ms`
                );


                revealObserver.observe(
                    element
                );

            }
        );


    } else {

        /* Browser fallback */

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "active"
                );

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       HERO ELEMENTS
       Professional Entrance Animation
    ===================================================== */

    const heroContent =
        document.querySelector(
            ".hero-content"
        );


    if (heroContent) {

        heroContent.classList.add(
            "hero-ready"
        );


        const heroElements =
            heroContent.querySelectorAll(
                ".hero-label, .small-title, h1, h2, .hero-role, .hero-description, .description, .hero-buttons, .buttons, .quick-tags"
            );


        heroElements.forEach(
            (element, index) => {

                element.style.setProperty(
                    "--hero-delay",
                    `${150 + index * 120}ms`
                );

                element.classList.add(
                    "hero-animate"
                );

            }
        );

    }


    /* =====================================================
       HERO NAME EFFECT
    ===================================================== */

    const heroName =
        document.querySelector(
            ".hero h1 span"
        );


    if (heroName) {

        heroName.classList.add(
            "name-animate"
        );

    }


    /* =====================================================
       HERO BUTTON EFFECT
    ===================================================== */

    const heroButtons =
        document.querySelectorAll(
            ".hero-buttons a, .hero-buttons button, .buttons a, .buttons button"
        );


    heroButtons.forEach(
        (button, index) => {

            button.style.setProperty(
                "--button-delay",
                `${500 + index * 150}ms`
            );

            button.classList.add(
                "button-animate"
            );

        }
    );


    /* =====================================================
       HERO QUICK TAGS
    ===================================================== */

    const quickTags =
        document.querySelectorAll(
            ".quick-tags span, .quick-tags a, .hero-tags span, .hero-tags a"
        );


    quickTags.forEach(
        (tag, index) => {

            tag.style.setProperty(
                "--tag-delay",
                `${700 + index * 100}ms`
            );

            tag.classList.add(
                "tag-animate"
            );

        }
    );


    /* =====================================================
       HERO PHOTO ANIMATION
    ===================================================== */

    const heroImage =
        document.querySelector(
            ".hero-visual img, .hero-image img, .profile-image"
        );


    if (heroImage) {

        heroImage.classList.add(
            "hero-image-animate"
        );

    }


    /* =====================================================
       HERO MOUSE MOVEMENT
       Desktop Only
    ===================================================== */

    const hero =
        document.querySelector(
            ".hero"
        );


    const shapes =
        document.querySelectorAll(
            ".floating-shape"
        );


    if (
        hero &&
        shapes.length &&
        window.innerWidth > 850
    ) {

        let mouseX = 0;

        let mouseY = 0;

        let currentX = 0;

        let currentY = 0;

        let animationFrame = null;


        const animateShapes =
            () => {

                currentX +=
                    (mouseX - currentX) *
                    0.08;


                currentY +=
                    (mouseY - currentY) *
                    0.08;


                shapes.forEach(
                    (shape, index) => {

                        const movement =
                            (index + 1) * 8;


                        shape.style.transform =
                            `translate3d(
                                ${currentX * movement}px,
                                ${currentY * movement}px,
                                0
                            )`;

                    }
                );


                animationFrame =
                    requestAnimationFrame(
                        animateShapes
                    );

            };


        hero.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    hero.getBoundingClientRect();


                mouseX =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    0.5;


                mouseY =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    0.5;


                if (!animationFrame) {

                    animationFrame =
                        requestAnimationFrame(
                            animateShapes
                        );

                }

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                mouseX = 0;

                mouseY = 0;

            }
        );


        window.addEventListener(
            "resize",
            () => {

                if (
                    window.innerWidth <= 850
                ) {

                    if (
                        animationFrame
                    ) {

                        cancelAnimationFrame(
                            animationFrame
                        );

                        animationFrame =
                            null;

                    }


                    shapes.forEach(
                        (shape) => {

                            shape.style.transform =
                                "";

                        }
                    );

                }

            }
        );

    }


    /* =====================================================
       PROFESSIONAL PROJECT CARD TILT
       Desktop Only
    ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".portfolio-project"
        );


    if (
        projectCards.length &&
        window.innerWidth > 850
    ) {

        projectCards.forEach(
            (card) => {

                let animationFrame =
                    null;


                let targetRotateX = 0;

                let targetRotateY = 0;

                let currentRotateX = 0;

                let currentRotateY = 0;


                const animateCard =
                    () => {

                        currentRotateX +=
                            (
                                targetRotateX -
                                currentRotateX
                            ) *
                            0.12;


                        currentRotateY +=
                            (
                                targetRotateY -
                                currentRotateY
                            ) *
                            0.12;


                        card.style.transform =
                            `perspective(900px)
                             rotateX(${currentRotateX}deg)
                             rotateY(${currentRotateY}deg)
                             translateY(-6px)`;


                        if (
                            Math.abs(
                                currentRotateX -
                                targetRotateX
                            ) > 0.01 ||
                            Math.abs(
                                currentRotateY -
                                targetRotateY
                            ) > 0.01
                        ) {

                            animationFrame =
                                requestAnimationFrame(
                                    animateCard
                                );

                        } else {

                            animationFrame =
                                null;

                        }

                    };


                card.addEventListener(
                    "mousemove",
                    (event) => {

                        const rect =
                            card.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;


                        const y =
                            event.clientY -
                            rect.top;


                        const centerX =
                            rect.width / 2;


                        const centerY =
                            rect.height / 2;


                        targetRotateX =
                            (
                                (y - centerY) /
                                centerY
                            ) *
                            -2;


                        targetRotateY =
                            (
                                (x - centerX) /
                                centerX
                            ) *
                            2;


                        if (
                            !animationFrame
                        ) {

                            animationFrame =
                                requestAnimationFrame(
                                    animateCard
                                );

                        }

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        targetRotateX = 0;

                        targetRotateY = 0;


                        if (
                            !animationFrame
                        ) {

                            animationFrame =
                                requestAnimationFrame(
                                    animateCard
                                );

                        }

                    }
                );

            }
        );

    }


    /* =====================================================
       OTHER PROJECT CARDS
       Subtle Hover Motion
    ===================================================== */

    const otherProjectCards =
        document.querySelectorAll(
            ".other-project"
        );


    otherProjectCards.forEach(
        (card) => {

            card.addEventListener(
                "mouseenter",
                () => {

                    card.classList.add(
                        "card-hover"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.classList.remove(
                        "card-hover"
                    );

                }
            );

        }
    );


    /* =====================================================
       SKILL CARDS
       Subtle Interaction
    ===================================================== */

    const skillCards =
        document.querySelectorAll(
            ".skill-card"
        );


    skillCards.forEach(
        (card) => {

            card.addEventListener(
                "mouseenter",
                () => {

                    card.classList.add(
                        "skill-hover"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.classList.remove(
                        "skill-hover"
                    );

                }
            );

        }
    );


    /* =====================================================
       EDUCATION CARDS
    ===================================================== */

    const educationCards =
        document.querySelectorAll(
            ".education-card, .edu-card, .education-item"
        );


    educationCards.forEach(
        (card) => {

            card.addEventListener(
                "mouseenter",
                () => {

                    card.classList.add(
                        "education-hover"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.classList.remove(
                        "education-hover"
                    );

                }
            );

        }
    );


    /* =====================================================
       PROJECT DETAIL CARDS
    ===================================================== */

    const detailCards =
        document.querySelectorAll(
            ".detail-card, .project-detail-card, .project-info-card"
        );


    detailCards.forEach(
        (card) => {

            card.classList.add(
                "detail-ready"
            );

        }
    );


    /* =====================================================
       NAVIGATION ACTIVE LINK
       Home Page
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navigationLinks =
        document.querySelectorAll(
            ".nav a, .nav-links a"
        );


    if (
        sections.length &&
        navigationLinks.length
    ) {

        const updateActiveNavigation =
            () => {

                let currentSection =
                    "";


                const scrollPosition =
                    window.scrollY +
                    180;


                sections.forEach(
                    (section) => {

                        const sectionTop =
                            section.offsetTop;


                        const sectionHeight =
                            section.offsetHeight;


                        if (
                            scrollPosition >=
                                sectionTop &&
                            scrollPosition <
                                sectionTop +
                                sectionHeight
                        ) {

                            currentSection =
                                section.getAttribute(
                                    "id"
                                );

                        }

                    }
                );


                navigationLinks.forEach(
                    (link) => {

                        const href =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            href &&
                            href.startsWith("#")
                        ) {

                            const sectionId =
                                href.substring(1);


                            if (
                                sectionId ===
                                currentSection
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            } else {

                                link.classList.remove(
                                    "active"
                                );

                            }

                        }

                    }
                );

            };


        window.addEventListener(
            "scroll",
            updateActiveNavigation,
            {
                passive: true
            }
        );


        updateActiveNavigation();

    }


    /* =====================================================
       IMAGE LOADING EFFECT
    ===================================================== */

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach(
        (image) => {

            if (
                image.complete &&
                image.naturalWidth > 0
            ) {

                image.classList.add(
                    "image-loaded"
                );

            } else {

                image.addEventListener(
                    "load",
                    () => {

                        image.classList.add(
                            "image-loaded"
                        );

                    },
                    {
                        once: true
                    }
                );


                image.addEventListener(
                    "error",
                    () => {

                        image.classList.add(
                            "image-error"
                        );

                    },
                    {
                        once: true
                    }
                );

            }

        }
    );


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backToTop =
        document.querySelector(
            ".back-to-top"
        );


    if (backToTop) {

        const updateBackToTop =
            () => {

                if (
                    window.scrollY > 500
                ) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            };


        window.addEventListener(
            "scroll",
            updateBackToTop,
            {
                passive: true
            }
        );


        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );


        updateBackToTop();

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById(
            "currentYear"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       CONTACT LINK ANIMATION
    ===================================================== */

    const contactLinks =
        document.querySelectorAll(
            ".contact a, .contact-card a, .contact-item a"
        );


    contactLinks.forEach(
        (link) => {

            link.addEventListener(
                "mouseenter",
                () => {

                    link.classList.add(
                        "contact-hover"
                    );

                }
            );


            link.addEventListener(
                "mouseleave",
                () => {

                    link.classList.remove(
                        "contact-hover"
                    );

                }
            );

        }
    );


    /* =====================================================
       PDF VIEWER
       Improve loading experience
    ===================================================== */

    const pdfViewers =
        document.querySelectorAll(
            ".pdf-viewer iframe"
        );


    pdfViewers.forEach(
        (iframe) => {

            iframe.addEventListener(
                "load",
                () => {

                    iframe.classList.add(
                        "pdf-loaded"
                    );

                },
                {
                    once: true
                }
            );

        }
    );


    /* =====================================================
       EXTERNAL LINKS
       Open safely in new tab
    ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[href^="http"]'
        );


    externalLinks.forEach(
        (link) => {

            const currentHost =
                window.location.hostname;


            try {

                const linkUrl =
                    new URL(
                        link.href
                    );


                if (
                    linkUrl.hostname &&
                    linkUrl.hostname !==
                        currentHost
                ) {

                    link.setAttribute(
                        "target",
                        "_blank"
                    );

                    link.setAttribute(
                        "rel",
                        "noopener noreferrer"
                    );

                }

            } catch (error) {

                /* Ignore invalid URLs */

            }

        }
    );


    /* =====================================================
       KEYBOARD ACCESSIBILITY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            /* ESC closes mobile menu */

            if (
                event.key === "Escape"
            ) {

                if (
                    mainNav &&
                    mainNav.classList.contains(
                        "active"
                    )
                ) {

                    mainNav.classList.remove(
                        "active"
                    );


                    if (menuToggle) {

                        menuToggle.textContent =
                            "☰";

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        menuToggle.setAttribute(
                            "aria-label",
                            "Open menu"
                        );

                    }


                    document.body.classList.remove(
                        "menu-open"
                    );

                }

            }

        }
    );


    /* =====================================================
       REDUCE MOTION SUPPORT
    ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    const updateReducedMotion =
        (event) => {

            if (
                event.matches
            ) {

                document.documentElement.classList.add(
                    "reduce-motion"
                );

            } else {

                document.documentElement.classList.remove(
                    "reduce-motion"
                );

            }

        };


    updateReducedMotion(
        prefersReducedMotion
    );


    if (
        typeof prefersReducedMotion.addEventListener ===
        "function"
    ) {

        prefersReducedMotion.addEventListener(
            "change",
            updateReducedMotion
        );

    } else {

        /* Older browser support */

        prefersReducedMotion.addListener(
            updateReducedMotion
        );

    }


    /* =====================================================
       PAGE VISIBILITY
       Re-trigger small effects when returning to tab
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.visibilityState ===
                "visible"
            ) {

                document.body.classList.add(
                    "page-visible"
                );

            }

        }
    );


    /* =====================================================
       PREVENT BROKEN # LINKS
    ===================================================== */

    document.querySelectorAll(
        'a[href="#"]'
    ).forEach(
        (link) => {

            link.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();

                }
            );

        }
    );


    /* =====================================================
       FINAL PAGE INITIALIZATION
    ===================================================== */

    requestAnimationFrame(
        () => {

            document.body.classList.add(
                "portfolio-loaded"
            );

        }
    );

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "Durangi Vishmika | QA Portfolio Loaded Successfully"
);