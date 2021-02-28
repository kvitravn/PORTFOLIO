import ScrollReveal from 'scrollreveal'

export default function ScrollScripts() {
    const sr = ScrollReveal({
        reset: true,
        duration: 2000,
    })

    sr.reveal('.home__container', {origin: 'left'})
    sr.reveal('.about__container', {origin: 'right'})
    sr.reveal('.contact__container', {origin: 'left'})
    sr.reveal('.education__container', {origin: 'right'})
    sr.reveal('.works__container', {origin: 'left'})
    sr.reveal('.skills__container', {origin: 'right'})
}
