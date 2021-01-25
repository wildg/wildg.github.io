/*  CAROUSELS:  */
const topCarousel = document.querySelector('#top-carousel');
topCarousel.addEventListener('slide.bs.carousel', (d) => {
    const activeID = '#' + topCarousel.querySelector('.carousel-inner .active').id + '-text';
    anime({
        targets: activeID,
        duration: 300,
        easing: 'easeOutSine',
        opacity: '0',
        translateY: [0, 30],
    });

    const targetID = '#' + d.relatedTarget.id + '-text';
    anime({
        targets: targetID,
        delay: 200,
        duration: 300,
        easing: 'easeInSine',
        opacity: '1',
        translateY: [-30, 0],
    });
});

/*  SCROLLMAGIC */
let controller = new ScrollMagic.Controller();

function cardAnim(cardTarget) {
    return anime.timeline().add({
        targets: cardTarget + ' .text-slide',
        duration: 300,
        easing: 'easeInSine',
        translateY: [-30, 0],
        opacity: [0, 1],
    }).add({
        targets: cardTarget + ' .button',
        easing: 'linear',
        duration: 200,
        translateY: [-30, 0],
        opacity: [0, 1],
    }, 300);
}

// Add scroll anim for 3 cards
for (let i = 1; i <= 3; i++) {
    const target = '#card-img' + i;
    const anim = cardAnim(target);
    new ScrollMagic.Scene({
        triggerElement: target,
        triggerHook: 0.25,
    })
    .setAnime(anim)
    .reverse(false)
    .addTo(controller);
}