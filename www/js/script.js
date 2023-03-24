const app = Vue.createApp({
    data() {
        return {
            theme: 'dark',
            sky_active: false,
            blob_wakeup: false,
            blob1: document.getElementById("blob1"),
            blob2: document.getElementById("blob2"),
            blob3: document.getElementById("blob3"),
            nav_visible: false,
            next_step_active: true,
            contact: {
                email: 'hello@thomassire.com',
            },
            current_section_label: '',
            project_popup: {
                enable: false,
                content_project: {
                    id: "",
                    name: "",
                    img: "",
                    img_min: "",
                    content: "",
                    skills: "",
                },
            },
            items: [
                {
                    id: 'banner',
                    label_link: 'Banner',
                    title: 'Front-End developer / Expert Wordpress / Creative developer'
                },
                {
                    id: 'skills',
                    label_link: 'A-propos',
                    title: 'Mes outils & Experience',
                    link_cv: 'assets/files/cv.pdf',
                    subtitle: "Développeur pluridisciplinaire, diplômée d'une License Professionnel Développeur Web et Web mobile.",
                    content: "Passionné d'expérience utilisateur et du beau code. Je réalise les projets des mes clients en gardant une vision globale sur mes réalisation. je place autant d'attention a la form, qu'a accessibilité et au performances de c'elle-ci.",
                    other: "Compétence annexes : Docker, SEO, GIT, SQL, Jquery, Bootstrap, Ux-Design, Gestion de projet, Web-marketing.",
                    exp: [
                        {
                            title: "Full-stack developer",
                            time: "Depuis 2014 ",
                            job_name: "Stafe",
                            content: "Dans une Agence web & web-marketing spécialisé dans le e-commerce, je participe de l'étude des besoins jusqu'a la livraison, avec un oeil attentif sur la performance et le SEO des rendus.",
                        },
                        {
                            job_name: "",
                            title: "Independent developer",
                            content: "Voulant me confronter a de vrai projets. Je me suis lancé en indépendant a la fin de ma license web en Alternance.",
                            time: "2013 - 2015",
                        }
                    ],
                    list_tech: [
                        {
                            name: "HTML",
                            img: "assets/img/svg/html.svg",
                        },
                        {
                            name: "CSS",
                            img: "assets/img/svg/css3.svg",
                        },
                        {
                            name: "JS",
                            img: "assets/img/svg/js.svg",
                        },
                        {
                            name: "Scss",
                            img: "assets/img/svg/scss.svg",
                        },
                        {
                            name: "PHP",
                            img: "assets/img/svg/php.svg",
                        },
                        {
                            name: "Wordpress",
                            img: "assets/img/svg/wordpress.svg",
                        },
                    ],
                    list_top_skill: [
                        {
                            name: "Front-end ",
                            more: "HTML - CSS3 - Sass - JS - Vue.js",
                            percent: "90",
                        },
                        {
                            name: "Front-Back-end ",
                            more: "PHP - Cakephp - Laravel",
                            percent: "65",
                        },
                        {
                            name: "CMS",
                            more: "Wordpress - Prestashop",
                            percent: "75",
                        },
                    ]
                },
                {
                    id: 'projet',
                    label_link: 'Projet',
                    title: 'Mon portfolio',
                    content: '<p>Je suis passionné par la création de sites web qui offrent une expérience utilisateur exceptionnelle et qui sont bien référencés grâce à une optimisation SEO efficace. Pour moi, l\'utilisateur est au cœur de mon travail. Je m\'efforce de créer des plateformes accessibles, intuitives et percutantes qui répondent aux besoins de tous les utilisateurs.</p>\n' +
                        '<br>\n' +
                        '<p>Mon objectif est de créer des sites web qui se démarquent de la concurrence et attirent l\'attention des utilisateurs. L\'intuitivité, la simplicité de l\'interface utilisateur sont essentielles pour permettre aux visiteurs de naviguer facilement et de trouver rapidement les informations qu\'ils recherchent.</p>\n',
                    projects: [
                        {
                            id: "treca",
                            name: "Treca",
                            img: "assets/img/treca.webp",
                            img_min: "assets/img/treca.min.webp",
                            content: "Création de la boutique en ligne Sur Prestashop 1.7 en multilingue (7 langues). Création de module sur mesure pour l'administrabilité de nombreuses zones custom. Intégration avec animation au scroll a l'aide de la lib scrollMagic.js",
                            skills: "Developpement Front / Module Prestashop 1.7",
                        },
                        {
                            id: "ateliervie",
                            name: "Atelier-vié",
                            img: "assets/img/ateliervie.webp",
                            img_min: "assets/img/ateliervie.min.webp",
                            content: "",
                            skills: "Wordpress / Animation CSS",
                        },
                        {
                            id: "komunity-web",
                            name: "Komunity-Web",
                            img: "assets/img/komunity_web.webp",
                            img_min: "assets/img/komunity_web.min.webp",
                            content: "",
                            skills: "Developpement Front / Wordpress",
                        },
                        {
                            id: "woozbed",
                            name: "Woozbed",
                            img: "assets/img/woozbed.webp",
                            img_min: "assets/img/woozbed.min.webp",
                            content: "",
                            skills: "Intégration / Laravel",
                        },
                        {
                            id: "vertlapub",
                            name: "VertLaPub",
                            img: "assets/img/vertlapub.webp",
                            img_min: "assets/img/vertlapub.min.webp",
                            content: "",
                            skills: "Wordpress - Woocommerce / Dev full-stack",
                        },
                        {
                            id: "parc-zoo",
                            name: "Parc zoologique",
                            img: "assets/img/bioparc-parc.webp",
                            img_min: "assets/img/bioparc-parc.min.webp",
                            content: "",
                            skills: "Wordpress / Evolution",
                        },
                        {
                            id: "tridan",
                            name: "Tridan",
                            img: "assets/img/tridan.webp",
                            img_min: "assets/img/tridan.min.webp",
                            content: "",
                            skills: "Developpement Front / Wordpress",
                        },
                    ],
                },
                {
                    id: 'contact',
                    label_link: 'Contact',
                    title: 'Me contacter'
                }
            ]
        }
    },
    // ❌ warning, props are readonly!
    created() {
        window.addEventListener('scroll', this.handleScroll);

        window.addEventListener('pointermove', this.handlePointerMove);
    },
    // computed property that auto-updates when the prop changes
    mounted() {
        let currentTheme = localStorage.getItem('theme');
        (!currentTheme) ? this.theme = "dark" : this.theme = currentTheme;

        document.getElementById('projet').classList.add('animate__animated')
        document.getElementById('projet').classList.add('animate__slideInUp')
        document.getElementById('projet').classList.add('animate__delay-1s');
        setTimeout(() => {
            document.getElementById('projet').classList.remove('animate__animated')
            document.getElementById('projet').classList.remove('animate__slideInUp')
            document.getElementById('projet').classList.remove('animate__delay-1s');
        }, "1000");

        const enhance = () => {
            document.querySelectorAll("#banner .title .letters_group").forEach((word) => {
                const letters = word.innerText.split("");
                word.innerHTML = null;
                letters.forEach((letter) => {
                    word.innerHTML += `<span class="letter">${letter}</span>`;
                });
            });
        };
        enhance();

    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('pointermove', this.handlePointerMove);
    },
    watch: {
        sky_active: function (sky_active) {
            if (sky_active) {
                this.theme = 'dark';
                document.getElementById(this.items[0].id).style.height = '100vh';
                // document.querySelector('.sky').classList.remove('animate__fadeOut');
                // document.querySelector('.sky').classList.add('animate__fadeIn');

            } else {
                // document.querySelector('.sky').classList.remove('animate__fadeIn');
                // document.querySelector('.sky').classList.add('animate__fadeOut');
                document.getElementById(this.items[0].id).style.height = '90vh';
            }
        },
        theme: function (theme) {
            document.querySelector('body').classList.add('transition_theme');
            const themeToggleBtn = document.querySelector('.js-toggle-theme');
            document.documentElement.dataset.theme = theme;
            localStorage.setItem('theme', theme);
            themeToggleBtn.setAttribute('aria-label', `Activate ${theme} mode`);
            themeToggleBtn.setAttribute('title', `Activate ${theme} mode`);
        },
    },
    methods: {
        update_current_section() {
            this.nav_visible = !this.nav_visible;
        },
        handlePointerMove(event) {
            const {clientX, clientY} = event;

            if (this.blob_wakeup) {
                // blob1.animate({
                //     left: "calc(" + clientX * 0.2 + "px + 60vw)",
                //     top: "calc(" + clientY * -0.44 + "px + 75vh)",
                // }, {duration: 150000, fill: "forwards"})
                //
                // blob2.animate({
                //     left: "calc(" + clientX * -0.4 + "px + 40vw)",
                //     top: "calc(" + clientY * 0.05 + "px + 80vh)",
                // }, {duration: 300000, fill: "forwards"})

                blob3.animate({
                    left: "calc(" + clientX + "px + 100px )",
                    top: "calc(" + clientY + "px + 100px )",
                }, {duration: 100000, fill: "forwards"})
            }
        },
        handleScroll(event) {
            const offset_scroll = window.scrollY;
            const win_height = window.innerHeight;

            // search section active
            this.items.forEach((item, index) => {
                const element = document.getElementById(item.id);
                if ((element.offsetTop - (win_height / 2)) <= offset_scroll &&
                    offset_scroll <= (element.offsetTop - (win_height / 2) + element.offsetHeight) &&
                    !element.classList.contains("active")
                ) {
                    document.querySelectorAll('body #main>section').forEach((element) => {
                        element.classList.remove('active');
                    });
                    element.classList.add('show', 'active');
                    if (index == 0) {
                        this.next_step_active = true;
                        this.current_section_label = '';
                    } else {
                        this.next_step_active = false;
                        this.current_section_label = item.label_link.toLowerCase().split(' ').join('_');
                    }
                }
            })

            let nav_step = document.getElementById('nav_step');
            if (this.next_step_active) {
                nav_step.setAttribute("href", '#' + this.items[1].id)
                nav_step.style.animation = 'none';
                nav_step.style.animationDelay = '0s';
                nav_step.style.transform = 'translateY(-' + offset_scroll * 0.8 + '%)';
            } else {
                nav_step.setAttribute("href", '#' + this.items[0].id)
            }

        },
        show_nav() {
            this.nav_visible = !this.nav_visible;
        },
        show_sky() {
            this.sky_active = !this.sky_active;
        },
        toggle_theme() {
            const {theme} = document.documentElement.dataset;
            const themeTo = theme === 'light' ? 'dark' : 'light';
            this.theme = themeTo;
        },
        isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        },
        animateCSS(element, animation, prefix = 'animate__') {
            // We create a Promise and return it
            new Promise((resolve, reject) => {
                const animationName = `${prefix}${animation}`;
                const node = document.querySelector(element);

                node.classList.add(`${prefix}animated`, animationName);

                // When the animation ends, we clean the classes and resolve the Promise
                function handleAnimationEnd(event) {
                    event.stopPropagation();
                    node.classList.remove(`${prefix}animated`, animationName);
                    resolve('Animation ended');
                }

                node.addEventListener('animationend', handleAnimationEnd, {once: true});
            });
        },
        hide_project(event) {
            this.project_popup.enable = false;
        },
        show_project(event) {
            const index = event.target.dataset.index;

            this.project_popup.content_project = this.items[2].projects[index]
            this.project_popup.enable = true;
        }
    },
}).mount('#app');


var typed3 = new Typed('#typed', {
    strings: ["Front-End developer", "Expert Wordpress", "Creative developer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    smartBackspace: true, // this is a default
    loop: true
});

/**
 * paralax project
 */

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;


    var style = window.getComputedStyle(track);
    var matrix = new WebKitCSSMatrix(style.transform);
    console.log('translateX: ', matrix.m42);

    track.animate({
        transform: `translate(${nextPercentage}%, ${matrix.m42}px)`
    }, {duration: 1200, fill: "forwards"});

    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, {duration: 1200, fill: "forwards"});
    }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);
window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);
window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);

/**
 * END paralax project
 */







