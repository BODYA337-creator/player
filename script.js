const audio = new Audio('Mr. President - Coco Jambo.mp3');

const stopButton = document.querySelector(".stop-button");

const playButton = document.querySelector(".play-button");

let buttonState = false;

playButton.onclick = function () {
    buttonState = !buttonState;
    if (buttonState) {
        audio.play();
        playButton.children[0].setAttribute('src', 'pause.svg');
        document.querySelector('.disk').style.left = '40%';
        playButton.children[0].style.marginLeft = '0px';
        document.querySelector('.disk').style.animation = "rotate 1.5s linear infinite";
    } else {
        audio.pause();
        playButton.children[0].setAttribute('src', 'play.svg');
        playButton.children[0].style.marginLeft = '6.5px';
        document.querySelector('.disk').style.left = '0%';
        document.querySelector('.disk').style.animation = "";
    }
};

playButton.addEventListener('mouseover', function () {
    if (buttonState == false) {
        document.querySelector('.disk').style.left = '40%';
    }
});

playButton.addEventListener('mouseout', function () {
    if (buttonState == false) {
        document.querySelector('.disk').style.left = '0%';
    }
});

stopButton.addEventListener('click', function () {
    playButton.children[0].style.marginLeft = '6.5px';
    buttonState = !buttonState;
    playButton.children[0].setAttribute('src', 'play.svg');
    document.querySelector('.disk').style.left = '0%';
    document.querySelector('.disk').style.animation = "";
    audio.pause();
    audio.currentTime = '0.0';
});
