const songs = [

{
title:"Infinity",
artist:"Artist-James Young",
src:"song1.mpeg",
cover:"cover1.jpeg"
},

{
title:"Wanna be yours",
artist:"Artist-Alex turner",
src:"song2.mpeg",
cover:"cover2.jpeg"
},

{
title:"Dracula",
artist:"Artist-Kim Dracula",
src:"song3.mpeg",
cover:"cover3.jpeg"
}

];

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const currentTimeEl =
document.getElementById("currentTime");

const durationEl =
document.getElementById("duration");

const playlist =
document.getElementById("playlist");

let currentSong = 0;

loadSong(currentSong);

function loadSong(index){

title.textContent =
songs[index].title;

artist.textContent =
songs[index].artist;

audio.src =
songs[index].src;

cover.src =
songs[index].cover;
}

function playSong(){

audio.play();

playBtn.innerHTML =
'<i class="fa-solid fa-pause"></i>';
}

function pauseSong(){

audio.pause();

playBtn.innerHTML =
'<i class="fa-solid fa-play"></i>';
}

playBtn.addEventListener("click",()=>{

if(audio.paused){
playSong();
}
else{
pauseSong();
}

});

nextBtn.addEventListener("click",()=>{

currentSong++;

if(currentSong >= songs.length){
currentSong = 0;
}

loadSong(currentSong);
playSong();

});

prevBtn.addEventListener("click",()=>{

currentSong--;

if(currentSong < 0){
currentSong = songs.length - 1;
}

loadSong(currentSong);
playSong();

});

audio.addEventListener("timeupdate",()=>{

progress.max = audio.duration;

progress.value = audio.currentTime;

currentTimeEl.textContent =
formatTime(audio.currentTime);

durationEl.textContent =
formatTime(audio.duration);

});

progress.addEventListener("input",()=>{

audio.currentTime =
progress.value;

});

volume.addEventListener("input",()=>{

audio.volume =
volume.value;

});

function formatTime(time){

if(isNaN(time))
return "0:00";

let minutes =
Math.floor(time/60);

let seconds =
Math.floor(time%60);

if(seconds<10){
seconds="0"+seconds;
}

return `${minutes}:${seconds}`;
}

audio.addEventListener("ended",()=>{

currentSong++;

if(currentSong >= songs.length){
currentSong = 0;
}

loadSong(currentSong);
playSong();

});

songs.forEach((song,index)=>{

const li =
document.createElement("li");

li.textContent =
`${song.title} - ${song.artist}`;

li.addEventListener("click",()=>{

currentSong = index;

loadSong(index);

playSong();

});

playlist.appendChild(li);

});