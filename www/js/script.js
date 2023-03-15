const app = Vue.createApp({
    data() {
        return {
            theme : 'dark',
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
            items: [
                {
                    id: 'banner',
                    label_link: 'Banner',
                    title: 'Front-End developer / Expert  Wordpress'
                },
                {
                    id: 'skills',
                    label_link: 'Skills',
                    title: 'Ma caisse a outils'
                },
                {
                    id: 'projet',
                    label_link: 'Projet',
                    title: 'Mon portfolio'
                },
                {
                    id: 'apropos',
                    label_link: 'A propos',
                    title: 'Ma vision & autre chose remarquable'
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
        sky_active: function(sky_active) {
            if(sky_active){
                this.theme = 'dark';
                document.getElementById(this.items[0].id).style.height = '100vh';
                // document.querySelector('.sky').classList.remove('animate__fadeOut');
                // document.querySelector('.sky').classList.add('animate__fadeIn');

            }else{
                // document.querySelector('.sky').classList.remove('animate__fadeIn');
                // document.querySelector('.sky').classList.add('animate__fadeOut');
                document.getElementById(this.items[0].id).style.height = '90vh';
            }
        },
        theme: function(theme) {
            document.querySelector('body').classList.add('transition_theme');
            const themeToggleBtn = document.querySelector('.js-toggle-theme');
            document.documentElement.dataset.theme = theme;
            localStorage.setItem('theme', theme);
            themeToggleBtn.setAttribute('aria-label', `Activate ${theme} mode`);
            themeToggleBtn.setAttribute('title', `Activate ${theme} mode`);
        },
    },
    methods: {
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
            this.items.forEach((item, index) => {
                const element = document.getElementById(item.id);
                const win_height = window.innerHeight;
                if (offset_scroll >= (document.getElementById(item.id).offsetTop - (win_height / 2))) {
                    if (index == 0) {
                        this.current_section_label = '';
                        this.next_step_active = true;
                    } else {
                        this.next_step_active = false;
                        this.current_section_label = item.label_link.toLowerCase().split(' ').join('_');
                    }
                }
                // if(this.next_step_active){
                //     document.querySelector('.next_step').style.animation = 'none';
                //     document.querySelector('.next_step').style.animationDelay = '0s';
                //     document.querySelector('.next_step').style.transform = 'translateY(-' + offset_scroll * 0.8 + '%)';
                // }
                let nav_step = document.getElementById('nav_step');
                if (this.next_step_active) {
                    nav_step.setAttribute("href", '#' + this.items[1].id)
                    nav_step.style.animation = 'none';
                    nav_step.style.animationDelay = '0s';
                    nav_step.style.transform = 'translateY(-' + offset_scroll * 0.8 + '%)';
                } else {
                    nav_step.setAttribute("href", '#' + this.items[0].id)
                }

            })

        },
        show_nav() {
            this.nav_visible = !this.nav_visible;
        },
        update_current_section(event) {
            // this.current_section = event.target.textContent.toLowerCase().split(' ').join('_');
        },
        show_sky(){
            this.sky_active = !this.sky_active;
        },
        toggle_theme() {
            const {theme} = document.documentElement.dataset;
            const themeTo = theme === 'light' ? 'dark' : 'light';
            this.theme = themeTo;
        },
    },
}).mount('#app');


const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for(const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);
window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);
window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);







