const app = () => {
    const song = document.querySelector ('.song');
    const play = document.querySelector ('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.video-container video');

    //Sounds
    const sounds = document.querySelectorAll('.sound-container button');

    //Time display
    const timeDisplay = document.querySelector('.time-display');

    //Get the length of the outline
    const outlineLength = outline.getTotalLength();
    
    //Duration
    let fakeDuration = 600;

    outline.getElementsByClassName.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //Play sound
    play.addEventListener('click', () =>{
        checkPlaying(song);
    });

    //Function to stop & play the sounds
    const checkPlaying = song =>{
    if(song.paused){
        video.play();
        song.play();
        play.src = './svg/pause.svg';
    } else{
        song.pause();
        video.pause();
        play.src = './svg/play.svg'
    }
    }
};

app();