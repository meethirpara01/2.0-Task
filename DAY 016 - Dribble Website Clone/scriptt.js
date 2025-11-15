const videos = [
    "./assets/c84b12685f2e681b81d49ec79fc94648.mp4",
    "./assets/84b638194222fa14eca1781d09b791ad.mp4",
    "./assets/207c929a31776e3bef96f5a66613b282.mp4",
    "./assets/ef8d2f9e371433f1fc9620fb33e6cd12.mp4",
    "./assets/38fb0c348d1247c088d40790e89ab5c6.mp4",
    "./assets/ef7a619c805e5a92902b0bf034c852fa.mp4",
    "./assets/55d8f62103d1ecc245b4dd35f264528c.mp4",
    "./assets/3d47c346ad505c96ef0d2987ea972e76.mp4",
];
let index = 0;

const player = document.getElementById("player");

function playVideo() {
    player.src = videos[index];
    player.play();
}

player.addEventListener("ended", () => {
    index = (index + 1) % videos.length; // loop back
    playVideo();
});

playVideo();