'use strict'

console.log('Cargado JS')
class validar {
  constructor() {
    //window.onload = this.iniciar();
    let span = document.getElementById('spanMedia');
    console.log(span);
    span.onclick = this.calcularMedia;
    let curso = document.getElementById('sCurso');
    curso.onclick = this.desplegable;
  }
  iniciar(){


  }

  //Calculamos la media de todos los numero

  calcularMedia(){
    console.log("entrando")
    //Traemos los datos de cada input
    let numero1 = document.getElementById('iCalculo1').value;
    let numero2 =  document.getElementById('iCalculo2').value;
    let numero3 =   document.getElementById('iCalculo3').value;
//Calculamos el total

    let total = parseInt(numero1) + parseInt(numero2) + parseInt(numero3) ;
    let span = document.getElementById('spanMedia');

    //MOstramos la media de las tres nota
    console.log(total/3);
    span.setAttribute('value', total/3)
    let resultado = document.createTextNode(total/3);


    return span.appendChild(resultado);
  }


  desplegable(evento){
    var select = document.getElementById('sCurso');


    select.addEventListener('change',
        function(){
          var selectedOption = this.options[select.selectedIndex];
          console.log(selectedOption.value + ': ' + selectedOption.text);


          //https://www.discoduroderoer.es/como-crear-un-select-html-en-javascript/
          //Una vez detectado el evento cramos los menus
          if (selectedOption.value == "1DAW"){
            let div1 = document.getElementsByClassName('sunOption')[0];
            let select2 = document.createElement('select');

            let option1 = document.createElement('Option');
            div1.appendChild(select2);
            option1.setAttribute('value', 'Caceres');
            let option1Texto = document.createTextNode("Caceres")
            option1.appendChild(option1Texto);
            let option2 = document.createElement('Option');
            option2.setAttribute('value', 'Badajoz');
            let option2Texto = document.createTextNode('Badajoz');
            option2.appendChild(option2Texto)
            select2.appendChild(option1);
            select2.appendChild(option2)


          }

        });
  }


}

var app = new validar();
