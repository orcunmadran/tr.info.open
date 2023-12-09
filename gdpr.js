function setCookie(gdprValue) {
    const d = new Date();
    d.setTime(d.getTime() + (60 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = "gdprStatus=" + gdprValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
        let [key,value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}

let check = getCookie("gdprStatus");
var gdprBox = document.getElementById("gdprInfo");
if (check == "accepted") {
    gdprBox.style.display = "none";
} else {
    gdprBox.style.display = "block"
}