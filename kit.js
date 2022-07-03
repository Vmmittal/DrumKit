
var drumno=document.querySelectorAll(".drum").length;
for(var i=0;i<drumno;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var innerhtmlbutton=this.innerHTML;
        eventoccur(innerhtmlbutton);
    });
}


document.addEventListener("keypress",function(event){
    eventoccur(event.key);
})

function eventoccur(key)
{
    switch(key)
    {
        case "W":
            var audio=new Audio("sounds/Tabla 2.mp3");
            audio.play();
            break;
       
        case "A":    
            var audio =new Audio("sounds/piano.mp3");
            audio.play();
            break;
            
        case "D":    
        var audio =new Audio("sounds/plates.mp3");
        audio.play();
        break;
    }
}
