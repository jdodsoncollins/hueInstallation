window.onload = () => {

    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);

    let lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
        let now = (new Date()).getTime();
        if (now - lastTouchEnd <= 150) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
};
