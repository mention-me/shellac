/* eslint-disable */
let currentStatus = 0;

function updateIcon(status) {
    currentStatus = status;

    // noinspection ES6ModulesDependencies
    chrome.browserAction.setIcon({
        path: status === 1 ? "images/bug.png" : "images/bug-gray.png",
    });
}

function emboldenButton(target) {
    resetButtonStyle();
    target.style.fontWeight = "700";
}

function resetButtonStyle() {
    var buttons = document.getElementsByTagName("button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.fontWeight = "initial";
    }
}

function setIcon(commandName) {
    let status = 0;
    status = commandName === "xon" ? 1 : 0;
    updateIcon(status);
}
