console.log("Welcome to My Spotify!")

// Initialize a variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let MasterPlay = document.getElementById('MasterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let SongItem = Array.from(document.getElementsByClassName('SongItem'))


let songs = [

    { songName: "Aaajao Kabhi", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Whistle Baja 2 ", filepath: "song/2.mp3", coverpath: "covers/2.jpg" },
    { songName: "First Kiss Yo Yo Honey Singh", filepath: "song/3.mp3", coverpath: "covers/3.jpg" },
    { songName: "Dheemi Dheemi Mitraz", filepath: "song/4.mp3", coverpath: "covers/4.jpg" },
    { songName: "Woh Mere Bin Atif Aslam ", filepath: "song/5.mp3", coverpath: "covers/5.jpg" },
    { songName: "Mashup Jayantabhai Ki Luv Story ", filepath: "song/6.mp3", coverpath: "covers/6.jpg" },
    { songName: "Blue Eyes Yo Yo Honey Singh", filepath: "song/7.mp3", coverpath: "covers/7.jpg" },
    { songName: "One Bottle Down Yo Yo Honey Singh", filepath: "song/8.mp3", coverpath: "covers/8.jpg" },
    { songName: "Loca Yo Yo Honey Singh ", filepath: "song/9.mp3", coverpath: "covers/9.jpg" },

]
// audioElement.play();
// Handle play /pause click
MasterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        MasterPlay.classList.remove('fa-circle-pause');
        MasterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})




// Listen to Event
audioElement.addEventListener('timeupdate', () => {
    // Update SeekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;


})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
};



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        // console.log(e.target);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        mastersongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');
    })
});


document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 8) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
    
    audioElement.currentTime = 0;
    audioElement.play();
    MasterPlay.classList.remove('fa-circle-play');
    MasterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex-= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    MasterPlay.classList.remove('fa-circle-play');
    MasterPlay.classList.add('fa-circle-pause');

})

