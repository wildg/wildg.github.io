/*  SERVICES - LARGE SCREEN */
let activeService = 'architecture'
const servicesObj = document.querySelector('#services');
let serviceChanging = false;

function changeServices(chosenService) {

    // If the service is not currently displayed and no change is happening
    if ((activeService !== chosenService) && (!serviceChanging)) {

        // Changing service changing status
        serviceChanging = true;

        // Get active object items
        const activeObj = servicesObj.querySelector('#services-' + activeService),
            activeTitleObj = activeObj.querySelector('.services-title'),
            activeDescriptionObj = activeObj.querySelector('.services-description'),
            activeButtonObj = activeObj.querySelector('.button');
        activeObj.style.zIndex = '1';

        // Get chosen object items
        const chosenObj = servicesObj.querySelector('#services-' + chosenService),
            chosenTitleObj = chosenObj.querySelector('.services-title'),
            chosenDescriptionObj = chosenObj.querySelector('.services-description'),
            chosenButtonObj = chosenObj.querySelector('.button');
        chosenObj.style.zIndex = '2';

        anime.timeline().add({
            targets: activeButtonObj,
            easing: 'easeInOutSine',
            opacity: [1, 0],
            translateY: [0, -10],
            duration: 100
        }, 0).add({
            targets: activeDescriptionObj,
            easing: 'linear',
            opacity: [1, 0],
            duration: 300
        }, 300).add({
            targets: activeTitleObj,
            easing: 'linear',
            opacity: [1, 0],
            duration: 300
        }, 500).add({
            targets: activeObj,
            easing: 'easeInOutSine',
            opacity: [1, 0],
            duration: 500
        }, 800).add({
            targets: chosenObj,
            easing: 'easeInOutSine',
            opacity: [0, 1],
            duration: 500
        }, 800).add({
            targets: chosenTitleObj,
            easing: 'linear',
            opacity: [0, 1],
            duration: 300
        }, 1100).add({
            targets: chosenDescriptionObj,
            easing: 'linear',
            opacity: [0, 1],
            duration: 300
        }, 1300).add({
            targets: chosenButtonObj,
            easing: 'easeInOutSine',
            opacity: [0, 1],
            translateY: [-10, 0],
            duration: 200,
            complete: () => {
                serviceChanging = false;
            }
        }, 1500)

        // Change active service
        activeService = chosenService;
    }
}

/*  SERVICES - SMALL SCREEN */
const servicesSmallObj = document.querySelector('#services-sm');
const servicesSelectionSmallObj = document.querySelector('#services-selection-sm');

function changeServicesSmall(chosenService) {
    const chosenObj = document.querySelector('#services-' + chosenService + '-sm'),
        chosenTitleObj = chosenObj.querySelector('.services-title'),
        chosenDescriptionObj = chosenObj.querySelector('.services-description'),
        chosenButtonObj = chosenObj.querySelector('.button');

    chosenObj.style.zIndex = '2';
    chosenObj.style.opacity = '1';

    chosenTitleObj.style.opacity = '0';
    chosenDescriptionObj.style.opacity = '0';
    chosenButtonObj.style.opacity = '0';

    anime.timeline().add({
        targets: servicesSelectionSmallObj,
        easing: 'easeInOutSine',
        duration: 500,
        right: '100%'
    }, 0)
        .add({
            targets: servicesSmallObj,
            easing: 'easeInOutSine',
            duration: 500,
            left: 0
        }, 0).add({
        targets: chosenTitleObj,
        easing: 'linear',
        opacity: [0, 1],
        duration: 300
    }, 300).add({
        targets: chosenDescriptionObj,
        easing: 'linear',
        opacity: [0, 1],
        duration: 300
    }, 500).add({
        targets: chosenButtonObj,
        easing: 'easeInOutSine',
        opacity: [0, 1],
        translateY: [-10, 0],
        duration: 200
    }, 600)
}

function servicesBack(chosenObj) {
    const chosenTitleObj = chosenObj.querySelector('.services-title'),
        chosenDescriptionObj = chosenObj.querySelector('.services-description'),
        chosenButtonObj = chosenObj.querySelector('.button');

    anime.timeline().add({
        targets: servicesSelectionSmallObj,
        easing: 'easeInOutSine',
        duration: 500,
        right: 0
    }, 0).add({
        targets: servicesSmallObj,
        easing: 'easeInOutSine',
        duration: 500,
        left: '100%',
        complete: () => {
            chosenObj.style.zIndex = '1'
            chosenObj.style.opacity = '0'

            chosenTitleObj.style.opacity = '0';
            chosenDescriptionObj.style.opacity = '0';
            chosenButtonObj.style.opacity = '0';
        }
    }, 0)
}