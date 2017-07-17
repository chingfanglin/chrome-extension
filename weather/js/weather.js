function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
  
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Authorization", "CWB-71C4B73D-13D3-4701-AFA4-AEEF302FB2EE");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function showWeather(result) {
    result = JSON.parse(result);
    var list = result.records;
    var table = '<table><tr><th>日期</th><th>天氣</th><th>最低溫度</th><th>最高溫度</th></tr>';
    /*
    for (var i in list.locations) {
        debugger
        var d = new Date(list[i].dt * 1000);
        table += '<tr>';
        table += '<td>' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '</td>';
        table += '<td>' + list[i].weather[0].description + '</td>';
        table += '<td>' + Math.round(list[i].temp.min - 273.15) + ' °C</td>';
        table += '<td>' + Math.round(list[i].temp.max - 273.15) + ' °C</td>';
        table += '</tr>';
    }
    table += '</table>';
    */
    document.getElementById('weather').innerHTML = table;
}

var city = localStorage.city;
city = city ? city : 'beijing';
var url = 'http://opendata.cwb.gov.tw/api/v1/rest/datastore/'
+'F-D0047-093?locationId=F-D0047-061&locationName=內湖區'
+'&elementName=Wx, PoP, AT, T, RH,CI,WeatherDescription, Wind, Td';
httpRequest(url, showWeather);

//台灣氣象站api 文件 http://opendata.cwb.gov.tw/opendatadoc/CWB_Opendata_API_V1.1.pdf