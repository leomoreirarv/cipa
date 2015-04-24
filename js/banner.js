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
	//Clear container banners
	document.getElementById(this.frame).innerHTML = "";
	//Loop array images
	for(var i in this.imagens){
		//Try insert html code in to box
		try{
			document.getElementById(this.frame).innerHTML += "<li style='margin-left: 0px;'><img src='"+this.imagens[i]+"'></li>";
		} catch(err){
			//Send error to console log
			console.log("Erro: "+err);
		}
	}
}

//Show next banner
Banner.proximo = function(){
	//Container show banner
	var boxBanner = document.getElementById(this.frame);
	//Initial Position's first banner
	var posBanner1 = boxBanner.firstChild.style.marginLeft;
	//Modify string postion to integer position
	posBanner1 = parseInt(posBanner1.replace("px",""));
	//Decrement 800 for position first banner
	posBanner1 -= 800;
	//Write the new rule css
	boxBanner.firstChild.style.marginLeft = posBanner1+"px";
	console.log(boxBanner.firstChild.style.marginLeft);
}

//Show previous banner
Banner.anterior = function(){
	//Container show banner
	var boxBanner = document.getElementById(this.frame);
	//Initial Position's first banner
	var posBanner1 = boxBanner.firstChild.style.marginLeft;
	//Modify string postion to integer position
	posBanner1 = parseInt(posBanner1.replace("px",""));
	//Add 800 for position first banner
	posBanner1 += 800;
	//Write the new rule css
	boxBanner.firstChild.style.marginLeft = posBanner1+"px";
	console.log(boxBanner.firstChild.style.marginLeft);
}