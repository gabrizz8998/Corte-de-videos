let iniciar_sesion=document.getElementById("iniciar_sesion");

iniciar_sesion.addEventListener("click",inicio_sesion,false);

function inicio_sesion(){
    let continuar=true;
    if(user.value==""){
        alert("El campo usuario esta vacio")
        continuar=false;
    }
    if(pass.value==""){
        alert("El campo contraseña esta vacio")
        continuar=false;
    }
    if(continuar){
        
    }
}