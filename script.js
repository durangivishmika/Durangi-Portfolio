/* =========================================================
   DURANGI VISHMIKA
   QA PORTFOLIO
   COMPLETE SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       PAGE INITIALIZATION
    ===================================================== */

    document.body.classList.add("page-ready");
    document.body.classList.add("page-visible");

    document.body.style.opacity = "1";
    document.body.style.visibility = "visible";


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    const alternativeNav =
        document.querySelector(".nav-links");

    const activeNav =
        mainNav || alternativeNav;


    function closeMobileMenu() {

        if (mainNav) {
            mainNav.classList.remove("active");
        }

        if (alternativeNav) {
            alternativeNav.classList.remove("active");
        }

        if (menuToggle) {

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );
        }

        document.body.classList.remove("menu-open");
    }


    function openMobileMenu() {

        if (activeNav) {
            activeNav.classList.add("active");
        }

        if (menuToggle) {

            menuToggle.textContent = "✕";

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Close menu"
            );
        }

        document.body.classList.add("menu-open");
    }


    if (menuToggle && activeNav) {

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );


        menuToggle.addEventListener(
            "click",
            function () {

                const isOpen =
                    activeNav.classList.contains("active");

                if (isOpen) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }

            }
        );


        activeNav
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {
                        closeMobileMenu();
                    }
                );

            });
    }


    /* =====================================================
       CLOSE MOBILE MENU WITH ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (
                    activeNav &&
                    activeNav.classList.contains("active")
                ) {
                    closeMobileMenu();
                }

                closeContactToast();
            }

        }
    );


    /* =====================================================
       CLOSE MOBILE MENU WHEN RESIZING
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 850) {
                closeMobileMenu();
            }

        }
    );


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');


    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                let target = null;


                try {

                    target =
                        document.querySelector(targetId);

                } catch (error) {

                    return;

                }


                if (!target) {
                    return;
                }


                event.preventDefault();


                const header =
                    document.querySelector(".header");


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 80;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    20;


                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });


                /*
                 Update active navigation
                */

                const targetSectionId =
                    target.getAttribute("id");


                if (targetSectionId) {
                    setActiveNavigation(
                        targetSectionId
                    );
                }

            }
        );

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if (
        "IntersectionObserver" in window &&
        revealElements.length > 0
    ) {

        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

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

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -50px 0px"
                }
            );


        revealElements.forEach(
            function (element, index) {

                element.style.setProperty(
                    "--reveal-delay",
                    Math.min(index * 50, 300) + "ms"
                );


                revealObserver.observe(element);

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add("active");
                element.classList.add("visible");

            }
        );

    }


    /* =====================================================
       HERO ANIMATION
    ===================================================== */

    const heroContent =
        document.querySelector(".hero-content");


    if (heroContent) {

        heroContent.classList.add("hero-ready");


        const heroElements =
            heroContent.querySelectorAll(
                ".hero-label, .small-title, h1, h2, .hero-role, .hero-description, .description, .hero-buttons, .buttons, .quick-tags"
            );


        heroElements.forEach(
            function (element, index) {

                element.style.setProperty(
                    "--hero-delay",
                    150 + index * 120 + "ms"
                );


                element.classList.add(
                    "hero-animate"
                );

            }
        );

    }


    /* =====================================================
       HERO NAME
    ===================================================== */

    const heroName =
        document.querySelector(".hero h1 span");


    if (heroName) {

        heroName.classList.add(
            "name-animate"
        );

    }


    /* =====================================================
       HERO BUTTONS
    ===================================================== */

    const heroButtons =
        document.querySelectorAll(
            ".hero-buttons a, .hero-buttons button, .buttons a, .buttons button"
        );


    heroButtons.forEach(
        function (button, index) {

            button.style.setProperty(
                "--button-delay",
                500 + index * 150 + "ms"
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
        function (tag, index) {

            tag.style.setProperty(
                "--tag-delay",
                700 + index * 100 + "ms"
            );


            tag.classList.add(
                "tag-animate"
            );

        }
    );


    /* =====================================================
       HERO IMAGE
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
       HERO FLOATING SHAPES
       DESKTOP ONLY
    ===================================================== */

    const hero =
        document.querySelector(".hero");


    const shapes =
        document.querySelectorAll(".floating-shape");


    if (
        hero &&
        shapes.length > 0 &&
        window.innerWidth > 850
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        let animationFrame = null;


        function animateShapes() {

            currentX +=
                (mouseX - currentX) * 0.08;


            currentY +=
                (mouseY - currentY) * 0.08;


            shapes.forEach(
                function (shape, index) {

                    const movement =
                        (index + 1) * 8;


                    shape.style.transform =
                        "translate3d(" +
                        currentX * movement +
                        "px, " +
                        currentY * movement +
                        "px, 0)";

                }
            );


            animationFrame =
                requestAnimationFrame(
                    animateShapes
                );

        }


        hero.addEventListener(
            "mousemove",
            function (event) {

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
            function () {

                mouseX = 0;
                mouseY = 0;

            }
        );


        window.addEventListener(
            "resize",
            function () {

                if (window.innerWidth <= 850) {

                    if (animationFrame) {

                        cancelAnimationFrame(
                            animationFrame
                        );

                        animationFrame = null;
                    }


                    shapes.forEach(
                        function (shape) {
                            shape.style.transform = "";
                        }
                    );

                }

            }
        );

    }


    /* =====================================================
       PROJECT CARD TILT
       DESKTOP ONLY
    ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".portfolio-project"
        );


    if (
        projectCards.length > 0 &&
        window.innerWidth > 850
    ) {

        projectCards.forEach(
            function (card) {

                let animationFrame = null;

                let targetRotateX = 0;
                let targetRotateY = 0;

                let currentRotateX = 0;
                let currentRotateY = 0;


                function animateCard() {

                    currentRotateX +=
                        (
                            targetRotateX -
                            currentRotateX
                        ) * 0.12;


                    currentRotateY +=
                        (
                            targetRotateY -
                            currentRotateY
                        ) * 0.12;


                    card.style.transform =
                        "perspective(900px) " +
                        "rotateX(" +
                        currentRotateX +
                        "deg) " +
                        "rotateY(" +
                        currentRotateY +
                        "deg) " +
                        "translateY(-6px)";


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

                        animationFrame = null;

                    }

                }


                card.addEventListener(
                    "mousemove",
                    function (event) {

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
                            ) * -2;


                        targetRotateY =
                            (
                                (x - centerX) /
                                centerX
                            ) * 2;


                        if (!animationFrame) {

                            animationFrame =
                                requestAnimationFrame(
                                    animateCard
                                );

                        }

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        targetRotateX = 0;
                        targetRotateY = 0;


                        if (!animationFrame) {

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
    ===================================================== */

    const otherProjectCards =
        document.querySelectorAll(
            ".other-project"
        );


    otherProjectCards.forEach(
        function (card) {

            card.addEventListener(
                "mouseenter",
                function () {

                    card.classList.add(
                        "card-hover"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.classList.remove(
                        "card-hover"
                    );

                }
            );

        }
    );


    /* =====================================================
       SKILL CARDS
    ===================================================== */

    const skillCards =
        document.querySelectorAll(
            ".skill-card"
        );


    skillCards.forEach(
        function (card) {

            card.addEventListener(
                "mouseenter",
                function () {

                    card.classList.add(
                        "skill-hover"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

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
        function (card) {

            card.addEventListener(
                "mouseenter",
                function () {

                    card.classList.add(
                        "education-hover"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

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
        function (card) {

            card.classList.add(
                "detail-ready"
            );

        }
    );


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navigationLinks =
        document.querySelectorAll(
            ".nav a, .nav-links a"
        );


    function setActiveNavigation(activeId) {

        if (!activeId) {
            return;
        }


        navigationLinks.forEach(
            function (link) {

                const href =
                    link.getAttribute("href");


                const linkId =
                    href && href.includes("#")
                        ? href.split("#")[1]
                        : "";


                if (linkId === activeId) {

                    link.classList.add(
                        "active"
                    );


                    link.setAttribute(
                        "aria-current",
                        "page"
                    );

                } else {

                    link.classList.remove(
                        "active"
                    );


                    link.removeAttribute(
                        "aria-current"
                    );

                }

            }
        );

    }


    if (
        sections.length > 0 &&
        navigationLinks.length > 0
    ) {

        navigationLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        const href =
                            this.getAttribute(
                                "href"
                            );


                        if (
                            !href ||
                            !href.includes("#")
                        ) {
                            return;
                        }


                        const targetId =
                            href.split("#")[1];


                        if (targetId) {

                            setActiveNavigation(
                                targetId
                            );

                        }

                    }
                );

            }
        );


        function updateActiveNavigation() {

            const header =
                document.querySelector(
                    ".header"
                );


            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;


            const scrollPosition =
                window.scrollY +
                headerHeight +
                80;


            let currentSection =
                sections[0];


            sections.forEach(
                function (section) {

                    if (
                        section.offsetTop <=
                        scrollPosition
                    ) {

                        currentSection =
                            section;

                    }

                }
            );


            if (currentSection) {

                setActiveNavigation(
                    currentSection.getAttribute(
                        "id"
                    )
                );

            }

        }


        window.addEventListener(
            "scroll",
            updateActiveNavigation,
            {
                passive: true
            }
        );


        window.addEventListener(
            "resize",
            updateActiveNavigation
        );


        updateActiveNavigation();

    }


    /* =====================================================
       IMAGE LOADING
    ===================================================== */

    const images =
        document.querySelectorAll("img");


    images.forEach(
        function (image) {

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
                    function () {

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
                    function () {

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

        function updateBackToTop() {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }


        window.addEventListener(
            "scroll",
            updateBackToTop,
            {
                passive: true
            }
        );


        backToTop.addEventListener(
            "click",
            function () {

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
       CONTACT LINK HOVER
    ===================================================== */

    const contactLinks =
        document.querySelectorAll(
            ".contact a, .contact-card a, .contact-item a"
        );


    contactLinks.forEach(
        function (link) {

            link.addEventListener(
                "mouseenter",
                function () {

                    link.classList.add(
                        "contact-hover"
                    );

                }
            );


            link.addEventListener(
                "mouseleave",
                function () {

                    link.classList.remove(
                        "contact-hover"
                    );

                }
            );

        }
    );


    /* =====================================================
       CONTACT FORM
       AJAX
       NO REDIRECT
    ===================================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    const contactToast =
        document.getElementById(
            "contactToast"
        );


    const contactToastIcon =
        document.getElementById(
            "contactToastIcon"
        );


    const contactToastTitle =
        document.getElementById(
            "contactToastTitle"
        );


    const contactToastMessage =
        document.getElementById(
            "contactToastMessage"
        );


    const contactToastClose =
        document.getElementById(
            "contactToastClose"
        );


    const sendMessageBtn =
        document.getElementById(
            "sendMessageBtn"
        );


    const sendMessageText =
        document.getElementById(
            "sendMessageText"
        );


    let contactToastTimer = null;


    /* =====================================================
       SHOW CONTACT TOAST
    ===================================================== */

    function showContactToast(
        title,
        message,
        success
    ) {

        if (!contactToast) {
            return;
        }


        if (contactToastTimer) {

            clearTimeout(
                contactToastTimer
            );

            contactToastTimer = null;

        }


        if (contactToastTitle) {

            contactToastTitle.textContent =
                title;

        }


        if (contactToastMessage) {

            contactToastMessage.textContent =
                message;

        }


        if (contactToastIcon) {

            contactToastIcon.textContent =
                success
                    ? "✓"
                    : "!";

        }


        contactToast.classList.toggle(
            "contact-toast-error",
            !success
        );


        contactToast.classList.add(
            "show"
        );


        contactToastTimer =
            setTimeout(
                function () {

                    contactToast.classList.remove(
                        "show"
                    );

                    contactToastTimer = null;

                },
                5000
            );

    }


    /* =====================================================
       CLOSE CONTACT TOAST
    ===================================================== */

    function closeContactToast() {

        if (contactToastTimer) {

            clearTimeout(
                contactToastTimer
            );

            contactToastTimer = null;

        }


        if (contactToast) {

            contactToast.classList.remove(
                "show"
            );

        }

    }


    if (contactToastClose) {

        contactToastClose.addEventListener(
            "click",
            closeContactToast
        );

    }


    /* =====================================================
       CONTACT FORM SUBMIT
    ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async function (event) {

                /*
                 Stop normal browser submission.

                 This prevents FormSubmit from
                 opening its own Thank You page.
                */

                event.preventDefault();
                event.stopPropagation();


                /*
                 Prevent double clicking.
                */

                if (
                    sendMessageBtn &&
                    sendMessageBtn.disabled
                ) {

                    return;

                }


                /*
                 Change button to Sending...
                */

                if (sendMessageBtn) {

                    sendMessageBtn.disabled =
                        true;


                    sendMessageBtn.setAttribute(
                        "aria-busy",
                        "true"
                    );

                }


                if (sendMessageText) {

                    sendMessageText.textContent =
                        "Sending...";

                }


                try {

                    /* ---------------------------------
                       CREATE FORM DATA
                    --------------------------------- */

                    const formData =
                        new FormData(
                            contactForm
                        );


                    /* ---------------------------------
                       SEND TO FORMSUBMIT
                    --------------------------------- */

                    const response =
                        await fetch(
                            "https://formsubmit.co/ajax/durangivishmika@gmail.com",
                            {
                                method: "POST",

                                body: formData,

                                headers: {
                                    Accept:
                                        "application/json"
                                }
                            }
                        );


                    let result = {};


                    /* ---------------------------------
                       READ RESPONSE
                    --------------------------------- */

                    try {

                        result =
                            await response.json();

                    } catch (error) {

                        console.log(
                            "FormSubmit returned a non-JSON response."
                        );

                    }


                    console.log(
                        "Contact form response:",
                        response.status,
                        result
                    );


                    /* ---------------------------------
                       SUCCESS
                    --------------------------------- */

                    if (response.ok) {

                        /*
                         Clear all form fields.
                        */

                        contactForm.reset();


                        /*
                         Show success message.
                        */

                        showContactToast(
                            "Message Sent!",
                            "Thank you for contacting me.",
                            true
                        );

                    } else {

                        /*
                         Show error message.
                        */

                        showContactToast(
                            "Message Not Sent",
                            result.message ||
                                "Something went wrong. Please try again.",
                            false
                        );

                    }

                } catch (error) {

                    console.error(
                        "Contact form error:",
                        error
                    );


                    showContactToast(
                        "Message Not Sent",
                        "Please check your connection and try again.",
                        false
                    );

                } finally {

                    /*
                     Restore button.
                    */

                    if (sendMessageBtn) {

                        sendMessageBtn.disabled =
                            false;


                        sendMessageBtn.removeAttribute(
                            "aria-busy"
                        );

                    }


                    if (sendMessageText) {

                        sendMessageText.textContent =
                            "Send Message";

                    }

                }

            }
        );

    }


    /* =====================================================
       PDF VIEWER
    ===================================================== */

    const pdfViewers =
        document.querySelectorAll(
            ".pdf-viewer iframe"
        );


    pdfViewers.forEach(
        function (iframe) {

            iframe.addEventListener(
                "load",
                function () {

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
    ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[href^="http"]'
        );


    externalLinks.forEach(
        function (link) {

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

                console.log(
                    "Invalid external link:",
                    link.href
                );

            }

        }
    );


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    function updateReducedMotion(event) {

        if (event.matches) {

            document.documentElement.classList.add(
                "reduce-motion"
            );

        } else {

            document.documentElement.classList.remove(
                "reduce-motion"
            );

        }

    }


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

    } else if (
        typeof prefersReducedMotion.addListener ===
        "function"
    ) {

        prefersReducedMotion.addListener(
            "change",
            updateReducedMotion
        );

    }


    /* =====================================================
       PAGE VISIBILITY
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        function () {

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
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                }
            );

        }
    );


    /* =====================================================
       FINAL PAGE INITIALIZATION
    ===================================================== */

    requestAnimationFrame(
        function () {

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
/* =========================================================
   PROJECT / SUB-PAGE ACTIVE NAVIGATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(
        ".nav a, .nav-links a"
    );

    if (!navLinks.length) {
        return;
    }

    const currentPath =
        window.location.pathname.toLowerCase();

    const isProjectPage =
        currentPath.includes("/projects/");

    const isAcademicPage =
        currentPath.includes("/academic/");

    const isEducationPage =
        currentPath.includes("/education/");


    /* Remove existing active state */

    navLinks.forEach(function (link) {

        link.classList.remove("active");
        link.removeAttribute("aria-current");

    });


    /* =====================================================
       PROJECT PAGES
    ===================================================== */

    if (isProjectPage) {

        navLinks.forEach(function (link) {

            const href =
                link.getAttribute("href");

            if (
                href &&
                href.includes("#experience")
            ) {

                link.classList.add("active");

                link.setAttribute(
                    "aria-current",
                    "page"
                );

            }

        });

    }


    /* =====================================================
       ACADEMIC PROJECT PAGES
    ===================================================== */

    else if (isAcademicPage) {

        navLinks.forEach(function (link) {

            const href =
                link.getAttribute("href");

            if (
                href &&
                href.includes("#projects")
            ) {

                link.classList.add("active");

                link.setAttribute(
                    "aria-current",
                    "page"
                );

            }

        });

    }


    /* =====================================================
       EDUCATION PAGES
    ===================================================== */

    else if (isEducationPage) {

        navLinks.forEach(function (link) {

            const href =
                link.getAttribute("href");

            if (
                href &&
                href.includes("#education")
            ) {

                link.classList.add("active");

                link.setAttribute(
                    "aria-current",
                    "page"
                );

            }

        });

    }

});