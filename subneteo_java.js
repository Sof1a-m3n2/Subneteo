
function subneteo(){

    

    var ip1=document.getElementById("ip1").value;
    var ip2=document.getElementById("ip2").value;
    var ip3=document.getElementById("ip3").value;
    var ip4=document.getElementById("ip4").value;
    var subred=document.getElementById("subred").value;

    //Ip completa
    document.getElementById('ip_completa').innerHTML= ip1+"."+ip2+"."+ip3+"."+ip4;

    //Ip binaria

    var ipBinario={}

    ipBinario[1]=String("00000000"+parseInt(ip1,10).toString(2)).slice(-8);
    ipBinario[2]=String("00000000"+parseInt(ip2,10).toString(2)).slice(-8);
    ipBinario[3]=String("00000000"+parseInt(ip3,10).toString(2)).slice(-8);
    ipBinario[4]=String("00000000"+parseInt(ip4,10).toString(2)).slice(-8);

    var clase="";

    if(ip1 <= 127){

        clase="A";
    }

    else if(ip1 >=128 && ip1 <= 191){

        clase="B";
    }

    else if(ip1 >=192 && ip1 <= 223){

        clase="C";
    }

    //Mascara

    var masc=subred;

    var bloque = Math.ceil(masc/8);

    var bloq_binario = ipBinario[bloque];

    var conteo = masc%8;

    if(conteo == 0)bloqueo++;

    var mascara_binaria="";

    var mascara_decimal="";

    for(var i=1;1<=8;i++){

        if(conteo>=1){
            mascara_binaria+="1";

        }
        else{

            mascara_binaria+="0";

        }

        //Binario a decimal

        mascara_decimal=parseInt(mascara_binaria,2);

        var mask="";
        var maskBinario="";

        for(var i=1;i<=4,i++){

            if(bloque>1){

                mask+="255"
                maskBinario="11111111";
            }
            else if (bloque == i){
                mask += mascara_decimal;

                maskBinario="mascara_binaria";
            }

            else{
                mask+=0
                maskBinario="00000000";
            }

            if(i<4){

                mask+=".";
                maskBinario=".";
            }


        }

        document.getElementById('mask').innerHTML=mask;
        document.getElementById('ip_bin').innerHTML=ipBinario[1]+"."+ipBinario[2]+"."+ipBinario[3]+"."+ipBinario[4];




        



    }














}
