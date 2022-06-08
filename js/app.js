const amount = document.querySelector('#amount');
const from = document.querySelector('#from');
const to = document.querySelector('#to');
const reset = document.querySelector('#reset');
const calculate = document.querySelector('#calculate');
const currencyIcon = document.querySelector('#currencyIcon');
const result = document.querySelector('#result');




amount.onkeyup = () => {

    if(amount.value == '' || amount.value == null){
        amount.style.border = '1px solid red';
    }else{
        amount.style.border = '1px solid rgb(0, 255, 0)';
    }

}


from.onchange = () => {

    if(from.value == '1'){
        currencyIcon.innerHTML = '$';
    }else if(from.value == '1.26'){
        currencyIcon.innerHTML = '$';
    }else if(from.value == '0.89'){
        currencyIcon.innerHTML = '€';
    }else if(from.value == '85.72'){
        currencyIcon.innerHTML = '৳';
    }else if(from.value == '0.74'){
        currencyIcon.innerHTML = '£';
    }

}

let currency;

to.onchange = () => {

    if(to.value == '1'){
        currency = '$';
    }else if(to.value == '1.26'){
        currency = '$';
    }else if(to.value == '0.89'){
        currency = '€';
    }else if(to.value == '85.72'){
        currency = '৳';
    }else if(to.value == '0.74'){
        currency = '£';
    }

}


calculate.onclick = () => {

    result.innerHTML = `<h4 class="alert alert-success mt-5 text-center">Your Exchange Amount is = ${((amount.value / from.value) * to.value).toFixed(2)} ${currency}</h4>`;

    amount.value = '';
    from.value = '';
    to.value = '';

}


reset.onclick = () => {

    result.innerHTML = '';

}


