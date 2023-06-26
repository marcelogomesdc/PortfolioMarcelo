let menuVisible = false;
//FUNCAO QUE OCULTA E MOSTRA O MENU
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //OCULTO O MENU UMA VEZ QUE SELECIONO UMA OPCAO
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

