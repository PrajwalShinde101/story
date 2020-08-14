for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("mouseover",function (){
var sound=this.innerHTML;
makesound(sound);
      animation(sound);

    });
}
document.addEventListener("keydown",function (evt){
    var keystroke=evt.key;
    makesound(keystroke);
    animation(keystroke);


});
function makesound(key){
    switch(key)
    {
        case 'w':
            var audi=new Audio("sounds/crash.mp3");
            audi.play();
            break;
            case 'a': var audi=new Audio("sounds/kick-bass.mp3");
            audi.play();

                break;
                case 's': var audi=new Audio("sounds/snare.mp3");
                audi.play();

                    break;
                    case 'd': var audi=new Audio("sounds/tom-1.mp3");
                    audi.play();
    
                        break;
                        case 'j': var audi=new Audio("sounds/tom-2.mp3");
                        audi.play();
        
                            break;
                            case 'k': var audi=new Audio("sounds/tom-3.mp3");
                            audi.play();
            
                                break;
                                case 'l': var audi=new Audio("sounds/tom-4.mp3");
                                audi.play();
                
                                    break;
    }
}
function animation(key)
{
    console.log(key);
    document.querySelector("."+key).classList.add("pressed");
    setInterval(function (){
        document.querySelector("."+key).classList.remove("pressed");
    },700);
}