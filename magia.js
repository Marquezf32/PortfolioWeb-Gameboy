//Boton on-off
    document.querySelector(".on-off").addEventListener("click", function(){
            if(this.value == "0"){
                this.value = "1";
                window.location.href = "perfil.html";
            }else if(this.value != "0"){
                window.location.href = "index.html";
            }
    });


//Pad funcional
//boton derecho
function pasador(){
    let valor = document.querySelector(".der").value;
    
    switch(valor){
        case "1":
            window.location.href = "skills.html";
            valor.style.backgroundColor = "red";
            break;
        case "2":
            window.location.href = "skills2.html";
            break;
        case "3":
            window.location.href = "proyectos.html";
            break;
        case "4":
            window.location.href = "contactos.html";
    }
    
}

//Boton izquierdo
function back(){
    let valor = document.querySelector(".izq").value;

    switch(valor){
        case "1":
            window.location.href = "proyectos.html";
            break;
        case "2":
            window.location.href = "skills2.html";
            break;
        case "3":
            window.location.href = "skills.html";
            break;
        case "4":
            window.location.href = "perfil.html";
    }
}

//funcion para el cambio de estilos

function constante(contador,valor, id){
    if(contador === valor){
        id.style.backgroundColor="rgba(0, 0, 0, 0.227)";
        id.style.color = "aliceblue";
    }else{
        id.style.backgroundColor="";
        id.style.color = "";
    }
}
function none(id){
    id.style.opacity=0.3;
}

function hover(){
    let html= document.getElementById("html");
    let css = document.getElementById("css");
    let js = document.getElementById("js");
    let java = document.getElementById("java");
    let spring = document.getElementById("spring");
    let python = document.getElementById("python");
    let flask = document.getElementById("flask");
    let sql = document.getElementById("sql");

    switch(contadorVertical){
        case 1:
            none(html);
            none(css);
            none(js);
            java.style.opacity=1;
            none(spring);
            none(sql);
            none(python);
            none(flask);
            break;
        case 2:
            none(html);
            none(css);
            none(js);
            java.style.opacity=1;
            spring.style.opacity=1;
            sql.style.opacity=1
            none(python);
            none(flask);
            break;
        case 3:
            none(html);
            none(css);
            none(js);
            java.style.opacity=1;
            spring.style.opacity=1;
            sql.style.opacity=1
            none(python);
            none(flask);
            break;
        case 4:
            html.style.opacity=1;
            css.style.opacity=1;
            js.style.opacity=1;
            none(java);
            none(spring);
            sql.style.opacity=1;
            python.style.opacity=1;
            flask.style.opacity=1;
            break;
        default:
            none(html);
            none(css);
            none(js);
            none(java);
            none(spring);
            none(sql);
            none(python);
            none(flask);
            break;
    }
}

const correo = document.getElementById("correo");
const github =  document.getElementById("github");
const linkedin = document.getElementById("linkedin");

const conversor = document.getElementById("conversor");
const forohub= document.getElementById("forohub");
const literalura = document.getElementById("literalura");
const comerce = document.getElementById("comerce");

var contadorVertical = 0;
document.querySelector(".inf").addEventListener("click", function(){
    if(contadorVertical<=4){
        contadorVertical++;
    }

    constante(contadorVertical,1, correo || conversor);
    constante(contadorVertical,2, github || literalura);
    constante(contadorVertical,3, linkedin || forohub);
    constante(contadorVertical,4,comerce)

    hover();
})

document.querySelector(".sup").addEventListener("click", function(){
    if(contadorVertical>=1){
        contadorVertical--;
    }
    
    constante(contadorVertical,1, correo || conversor);
    constante(contadorVertical,2, github || literalura);
    constante(contadorVertical,3, linkedin || forohub);
    constante(contadorVertical,4,comerce)

    hover();
})

//Selector contactos
document.getElementById("ok").addEventListener("click", function(){
    
    if(contadorVertical == 1){
        window.open("mailto:marquezfacundo6532@gmail.com", "_blank","noopener noreferrer");
    }else if(contadorVertical == 2){
        window.open("https://github.com/Marquezf32","_blank","noopener noreferrer");
    }else if(contadorVertical == 3){
        window.open("https://ar.linkedin.com/in/marquez-facundo-ez","_blanck","noopener noreferrer");
    }
})

//Selector proyectos
function selectProyectos(){
    contadorVertical = contadorVertical+10
    
    if(contadorVertical == 11){
        window.open("https://github.com/Marquezf32/ConversorDeMonedas.git", "_blank","noopener noreferrer");
        contadorVertical = contadorVertical -10;
     }else if(contadorVertical == 12){
         window.open("https://github.com/Marquezf32/Liter-Alura.git","_blank","noopener noreferrer");
         contadorVertical = contadorVertical -10;
     }else if(contadorVertical == 13){
         window.open("https://github.com/Marquezf32/ForoHub.git","_blank","noopener noreferrer");
         contadorVertical = contadorVertical -10;
     }else if(contadorVertical == 14){
        window.open("https://github.com/Marquezf32/Proyecto-Grupo16-PythonYFlask.git","_blank","noopener noreferrer")
        contadorVertical = contadorVertical -10;
     }
   
}

//Funcion para descargar
function descargar(){
    const link = document.createElement('a');
    link.href = 'Imagenes/cv/CV-Marquez.pdf';
    link.download = 'CV-Marquez';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
