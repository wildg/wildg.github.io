var carousel = document.querySelector(".carousel")
carousel.addEventListener('slide.bs.carousel', (d) => {

    var activeID = document.querySelector('.active').id;
    var activeTextID = document.querySelector('#' + activeID + '-text');
    activeTextID.style.display = 'none';

    // If moving forward:
    if (d.direction === 'left') {
        if (activeID == 'doreen-active') {
            document.querySelector('#syed-active-text').style.display = "block";
        } else {
            document.querySelector('#doreen-active-text').style.display = "block";
        }
    }

    // Otherwise:
    else {
        if (activeID == 'doreen-active') {
            document.querySelector('#syed-active-text').style.display = "block";
        } else {
            document.querySelector('#doreen-active-text').style.display = "block";
        }
    }
})

function changeServices(idString) {
    var activeObj = document.querySelector('.active-service');
    var activeImgObj = document.querySelector("#" + activeObj.id + "-background");

    var chosenObj = document.querySelector(idString);
    var chosenImgObj = document.querySelector(idString + "-background");
    console.log(chosenImgObj)

    activeObj.classList.remove('active-service');
    activeObj.style.display = 'none';
    activeImgObj.style.opacity = '0';

    chosenObj.classList.add('active-service');
    chosenObj.style.display = 'flex';
    chosenImgObj.style.opacity = '1';
}