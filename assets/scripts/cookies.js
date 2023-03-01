function hideCookiesMessage() {
    document.getElementById("cookies_message").style.visibility = "hidden"
}

function displayCookiesMessage() {
    document.getElementById("cookies_message").style.visibility = "visible"
}

function acceptCookies() {
    console.log("Cookies accepted");
    hideCookiesMessage();
    saveInLocalstorage();
}

function rejectCookies() {
    console.log("Cookies rejected");
    hideCookiesMessage();
    saveInLocalstorage();
}

function saveInLocalstorage()
{
    const l = window.localStorage;
    l.setItem("cookies", true);
}

function isAlreadyAsked()
{
    const l = window.localStorage;
    const cookies = l.getItem("cookies");
    if (cookies) {
        return true;
    } else {
        return false;
    }
}

async function sleep(duration) {
    return new Promise(resolve => setInterval(resolve, duration))
}

async function cookiesProcess()
{
    const rejectButton = document.getElementById("reject_cookies")
    const acceptButton = document.getElementById("accept_cookies")

    await sleep(2000)
    displayCookiesMessage()

    rejectButton.addEventListener("click", rejectCookies)
    acceptButton.addEventListener("click", acceptCookies)
    
}
console.log(isAlreadyAsked())

if (!isAlreadyAsked()) {
    await cookiesProcess();
}