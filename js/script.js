$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 5000;
function hidePreloader() {
var preloader = $('.preloader');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
