const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progress = document.querySelector('#progress')

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('Click en Play')
}

function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('Click en Pausa')
}

function handleBackward() {
    $video.currentTime = $video.currentTime - 10
    console.log('Click en Backward', $video.currentTime)
}

function handleForward() {
    $video.currentTime = $video.currentTime + 10
    console.log('Click en Forward', $video.currentTime)
}

function handleLoaded() {
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration)
  }

function handleTimeUpdate() {
    $progress.value = $video.currentTime
    console.log('Tiempo actual', $video.currentTime)
}

function handleInput() {
    $video.currentTime = $progress.value
    console.log('¡Suéltame estúpida!', $progress.value)
}

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleInput)