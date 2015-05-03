// JavaScript Document

//Create a new Object menu
function Menu(){
	"use strict";
	
	//Properties 
	this.tamMenuSuperior = new Number();
	this.pontoCorteMenuSuperior = new Number();
	this.idMenuSuperior = new String();
	
	//Sets 
	this.setTamMenuSuperior = function(tam){
		this.tamMenuSuperior = tam;
	}
	
	this.setPontoCorteMenuSuperior = function(ponto){
		this.pontoCorteMenuSuperior = ponto;
	}
	
	this.setIdMenuSuperior = function(id){
		this.idMenuSuperior = id;
	}
	
	//Method to highlight active menu item
	this.destacaItemMenuAtivo = function(){
		var nomeArquivo = function(url){
			var Caminho = new String();
			var Arquivo = new String();
			Caminho = url;
			Caminho = Caminho.replace("/\/g", "/");
			Arquivo = Caminho.substring(Caminho.lastIndexOf('/') + 1);
			Arquivo = Arquivo.substr(0, Arquivo.length - 4);
			return Arquivo;
		}
		var idMenuAtivo = nomeArquivo(window.location.href);
		document.getElementById(idMenuAtivo).setAttribute("class", "ativo");
	}
	
	//Method to hide and display the top menu
	this.controlaMenuSuperior = function(){
		var self = this;
		window.addEventListener("scroll", function(){
			var posRolagem = window.scrollY;
			var menuSup = document.getElementById(this.idMenuSuperior);
			if(posRolagem >= self.pontoCorteMenuSuperior){
				document.getElementById(self.idMenuSuperior).style.top = 0+"px";
			} else {
				document.getElementById(self.idMenuSuperior).style.top = - self.tamMenuSuperior +"px";
			}
		});
	}
	
}