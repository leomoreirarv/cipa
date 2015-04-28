// JavaScript Document

//Cria objeto Banner
function Banner(){
	//Propriedades
	this.imagens = new Array();
	this.largura = new Number();
	this.boxListaBanner = new Object();
	this.tamBox = new Number();
	
	//Largura das imagens dos banners
	this.setLargura = function(num){
		this.largura = num;
	}
	
	this.setImagens = function(url){
		this.imagens.push(url);
	}
	
	this.setBox = function(){
		this.boxListaBanner = document.getElementById("box-banner-lista");
	}
	
	this.setTamBox = function(){
		this.tamBox = parseInt(this.boxListaBanner.style.width.replace("px",""));
	}
	
	this.carrega = function(){
		var self = this;
		try{
			for(var i in this.imagens){
				this.setBox();
				this.boxListaBanner.style.width = this.tamBox + this.largura + "px";
				this.boxListaBanner.innerHTML += "<li><img src='"+this.imagens[i]+"'></li>";
				this.setTamBox();
			}
			var apontador = function(){self.move(">")};
			window.setInterval(apontador, 5000);
		} catch(erro){
			console.log("Erro: "+erro);
		}
	}
	
	this.move = function(direcao){
		 //var posLista = parseInt(this.boxListaBanner.style.marginLeft.replace("px",""));
		var posLista = parseInt(this.boxListaBanner.style.marginLeft.replace("px",""));
		var tamBox
		var novaPosicao = "";
		switch(direcao){
			case ">":
				if((posLista - this.largura) < ((0 - this.tamBox) + this.largura)){
					novaPosicao = 0;
				} else {
					novaPosicao = posLista - this.largura;
				}
			break;
			case "<":
				if((posLista + this.largura) > 0){
					novaPosicao = (0 - this.tamBox) + this.largura;
				} else {
					novaPosicao = posLista + this.largura;
				}
			break;
		}
		this.boxListaBanner.style.marginLeft = novaPosicao + "px";
		console.log(this.boxListaBanner.style.width);
		console.log(this.boxListaBanner.style.marginLeft);
	}
}
/*
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
	var self = this;
	//Loop array images
	for(var i in this.imagens){
		//Try insert html code in to box
		try{
			document.getElementById(this.frame+"-lista").innerHTML += "<li><img src='"+this.imagens[i]+"'></li>";
			var tamBoxLista = document.getElementById(this.frame+"-lista").style.width;
			tamBoxLista = parseInt(tamBoxLista.replace("px",""));
			document.getElementById(this.frame+"-lista").style.width = tamBoxLista + 800 +"px";
			
			document.getElementsByClassName("nav-banner")
				.item(0)
				.addEventListener("click", function(){
					self.move("previous");
					}
				);
			document.getElementsByClassName("nav-banner")
				.item(1)
				.addEventListener("click", function(){
					self.move("next");
					}
				);
			
			console.log("carregou");
		} catch(err){
			//Send error to console log
			console.log("Erro: "+err);
		}
	}
}


//Show banner
Banner.move = function(acao){
	var self = this;
	var e = window.event;
	//Container show banner
	var boxBanner = document.getElementById(this.frame+"-lista");
	//Initial Position's first banner
	var posBanner1 = boxBanner.style.marginLeft;
	//Modify string postion to integer position
	posBanner1 = parseInt(posBanner1.replace("px",""));
	//Decrement 800 for position first banner
	var cont = 0;
	var intervalo = setInterval(function(){
		if(cont < 40){
			switch(acao){
				case "next":
					posBanner1 -= 20;
				break;
				case "previous":
					posBanner1 += 20;
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
*/