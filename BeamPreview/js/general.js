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

/* OTHER ??? */
// var carousel = document.querySelector(".carousel")
// carousel.addEventListener('slide.bs.carousel', (d) => {
//
//     var activeID = document.querySelector('.active').id;
//     var activeTextID = document.querySelector('#' + activeID + '-text');
//     activeTextID.style.display = 'none';
//
//     // If moving forward:
//     if (d.direction === 'left') {
//         if (activeID == 'doreen-active') {
//             document.querySelector('#syed-active-text').style.display = "block";
//         } else {
//             document.querySelector('#doreen-active-text').style.display = "block";
//         }
//     }
//
//     // Otherwise:
//     else {
//         if (activeID == 'doreen-active') {
//             document.querySelector('#syed-active-text').style.display = "block";
//         } else {
//             document.querySelector('#doreen-active-text').style.display = "block";
//         }
//     }
// })