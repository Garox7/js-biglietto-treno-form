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
        const standardOffer = 'Offerta Sandard';
        const specialOffer = 'Offerta Speciale';

        if (age == 'minorenne') {
            discountRate = 0.20;
            document.getElementById('offer').innerHTML = specialOffer;

            console.log('offerta:', specialOffer)

            
        } else if (age == 'over') {
            discountRate = 0.40;
            document.getElementById('offer').innerHTML = specialOffer;

            console.log('offerta:', specialOffer)

        } else {
            discountRate = 0;
            document.getElementById('offer').innerHTML = standardOffer;

            console.log('offerta:', standardOffer)

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
