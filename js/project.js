import { works } from "../data/works.js";



gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", () => {

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
    const links = document.querySelectorAll('.nav-links li')
    const wraper = document.querySelector('.wraper');

    let html = "";

    let clickID = 1;

    function generateHTML() {

        works.forEach(work => {
            if (clickID === work.id) {
                html = `
                <section class="ditail">
                <div class="text">
                    <h1>${work.pname}</h1>
                    <p>${work.ditail}</p>
                </div>
                <div class="text2">
                    <div class="technologies">
                        <hr>
                        <h2>Technologies</h2>
                        <p>${work.technologies}</p>
                    </div>
                </div>
            </section>

            <section class="project-img">
                <img class="main-img" src="${work.imgs.img1}" alt="">
            </section>

            <div class="img-list">
                <div class="img"><img class="small-img" src="${work.imgs.img1}" alt=""></div>
                <div class="img"><img class="small-img" src="${work.imgs.img2}" alt=""></div>
                <div class="img"><img class="small-img" src="${work.imgs.img3}" alt=""></div>
                <div class="img"><img class="small-img" src="${work.imgs.img4}" alt=""></div>
                <div class="img"><img class="small-img" src="${work.imgs.img5}" alt=""></div>
            </div>
                `
            }
        })

        return html

    }

    generateHTML()

    wraper.innerHTML = html




    // mouse circul
    let mouseX = -200
    let mouseY = -200

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

    // nav scale effect
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            mouse.style.scale = 2
        })
        link.addEventListener("mouseleave", () => {
            mouse.style.scale = 1
        })
    })

    gsap.from(".logo", {
        opacity: 0,
        y: "20px",
        duration: 0.7,
        ease: Power2,
    })

    gsap.from(links, {
        stagger: .2,
        opacity: 0,
        y: "20px",
        duration: 0.7,
    })

    gsap.from(".text h1", {
        scale: 0,
        duration: 1,
    })

    gsap.from(".text p", {
        scale: 0,
        duration: 1,
    })

    gsap.from(".text2 .technologies", {
        scale: 0,
        duration: 1,
    })

    gsap.from(".img-list", {
        scale: 0,
        duration: 1,
    })





    // logo scale effect
    document.querySelector(".logo").addEventListener("mouseenter", () => {
        mouse.style.scale = 3
    })
    document.querySelector(".logo").addEventListener("mouseleave", () => {
        mouse.style.scale = 1
    })


    // for photo chenge onclick
    document.querySelectorAll(".small-img")[0].onclick = () => {
        document.querySelector(".main-img").src = document.querySelectorAll(".small-img")[0].src
    }
    document.querySelectorAll(".small-img")[1].onclick = () => {
        document.querySelector(".main-img").src = document.querySelectorAll(".small-img")[1].src
    }
    document.querySelectorAll(".small-img")[2].onclick = () => {
        document.querySelector(".main-img").src = document.querySelectorAll(".small-img")[2].src
    }
    document.querySelectorAll(".small-img")[3].onclick = () => {
        document.querySelector(".main-img").src = document.querySelectorAll(".small-img")[3].src
    }
    document.querySelectorAll(".small-img")[4].onclick = () => {
        document.querySelector(".main-img").src = document.querySelectorAll(".small-img")[4].src
    }
    document.querySelectorAll(".small-img")[5].onclick = () => {
        document.querySelector(".main-img").src = document.querySelectorAll(".small-img")[5].src
    }
    document.querySelectorAll(".small-img")[6].onclick = () => {
        document.querySelector(".main-img").src = document.querySelectorAll(".small-img")[6].src
    }
    document.querySelectorAll(".small-img")[7].onclick = () => {
        document.querySelector(".main-img").src = document.querySelectorAll(".small-img")[7].src
    }
    document.querySelectorAll(".small-img")[8].onclick = () => {
        document.querySelector(".main-img").src = document.querySelectorAll(".small-img")[8].src
    }
    document.querySelectorAll(".small-img")[9].onclick = () => {
        document.querySelector(".main-img").src = document.querySelectorAll(".small-img")[9].src
    }
    document.querySelectorAll(".small-img")[10].onclick = () => {
        document.querySelector(".main-img").src = document.querySelectorAll(".small-img")[10].src
    }

});