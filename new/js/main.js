/*$(document).ready(function() {
    setTimeout(function() {
        
        $('h1').css('color', '#222222');
    }, 3000);

});
*/

// Create the loader and queue our 3 images. Images will not 
// begin downloading until we tell the loader to start. 
var loader = new PxLoader();
loader.addImage('img/index/1.jpg');
loader.addImage('img/index/2.jpg');
loader.addImage('img/index/3.jpg');

// callback that will be run once images are ready 
loader.addCompletionListener(function() {
    $('body').addClass('loaded');
});

// begin downloading images 
loader.start();
