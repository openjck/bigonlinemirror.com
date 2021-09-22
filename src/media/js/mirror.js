const debug = process.env.DEBUG || false;
const wrap = document.getElementById("wrap");

function showError(message) {
  if (Array.isArray(message)) {
    const div = document.createElement("div");
    div.className = "notice error";

    for (let i = 0; i < message.length; i += 1) {
      const messageLine = message[i];
      const p = document.createElement("p");
      p.innerHTML = messageLine;
      div.appendChild(p);
    }

    // Remove all children of #wrap
    while (wrap.firstChild) {
      wrap.removeChild(wrap.firstChild);
    }

    wrap.appendChild(div);
  } else {
    const p = document.createElement("p");

    p.className = "notice error";
    p.innerHTML = message;

    // Remove all children of #wrap
    while (wrap.firstChild) {
      wrap.removeChild(wrap.firstChild);
    }

    wrap.appendChild(p);
  }
}

if (navigator.mediaDevices.getUserMedia) {
  const viewportWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  const viewportHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );

  navigator.mediaDevices
    .getUserMedia({
      audio: false,
      video: {
        facingMode: "user",
        width: viewportWidth,
        height: viewportHeight,
      },
    })
    .then((stream) => {
      const video = document.getElementById("mirror");

      // srcObject is only supported in newer browsers
      if ("srcObject" in video) {
        video.srcObject = stream;
      } else {
        video.src = window.URL.createObjectURL(stream);
      }

      video.className += " active";
      wrap.removeChild(document.getElementById("introduction"));
    })
    .catch((err) => {
      if (debug) {
        // eslint-disable-next-line no-console
        console.error(err);

        if (err.message) {
          // eslint-disable-next-line no-console
          console.error(err.message);
        }
      }

      if (err.name === "NotAllowedError") {
        showError([
          "You must allow camera access to show the mirror.",
          "You will not be recorded.",
          "Please reload and try again.",
        ]);
      } else {
        showError("Error");
      }
    });
} else {
  showError("Browser not supported");
}
