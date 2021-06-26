/* eslint-disable */
document.addEventListener(
    "click",
    // eslint-disable-next-line func-names
    function (event) {
        if (event.target.matches("#enable")) {
            doComand("xon", event.target);
        }
        if (event.target.matches("#disable")) {
            doComand("xoff", event.target);
        }
    },
    false
);

function doComand(commandName, target) {
    sendData({ action: commandName }, target);
    setIcon(commandName);
    emboldenButton(target);
}

function sendData(data, target) {
    const XHR = new XMLHttpRequest(),
        FD = new FormData();

    // Push our data into our FormData object
    for (let name in data) {
        // noinspection JSUnfilteredForInLoop
        FD.append(name, data[name]);
    }

    // Define what happens on successful data submission
    XHR.addEventListener("error", function (event) {
        alert("Something went wrong" + JSON.stringify(event));
    });

    // Set up our request
    XHR.open("POST", "http://127.0.0.1:8783/action/");

    // Send our FormData object; HTTP headers are set automatically
    XHR.send(FD);
}
