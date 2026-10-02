    const revealItems = document.querySelectorAll(".reveal");
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    document.querySelector("#year").textContent = new Date().getFullYear();

    if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
        });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => revealObserver.observe(item));
    } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    mainNav.classList.toggle("is-open", !isOpen);
    });

    mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        mainNav.classList.remove("is-open");
    });
    });

    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formValues = new FormData(contactForm);
        const name = String(formValues.get("name")).trim();
        const email = String(formValues.get("email")).trim();
        const service = String(formValues.get("service")).trim();
        const message = String(formValues.get("message")).trim();
        const subject = `Project inquiry from ${name}`;
        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Project area: ${service}`,
            "",
            message,
        ].join("\n");

        document.querySelector("#contact-form-status").textContent =
            "Your email app should open with a prefilled draft. Review it and press Send.";
        window.location.href = `mailto:skynext221@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
    }