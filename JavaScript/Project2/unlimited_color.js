//function to generat a random number
const randomcolor = function () {
    const hex = '0123456789ABCDEF';
    color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let start_interval;

//function to start changing the background color
const startChangingColor = function () {
    //checking the value is null or not?
    if (start_interval == null) {
        start_interval = setInterval(start, 1000)
    }
    //function to set random background color
    function start() {
        document.body.style.backgroundColor = randomcolor()
    }
    return start_interval
}

//function to stop changing the background color
const stopChangingColor = function () {
    clearInterval(start_interval);
    start_interval = null;
}

document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector("#stop").addEventListener('click', stopChangingColor)

