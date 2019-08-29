var OpenPopUp = document.getElementById("open-popup"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    closePopup = document.getElementById("close-popup");
var requestURL = 'https://magne754.github.io/proyecto/ciudades/JOSN/cochabamba.json';
var request = new XMLHttpRequest();
var information = document.querySelector('section');;
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


function showplace(jsonObj,a) {
    var lugares = jsonObj['places'];
    for (var i = 0; i < lugares.length; i++) {
        
        if(lugares[i].place == a){
        var myArticle = document.createElement('article');
        var myH1 = document.createElement('h1');
        var myH2 = document.createElement('h2');
        var myPara = document.createElement('p');

        myH1.textContent = lugares[i].city;
        myH2.textContent =  lugares[i].place;
        myPara.textContent = lugares[i].description;

        myArticle.appendChild(myH1);
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara);

        information.appendChild(myArticle);
        }
    }
}
openpopupu.addEventListener('click', function(){
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'Arani');
});
openpopupd.addEventListener('click', function(){
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'Cliza');
});
openpopupt.addEventListener('click', function(){
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'Punata');
});
openpopupc.addEventListener('click', function(){
    var lugar = request.response;
    request.onload = lugar;
    overlay.classList.add('active');
    showplace(lugar, 'Tarata');
});


closePopup.addEventListener('click', function(){
    document.querySelector('section').innerHTML='';
    overlay.classList.remove('active')
});

