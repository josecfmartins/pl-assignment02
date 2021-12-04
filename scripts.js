/*!
* Start Bootstrap - Business Frontpage v5.0.7 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
function convert() {

    //Conversão Decimal para Binário:
    if (flexRadioDefaultdec.checked && flexRadioDefaultbin1.checked){
    // Aqui, é feita a conversão de decimal para binário. toString retorna a string de um número
    //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número decimal.
    // O método toString [2] retorna a string na base 2; ou seja, retorna o número binário daquele decimal.
    const number = parseInt(document.getElementById("base1").value);

    // converter para binário:
    const result = number.toString(2);

    document.getElementById("Converter").innerHTML=("Binário:" + ' ' + result + "<p></p>" + "<h4>Mais sobre as bases<h4>" + "<p></p>" + "<h5>Sistema Decimal:</h5>" + "<p></p>" + "O princípio fundamental do sistema decimal é que dez unidades de uma ordem qualquer formam uma de ordem imediatamente superior. Depois das ordens, as unidades constitutivas dos números são agrupadas em classes, em que cada classe tem três ordens, em que cada ordem tem uma denominação especial sendo idênticas às mesmas ordens de outras classes." + "<p></p>" + "<h5>Sistema Binário:</h5>" + "O sistema binário ou de base 2 é um sistema de numeração posicional em que todas asquantidades se representam com base em dois números, ou seja, zero e um (0 e 1)." );
    
    }

    //Conversão Binário para Decimal:
    if (flexRadioDefaultbin.checked && flexRadioDefaultdec1.checked){
    //Aqui, é feita a conversão de binário para decimal.
    //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número binário.

    const number = parseInt(document.getElementById("base1").value);

    // converter para decimal:
    const result = parseInt(number, 2);

    document.getElementById("Converter").innerHTML=("Decimal:" + ' ' + result + "<p></p>" + "<h4>Mais sobre as bases<h4>" + "<h5>Sistema Binário:</h5>" + "O sistema binário ou de base 2 é um sistema de numeração posicional em que todas asquantidades se representam com base em dois números, ou seja, zero e um (0 e 1)." + "<p></p>" + "<h5>Sistema Decimal:</h5>" + "<p></p>" + "O princípio fundamental do sistema decimal é que dez unidades de uma ordem qualquer formam uma de ordem imediatamente superior. Depois das ordens, as unidades constitutivas dos números são agrupadas em classes, em que cada classe tem três ordens, em que cada ordem tem uma denominação especial sendo idênticas às mesmas ordens de outras classes."  );
    }


//Alerta para tentar converter um número para a mesma base em que o mesmo se encontra    
    if (flexRadioDefaultbin.checked && flexRadioDefaultbin1.checked || flexRadioDefaultdec.checked && flexRadioDefaultdec1.checked || flexRadioDefaultoct.checked && flexRadioDefaultoct1.checked || flexRadioDefaulthex.checked && flexRadioDefaulthex1.checked ){
    alert("Os números devem estar em bases diferentes para realizar a conversão");
    }

    else {
        document.getElementById('Converter').style.visibility='visible' ;
  }




}
