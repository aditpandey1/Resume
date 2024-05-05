var as=document.getElementsByClassName('nav-list-item');
var amount=0;

function func(event){
	event.preventDefault();
	var str=this.getAttribute('data-value');
	var temp=document.getElementById(str);
	var limit=temp.offsetTop;
	var id=setInterval(function (){
	if(amount>limit){
		clearInterval(id);
        amount=0;
         
		return;

	}
	window.scrollBy(0,20);
	amount+=20;
	
}
,5);
}


for(let i=0;i<as.length;i++){
	as[i].addEventListener('click',func);
}
// var skilldiv=document.querySelectorAll('.skill-container div');
// var height=(document.getElementById('skills')).offsetTop;
// var bool=false;

// window.addEventListener('scroll',function(){
// 	if(window.pageYOffset+250<height){
// bool=true;
// 		for(var i=0;i<skilldiv.length;i++){
// 	skilldiv[i].style.width='0%';
// }
// 	}
// 	else if(window.pageYOffset+250>=height&&bool){
// 	bool=false;
// 		for(let i=0;i<skilldiv.length;i++){
// 			let skillValue=skilldiv[i].getAttribute('data');
// 			let currentValue='0%';
// 			let id=setInterval(function(){
//                if(currentValue>=skillValue){
//                	clearInterval(id);
//                	return;
//                }
//                skilldiv[i].style.width=currentValue;
//                currentValue=parseFloat(currentValue)+10	+'%';
// 			},10);
// 		}

// 	}
// });
var skilldiv=document.querySelectorAll('.skill-container div');

var animationdone=[];
for(var i=0;i<skilldiv.length;i++){
	animationdone[i]=false;
}
for(var i=0;i<skilldiv.length;i++){
  skilldiv[i].style.width='0%';
}
function initialisediv(div){
  div.style.width='0%';

}

function filldiv(div){
	let limit=parseFloat(div.getAttribute('data'));
	let current='0';
	let id=setInterval(function(){
          if(current>=limit){
          	clearInterval(id);
          	return;
          }
          current++;
         div.style.width=current+'%';
          
	},5);
}

function func2(){
	for(let i=0;i<skilldiv.length;i++){
		let coordinate=skilldiv[i].getBoundingClientRect();
		if(!animationdone[i]&&coordinate.top<window.innerHeight){
			animationdone[i]=true;
			filldiv(skilldiv[i]);
		}
		else if(coordinate.top>window.innerHeight){
			animationdone[i]=false;
			initialisediv(skilldiv[i]);
		}
	}
}


window.addEventListener('scroll',func2);
var percentage=document.getElementById('percentage');
var max=document.documentElement.scrollHeight;
	function func1(){
		if(window.pageYOffset==0){
			percentage.innerText='';
			return;
		}
        var percent2=Math.round(((window.pageYOffset+window.innerHeight)/max)*100);
        percentage.innerText=percent2+'% Viewed';
          
	}












window.addEventListener('scroll',func1);