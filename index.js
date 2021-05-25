$(document).ready(function(){
    let screen = "";
    $(".button").click(function(){
        screen += this.value;
        $(".screen").html(screen);
    });
    $(".erase").click(function(){
        $(".screen").html(0);
        screen = ""
    });
    $(".equals").click(function(){
        try{
            let res = eval(screen);
            screen = res;
            $(".screen").html(eval(screen));
        }
        catch(err){
            $(".screen").html("Syntax Error!");
        }
        
    });
    $(".sqrt").click(function(){
        screen = Math.sqrt(eval(screen));
        if(isNaN(screen)){
            $(".screen").html(0);
        }
        else{
            $(".screen").html(screen);
        }
        
    });
});
