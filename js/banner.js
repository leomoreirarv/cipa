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