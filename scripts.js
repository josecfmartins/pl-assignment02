/*!
* Start Bootstrap - Business Frontpage v5.0.7 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
function convert() {

    var base1 = document.getElementById("base1").value; 
    var i;
    var base = 1;
    var bin;  
    var dec = 0; 
    var hex; 
    var oct; 
    var temp;
    int[100]; bin_num = new int[100];
    int[100]; oct_num = new oct[100];
    int[100]; hex_num = new hex[100];
    
    if (flexRadioDefaultdec.checked && flexRadioDefaultbin1.checked){
        //Conversão decimal para binário:
        //base1, neste caso, é o número decimal, retirado da caixa de texto no HTML.
        base1 = dec;
        for (i = 0; dec > 0; ++i){
            bin_num[i] = dec % 2;
            dec = dec / 2;
        }
        for (i = i - 1; i >= 0; --i){
         
        document.getElementById("converter").innerHTML ="Número binário:" + bin_num[i];
        }    
    
        document.getElementById("converter").innerHTML ="Número decimal:" + base1;
    }
    
    if (flexRadioDefaultbin.checked && flexRadioDefaultdec1.checked){
        //Conversão binário para decimal:
        //base1, neste caso, é o número binário, retirado da caixa de texto no HTML.
        base1 = bin;
        while (bin > 0){
            temp = bin % 10;
            dec = dec + temp * base;
            base = base * 2;
        }
        document.getElementById("converter").innerHTML ="Número binário:" + base1; 
        document.getElementById("converter").innerHTML ="Número decimal equivalente:" + dec; 
    }
    
    if (flexRadioDefaultdec.checked && flexRadioDefaultoct1.checked){
        //Conversão decimal para octal:
        //base1, neste caso, é o número decimal, retirado da caixa de texto no HTML.
        for (i = 0; base1 > 0; ++i){
            oct_num[i] = base1 % 8;
            base1 = base1 / 8;
        }
        for (i = i - 1; i >= 0; --i){
            document.getElementById("converter").innerHTML ="Número decimal:" + base1; 
            document.getElementById("converter").innerHTML ="Número octal:" + oct_num[i];
            }   
    }   
    
    if (flexRadioDefaultdec.checked && flexRadioDefaulthex1.checked){
        //Conversão decimal para hexadecimal:
        //base1, neste caso, é o número decimal, retirado da caixa de texto no HTML.
        for (i = 0; base1 > 0; ++i){
            oct_num[i] = base1 % 16;
            base1 = base1 / 16;
        }
        for (i = i - 1; i >= 0; --i){
            document.getElementById("converter").innerHTML ="Número decimal:" + base1; 
            document.getElementById("converter").innerHTML ="Número hexadecimal:" + hex_num[i];
            }   
    }   
    
    if (flexRadioDefaultbin.checked && flexRadioDefaultoct1.checked){
        //Conversão binária para octal. É preciso, primeiro, converter de binário para decimal:
        //base1, neste caso, é o número binário, retirado da caixa de texto no HTML.
        for (i = 0; base1 > 0; ++i){
            dec = dec + Math.pow(2, i) * (base1 % 10);
            base1 = base1 / 10;
        }
        
        //Retornamos o número decimal encontrado
        return base1;
    
        //Agora, é realizada a conversão de decimal para octal:
        for (i = 0; base1 > 0; ++i){
            oct_num[i] = base1 % 8;
            base1 = base1 / 8;
        }
        for (i = i - 1; i >= 0; --i){
            document.getElementById("converter").innerHTML ="Número binário:" + base1;
            document.getElementById("converter").innerHTML ="Número decimal:" + base1; 
            document.getElementById("converter").innerHTML ="Número octal:" + oct_num[i];
            }   
    }
    
    if (flexRadioDefaultbin.checked && flexRadioDefaulthex1.checked){
        //Conversão binário para hexadecimal. É preciso, primeiro, converter de binário para decimal:
        //base1, neste caso, é o número binário, retirado da caixa de texto no HTML.
        for (i = 0; base1 > 0; ++i){
            dec = dec + Math.pow(2, i) * (base1 % 10);
            base1 = base1 / 10;
        }
        
        //Retornamos o número decimal encontrado
        return base1;
    
        //Agora, é realizada a conversão de decimal para hexadecimal:
        for (i = 0; base1 > 0; ++i){
            hex_num[i] = base1 % 16;
            base1 = base1 / 16;
        }
        for (i = i - 1; i >= 0; --i){
            document.getElementById("converter").innerHTML ="Número binário:" + base1;
            document.getElementById("converter").innerHTML ="Número decimal:" + base1; 
            document.getElementById("converter").innerHTML ="Número octal:" + hex_num[i];
            }   
    }
    
    if (flexRadioDefaultoct.checked && flexRadioDefaultdec1.checked){
    //Conversão octal para decimal. 
    //base1, neste caso, é o número binário, retirado da caixa de texto no HTML.
    while (1){
        if (oct == 0){
            break;
        }
        else {
            temp = base1 % 10;
            dec += temp * Math.pow(8, i);
            oct = oct / 10;
            ++i; 
        }
    }
    
    }
    
    if (flexRadioDefaultoct.checked && flexRadioDefaultbin1.checked){
    //Conversão octal para binário. É preciso, primeiro, converter o número octal para decimal e, a partir daí, converter para binário
    //base1, neste caso, é o número octal, retirado da caixa de texto no HTML.
    }
    
    
    
    //Para bases iguais: ERRO!
    if (flexRadioDefaulthex.checked && flexRadioDefaulthex1.checked){
        //Teste para conferir se o oneclick está a funcionar
        document.getElementById("converter").innerHTML ="As bases devem ser diferentes para que a conversão possa ser realizada";
    
    }
    
    
       
    
    
    
    
    
    
    }