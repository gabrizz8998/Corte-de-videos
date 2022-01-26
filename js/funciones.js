arrow.addEventListener("click",mover_menu,false);

let menu=document.getElementById("menu");

let enlaces=document.getElementsByTagName("li");

let boton=document.getElementById("poner_video");
boton.addEventListener("click",cambiarURL,false)



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
    video.src=inicio_video+id_video;
}


var loadInfo = function (videoId) {
    var gdata = document.createElement("script");
    gdata.src = "http://gdata.youtube.com/feeds/api/videos/" + videoId + "?v=2&alt=jsonc&callback=storeInfo";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(gdata);
};

var storeInfo = function (info) {
    console.log(info);
};

loadInfo("LuuDoogz8E8")