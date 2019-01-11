$(document).ready(function(){
  $(".on").click(function(){

   $("div").addClass("active");
   
  });
});

$(document).ready(function(){
  $(".grid-item").click(function(){
   
    if ($(this).hasClass("active"))
    {
      $(this).removeClass("active");
    }
    else
    {
      $(this).addClass("active");
    }
  });  
});

$(document).ready(function(){
  $(".off").click(function(){
   
   $("div").removeClass("active");
    
  });
 });

$(document).ready(function(){

 $(".grid-item1").click(function(){
   
    if ($(this).hasClass("active") && $(".row0").hasClass("active"))
    {
      $(this).removeClass("active") && $(".row0").removeClass("active") ;
    }
    else
    {
      $(this).addClass("active") && $(".row0").addClass("active");
    }
  });
});

$(document).ready(function(){

 $(".grid-item2").click(function(){
   
    if ($(this).hasClass("active") && $(".row1").hasClass("active"))
    {
      $(this).removeClass("active") && $(".row1").removeClass("active");
    }
    else
    {
      $(this).addClass("active") && $(".row1").addClass("active");
    }
  });
});

$(document).ready(function(){

 $(".grid-item3").click(function(){
   
    if ($(this).hasClass("active") && $(".row2").hasClass("active")&& $(".col2").hasClass("active"))
    {
      $(this).removeClass("active") && $(".row2").removeClass("active") && $(".col2").removeClass("active");
    }
    else
    {
      $(this).addClass("active") && $(".row2").addClass("active") && $(".col2").addClass("active");
    }
  });
});

$(document).ready(function(){

 $(".grid-item4").click(function(){
   
    if ($(this).hasClass("active") && $(".row3").hasClass("active"))
    {
      $(this).removeClass("active") && $(".row3").removeClass("active") ;
    }
    else
    {
      $(this).addClass("active") && $(".row3").addClass("active");
    }
  });
});

$(document).ready(function(){

 $(".grid-item5").click(function(){
   
    if ($(this).hasClass("active") && $(".row4").hasClass("active"))
    {
      $(this).removeClass("active") && $(".row4").removeClass("active") ;
    }
    else
    {
      $(this).addClass("active") && $(".row4").addClass("active");
    }
  });
});
