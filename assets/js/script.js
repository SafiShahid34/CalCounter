$("ul").on("click", "li",function(){
    $(this).remove()
})





$("ul").on("click", "span",function(){
    $(this).parent().fadeOut(200, function(){
        $(this).remove()
    })
    event.stopPropagation
})

$("#butt").bind('click', function(){
    valid=true;
    if ($('#name').val() == ""){
        alert("Please Enter Proper Name");
        valid=false;
        return 0;
    } else if ($('#Cal').val() == ""){
        alert("Enter Valid Calorie Number");
        valid=false;
        return 0;
    } else if ($('#Carb').val() == ""){
        alert("Enter Valid Carbs Number");
        valid=false;
        return 0;
    } else if ($('#Fat').val() == ""){
        alert("Enter Valid Fats Number");
        valid=false;
        return 0;
    }else if ($('#Protein').val() == ""){
        alert("Enter Valid Protein Number");
        valid=false;
        return 0;
    } else{

        var N = $('#name').val();
        var C = $('#Cal').val();
        var cc = $('#Carb').val();
        var F = $('#Fat').val()
        var P = $('#Protein').val();
        

        $("ul").append("<li><div class="+"panel"+"><span> ~ </span><p >"+N+"</p> <div class='"+"Stats"+" "+"pro'"+">Protein:<div class="+"num"+">"+P+"</div></div> <div class='"+"Stats"+" "+"fat'"+">Fats:<div class="+"num"+">"+F+"</div></div> <div class='"+"Stats"+" "+"carb'"+">Carbs:<div class="+"num"+">"+cc+"</div></div> <div class='"+"Stats"+" "+"cal'"+">Calories:<div class="+"num"+">"+C+"</div></div> </div></li>")

        return 1;
    } 
    
})