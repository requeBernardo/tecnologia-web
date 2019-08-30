var requestURL = 'https://magne754.github.io/proyecto/ciudades/JOSN/FAQ.json';
var request = new XMLHttpRequest();
var information = document.getElementById('section');;
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var preguntas = request.response;
    showFaq(preguntas);
}

function showFaq(jsonObj) {
    var  pregun = jsonObj['faq'];

    for (var i = 0; i < pregun.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        myH2.textContent = pregun[i].pregunta;
        myPara1.textContent = pregun[i].respuesta;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);

        information.appendChild(myArticle);
    }
}