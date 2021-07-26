/* HEADER ANIMATION */
let dropped = false;
let droppedAnim = false;
const bun1 = document.querySelector('.bun-1');
const bun2 = document.querySelector('.bun-2');
const dropMenu = document.querySelector('.drop-down');
const dropMenuLinks = dropMenu.querySelectorAll('.drop-down a');

function dropdown(obj) {

    // If there is an animation ongoing, return
    if (droppedAnim) {
        return;
    }

    // If the menu was dropped
    if (dropped) {

        // Set dropped animation to true
        droppedAnim = true;

        // Animate the objects
        anime.timeline().add({
            targets: [bun1, bun2],
            easing: 'easeInSine',
            duration: 200,
            translateY: 0,
            rotate: 0
        }, 0).add({
            targets: dropMenu,
            height: 0,
            easing: 'easeInOutSine',
            duration: 600,
            complete: () => {
                dropped = false;
                droppedAnim = false;

                // Stop displaying the links
                dropMenuLinks.forEach((elem) => {
                    elem.style.display = "none";
                })
            }
        }, 0).add({
            targets: dropMenuLinks,
            opacity: [1, 0],
            easing: 'easeInOutSine',
            duration: 200,
            delay: anime.stagger(25)
        }, 0)
    } else {
        // Set dropped animation to true
        droppedAnim = true;

        // Display the links
        dropMenuLinks.forEach((elem) => {
            elem.style.display = "block";
        })

        // Animate the objects
        anime.timeline().add({
            targets: bun1,
            easing: 'easeInSine',
            duration: 200,
            translateY: 6,
            rotate: 45
        }, 0).add({
            targets: bun2,
            easing: 'easeInSine',
            duration: 200,
            translateY: -6,
            rotate: -45
        }, 0).add({
            targets: dropMenu,
            height: '500px',
            easing: 'easeInOutSine',
            duration: 400
        }, 0).add({
            targets: dropMenuLinks,
            opacity: [0, 1],
            easing: 'easeInOutSine',
            duration: 200,
            delay: anime.stagger(33),
            complete: () => {
                droppedAnim = false;
                dropped = true;
            }
        }, 200)
    }
}

/* TOP BILLBOARD ANIMATION */
const topTextObj = document.querySelector('.top-billboard p');

// Animate the top text
anime({
    targets: topTextObj,
    delay: 100,
    duration: 300,
    easing: 'easeInSine',
    translateY: [-30, 0],
    opacity: [0, 1]
})