/*!
* Start Bootstrap - Business Frontpage v5.0.7 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
function convert() {

    //Conversão Decimal para Binário:
    if (flexRadioDefaultdec.checked && flexRadioDefaultbin1.checked){
    // Aqui, é feita a conversão de decimal para binário. toString retorna a string de um número
    //Nesta caso, "base1", que é o valor entrada no HTML, corresponde ao número decimal.
    //Aqui, o método toString retorna a string na base 2; ou seja, retorna o número binário daquele decimal.
    
    const number3 = parseInt(document.getElementById("base1").value);
    //Aqui é feito um teste para avaliar se o número está em base decimal

    if (!isDecimal(number3)){
        alert("Número não está em base decimal!");
    return;
    }

    // converter para binário:
    const result = number3.toString(2);

    //Função para rodar a página até a caixa onde os resultados são printados após apertar o botão "Calcular"
    document.getElementById('Converter').scrollIntoView();

    document.getElementById("Converter").innerHTML=("Binário:" + ' ' + result + "<p></p>" + "<h4>Mais sobre as bases<h4>" + "<p></p>" + "<h5>Sistema Decimal:</h5>" + "<p></p>" + "O princípio fundamental do sistema decimal é que dez unidades de uma ordem qualquer formam uma de ordem imediatamente superior. Depois das ordens, as unidades constitutivas dos números são agrupadas em classes, em que cada classe tem três ordens, em que cada ordem tem uma denominação especial sendo idênticas às mesmas ordens de outras classes." + "<p></p>" + "<h5>Sistema Binário:</h5>" + "O sistema binário, ou de base 2, é um sistema de numeração posicional em que todas as quantidades se representam com base em dois números, ou seja, zero e um (0 e 1)." );
    
    }

    //Conversão Binário para Decimal:
    if (flexRadioDefaultbin.checked && flexRadioDefaultdec1.checked){
    //Aqui, é feita a conversão de binário para decimal.
    //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número binário.

    const number = parseInt(document.getElementById("base1").value);
    //Aqui é feito um teste para verificar que o número é binário antes de inciar a conversão
       if (!isBinary(number)) {
    	alert("Número não binário!");
    	return;
    }    
    // converter para decimal:
    const result = parseInt(number, 2);

    //Função para rodar a página até a caixa onde os resultados são printados após apertar o botão "Calcular"
    document.getElementById('Converter').scrollIntoView();

    document.getElementById("Converter").innerHTML=("Decimal:" + ' ' + result + "<p></p>" + "<h4>Mais sobre as bases<h4>" + "<h5>Sistema Binário:</h5>" + "O sistema binário ou de base 2 é um sistema de numeração posicional em que todas as quantidades se representam com base em dois números, ou seja, zero e um (0 e 1)." + "<p></p>" + "<h5>Sistema Decimal:</h5>" + "<p></p>" + "O princípio fundamental do sistema decimal é que dez unidades de uma ordem qualquer formam uma de ordem imediatamente superior. Depois das ordens, as unidades constitutivas dos números são agrupadas em classes, em que cada classe tem três ordens, em que cada ordem tem uma denominação especial sendo idênticas às mesmas ordens de outras classes."  );
    }
    
    //Conversão Decimal para Octal:
    if (flexRadioDefaultdec.checked && flexRadioDefaultoct1.checked){
        // Aqui, é feita a conversão de decimal para octal. toString retorna a string de um número
        //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número decimal.
        // O método toString [8] retorna a string na base 8; ou seja, retorna o número octal daquele decimal.
        const number3 = parseInt(document.getElementById("base1").value);
        //Aqui é feito um teste para avaliar se o número está em base decimal

        if (!isDecimal(number3)){
            alert("Número não está em base base decimal!");
        return;
        }
        // converter para octal:
        const result = number3.toString(8);

        //Função para rodar a página até a caixa onde os resultados são printados após apertar o botão "Calcular"
        document.getElementById('Converter').scrollIntoView();
    
        document.getElementById("Converter").innerHTML=("Octal:" + ' ' + result + "<p></p>" + "<h4>Mais sobre as bases<h4>" + "<p></p>" + "<h5>Sistema Decimal:</h5>" + "<p></p>" + "O princípio fundamental do sistema decimal é que dez unidades de uma ordem qualquer formam uma de ordem imediatamente superior. Depois das ordens, as unidades constitutivas dos números são agrupadas em classes, em que cada classe tem três ordens, em que cada ordem tem uma denominação especial sendo idênticas às mesmas ordens de outras classes." + "<p></p>" + "<h5>Sistema Octal:</h5>" + "Sistema Octal é um sistema de numeração cuja base é 8, ou seja, utiliza 8 símbolos para a representação de quantidade." + "No ocidente, estes símbolos são os algarismos arábicos. O octal foi muito utilizado em informática como uma alternativa ais compacta ao sistema binário na programação." );
        
        }
    
        //Conversão Octal para Decimal:
        if (flexRadioDefaultoct.checked && flexRadioDefaultdec1.checked){
        //Aqui, é feita a conversão de octal para decimal.
        //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número octal.
    
        const number2 = parseInt(document.getElementById("base1").value);
        //Aqui é feito um teste para verificar se o número entrado no HTML está em base octal

        if (!isOctal(number2)){
            alert("Número não está em base octal!");
    	return;

        }
    
        // converter para decimal:
        const result = parseInt(number2, 8);

        //Função para rodar a página até a caixa onde os resultados são printados após apertar o botão "Calcular"
        document.getElementById('Converter').scrollIntoView();
    
        document.getElementById("Converter").innerHTML=("Decimal:" + ' ' + result + "<p></p>" + "<h4>Mais sobre as bases<h4>" + "<h5>Sistema Octal:</h5>" + "Sistema Octal é um sistema de numeração cuja base é 8, ou seja, utiliza 8 símbolos para a representação de quantidade." + "<p></p>" + "No ocidente, estes símbolos são os algarismos arábicos. O octal foi muito utilizado em informática como uma alternativa ais compacta ao sistema binário na programação." + "<p></p>" + "<h5>Sistema Decimal:</h5>" + "<p></p>" + "O princípio fundamental do sistema decimal é que dez unidades de uma ordem qualquer formam uma de ordem imediatamente superior. Depois das ordens, as unidades constitutivas dos números são agrupadas em classes, em que cada classe tem três ordens, em que cada ordem tem uma denominação especial sendo idênticas às mesmas ordens de outras classes."  );
        }
    
        //Conversão Decimal para Hexadecimal:
        if (flexRadioDefaultdec.checked && flexRadioDefaulthex1.checked){
        // Aqui, é feita a conversão de decimal para hexadecimal. toString retorna a string de um número
        //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número decimal.
        // O método toString [16] retorna a string na base 16; ou seja, retorna o número hexadecimal daquele decimal.
        const number3 = parseInt(document.getElementById("base1").value);
        //Aqui é feito um teste para avaliar se o número está em base decimal

            if (!isDecimal(number3)){
                alert("Número não está em base decimal!");
            return;
            }
    
        // converter para hexadecimal:
        // result representa o valor em hexadecimal
        // Hexadecimal em JAVASCRIPT não faz diferenciação em maiúscula e minúscula, entretanto, para melhor compreensão, foi acrescentado o toUpperCase para que as letras 
        //A, B, C, D, E, F sejam apresentadas em maiúsculas (UpperCase).
        const result = number3.toString(16).toUpperCase();

        //Função para rodar a página até a caixa onde os resultados são printados após apertar o botão "Calcular"
        document.getElementById('Converter').scrollIntoView();
    
        document.getElementById("Converter").innerHTML=("Hexadecimal:" + ' ' + result + "<p></p>" + "<h4>Mais sobre as bases<h4>" + "<p></p>" + "<h5>Sistema Decimal:</h5>" + "<p></p>" + "O princípio fundamental do sistema decimal é que dez unidades de uma ordem qualquer formam uma de ordem imediatamente superior. Depois das ordens, as unidades constitutivas dos números são agrupadas em classes, em que cada classe tem três ordens, em que cada ordem tem uma denominação especial sendo idênticas às mesmas ordens de outras classes." + "<p></p>" + "<h5>Sistema Hexadecimal:</h5>" + "O sistema hexadecimal é um sistema de numeração posicional que representa os números em base 16, empregando, portanto, 16 símbolos." + "<p></p>" + "Conjunto de simbolos: S = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}" );
        
        }
    
        //Conversão Hexadecimal para Decimal:
        if (flexRadioDefaulthex.checked && flexRadioDefaultdec1.checked){
        //Aqui, é feita a conversão de hexadecimal para decimal.
        //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número hexadecimal.
    
        //Aqui é feito um teste para verificar que o número é hexa antes de inciar a conversão
        let number1 = (document.getElementById("base1").value);

        if (!isHexa(number1)) {
            alert("Número não está em base hexadecimal!");
    	    return;
            }  
    
        // converter para decimal:
        let result = parseInt(number1, 16);
        

        //Função para rodar a página até a caixa onde os resultados são printados após apertar o botão "Calcular"
        document.getElementById('Converter').scrollIntoView();
    
        document.getElementById("Converter").innerHTML=("Decimal:" + ' ' + result + "<p></p>" + "<h4>Mais sobre as bases<h4>" + "<h5>Sistema Hexadecimal:</h5>" + "O sistema hexadecimal é um sistema de numeração posicional que representa os números em base 16, empregando, portanto, 16 símbolos." + "<p></p>" + "Conjunto de simbolos: S = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}" + "<h5>Sistema Decimal:</h5>" + "<p></p>" + "O princípio fundamental do sistema decimal é que dez unidades de uma ordem qualquer formam uma de ordem imediatamente superior. Depois das ordens, as unidades constitutivas dos números são agrupadas em classes, em que cada classe tem três ordens, em que cada ordem tem uma denominação especial sendo idênticas às mesmas ordens de outras classes."  );
        }
    
        //Conversão Binário para Hexadecimal:
        if (flexRadioDefaultbin.checked && flexRadioDefaulthex1.checked){
            //Aqui, é feita a conversão de binário para hexadecimal
            //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número binário.
            const number = parseInt(document.getElementById("base1").value);
            //Aqui é feito um teste para verificar que o número é binário antes de inciar a conversão
             if (!isBinary(number)) {
            alert("Número não binário!");
    	    return;
            }  
        
            // converter para hexadecimal:
            // result representa o valor em hexadecimal
            // Hexadecimal em JAVASCRIPT não faz diferenciação em maiúscula e minúscula, entretanto, para melhor compreensão, foi acrescentado o toUpperCase para que as letras 
            //A, B, C, D, E, F sejam apresentadas em maiúsculas (UpperCase).	
            const result = parseInt(number, 2).toString(16).toUpperCase();

        //Função para rodar a página até a caixa onde os resultados são printados após apertar o botão "Calcular"
        document.getElementById('Converter').scrollIntoView();
        
        document.getElementById("Converter").innerHTML=("Hexadecimal:" + ' ' + result + "<p></p>" + "<h4>Mais sobre as bases<h4>" + "<p></p>" + "<h5>Sistema Binário:</h5>" + "O sistema binário ou de base 2 é um sistema de numeração posicional em que todas asquantidades se representam com base em dois números, ou seja, zero e um (0 e 1)." + "<p></p>" + "<h5>Sistema Hexadecimal:</h5>" + "<p></p>" + "O sistema hexadecimal é um sistema de numeração posicional que representa os números em base 16, empregando, portanto, 16 símbolos." + "<p></p>" + "Conjunto de simbolos: S = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}" );
            }
    
        //Conversão Hexadecimal para Binário:
        if (flexRadioDefaulthex.checked && flexRadioDefaultbin1.checked){
        //Aqui, é feita a conversão de Hexadecimal para Binário.
        //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número hexadecimal.
        //Aqui é feito um teste para verificar que o número é hexa antes de inciar a conversão
        let number1 = (document.getElementById("base1").value);

        if (!isHexa(number1)) {
            alert("Número não está em base hexadecimal!");
    	    return;
            }  
    
        // converter para Binário:
        let result = parseInt(number1, 16).toString(2);

        //Função para rodar a página até a caixa onde os resultados são printados após apertar o botão "Calcular"
        document.getElementById('Converter').scrollIntoView();
    
        document.getElementById("Converter").innerHTML=("Binário:" + ' ' + result + "<p></p>" + "<h4>Mais sobre as bases<h4>" + "<h5>Sistema Hexadecimal:</h5>" + "O sistema hexadecimal é um sistema de numeração posicional que representa os números em base 16, empregando, portanto, 16 símbolos." + "<p></p>" + "Conjunto de simbolos: S = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}" + "<p></p>" + "<h5>Sistema Binário:</h5>" + "<p></p>" + "O sistema binário ou de base 2 é um sistema de numeração posicional em que todas as quantidades se representam com base em dois números, ou seja, zero e um (0 e 1)." );
        }
  
        
       //Conversão Binário para Octal:
       if (flexRadioDefaultbin.checked && flexRadioDefaultoct1.checked){
        // Aqui, é feita a conversão de binário para octal. toString retorna a string de um número
        //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número binário.
        // O método toString [8] retorna a string na base 8; ou seja, retorna o número binário daquele octal.
        
        //Aqui é feito um teste para verificar que o número é binário antes de inciar a conversão
        const number = parseInt(document.getElementById("base1").value);

        if (!isBinary(number)) {
            alert("Número não binário!");
    	    return;
            }  
    
        // converter para octal:
        const result = parseInt(number, 2).toString(8);

        //Função para rodar a página até a caixa onde os resultados são printados após apertar o botão "Calcular"
        document.getElementById('Converter').scrollIntoView();
    
        document.getElementById("Converter").innerHTML=("Octal:" + ' ' + result + "<p></p>" + "<h4>Mais sobre as bases<h4>" + "<p></p>" + "<h5>Sistema Binário:</h5>" + "<p></p>" + "O sistema binário ou de base 2 é um sistema de numeração posicional em que todas as quantidades se representam com base em dois números, ou seja, zero e um (0 e 1)." + "<p></p>" + "<h5>Sistema Octal:</h5>" + "Sistema Octal é um sistema de numeração cuja base é 8, ou seja, utiliza 8 símbolos para a representação de quantidade." + "No ocidente, estes símbolos são os algarismos arábicos. O octal foi muito utilizado em informática como uma alternativa ais compacta ao sistema binário na programação" );
        
        }
       
        //Conversão Octal para Binário:
    if (flexRadioDefaultoct.checked && flexRadioDefaultbin1.checked){
        // Aqui, é feita a conversão de octal para binário. toString retorna a string de um número
        //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número octal.
        // O método toString [2] retorna a string na base 2; ou seja, retorna o número binário daquele octal.
        const number2 = parseInt(document.getElementById("base1").value);
        //Aqui é feito um teste para verificar se o número entrado no HTML está em base octal

        if (!isOctal(number2)){
            alert("Número não está em base octal!");
    	return;

        }
    
    
        // converter para binário:
        const result = parseInt(number2, 8).toString(2);

        //Função para rodar a página até a caixa onde os resultados são printados após apertar o botão "Calcular"
        document.getElementById('Converter').scrollIntoView();
    
        document.getElementById("Converter").innerHTML=("Binário:" + ' ' + result + "<p></p>" + "<h4>Mais sobre as bases<h4>" + "<p></p>" + "<h5>Sistema Octal:</h5>" + "<p></p>" + "Sistema Octal é um sistema de numeração cuja base é 8, ou seja, utiliza 8 símbolos para a representação de quantidade." + "No ocidente, estes símbolos são os algarismos arábicos. O octal foi muito utilizado em informática como uma alternativa ais compacta ao sistema binário na programação." + "<p></p>" + "<h5>Sistema Binário:</h5>" + "O sistema binário ou de base 2 é um sistema de numeração posicional em que todas asquantidades se representam com base em dois números, ou seja, zero e um (0 e 1)." );
        
        }
    //Conversão Hexadecimal para Octal:
    if (flexRadioDefaulthex.checked && flexRadioDefaultoct1.checked){
        // Aqui, é feita a conversão de decimal para octal. toString retorna a string de um número
        //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número hexadecimal.
        // O método toString [8] retorna a string na base 8; ou seja, retorna o octal daquele hexadecimal.
        
        //Aqui é feito um teste para verificar que o número é hexa antes de inciar a conversão
        let number1 = (document.getElementById("base1").value);

        if (!isHexa(number1)) {
            alert("Número não está em base hexadecimal!");
    	    return;
            }  

        //converter para octal:
        let result = parseInt(number1, 16).toString(8);

        //Função para rodar a página até a caixa onde os resultados são printados após apertar o botão "Calcular"
        document.getElementById('Converter').scrollIntoView();

        document.getElementById("Converter").innerHTML=("Octal:" + ' ' + result + "<p></p>" + "<h4>Mais sobre as bases<h4>" + "<p></p>" + "<h5>Sistema Hexadecimal:</h5>" + "<p></p>" + "O sistema hexadecimal é um sistema de numeração posicional que representa os números em base 16, empregando, portanto, 16 símbolos." + "<p></p" + " Conjunto de simbolos: S = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}" + "<p></p>"  + "<h5>Sistema Octal:</h5>" + "Sistema Octal é um sistema de numeração cuja base é 8, ou seja, utiliza 8 símbolos para a representação de quantidade." + "No ocidente, estes símbolos são os algarismos arábicos. O octal foi muito utilizado em informática como uma alternativa ais compacta ao sistema binário na programação");

        }

        //Conversão Octal para Hexadecimal:
        if (flexRadioDefaultoct.checked && flexRadioDefaulthex1.checked){
        //Aqui, é feita a conversão de octal para decimal.
        //Nesta caso, "base1", que é o valor entrada no HTML corresponde ao número hexadecimal

        const number2 = parseInt(document.getElementById("base1").value);
        //Aqui é feito um teste para verificar se o número entrado no HTML está em base octal

        if (!isOctal(number2)){
            alert("Número não está em base octal!");
    	return;

        }

        // converter para hexadecimal:
        // Hexadecimal em JAVASCRIPT não faz diferenciação em maiúscula e minúscula, entretanto, para melhor compreensão, foi acrescentado o toUpperCase para que as letras 
        //A, B, C, D, E, F sejam apresentadas em maiúsculas (UpperCase).
        const result = parseInt(number2, 8).toString(16).toUpperCase();

        //Função para rodar a página até a caixa onde os resultados são printados após apertar o botão "Calcular"
        document.getElementById('Converter').scrollIntoView();

        document.getElementById("Converter").innerHTML=("Hexadecimal:" + ' ' + result + "<p></p>" + "<h4>Mais sobre as bases<h4>" + "<h5>Sistema Octal:</h5>" + "Sistema Octal é um sistema de numeração cuja base é 8, ou seja, utiliza 8 símbolos para a representação de quantidade." + "No ocidente, estes símbolos são os algarismos arábicos. O octal foi muito utilizado em informática como uma alternativa ais compacta ao sistema binário na programação" + "<p></p>" + "<h5>Sistema Hexadecimal:</h5>" + "<p></p>" + "O sistema hexadecimal é um sistema de numeração posicional que representa os números em base 16, empregando, portanto, 16 símbolos." + "<p></p>" + "Conjunto de simbolos: S = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}");
        }


    
    //Alerta para tentar converter um número para a mesma base em que o mesmo se encontra    
    if (flexRadioDefaultbin.checked && flexRadioDefaultbin1.checked || flexRadioDefaultdec.checked && flexRadioDefaultdec1.checked || flexRadioDefaultoct.checked && flexRadioDefaultoct1.checked || flexRadioDefaulthex.checked && flexRadioDefaulthex1.checked ){
    alert("As bases devem ser diferentes para realizar a conversão");
    }

    else {
        document.getElementById('Converter').style.visibility='visible' ;
  }

}

function clearResult(){
    document.getElementById("base1").value = ''
  }

function isBinary(number) {
    //O número entrado no HTML deve ser convertido em uma string para que possamo utilizar o indexOf
    //É preciso fazer um cliclo que percorra toda a string e verifique se os elementos são encontrados na mesma. 
    //Caso o ciclo não seja feito, o indexOf vai procurar apenas "01" e, se encontrar, dirá que o número
    //é binário
    numberString = number.toString();

    for(let i=0; i<numberString.length; i++) {
    	if ('01'.indexOf(numberString[i]) === -1)
      	return false;
<<<<<<< HEAD
=======
    }
    return true;
}

function isHexa(number) {
    //O número entrado no HTML deve ser convertido em uma string para que possamo utilizar o indexOf
    //É preciso fazer um cliclo que percorra toda a string e verifique se os elementos são encontrados na mesma. 
    //Caso o ciclo não seja feito, o indexOf vai procurar apenas "01" e, se encontrar, dirá que o número
    //é hexadecimal
    numberString = number.toString();

    for(let i=0; i<numberString.length; i++) {
    	if ('0123456789ABCDEFabcdef'.indexOf(numberString[i]) === -1)
      	return false;
        }
        return true;
        

}

function isOctal(number) {
    //O número entrado no HTML deve ser convertido em uma string para que possamo utilizar o indexOf
    //É preciso fazer um cliclo que percorra toda a string e verifique se os elementos são encontrados na mesma. 
    //Caso o ciclo não seja feito, o indexOf vai procurar apenas "01" e, se encontrar, dirá que o número
    //é octal
    numberString = number.toString();

    for(let i=0; i<numberString.length; i++) {
    	if ('01234567'.indexOf(numberString[i]) === -1)
      	return false;
    }
    return true;
}

function isDecimal(number) {
    //O número entrado no HTML deve ser convertido em uma string para que possamo utilizar o indexOf
    //É preciso fazer um cliclo que percorra toda a string e verifique se os elementos são encontrados na mesma. 
    //Caso o ciclo não seja feito, o indexOf vai procurar apenas "01" e, se encontrar, dirá que o número
    //é decimal
    numberString = number.toString();

    for(let i=0; i<numberString.length; i++) {
    	if ('0123456789,;-'.indexOf(numberString[i]) === -1)
      	return false;
>>>>>>> 8c03d0d01f5483bcb615166917df0b5f79cf951a
    }
    return true;
}

function isHexa(number) {
    //O número entrado no HTML deve ser convertido em uma string para que possamo utilizar o indexOf
    //É preciso fazer um cliclo que percorra toda a string e verifique se os elementos são encontrados na mesma. 
    //Caso o ciclo não seja feito, o indexOf vai procurar apenas "01" e, se encontrar, dirá que o número
    //é hexadecimal
    numberString = number.toString();

    for(let i=0; i<numberString.length; i++) {
    	if ('0123456789ABCDEFabcdef'.indexOf(numberString[i]) === -1)
      	return false;
        }
        return true;
        

}

function isOctal(number) {
    //O número entrado no HTML deve ser convertido em uma string para que possamo utilizar o indexOf
    //É preciso fazer um cliclo que percorra toda a string e verifique se os elementos são encontrados na mesma. 
    //Caso o ciclo não seja feito, o indexOf vai procurar apenas "01" e, se encontrar, dirá que o número
    //é octal
    numberString = number.toString();

    for(let i=0; i<numberString.length; i++) {
    	if ('01234567'.indexOf(numberString[i]) === -1)
      	return false;
    }
    return true;
}

function isDecimal(number) {
    //O número entrado no HTML deve ser convertido em uma string para que possamo utilizar o indexOf
    //É preciso fazer um cliclo que percorra toda a string e verifique se os elementos são encontrados na mesma. 
    //Caso o ciclo não seja feito, o indexOf vai procurar apenas "01" e, se encontrar, dirá que o número
    //é decimal
    numberString = number.toString();

    for(let i=0; i<numberString.length; i++) {
    	if ('0123456789,;-'.indexOf(numberString[i]) === -1)
      	return false;
    }
    return true;
}