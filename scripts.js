/*!
* Start Bootstrap - Business Frontpage v5.0.7 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
function convert() {

    var base1 = document.getElementById("base1").value; 
    var i;
    var bin;  
    var dec; 
    var hex; 
    var oct; 
    int[100]; bin_num = new int[100];
    
    if (flexRadioDefaultdec.checked && flexRadioDefaultbin1.checked){
        //Conversão decimal para binário:
        for (i = 0; base1 > 0; ++i){
            bin_num[i] = base1 % 2;
            base1 = base1 / 2;
        }
        for (i = i - 1; i >= 0; --i){
        document.getElementById("converter").innerHTML ="Número decimal:" + base1; 
        document.getElementById("converter").innerHTML ="Número binário:" + bin_num[i];
        }    
    }
    
    
    
    
    
    }