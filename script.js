document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('video');

    video.addEventListener('ended', function() {
        video.currentTime = 0;
        video.play();
    });
});
