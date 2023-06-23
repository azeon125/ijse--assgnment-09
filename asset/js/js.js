var count=1;
var onOf=false;
function ride(){
    $(`div:nth-child(${count})`).css("background","red");
    if(count>1){
    $(`div:nth-child(${count-1})`).css("background","rgba(238, 4, 4, 0.30)");
    }
    if (count < 10) {
    $(`div:nth-child(${count+1})`).css("background","rgba(238, 4, 4, 0.30)");
    }
    if(count<9){
    $(`div:nth-child(${count+2})`).css("background","rgba(238, 4, 4, 0.0)");
    }
    if(count>2){
        $(`div:nth-child(${count-2})`).css("background","rgba(238, 4, 4, 0.0)");
    }
    if(count==10){
        onOf=true;
    }else if(count==0){
        onOf=false;
    }
    if(onOf){
    count--;
    }else{
    count++;
    }

}

var interval=null;
var startBtn=$("aside>:first-child");
var endBtn=$("aside>:last-child");
let audio = new Audio("asset/audio/KnightRider.mp3");

$(startBtn).click(function (){
    if(interval==null){
interval=setInterval(ride,200);
    audio.play();
    /*Audio play again*/
    audio.loop=true;
    }
$(this).css("background-color","blue");
$(endBtn).css("background","white");
});

$(endBtn).click(function (){
    if(interval!==null){
   clearInterval(interval);
   interval=null;
    audio.pause();
    }
$(this).css("background-color","blue");
$(startBtn).css("background","white");
});
