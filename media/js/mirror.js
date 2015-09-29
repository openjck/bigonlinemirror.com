navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;

var video = document.getElementById('mirror');

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
    }, handleError);
} else {
    printErrorMessage('Browser not supported');
}

function handleError() {
    printErrorMessage('Error');
}

function printErrorMessage(message) {
    var wrap = document.getElementById('wrap');
    var p = document.createElement('p');

    p.id = 'error';
    p.innerHTML = message;

    wrap.removeChild(video);
    wrap.appendChild(p);
}
