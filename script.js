/* =========================================================
   DURANGI VISHMIKA
   QA PORTFOLIO
   COMPLETE SCRIPT.JS
========================================================= */


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       PAGE INITIALIZATION
    ===================================================== */

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

        menuToggle.addEventListener(
            "click",
            function () {

                mainNav.classList.toggle("active");

                const isOpen =
                    mainNav.classList.contains("active");


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


                if (isOpen) {

                    document.body.classList.add(
                        "menu-open"
                    );

                } else {

                    document.body.classList.remove(
                        "menu-open"
                    );

                }

            }
        );


        /* -----------------------------------------------
           CLOSE MENU AFTER LINK CLICK
        ------------------------------------------------ */

        const navLinks =
            mainNav.querySelectorAll("a");


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        mainNav.classList.remove(
                            "active"
                        );


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


                        document.body.classList.remove(
                            "menu-open"
                        );

                    }
                );

            }
        );


        /* -----------------------------------------------
           ESCAPE KEY
        ------------------------------------------------ */

        document.addEventListener(
            "keydown",
            function (event) {

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
                        "aria-expanded",
                        "false"
                    );


                    menuToggle.setAttribute(
                        "aria-label",
                        "Open menu"
                    );


                    document.body.classList.remove(
                        "menu-open"
                    );

                }

            }
        );


        /* -----------------------------------------------
           CLOSE MENU WHEN MOVING TO DESKTOP
        ------------------------------------------------ */

        window.addEventListener(
            "resize",
            function () {

                if (window.innerWidth > 850) {

                    mainNav.classList.remove(
                        "active"
                    );


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


                    document.body.classList.remove(
                        "menu-open"
                    );

                }

            }
        );

    }


    /* =====================================================
       ALTERNATIVE NAVIGATION SUPPORT
    ===================================================== */

    const alternativeNav =
        document.querySelector(".nav-links");


    if (
        menuToggle &&
        alternativeNav &&
        !mainNav
    ) {

        menuToggle.addEventListener(
            "click",
            function () {

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
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

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

                }
            );

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(
        function (link) {

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
                            document.querySelector(
                                targetId
                            );

                    } catch (error) {

                        return;

                    }


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
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        headerHeight -
                        20;


                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });

                }
            );

        }
    );


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver" in window &&
        revealElements.length > 0
    ) {

        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(
                        function (entry) {

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
            function (element, index) {

                element.style.setProperty(
                    "--reveal-delay",
                    Math.min(
                        index * 50,
                        300
                    ) + "ms"
                );


                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

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
       HERO ANIMATION
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
            function (element, index) {

                element.style.setProperty(
                    "--hero-delay",
                    (150 + index * 120) + "ms"
                );


                element.classList.add(
                    "hero-animate"
                );

            }
        );

    }


    /* =====================================================
       HERO NAME ANIMATION
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
       HERO BUTTON ANIMATION
    ===================================================== */

    const heroButtons =
        document.querySelectorAll(
            ".hero-buttons a, .hero-buttons button, .buttons a, .buttons button"
        );


    heroButtons.forEach(
        function (button, index) {

            button.style.setProperty(
                "--button-delay",
                (500 + index * 150) + "ms"
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
                (700 + index * 100) + "ms"
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
       HERO MOUSE MOVEMENT
       DESKTOP ONLY
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
                (mouseX - currentX) *
                0.08;


            currentY +=
                (mouseY - currentY) *
                0.08;


            shapes.forEach(
                function (shape, index) {

                    const movement =
                        (index + 1) * 8;


                    shape.style.transform =
                        "translate3d(" +
                        (currentX * movement) +
                        "px, " +
                        (currentY * movement) +
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

                if (
                    window.innerWidth <= 850
                ) {

                    if (animationFrame) {

                        cancelAnimationFrame(
                            animationFrame
                        );


                        animationFrame =
                            null;

                    }


                    shapes.forEach(
                        function (shape) {

                            shape.style.transform =
                                "";

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
                        ) *
                        0.12;


                    currentRotateY +=
                        (
                            targetRotateY -
                            currentRotateY
                        ) *
                        0.12;


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

                        animationFrame =
                            null;

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
                            ) *
                            -2;


                        targetRotateY =
                            (
                                (x - centerX) /
                                centerX
                            ) *
                            2;


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


    if (
        sections.length > 0 &&
        navigationLinks.length > 0
    ) {

        function updateActiveNavigation() {

            let currentSection = "";


            const scrollPosition =
                window.scrollY +
                180;


            sections.forEach(
                function (section) {

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
                function (link) {

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

        }


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
       IMAGE LOADING
    ===================================================== */

    const images =
        document.querySelectorAll(
            "img"
        );


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
       CONTACT LINK ANIMATION
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
       IMPORTANT:
       - NO PAGE REDIRECT
       - AJAX SUBMISSION
       - SUCCESS TOAST
       - ERROR TOAST
       - FORM RESET
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


    /* -----------------------------------------------
       SHOW CONTACT TOAST
    ------------------------------------------------ */

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

            contactToastTimer =
                null;

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


                    contactToastTimer =
                        null;

                },
                5000
            );

    }


    /* -----------------------------------------------
       CLOSE CONTACT TOAST
    ------------------------------------------------ */

    function closeContactToast() {

        if (contactToastTimer) {

            clearTimeout(
                contactToastTimer
            );


            contactToastTimer =
                null;

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


    /* -----------------------------------------------
       CONTACT FORM SUBMIT
    ------------------------------------------------ */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async function (event) {

                /*
                 IMPORTANT

                 Stop the browser from submitting
                 the form normally.

                 This prevents the FormSubmit
                 "Thanks!" page.
                */

                event.preventDefault();

                event.stopPropagation();

                event.stopImmediatePropagation();


                /* -----------------------------------------
                   PREVENT DOUBLE SUBMISSION
                ----------------------------------------- */

                if (
                    sendMessageBtn &&
                    sendMessageBtn.disabled
                ) {

                    return;

                }


                /* -----------------------------------------
                   BUTTON = SENDING
                ----------------------------------------- */

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

                    /* -------------------------------------
                       CREATE FORM DATA
                    ------------------------------------- */

                    const formData =
                        new FormData(
                            contactForm
                        );


                    /* -------------------------------------
                       FORM SUBMIT AJAX
                    ------------------------------------- */

                    const response =
                        await fetch(
                            "https://formsubmit.co/ajax/durangivishmika@gmail.com",
                            {
                                method: "POST",

                                body: formData,

                                headers: {
                                    "Accept":
                                        "application/json"
                                }
                            }
                        );


                    let result = {};


                    /* -------------------------------------
                       READ RESPONSE
                    ------------------------------------- */

                    try {

                        result =
                            await response.json();

                    } catch (jsonError) {

                        console.log(
                            "FormSubmit returned a non-JSON response."
                        );

                    }


                    console.log(
                        "Contact form response:",
                        response.status,
                        result
                    );


                    /* -------------------------------------
                       SUCCESS
                    ------------------------------------- */

                    if (response.ok) {

                        /*
                         Clear the form
                        */

                        contactForm.reset();


                        /*
                         Stay on current page
                         */

                        showContactToast(
                            "Message Sent!",
                            "Thank you for contacting me.",
                            true
                        );


                    } else {

                        /* ---------------------------------
                           ERROR RESPONSE
                        --------------------------------- */

                        showContactToast(
                            "Message Not Sent",
                            result.message ||
                                "Something went wrong. Please try again.",
                            false
                        );

                    }


                } catch (error) {

                    /* -------------------------------------
                       NETWORK ERROR
                    ------------------------------------- */

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

                    /* -------------------------------------
                       RESTORE BUTTON
                    ------------------------------------- */

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

            },
            true
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
       OPEN EXTERNAL LINKS SAFELY
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

                /*
                 Ignore invalid URLs.
                */

            }

        }
    );


    /* =====================================================
       KEYBOARD ACCESSIBILITY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            /* ---------------------------------------------
               ESCAPE
            --------------------------------------------- */

            if (
                event.key === "Escape"
            ) {

                /* Close mobile menu */

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


                /* Close contact toast */

                closeContactToast();

            }

        }
    );


    /* =====================================================
       REDUCED MOTION SUPPORT
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