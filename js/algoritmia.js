  
function problema1(){
    var p1_input= document.querySelector('#p1-input').value;

    var p1_array= p1_input.split(' ').reverse();

    var p1_res = '';


    p1_array.forEach(function (palabra, i){
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });


    document.querySelector('#p1-output').textContent= p1_res;
}



function problema2(){
    var p2_x1= document.querySelector('#p2-x1').value;
    var p2_x2= document.querySelector('#p2-x2').value;
    var p2_x3= document.querySelector('#p2-x3').value;
    var p2_x4= document.querySelector('#p2-x4').value;
    var p2_x5= document.querySelector('#p2-x5').value;

    var p2_y1= document.querySelector('#p2-y1').value;
    var p2_y2= document.querySelector('#p2-y2').value;
    var p2_y3= document.querySelector('#p2-y3').value;
    var p2_y4= document.querySelector('#p2-y4').value;
    var p2_y5= document.querySelector('#p2-y5').value;

    var v1= [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2= [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    v1= v1.sort(function (a,b) {
        return b-a;
    });
    v2= v2.sort(function (a,b) {
        return b-a;
    });
    
    v2 = v2.reverse();

    var p2_producto= 0;
     for(var i=0; i<v1.length; i++){
         p2_producto+= v1[i]*v2[i];
     }
     document.querySelector('#p2-output').textContent= "el producto escalar minimo: "+ p2_producto;
}

function validarletras(e){
    var code=(document.all)?e.keyCode:e.which;
    if((code>=65 && code<=90)||code==44||(code>=129 && code<=165)||(String.fromCharCode(code)=="Ñ")) { 
        return true;
      } else{ 
        return false;}
}


var comprobar = "QWERTYUIOPASDFGHJKLÑZXCVBNM,";

function problema3(){
    
    var p3_input= document.querySelector('#p3-input').value;

    if(p3_input.length<30){
        //hacer un for para comprobar que todos los caracteres obtenidos del input esten pertenezcan a la cadena
        var seguir= true;
        for(var i=0; i<p3_input.length; i++){
            var caracter = p3_input.charAt(i);
            for(var j = 0; j < comprobar.length; j++){
                if(caracter == comprobar.charAt(j))
                    break;
                if(j == comprobar.length-1){
                    seguir = false;
                    break;
                }
            }
        }

        if(seguir == true){
            var p3_array= p3_input.split(',');

            var p3_Cant = [];
            
            p3_array.forEach( function (palabra) {
                var numCaracteres= palabra.length;
                for( var j=0; j<palabra.length; j++){
                    var caracter= palabra.charAt(j);
                    for(var p=0; p<palabra.length; p++){
                        if(caracter == palabra.charAt(p)) numCaracteres -= 1;
                    }
                    numCaracteres += 1;
                }
                p3_Cant.push(numCaracteres);
            });

            var Mayor= Math.max.apply(null, p3_Cant);

            var posiciones= [];

            for(var i=0; i< p3_Cant.length; i++){
                if(p3_Cant[i] == Mayor){
                    posiciones.push(i);
                }
            }
            var Respuesta= '';
            posiciones.forEach(function (numero) {
                Respuesta += p3_array[numero] + ',';
            });

            document.querySelector('#p3-output').textContent= 'Las palabra o palabras con mas caracteres unicos es '
                + Respuesta + ' Con ' + Mayor + ' Caracteres';
        }
        else{
            alert("Solo Introduce Letras Mayusculas");
        }
        

    }
    else{
        alert("Introduce una cantidad menor a 30 Caracteres");

    }
}