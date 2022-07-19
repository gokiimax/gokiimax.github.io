var play = document.getElementById("play_main")
var audio = document.getElementById("music")
var play_icon = document.getElementById("play_icon")
var isPlaying = false

audio.volume = 0.4

play.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        isPlaying = true

        play_icon.classList.add("fa-pause")
        play_icon.classList.remove("fa-play")
    } else {
        audio.pause()
        isPlaying = false

        play_icon.classList.remove("fa-pause")
        play_icon.classList.add("fa-play")
    }
})