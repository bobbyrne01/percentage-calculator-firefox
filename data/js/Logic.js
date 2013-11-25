window.onload=function(){
	
	var expression1 = document.getElementById("f1");
	var expression2 = document.getElementById("f2");
	var expression3 = document.getElementById("f3");
	
	expression1.addEventListener("click", function() { 
		document.getElementById("f1answer").value = document.getElementById("f1a").value / 100 * document.getElementById("f1b").value;
	});
	
	expression2.addEventListener("click", function() { 
		document.getElementById("f2answer").value = document.getElementById("f2a").value / document.getElementById("f2b").value * 100;
	});
	
	expression3.addEventListener("click", function() { 
		document.getElementById("f3answer").value = (document.getElementById("f3b").value - document.getElementById("f3a").value) / document.getElementById("f3a").value  * 100;
	});
};