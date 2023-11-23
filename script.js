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
    const pro = document.querySelector(".pro");

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


    let proHTML = "";

    renderProject()

    pro.innerHTML = proHTML;

    function renderProject() {
        works.forEach(work => {
            proHTML += `
            <div class="project ${work.class}" onclick="window.location.href='hello.html'">
                <img src="${work.mimg}" alt="project">
                <h3>${work.pname}</h3>
            </div>
            `

            return proHTML
        })
    }


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


    // project circle scale and arrow show 
    document.querySelectorAll(".project").forEach(pro => {

        pro.addEventListener("mouseenter", () => {
            mouse.style.scale = 4
            mouse.classList.add('arrow')

        })
        pro.addEventListener("mouseleave", () => {
            mouse.style.scale = 1
            mouse.classList.remove('arrow')
        })

    })


    // about img circle blend mode chenge
    document.querySelector("#about .img img").addEventListener("mouseenter", () => {
        mouse.style.mixBlendMode = 'normal'
    })
    document.querySelector("#about .img img").addEventListener("mouseleave", () => {
        mouse.style.mixBlendMode = 'difference'
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

    // gsap animation on svgs 
    gsap.to(svgs, {
        scale: 1,
        y: 0,
        scrollTrigger: {
            trigger: ".svgs",
            start: "-30% 85%",
            end: "bottom bottom",
            scrub: 2,
            // markers: true,
        }
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

    // gsap animation for about img
    gsap.to("#about .img img", {
        scale: 1,
        y: 0,
        scrollTrigger: {
            trigger: "#about .img",
            start: "top 85%",
            end: "70% bottom",
            // markers: true,
            scrub: 2,
        }
    })

    // gsap animation for about texts
    gsap.to("#about .info p", {
        lineHeight: 1.2,
        scrollTrigger: {
            trigger: "#about .info",
            start: "top 80%",
            end: "70% bottom",
            // markers: true,
            scrub: 2,
        }
    })

    let pros = gsap.utils.toArray(".project");

    gsap.to(pros, {
        opacity: 1,
        y: 0,
        ease: "none",
        scale: 1,
        scrollTrigger: {
            trigger: ".project",
            scrub: 2,
            start: "-40% 85%",
            end: "40% bottom",
            scrub: 2,
            // markers: true,
        }

    })





})