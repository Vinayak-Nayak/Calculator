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
        let res = eval(screen);
        screen = res;
        $(".screen").html(eval(screen));
    });
    $(".sqrt").click(function(){
        $(".screen").html(Math.sqrt(eval(screen)));
    })
});
