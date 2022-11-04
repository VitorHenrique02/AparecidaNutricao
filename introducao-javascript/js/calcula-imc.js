var titulo = document.querySelector(".titulo");
      titulo.textContent = "Nutrição Bonifácio";   

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i< pacientes.length; i++){
 
var paciente  = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if (peso <=0 || peso >=1000){
      pesoValido = false;
      tdImc.textContent="Peso inválido";
}
if (altura <= 0 || altura >= 3.00) {
      alturaValida = false;
      tdImc.textContent = "Altura inválida";
      paciente.classList.add("paciente-invalido");
}
if (pesoValido && alturaValida){
      var imc = peso / (altura*altura);
      tdImc.textContent = imc.toFixed(2);
}else{
      tdImc.textContent = "Altura e/ou peso inválidos";

}
}
 function calculaImc(peso, altura){
      var imc = 0;
      imc = peso / (altura * altura);
      return imc.toFixed(2);
 }