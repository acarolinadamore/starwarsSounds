window.addEventListener('keydown', playSound);

function playSound(e) {
  const id = e.keyCode ? e.keyCode : e;
  const audio = document.getElementById(id).firstElementChild;
  console.log(audio);

  if (!audio) return;
  audio.currentTime = 0; //volta pro inicio
  audio.play();
}
