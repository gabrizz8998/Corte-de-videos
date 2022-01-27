let iniciar_sesion=document.getElementById("iniciar_sesion");

iniciar_sesion.addEventListener("click",inicio_sesion,false);

function inicio_sesion(){
    let continuar=true;
    let usuario=user.value
    let passwd=pass.value
    if(usuario==""){
        alert("El campo usuario esta vacio")
        continuar=false;
    }
    if(passwd==""){
        alert("El campo contraseña esta vacio")
        continuar=false;
    }
    if(continuar){
        let formData = new FormData();
        formData.append('user', usuario);
        formData.append('pass', passwd);
        fetch('http://www.informaticasc.com/curso21_22/GabrielL/Inicio_Sesion.php', {
        method: 'POST',
        body: formData
        // headers: { "Content-type": "application/json;charset=UTF-8" },
    })
        .then(resp => {
            return resp.json();
        })
        .then(json => {
            console.log(json)
            redireccion(json);
        })
        .catch(err => { console.log("ERROR :" + err); });
    }
}

function redireccion(json) {
    if(json==null){
        alert("Usuario no registrado")
    }else{
        if(json[0].Permisos_Usuario==1){
            window.location.href = "/index.html";
        }
        else if(json[0].Permisos_Usuario==0){
            window.location.href = "/cortes.html";
        }
    }
}