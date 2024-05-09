let numberAgeUser;
let numberKmUser;
let priceTicket;


let bottone = document.querySelector('button#sendData');

bottone.addEventListener('click', function(){
    numberAgeUser = document.querySelector('input#userAge');
    numberKmUser = document.querySelector('input#userKm');
    let priceTicket = (numberKmUser.value * 0.267113);

    if (isNaN(numberKmUser.value) || isNaN(numberAgeUser.value) || numberKmUser.value <= 0 || numberAgeUser.value <= 0 || numberAgeUser.value > 150) {
        alert("Attento hai inserito valori non validi");
        
    }else if(numberAgeUser.value >= 63){
        priceTicket = priceTicket - (priceTicket * 0.37893);
        console.log("il prezzo del tuo biglietto essendo over 63 è di:" + " " + (priceTicket.toFixed(2)));

    }else if( numberAgeUser.value <= 21){
        priceTicket = priceTicket - (priceTicket * 0.24552);
        console.log("il prezzo del tuo biglietto essendo under 21 è di:" + " " + (priceTicket.toFixed(2)));
    }else{
        console.log("Il prezzo del tuo biglietto non rientrando nell'età per un possibile sconto è:" + " " + (priceTicket.toFixed(2)));
    }

    
})
