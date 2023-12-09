function setCookie(gdprValue) {
    document.cookie = "gdprStatus=" + gdprValue;
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
}