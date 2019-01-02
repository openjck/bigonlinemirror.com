const env = process.env.NODE_ENV || 'development';
const wrap = document.getElementById('wrap');

if (navigator.mediaDevices.getUserMedia) {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    console.log(viewportWidth, viewportHeight);

    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            facingMode: "user",
            width: viewportWidth,
            height: viewportHeight,
        }
    }).then(stream => {
        const video = document.getElementById('mirror');
        video.srcObject = stream;
        video.className = video.className + ' active';
        wrap.removeChild(document.getElementById('introduction'));
    }).catch(err => {
        if (env === 'development') {
            console.error(err);
        }

        if (err.name === 'NotAllowedError') {
            showError([
                'You must allow camera access to show the mirror.',
                'You will not be recorded.',
                'Please reload and try again.',
            ]);
        } else {
            showError('Error');
        }
    });
} else {
    showError('Browser not supported');
}

function showError(message) {

    if (Array.isArray(message)) {
        const div = document.createElement('div');
        div.className = 'notice error';

        for (const messageLine of message) {
            const p = document.createElement('p');
            p.innerHTML = messageLine;
            div.appendChild(p);
        }

        // Remove all children of #wrap
        while (wrap.firstChild) {
            wrap.removeChild(wrap.firstChild);
        }

        wrap.appendChild(div);
    } else {
        const p = document.createElement('p');

        p.className = 'notice error';
        p.innerHTML = message;

        // Remove all children of #wrap
        while (wrap.firstChild) {
            wrap.removeChild(wrap.firstChild);
        }

        wrap.appendChild(p);
    }
}
