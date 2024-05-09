let numberAgeUser;
let numberKmUser;
let nameUserName;
let priceTicket;

let bottone = document.querySelector('button#sendData');

bottone.addEventListener('click', function(){
    numberAgeUser = document.querySelector('input#userAge');
    numberKmUser = document.querySelector('input#userKm');
    nameUserName = document.querySelector('input#userName');

    let priceTicket = (numberKmUser.value * 0.267113);

    if( nameUserName.value.length == 0 || isNaN(numberKmUser.value) || isNaN(numberAgeUser.value) || numberKmUser.value <= 0 || numberAgeUser.value <= 0 || numberAgeUser.value > 150){
        alert("Attenzione hai inserito uno o più valori non validi!!");

    }else if(numberAgeUser.value >= 63){
        priceTicket = priceTicket - (priceTicket * 0.37893);

        console.log("il prezzo del tuo biglietto essendo over 63 è di:" + " " + (priceTicket.toFixed(2)));

        let prezzoBigliettoHone = document.querySelector('div#generateCard');

        prezzoBigliettoHone.innerHTML += ('<div class="card my_grandezza_card mb-3">' + '<img src="./img/over 63.png" class="card-img-top img-thumbnail" alt="treno">' + '<div class="card-body">' + '<h4>' + nameUserName.value + '</h4>' + '<p class="card-text">Il prezzo del tuo biglietto</p>' + '</div>' + '<ul class="list-group list-group-flush">' + '<li class="list-group-item">' + 'Prezzo: ' + priceTicket.toFixed(2) + '€' + '</li>' + '<li class="list-group-item">' + 'La tua età: ' + numberAgeUser.value + ' anni' + '</li>' + '<li class="list-group-item">' + 'I chilometri che devi percorrere: ' + numberKmUser.value + 'Km' + '</li>' + '</ul>' + '</div>');

    }else if( numberAgeUser.value <= 21){
        priceTicket = priceTicket - (priceTicket * 0.24552);
        
        console.log("il prezzo del tuo biglietto essendo under 21 è di:" + " " + (priceTicket.toFixed(2)));

        let prezzoBigliettoHone = document.querySelector('div#generateCard');

        prezzoBigliettoHone.innerHTML += ('<div class="card my_grandezza_card mb-3">' + '<img src="./img/under 21.png" class="card-img-top img-thumbnail" alt="treno">' + '<div class="card-body">' + '<h4>' + nameUserName.value + '</h4>' + '<p class="card-text">Il prezzo del tuo biglietto</p>' + '</div>' + '<ul class="list-group list-group-flush">' + '<li class="list-group-item">' + 'Prezzo: ' + priceTicket.toFixed(2) + '€' + '</li>' + '<li class="list-group-item">' + 'La tua età: ' + numberAgeUser.value + ' anni' + '</li>' + '<li class="list-group-item">' + 'I chilometri che devi percorrere: ' + numberKmUser.value + 'Km' + '</li>' + '</ul>' + '</div>');
    }else{
        console.log("Il prezzo del tuo biglietto non rientrando nell'età per un possibile sconto è:" + " " + (priceTicket.toFixed(2)));

        let prezzoBigliettoHone = document.querySelector('div#generateCard');

        prezzoBigliettoHone.innerHTML += ('<div class="card my_grandezza_card mb-3">' + '<img src="./img/nodiscount.png" class="card-img-top img-thumbnail" alt="treno">' + '<div class="card-body">' + '<h4>' + nameUserName.value + '</h4>' + '<p class="card-text">Il prezzo del tuo biglietto</p>' + '</div>' + '<ul class="list-group list-group-flush">' + '<li class="list-group-item">' + 'Prezzo: ' + priceTicket.toFixed(2) + '€' + '</li>' + '<li class="list-group-item">' + 'La tua età: ' + numberAgeUser.value + ' anni' + '</li>' + '<li class="list-group-item">' + 'I chilometri che devi percorrere: ' + numberKmUser.value + 'Km' + '</li>' + '</ul>' + '</div>');
    }

    
})
