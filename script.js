gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", () => {

    // window resize reload
    window.addEventListener("resize", function () {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width <= 2560) window.location.reload();
        console.log("resize")
    });

    // lenis smooth scroll
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


    const mouse = document.querySelector('.mouse-circul');
    const logo = document.querySelector(".logo");
    const links = document.querySelectorAll("ul li a");
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".nav-links");
    const svgs = document.querySelectorAll(".svg");

    // mouse circul
    let mouseX = -25
    let mouseY = -25

    window.addEventListener("mousemove", (e) => {

        mouseX = event.clientX
        mouseY = event.clientY

        window.requestAnimationFrame(mouseMove);
    })

    const mouseMove = () => {

        if (window.innerWidth > 770) {

            mouse.style.left = mouseX - 9 + "px"
            mouse.style.top = mouseY - 5 + "px"

        } else {

        }


    }

    mouseMove()


    // nav link circle scale
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            mouse.style.scale = 2
        })
        link.addEventListener("mouseleave", () => {
            mouse.style.scale = 1
        })
    })



    // for nav menu btn
    menuBtn.addEventListener("click", () => {
        const currentState = menuBtn.getAttribute("data-state");

        if (!currentState || currentState === "closed") {
            menuBtn.setAttribute("data-state", "opened");
            menuBtn.setAttribute("aria-expanded", "true");
        } else {
            menuBtn.setAttribute("data-state", "closed");
            menuBtn.setAttribute("aria-expanded", "false");
        }

        menu.classList.toggle("active")

        logo.style.zIndex = logo.style.zIndex === "8" ? "10" : "8";

    });




    // logo circle scale
    logo.addEventListener("mouseenter", () => {
        mouse.style.scale = 4
    })
    logo.addEventListener("mouseleave", () => {
        mouse.style.scale = 1
    })


    // hero img circle scale
    document.querySelector(".hero-img img").addEventListener("mouseenter", () => {
        mouse.style.scale = 7
    })
    document.querySelector(".hero-img img").addEventListener("mouseleave", () => {
        mouse.style.scale = 1
    })


    // svg circle scale
    svgs.forEach(svg => {
        svg.addEventListener("mouseenter", () => {
            mouse.style.scale = 4
        })
        svg.addEventListener("mouseleave", () => {
            mouse.style.scale = 1
        })
    })


    // gsap timeline for logo
    let tl = gsap.timeline({

        scrollTrigger: {
            trigger: "#home",
            pin: true,
            start: "top top",
            end: "77% top",
            scrub: 2,
            // markers: true,
        }
    })


    // gsap animation for logo

    tl.to(logo, {
        ease: true,
        scale: 1,
        top: 10 + 'px',
        left: 64 + 'px',
        x: 0,
        y: 0,
        color: "#dadada",
    })



    // gsap animation for nav links
    gsap.from("li", {
        stagger: .2,
        opacity: 0,
        y: "20px",
        duration: 0.7,
        ease: Power2,
    })


    // gsap animation for hero text
    gsap.from(".hero-text", {
        stagger: .2,
        opacity: 0,
        y: "40px",
        duration: 1,
        ease: Power2,
    })

    // gsap animation for hero img
    gsap.from(".hero-img img", {
        scale: -1,
        rotate: -360,
        duration: 1,
        ease: Power2,
    })



})