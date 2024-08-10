const button = document.querySelectorAll(".button")
const body = document.querySelector("body")
button.forEach(function (button) {
    button.addEventListener('click', function (e) {
        events = e.target.id;
        switch (events) {
            case "grey":
                body.style.background = events
                break;
            case "white":
                body.style.background = events
                break;
            case "blue":
                body.style.background = events
                break;
            case "yellow":
                body.style.background = events
                break;
            default:
                body.style.background = 'white'
        }
    })

})