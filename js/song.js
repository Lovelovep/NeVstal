let slider = document.getElementById('mySlider');
let volumeVideo = document.getElementById('videoVolume')

slider.addEventListener('input', function() {
  volumeVideo.volume = slider.value/100;
  volumeVideo.style.filter = `brightness(${slider.value}%)`;
});