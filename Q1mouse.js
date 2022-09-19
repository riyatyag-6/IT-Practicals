$("body").mouseover(function(){
   
   // $("body").css({"backgroundColor":"green"})
    $("body").css("background-color","green")
   //document.body.style.backgroundColor="green";
   $("#link").text("I am green");
//$("#link").text="I am green now";
});



$("#link").mouseout(function(){
    ///css("color","green").
document.body.style.backgroundColor="red";
link.innerText="I am red now";
});

