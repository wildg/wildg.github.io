/*  CAROUSEL:   */
const allCarousels = document.querySelectorAll('.carousel');
const initDelay = 400

allCarousels.forEach( (obj) => {
    const objNextButton = obj.querySelector('.carousel-control-next');
    const objPrevButton = obj.querySelector('.carousel-control-prev');

    obj.addEventListener('slide.bs.carousel', (d) => {
        const carouselSlideAmount = obj.querySelectorAll('.carousel-item').length;

        // If the end has been reached:
        if (d.to === carouselSlideAmount - 1) {
            objNextButton.style.display = 'none';
            objPrevButton.style.display = 'flex';
        }

        // If the start is reached:
        else if (d.to === 0) {
            objNextButton.style.display = 'flex';
            objPrevButton.style.display = 'none';
        }

        // Otherwise:
        else {
            objNextButton.style.display = 'flex';
            objPrevButton.style.display = 'flex';
        }

        const allProjects = d.relatedTarget.querySelectorAll('.projectCards');

        // If going to the right:
        if (d.direction === 'left') {

            // For each project in the carousel:
            allProjects.forEach((item, ind) => {

                // Set the opacity of the items to 0
                item.style.opacity = '0';

                // Animate the project items
                anime({
                    targets: item,
                    easing: 'easeInOutSine',
                    translateY: [30, 0],
                    opacity: [0, 1],
                    duration: 200,
                    delay: ind * 200 + 200
                })
            });
        }

        // If going to the left:
        else {

            // For each project in the carousel:
            allProjects.forEach((item, ind) => {

                // Set the opacity of the items to 0
                item.style.opacity = '0';

                // Animate the project items
                anime({
                    targets: item,
                    easing: 'easeInOutSine',
                    translateY: [30, 0],
                    opacity: [0, 1],
                    duration: 200,
                    delay: initDelay - (200 * ind)
                })
            });
        }
    })
})

/*  SCROLLMAGIC */
let controller = new ScrollMagic.Controller();

// Ongoing projects carousel
new ScrollMagic.Scene({
        triggerElement: '#ongoing-carousel',
        triggerHook: 1
    })
    // When the user scrolls back up:
    .on("leave", () => {
        document.querySelectorAll('#ongoing .active .projectCards').forEach( (obj) => {
            obj.style.opacity = 0;
        })
    })
    // When the user scrolls down:
    .on("enter", () => {
        console.log("HELLO?");
        anime({
            targets: '#ongoing-carousel .carousel-inner .active .projectCards',
            easing: 'easeInOutSine',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 200,
            delay: anime.stagger(200)
        });
    })
    .addTo(controller);

// Completed Projects Carousel
new ScrollMagic.Scene({
        triggerElement: '#completed-carousel',
        triggerHook: 1
    })
    // When the user scrolls back up:
    .on("leave", () => {
        document.querySelectorAll('#completed-carousel .active .projectCards').forEach( (obj) => {
            obj.style.opacity = 0;
        })
    })
    // When the user scrolls down:
    .on("enter", () => {
        anime({
            targets: '#completed-carousel .carousel-inner .active .projectCards',
            easing: 'easeInOutSine',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 200,
            delay: anime.stagger(200)
        });
    })
    .addTo(controller);