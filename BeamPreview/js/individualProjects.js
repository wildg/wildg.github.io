/*  SCROLLMAGIC */
let controller = new ScrollMagic.Controller();

// Create a new Scroll Magic scene
new ScrollMagic.Scene({
    triggerElement: '#project-title',
    triggerHook: 0.60,
    reverse: 0
})

// When the user scrolls down:
.on("enter", () => {
    anime.timeline().add({
        targets: '#project-title',
        easing: 'easeInOutSine',
        opacity: [0, 1],
        translateY: [-10, 0],
        duration: 200,
    }, 0).add({
        targets: '#project-description',
        easing: 'linear',
        opacity: [0, 1],
        duration: 300
    }, 200).add({
        targets: '.dashboard-item',
        easing: 'easeInOutSine',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 200,
        delay: anime.stagger(150, {start: 0})
    }, 500)
})
.addTo(controller);