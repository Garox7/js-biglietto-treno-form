const btnClick = document.getElementById('button');
console.log(btnClick)

btnClick.addEventListener('click',
    function () {
        console.log('Hai cliccato! bravo!')

        //NAME
        let userName = document.getElementById("user_name").value;
        document.getElementById("name").innerHTML = userName;

        //DISTANCE
        const distance = document.getElementById('distance').value;

        //AGE
        const age =document.getElementById('age_select').value;

        //TICKET PRICE SET
        const ticketPrice = distance * 0.21;

        if (age == 'minorenne') {
            discountRate = 0.20;
        
        } else if (age == 'over') {
            discountRate = 0.40;
        
        } else {
            discountRate = 0;
        }


        let totalPrice = ticketPrice - (ticketPrice * discountRate);
        totalPrice = parseFloat(totalPrice.toFixed(2))
        document.getElementById('ticket_price').innerHTML =  '€' +  totalPrice;

        //DEBUG
        console.log('Distanza:',distance)
        console.log('Età:',age)
        console.log('Prezzo biglietto: €' + ticketPrice)
        console.log('Prezzo bisglietto con sconto: €' + totalPrice)

    }
);
