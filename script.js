function move(){ 
	    $(".col50 ul").css("list-style-type","none"); 
	}

function move(){ 
	var array; 
	if (!array){ 
    	$(".col50 ul").css("list-style-type","none"); 
    	array = true; 
  	}

	else{ 
		$(".col50 ul").css("list-style-type","disc"); 
		array = false;
		
	}


        $(".col50 ul").toggleClass("notype");
    }

function move(){ 
	    $(".col50 ul").toggleClass("notype");
}

function moveT2(){
	    $("ul").toggleClass("notype");

        $(".col100 ul").toggleClass("notype nopad"); 

}
        $("#w3").attr("href","http://w3schools.com");

		var str; 
		var lorem = $(".division>p").text(); 
		function Myfunction(){ 
			console.log($("#testeur").val()); 
			str = $("#testeur").val(); 
			switch (true){ 

				default:
					$(".division").removeClass("bgred");
					$(".division").removeClass("bgvert");
					$(".division>p").text(lorem); 
					console.log("default case");
					break;
				case ((/(\boui\b)|(\bo\b)/i).test(str)): 
					$(".division").addClass("bgvert"); 
					console.log('bgvert');
					break;
				case ((/(\bnon\b)|(\bn\b)/i).test(str)): 
					$(".division").addClass("bgred"); 
					console.log('bgred'); 
					break;
				case ((/^[a-zA-Z0-9]{10,20}$/i).test(str)): 
					$(".division>p").text(str); 
					$(".division").removeClass("bgred"); 
					$(".division").removeClass("bgvert"); 
					console.log(lorem); 
					break;
				case ((/[A-Z]{1}.{0,7}[0-9]{1}/).test(str)): 
					$("#extlink").text(str); 
					$("#extlink").attr("href","https://fr.wikipedia.org/wiki/"+str);
					console.log("Test regex");
					break;

				

			} 
		}