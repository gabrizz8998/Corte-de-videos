arrow.addEventListener("click",mover_menu,false);

let menu=document.getElementById("menu");

let enlaces=document.getElementsByTagName("li");

let boton=document.getElementById("poner_video");
boton.addEventListener("click",cambiarURL,false)

let iframe=document.getElementById("iframe_video")

let boton_corte=document.getElementById("boton_corte");
boton_corte.addEventListener("click",capturarFoto,false)

for(let i=0;i<enlaces.length;i++){
    enlaces[i].addEventListener("click",cambiarSeleccionado,false);
}

function mover_menu(){
    menu.classList.toggle("plegado")
}

function cambiarSeleccionado(){
    if(this.classList==""){
        for(let i=0;i<enlaces.length;i++){
            if(enlaces[i].classList=="selected"){
                enlaces[i].classList.toggle("selected")
            }
        }
       this.classList.toggle("selected")    
    }
}



let inicio_video="https://www.youtube.com/embed/"
function cambiarURL(){
    let id_video=url.value.substring(url.value.indexOf("=")+1,url.length);
    iframe.src=inicio_video+id_video;
}



function capturarFoto() {
    let oFoto = document.getElementById("corte")
    let oContexto = oFoto.getContext("2d");
    oContexto.drawImage(iframe, 0, 0, 300, 160);
    let myImage = oFoto.toDataURL("image/png");
    console.log(myImage);
    grabar(myImage)
  }