
$(window).on("load", () => {

    $(".name-line").waypoint( function() {

        // Change opacity of name to full
        this.element.style.opacity = '1';

        // Animate the name
        anime({
            targets: this.element.querySelector('.line-anim path'),
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInSine',
            duration: 4000,
            keyframes: [
                {fill: '#FFE66D', duration: 600, delay: 500},
            ],
        });
        this.destroy();
    }, {offset: "80%"});

    $(".yellow-line").waypoint( function() {

        // Change opacity of name to full
        this.element.style.opacity = '1';

        // Animate the name
        anime({
            targets: this.element.querySelector('.line-anim path'),
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInSine',
            duration: 2000,
            keyframes: [
                {fill: '#FFE66D', duration: 800, delay: 200},
            ],
        });
        this.destroy();
    }, {offset: "80%"});

    $(".blue-line").waypoint( function() {

        // Change opacity of name to full
        this.element.style.opacity = '1';

        // Animate the name
        anime({
            targets: this.element.querySelector('.line-anim path'),
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInSine',
            duration: 2000,
            keyframes: [
                {fill: '#2F3061', duration: 800, delay: 200},
            ],
        });
        this.destroy();
    }, {offset: "80%"});

    $("nav").waypoint( function() {
        anime({
            targets: "nav .largeScreen a",
            easing: 'easeOutBack',
            delay: anime.stagger(100),
            keyframes: [
                {translateY: 20, opacity: 0, duration: 0},
                {translateY: 0, opacity: 1, duration: 700},
            ]
        });
        this.destroy();
    }, {offset: "75%"});

    $(".socials").waypoint( function() {
        anime({
            targets: this.element.querySelectorAll('a'),
            easing: 'easeOutBack',
            delay: anime.stagger(100),
            keyframes: [
                {translateY: 20, opacity: 0, duration: 0},
                {translateY: 0, opacity: 1, duration: 500},
            ]
        });
        this.destroy();
    }, {offset: "85%"});

    $(".technologies").waypoint( function() {
        anime({
            targets: this.element.querySelectorAll('p'),
            easing: 'easeOutBack',
            delay: anime.stagger(100),
            keyframes: [
                {translateY: 20, opacity: 0, duration: 0},
                {translateY: 0, opacity: 1, duration: 500},
            ]
        });
        this.destroy();
    }, {offset: "85%"});

    $(".writing-title").waypoint(function() {
        anime({
            targets: this.element,
            easing: 'easeOutBack',
            delay: 50,
            keyframes: [
                {translateY: 20, opacity: 0, duration: 0},
                {translateY: 0, opacity: 1, duration: 800},
            ]
        });
        this.destroy();
    }, {offset: "85%"});

    $(".writing-date").waypoint(function() {
        anime({
            targets: this.element,
            easing: 'easeOutBack',
            delay: 50,
            keyframes: [
                {translateY: 20, opacity: 0, duration: 0},
                {translateY: 0, opacity: 1, duration: 800},
            ]
        });
        this.destroy();
    }, {offset: "85%"});

    $(".writing").waypoint(function() {
        anime({
            targets: this.element,
            easing: 'linear',
            delay: 100,
            keyframes: [
                {opacity: 0, duration: 0},
                {opacity: 1, duration: 1000},
            ]
        });
        this.destroy();
    }, {offset: "85%"});

    $(".break").waypoint(function() {
        anime({
            targets: this.element,
            easing: 'easeInSine',
            delay: 50,
            width: '80%',
            duration: 600
        });
        this.destroy();
    }, {offset: "85%"});

    $(".bar-wrap").waypoint(function() {
        anime({
            targets: this.element.querySelectorAll('.fill'),
            easing: 'linear',
            delay: 75,
            delay: anime.stagger(100),
            backgroundColor: '#2F3061',
            duration: 500
        });
        this.destroy();
    }, {offset: '95%'});

});