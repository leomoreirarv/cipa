// JavaScript Document

//Create the Banner Object
function Banner(){
	"use strict";
	//Creates the object properties
	this.imagens = new Array();
	this.largura = new Number();
	this.boxListaBanner = new Object();
	this.tamBox = new Number();
	
	//Assigns the width of the images
	this.setLargura = function(num){
		this.largura = num;
	};
	
	//Add url to the image array
	this.setImagens = function(url){
		this.imagens.push(url);
	};
	
	//Assigns the box that will receive the list of banners
	this.setBox = function(){
		this.boxListaBanner = document.getElementById("box-banner-lista");
	};
	
	//Assigns the width of the box that will receive the banners
	this.setTamBox = function(){
		this.tamBox = parseInt(this.boxListaBanner.style.width.replace("px",""));
	};
	
	//Method that carries the banner and starts the automatic transition
	this.carrega = function(){
		var self = this;
		try{
			for(var i in this.imagens){
				this.setBox();
				this.boxListaBanner.style.width = this.tamBox + this.largura + "px";
				var novoItem = document.createElement("li");
				var novaImagemBanner = document.createElement("img");
				novaImagemBanner.setAttribute("src", this.imagens[i]);
				novoItem.appendChild(novaImagemBanner);
				this.boxListaBanner.appendChild(novoItem);
				this.setTamBox();
			}
			window.setInterval(function(){self.move(">");}, 5000);
		} catch(erro){
			console.log("Erro: "+erro);
		}
	};
	
	//Method that moves the banners based on the parameter "direction". ">" forward and "<" back
	this.move = function(direcao){
		var posLista = parseInt(this.boxListaBanner.style.marginLeft.replace("px",""));
		var tamBox;
		var novaPosicao = "";
		if(direcao === ">"){
			if((posLista - this.largura) < ((0 - this.tamBox) + this.largura)){
				novaPosicao = 0;
			} else {
				novaPosicao = posLista - this.largura;
			}
		} else if(direcao === "<"){
			if((posLista + this.largura) > 0){
				novaPosicao = (0 - this.tamBox) + this.largura;
			} else {
				novaPosicao = posLista + this.largura;
			}
		}
		this.boxListaBanner.style.marginLeft = novaPosicao + "px";
	};
};