/*Fazendo menu aparecer e desaparecer*/
function nav_bar(){
    var nav_bar = document.getElementById("nav-bar");

    if(nav_bar.style.top === "0px"){
        nav_bar.style.top = "-172px";
    }else{
        nav_bar.style.top = "0px";
    }
}
/*Fazendo animação de texto digitado*/
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".sobre-span", {
        speed: 100,
        deleteSpeed: 10,
        loop: true
    })
      .type("a Mudas do Agreste")
      .pause(700)
      .delete(18)
      .type("sua fonte de mudas")
      .pause(700)
      .delete(18)
    .go()
})
/*Clicando no botão de fazer pedido*/
function validandoNumero(numero){
  var re = /^\(\d{2}\) \d{5}-\d{4}$/;
  return re.test(numero);
}
function validandoEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
form.addEventListener('submit', (event) => {
    event.preventDefault();

    var nome = document.getElementById("nome").value.trim();
    var numero = document.getElementById("numero").value.trim();
    var email = document.getElementById("email").value.trim();
    var endereco = document.getElementById("endereco").value.trim();
    var quantidade1 = document.getElementById("quantidade1").value;
    var quantidade2 = document.getElementById("quantidade2").value;
    var quantidade3 = document.getElementById("quantidade3").value;
    var quantidade4 = document.getElementById("quantidade4").value;

    if(nome === ""){
        alert("Digite seu nome!");
    }else if(validandoNumero(numero) === false){
        alert("Digite um número válido!");
    }else if(validandoEmail(email) === false){
        alert("Digite um email válido!");
    }else if(endereco === ""){
        alert("Digite seu endereço!");
    }else{
        if(quantidade1 == 0 && quantidade2 == 0 && quantidade3 == 0 && quantidade4 == 0){
            alert("Escolha uma quantidade de mudas (no total) diferente de zero!");
        }else {
            alert(
                "DETALHES DO PEDIDO: " +
                "\n\nNome: " + nome +
                "\nNúmero: " + numero +
                "\nEmail: " + email +
                "\nEndereço: " + endereco +
                "\n\nIpê-Amarelo (quantidade): " + quantidade1 +
                "\nJatobá (quantidade): " + quantidade2 +
                "\nCajueiro (quantidade): " + quantidade3 +
                "\nJenipapo (quantidade): " + quantidade4 +
                "\nPreço total: R$ " + (quantidade1*35 + quantidade2*20 +quantidade3*40 +quantidade4*70).toFixed(2).replace('.', ',') +
                "\n\nSeu pedido foi encaminhado, entraremos em contato para avisar sobre o envio!"
            );
            location.reload();
        }
    }
})
