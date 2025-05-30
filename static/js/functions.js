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
