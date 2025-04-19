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
                    link: "",
                },
            },
            items: [
                {
                    id: 'banner',
                    label_link: 'Banner',
                    title: 'Senior Full-stack developer / Expert Wordpress / Creative developer'
                },
                {
                    id: 'skills',
                    label_link: 'À-propos',
                    title: 'Mes outils & Expériences',
                    link_cv: 'assets/files/CV.pdf',
                    subtitle: "Développeur pluridisciplinaire, diplomée d'une License professionnel Développeur Web et Web mobile.",
                    content: "Passionné d'expérience utilisateur et du beau code. Je réalise les projets de mes clients en gardant une vision globale sur mes réalisations. Je place autant d'attention à la forme, qu'à l'accessibilité et aux performances de c'elle ci.",
                    other: "Compétences annexes : SEO, GIT, Docker, SQL, Accesibilité, Animation, Eco-Conception, Bootstrap, Ux-Design, Web-marketing.",
                    exp: [
                        {
                            title: "Développeur Wordpress - Senior",
                            time: "2023 - 2024",
                            job_name: "Webqam",
                            content: "Dans une Agence web de grande envergure, j'ai travaillé en équipe sûr de gros projets la coordination et la qualité de code avait une place préponderante, pour une livraison irréprochable.",
                        },
                        {
                            title: "Développeur Full-stack ",
                            time: "2014 - 2023",
                            job_name: "Stafe",
                            content: "Dans une Agence web & web-marketing spécialisée dans le e-commerce, je participe à la réalisation du projet de l'étude des besoins jusqu'à l'installation en production', avec un oeil attentif sur la performance et le SEO des rendus.",
                        },
                        {
                            job_name: "Developpeur Web",
                            time: "2013 - 2015",
                            title: "Développeur Independent",
                            content: "Voulant me confronter à de vrais projets, je me suis lancé en indépendant à la fin de ma license web en alternance.",
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
                            name: "Front-end",
                            more: "JavaScript -> Vue.js",
                            percent: "90",
                        },
                        {
                            name: "Back-end",
                            more: "PHP -> Cakephp - Laravel",
                            percent: "90",
                        },
                        {
                            name: "CMS",
                            more: "Wordpress - Prestashop",
                            percent: "90",
                        },
                        {
                            name: "Gestion de Projets",
                            more: "Redmine, Git,...",
                            percent: "90",
                        }
                    ]
                },
                {
                    id: 'projet',
                    label_link: 'Projets',
                    title: 'Mon portfolio',
                    content: '<p>Développeur web pluridisciplinaire, je place l’expérience utilisateur, le SEO et la qualité au cœur de mes travaux. Convaincu que les plateformes d’aujourd’hui doivent être accessibles, intuitives. Je suis persuadé que le travail d’équipe est essentiel pour concevoir des solutions performantes et impactantes.</p>\n' +
                     '<br>\n' +
                     '<p>Mon tempérament calme et réfléchi m\'aide à avoir une bonne vision d\'ensemble des projets et un bon relationnel client. À mes yeux, la satisfaction de chacun passe par une bonne communication et compréhension des besoins.</p>\n',
                    projects: [
                        {
                            id: "mikit",
                            name: "Mikit",
                            img: "assets/img/mikit.webp",
                            img_min: "assets/img/mikit.min.webp",
                            content: "Réalisation d'un site vitrine sous wordpress regroupent toute les agences Mikit Franchiser et leurs fiches de vente, leurs blogs et leur réalisation. Les infos sont mise a jours via l'API Salesforce.",
                            link: "https://www.mikit.fr/",
                            skills: "Développement Back & Front / Wordpress",
                        },
                        {
                            id: "moulinvest",
                            name: "Moulinvest",
                            img: "assets/img/moulinvest.webp",
                            img_min: "assets/img/moulinvest.min.webp",
                            content: "Réalisation d'un site vitrine sous wordpress regroupent toute les agences Mikit Franchiser et leurs fiches de vente, leurs blogs et leur réalisation. Les infos sont mise a jours via l'API Salesforce.",
                            link: "https://www.moulinvest.com/",
                            skills: "Développement Back & Front / Wordpress",
                        },
                        {
                            id: "thomassire",
                            name: "Portfolio",
                            img: "assets/img/thomassire.webp",
                            img_min: "assets/img/thomassire.min.webp",
                            content: "Création de ce portfolio en testant pour la première fois le Vue.js, terrain d'expérimentation de pleins de nouvelles fonctionnalités CSS SVG et d'animation.",
                            link: "https://github.com/ptithom/Portfolio_2023",
                            skills: "Développement Front / Vue.js / full Animation CSS3",
                        },
                        {
                            id: "treca",
                            name: "Treca",
                            img: "assets/img/treca.webp",
                            img_min: "assets/img/treca.min.webp",
                            content: "Création de la boutique en ligne sur Prestashop 1.7 en multilingue (7 langues). Création de modules sur mesure pour l'administrabilité de nombreuses zones custom. Intégration avec animation au scroll à l'aide de la lib scrollMagic.js",
                            link: "https://treca.com/fr/",
                            skills: "Développement Front / Module Prestashop 1.7",
                        },
                        {
                            id: "kommunity-Booster",
                            name: "Komunity-Booster",
                            img: "assets/img/komunitybooster.webp",
                            img_min: "assets/img/komunitybooster.min.webp",
                            content: "CRM permetant d'animer des réseaux sociaux a l'aide de jeux concours, d'outil de publication et veille mais également d'éffectuer d'avoir des statistiques grace a de la collect d'informations sur votre marché.",
                            link: "https://www.komunity-web.com/komunity-booster-outil-social-media/",
                            skills: "CakePhp / Moteur de Template / Statistique / API / SQL",
                        },
                        {
                            id: "komunity-web",
                            name: "Komunity-Web",
                            img: "assets/img/komunity_web.webp",
                            img_min: "assets/img/komunity_web.min.webp",
                            content: "Site sous Wordpress, avec un fort travail d'animation et d'immersion gace a un travaille d'animation notamment sur la page de listing de publication et sur les pages de détailles.  ",
                            link: "https://www.komunity-web.com/projets/",
                            skills: "Développement Front / Wordpress / R&D animation",
                        },
                        {
                            id: "woozbed",
                            name: "Woozbed",
                            img: "assets/img/woozbed.webp",
                            img_min: "assets/img/woozbed.min.webp",
                            content: "Site ecoomerce sur mesure réaliser en Laravel",
                            link: "",
                            skills: "Intégration / Laravel",
                        },
                        {
                            id: "vertlapub",
                            name: "VertLaPub",
                            img: "assets/img/vertlapub.webp",
                            img_min: "assets/img/vertlapub.min.webp",
                            content: "conception et migration d'un prestashop vers un wordpress sous woocommerce. Un gros travail de migration de BDD a été nécéssaire au vue du nombre d'article avec des caractéristiques différentes",
                            link: "https://www.vertlapub.fr/",
                            skills: "Wordpress - Woocommerce / Dev full-stack / Migration BDD",
                        }
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

            document.querySelectorAll('.nav_project img').forEach((element) => {
                if(element.dataset.index === index){
                    element.classList.add('current');
                }else{
                    element.classList.remove('current');
                }
            });
        }
    },
}).mount('#app');


var typed3 = new Typed('#typed', {
    strings: ["Développeur Full-stack Senior", "Expert Wordpress", "Creative developer"],
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
