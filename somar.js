var soma1 = document.getElementById('soma1');  
var soma2 = document.getElementById('soma2');
var soma = document.getElementById('soma');
var result = document.getElementById('resultado');


soma.addEventListener('click', function(){
  somatotal();
});    

function somatotal(){
 var soma1Val = parseInt(soma1.value);
 var soma2Val = parseInt(soma2.value);
 var soma = soma1Val + soma2Val;
   document.getElementById('resultado').value = soma;  
}

function validar() {
  var soma1 = document.getElementById('soma1');
  var soma2 = document.getElementById('soma2');

  if (soma1.value == '') {
    alert ('Preencha todos os campos!!!')
    soma1.focus();
  }

  if (soma2.value == '') {
    alert ('Preencha todos os campos!!!')
    soma2.focus();
  }

  if (soma1.value <0) {
    alert ('Valores não podem ser menores que 0!!!')
    soma1.focus();
  }

  if (soma2.value <0) {
    alert ('Valores não podem ser menores que 0!!!')
    soma2.focus();
  }
  
}
