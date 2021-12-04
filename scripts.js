/*!
* Start Bootstrap - Business Frontpage v5.0.7 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
function convert() {

    if (flexRadioDefaultdec.checked && flexRadioDefaultbin1.checked){
    // Aqui, é feita a conversão de decimal para binário. toString retorna a string de um número
    //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número decimal.
    // O método toString [2] retorna a string na base 2; ou seja, retorna o número binário daquele decimal.
    const number = parseInt(document.getElementById("base1").value);

    // converter para binário:
    const result = number.toString(2);

    document.getElementById("Converter").innerHTML=("Aqui:" + ' ' + 'Binary:' + ' ' + result);
}

    if (flexRadioDefaultbin.checked && flexRadioDefaultdec1.checked){
    //Aqui, é feita a conversão de binário para decimal.
    //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número binário.

    const number = parseInt(document.getElementById("base1").value);

    // converter para decimal:
    const result = parseInt(number, 2);

    document.getElementById("Converter").innerHTML=("Aqui:" + 'Decimal:' + ' ' + result);
}

if (flexRadioDefaultbin.checked && flexRadioDefaultbin1.checked || flexRadioDefaultdec.checked && flexRadioDefaultdec1.checked || flexRadioDefaultoct.checked && flexRadioDefaultoct1.checked || flexRadioDefaulthex.checked && flexRadioDefaulthex1.checked ){
    alert("Os números devem estar em bases diferentes para realizar a conversão");
}




}