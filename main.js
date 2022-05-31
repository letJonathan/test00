console.log('Eso no responde mi pregunta.')

const BREAKPONIT = 800; // in px
const aside = document.getElementById('aside')
const main = document.getElementById('main')
const btn = document.getElementById('btn')

/* Default Behavior */
let menuMobileOpened = false;
let menuDesktopOpened = true;

const open = () => {
    aside.classList.remove('closed')
    main.classList.remove('extend')
}

const close = () => {
    main.classList.add('extend')
    aside.classList.add('closed')
}

btn.addEventListener('click', event => {
    if (aside.classList.contains('closed')) {
        open();
        if (window.innerWidth < BREAKPONIT) {
            menuMobileOpened = true
        } else {
            menuDesktopOpened = true
        }
    } else {
        close();
        if (window.innerWidth < BREAKPONIT) {
            menuMobileOpened = false
        } else {
            menuDesktopOpened = false
        }
    }
});

const handleResize = () => {
    if (window.innerWidth < BREAKPONIT) {
        if(menuMobileOpened) {
            open();
        } else {
            close();
        }
    } else {
        if(menuDesktopOpened) {
            open();
        } else {
            close();
        }
    }
}

handleResize()

window.addEventListener('resize', event => {
    handleResize()
})
