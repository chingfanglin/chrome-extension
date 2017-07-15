function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4) {
            var result=JSON.parse(xhr.responseText);
            callback(result.ip);
        }
    }
    xhr.send();
}
httpRequest('https://api.ipify.org/?format=json', function (ip) {
    document.getElementById('ip_div').innerText = ip;
});