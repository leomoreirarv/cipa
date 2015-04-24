// JavaScript Document

//Init object banner
var Banner = new Object();

//Image list for banner
Banner.imagens = new Array();

Banner.setImagens = function(url){
	this.imagens.push(url); 
}

//Frame of destine list banner
Banner.frame = null;

Banner.setFrame = function(frameId){
	this.frame = frameId;
}

//Method for load images
Banner.carrega = function(e){
	//Loop array images
	for(var i in this.imagens){
		//Try insert html code in to box
		try{
			document.getElementById(this.frame+"-lista").innerHTML += "<li><img src='"+this.imagens[i]+"'></li>";
			var tamBoxLista = document.getElementById(this.frame+"-lista").style.width;
			tamBoxLista = parseInt(tamBoxLista.replace("px",""));
			document.getElementById(this.frame+"-lista").style.width = tamBoxLista + 800 +"px";
		} catch(err){
			//Send error to console log
			console.log("Erro: "+err);
		}
	}
}

//Show banner
Banner.move = function(acao){
	//Container show banner
	var boxBanner = document.getElementById(this.frame+"-lista");
	//Initial Position's first banner
	var posBanner1 = boxBanner.style.marginLeft;
	//Modify string postion to integer position
	posBanner1 = parseInt(posBanner1.replace("px",""));
	//Decrement 800 for position first banner
	var cont = 0;
	var intervalo = setInterval(function(){
		if(cont < 80){
			switch(acao){
				case "next":
					posBanner1 -= 10;
				break;
				case "previous":
					posBanner1 += 10;
				break;
			}
			//Write the new rule css
			boxBanner.style.marginLeft = posBanner1+"px";
			cont++
		} else {
			clearInterval(intervalo);
		}
	}, 25);
}
