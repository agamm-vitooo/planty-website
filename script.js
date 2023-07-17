function header() {
    gsap.to('.content-1', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: 1.9
        },
        yPercent: -150
    })
}

TweenMax.from('.nav-gsap', 1, {
    delay: 1,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})

TweenMax.from('.img-hero', 1, {
    delay: 1,
    opacity: 0,
    x: 100,
    ease: Expo.easeInOut
}, 0.08)

TweenMax.from('.cta-hero', 1, {
    delay: 2,
    opacity: 0,
    x: 100,
    ease: Expo.easeInOut
}, 0.08)