function hideCookiesMessage() {
    document.getElementById("cookies_message").style.visibility = "hidden"
}

function displayCookiesMessage() {
    document.getElementById("cookies_message").style.visibility = "visible"
}

function acceptCookies() {
    console.log("Cookies accepted");
}

function rejectCookies() {
    console.log("Cookies rejected");
}


async function sleep(duration) {

    return new Promise(resolve => setInterval(resolve, duration))
}

async function cookiesProcess()
{
    await sleep(2000)
    displayCookiesMessage()

}

await cookiesProcess();