var wrap = document.getElementById('wrap');

if (navigator.mediaDevices.getUserMedia) {
    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            facingMode: "user",
            width: viewportWidth,
            height: viewportHeight
        }
    }).then(function(stream) {
        var video = document.getElementById('mirror');
        video.src = window.URL.createObjectURL(stream);
        video.className = video.className + ' active';
        wrap.removeChild(document.getElementById('introduction'));
    }).catch(handleError);
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
