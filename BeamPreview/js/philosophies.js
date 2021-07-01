/*  PHILOSOPHIES - LARGE SCREEN */
let activePhilosophy = 'vision'
const philosophiesObj = document.querySelector('#philosophies');
let philosophiesChanging = false;

function changePhilosophies(chosenService) {

    // If the philosophy is not currently displayed and no change is happening
    if ((activePhilosophy !== chosenService) && (!philosophiesChanging)) {

        // Changing philosophies changing status
        philosophiesChanging = true;

        // Get active object items
        const activeObj = philosophiesObj.querySelector('#philosophies-' + activePhilosophy),
            activeTitleObj = activeObj.querySelector('.selection-title'),
            activeDescriptionObj = activeObj.querySelector('.selection-description');
        activeObj.style.zIndex = '1';

        // Get chosen object items
        const chosenObj = philosophiesObj.querySelector('#philosophies-' + chosenService),
            chosenTitleObj = chosenObj.querySelector('.selection-title'),
            chosenDescriptionObj = chosenObj.querySelector('.selection-description');
        chosenObj.style.zIndex = '2';

        anime.timeline().add({
            targets: activeDescriptionObj,
            easing: 'linear',
            opacity: [1, 0],
            duration: 300
        }, 0).add({
            targets: activeTitleObj,
            easing: 'linear',
            opacity: [1, 0],
            duration: 300
        }, 200).add({
            targets: activeObj,
            easing: 'easeInOutSine',
            opacity: [1, 0],
            duration: 500
        }, 500).add({
            targets: chosenObj,
            easing: 'easeInOutSine',
            opacity: [0, 1],
            duration: 500
        }, 500).add({
            targets: chosenTitleObj,
            easing: 'linear',
            opacity: [0, 1],
            duration: 300
        }, 800).add({
            targets: chosenDescriptionObj,
            easing: 'linear',
            opacity: [0, 1],
            duration: 300,
            complete: () => {
                philosophiesChanging = false;
            }
        }, 1000)

        // Change active philosophy
        activePhilosophy = chosenService;
    }
}

/*  PHILOSOPHIES - SMALL SCREEN */
const philosophiesSmallObj = document.querySelector('#philosophies-sm');
const philosophiesSelectionSmallObj = document.querySelector('#philosophies-selection-sm');

function changePhilosophiesSmall(chosenService) {
    const chosenObj = document.querySelector('#philosophies-' + chosenService + '-sm');

    const chosenTitleObj = chosenObj.querySelector('.selection-title'),
        chosenDescriptionObj = chosenObj.querySelector('.selection-description');

    chosenObj.style.zIndex = '2';
    chosenObj.style.opacity = '1';

    chosenTitleObj.style.opacity = '0';
    chosenDescriptionObj.style.opacity = '0';

    anime.timeline().add({
        targets: philosophiesSelectionSmallObj,
        easing: 'easeInOutSine',
        duration: 500,
        right: '100%'
    }, 0)
        .add({
            targets: philosophiesSmallObj,
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
    }, 500);
}

function philosophiesBack(chosenObj) {
    const chosenTitleObj = chosenObj.querySelector('.selection-title'),
        chosenDescriptionObj = chosenObj.querySelector('.selection-description');

    anime.timeline().add({
        targets: philosophiesSelectionSmallObj,
        easing: 'easeInOutSine',
        duration: 500,
        right: 0
    }, 0).add({
        targets: philosophiesSmallObj,
        easing: 'easeInOutSine',
        duration: 500,
        left: '100%',
        complete: () => {
            chosenObj.style.zIndex = '1'
            chosenObj.style.opacity = '0'

            chosenTitleObj.style.opacity = '0';
            chosenDescriptionObj.style.opacity = '0';
        }
    }, 0)
}