/*  SCROLLMAGIC */
let controller = new ScrollMagic.Controller();
function cardAnim(cardTarget, rev) {

    const textObj = cardTarget.querySelector('.text-slide');
    const buttonObj = cardTarget.querySelector('.button');

    // If the animation is not reverse:
    if (!rev) {
        // Create animation
        anime.timeline().add({
            targets: textObj,
            duration: 300,
            easing: 'easeInSine',
            translateY: [-30, 0],
            opacity: [0, 1],
        }).add({
            targets: buttonObj,
            easing: 'linear',
            duration: 200,
            translateY: [-30, 0],
            opacity: [0, 1],
        }, 300);
    }

    // Otherwise:
    else {
        // Reset opacities
        textObj.style.opacity = '0'
        buttonObj.style.opacity = '0'
    }
}

// Add scroll anim for 3 cards
for (let i = 1; i <= 3; i++) {
    // Get the target
    const target = document.querySelector('#card-img' + i);

    // Create a new Scroll Magic scene
    new ScrollMagic.Scene({
        triggerElement: target,
        triggerHook: 0.60
    })

    // When the user scrolls back up:
    .on("leave", () => {
        cardAnim(target, true)
    })

    // When the user scrolls down:
    .on("enter", () => {
        cardAnim(target, false)
    })
    .addTo(controller);
}