var OpenPopUp = document.getElementById("open-popup"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    closePopup = document.getElementById("close-popup");
var requestURL = 'https://requebernardo.github.io/tecnologia-web/asignaciones/asignacion_9/ciudades/JOSN/tiwanaku.json';
var request = new XMLHttpRequest();
var information = document.getElementById('information');
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var place = request.response;
    populateinformation(place);
}
function populateinformation(jsonObj) {
    var myH1 = document.createElement('h2');
    myH1.textContent = jsonObj['city'];
    information.appendChild(myH1);

    var myH1 = document.createElement('h3');
    myH1.textContent = jsonObj['place'];
    information.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Descripcion: ' + jsonObj['description'];
    information.appendChild(myPara);
}

OpenPopUp.addEventListener('click', function(){
    overlay.classList.add('active');
});

closePopup.addEventListener('click', function(){
    overlay.classList.remove('active')
});