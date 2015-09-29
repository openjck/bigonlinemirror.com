navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;

var video = document.getElementById('mirror');
var wrap = document.getElementById('wrap');

if (navigator.getUserMedia) {
    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    navigator.getUserMedia({
        video: {
            width: { ideal: viewportWidth },
            height: { ideal: viewportHeight }
        }
    }, function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.className = video.className + ' active';
        wrap.removeChild(document.getElementById('introduction'));
    }, handleError);
} else {
    printErrorMessage('Browser not supported');
}

function handleError() {
    printErrorMessage('Error');
}

function printErrorMessage(message) {
    var p = document.createElement('p');

    p.className = 'notice error';
    p.innerHTML = message;

    // Remove all children of #wrap
    while (wrap.firstChild) {
        wrap.removeChild(wrap.firstChild);
    }

    wrap.appendChild(p);
}
