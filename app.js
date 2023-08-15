//play button
const playBtn = document.getElementById('playBtn')
const music = document.getElementById('music')

let musicIndex = 3
let isMusicPlay = false

playBtn.addEventListener('click', () => {
    if(!isMusicPlay){
        playBtn.innerHTML = '<i class="fa-sharp fa-solid fa-circle-pause fa-2xl" style="color: #1ce10e;"></i>'
        music.play()
        isMusicPlay = true
    }else{
        playBtn.innerHTML = '<i class="fa-sharp fa-solid fa-circle-play fa-2xl" style="color: #1ce10e;"></i>'
        music.pause()
        isMusicPlay = false
    }
})


// play exact music
const list = document.querySelectorAll('.mp3')

const playList = JSON.parse(localStorage.getItem('playlist'))

let currentSong = null


for (let i = 0; i < list.length; i++) {
    const element = list[i]
    element.addEventListener('click', (e, songUrl) => {
        const thisMusic = e.currentTarget.children[1]

        if (currentSong) {
            currentSong.pause()
            currentSong.parentNode.children[0].style.visibility = 'hidden'
        }

        songUrl = thisMusic.src
        thisMusic.play()
        e.currentTarget.children[0].style.visibility = 'visible'
        currentSong = thisMusic
    })
}


