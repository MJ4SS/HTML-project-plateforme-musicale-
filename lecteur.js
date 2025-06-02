const player = document.getElementById("audioPlayer");
const tracks = document.querySelectorAll(".track");

tracks.forEach(track => {
  track.addEventListener("click", () => {
    const src = track.getAttribute("data-src");
    player.src = src;
    player.play();
  });
});
