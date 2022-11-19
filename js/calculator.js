$(document).ready(function(){
    $(".btn").on("click",function(){
        $("#input").val($("#input").val()+$(this).html());
    });

    $(".equal").on("click",function(){
        var exp=$("#input").val();
        if(exp.includes('x')){
            exp=exp.replace('x','*');
        }
        $("#input").val(eval(exp));
    });

    $("#c").on("click",function(){
        $("#input").val("");
    });

    $("#ce").on("click",function(){
        var ex=$("#input").val();
        $("#input").val(ex.substring(0,ex.length-1));
    });
});