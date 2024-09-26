const audio = new Audio('Mr. President - Coco Jambo.mp3');

const disk = document.querySelector('.disk');

const stopButton = document.querySelector("#stop-button");

const playButton = document.querySelector("#play-button");

let buttonState = false;

function playAudio() {
    buttonState = !buttonState;
    if (buttonState) {
        audio.play();
        playButton.children[0].setAttribute('src', 'pause.svg');
        playButton.children[0].style.marginLeft = '0px';
        document.querySelector('.disk').style.left = '40%';
        disk.classList.add("disk-active");
    } else {
        audio.pause();
        playButton.children[0].setAttribute('src', 'play.svg');
        playButton.children[0].style.marginLeft = '6.5px';
        disk.classList.remove("disk-active");
        document.querySelector('.disk').style.left = '0%';
    }
}

playButton.addEventListener('click', function () {
    playAudio();
});

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
    buttonState = false;
    playButton.children[0].setAttribute('src', 'play.svg');
    document.querySelector('.disk').style.left = '0%';
    disk.classList.remove("disk-active");
    audio.pause();
    audio.currentTime = '0.0';
});

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      playAudio();
    }
});
