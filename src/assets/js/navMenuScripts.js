export default function NavMenuScripts(navId, toggleId, closeId, navLinkClass) {
    const nav = document.getElementById(navId),
        toggle = document.getElementById(toggleId),
        close = document.getElementById(closeId),
        navLink = document.querySelectorAll(navLinkClass)

    toggle.addEventListener('click', () => {
        nav.classList.add('show')
    })

    close.addEventListener('click', () => {
        nav.classList.remove('show')
    })

    navLink.forEach(i => i.addEventListener('click', () => {
        nav.classList.remove('show')
    }))
}
