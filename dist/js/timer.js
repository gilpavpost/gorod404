

// var initTimer=document.querySelector ('.timer');
var sec=00;
var min=30;
function refresh()
{
	sec--;
	if(sec==-01){sec=59; min=min-1;}
	else{min=min;}
	if(sec<=9){sec="0" + sec;}
	time=(min<=9 ? "0"+min : min) + ":" + sec;
	if(document.getElementsByClassName){timer.innerHTML=time;}
	inter=setTimeout("refresh()", 1000);
	// action if time 00:00
	if(min=='00' && sec=='00'){
		sec="00";
		clearInterval(inter);
        location.reload(true);
	}
}
// function refresh()
// {
// 	sec--;
// 	if(sec==-01){sec=59; min=min-1;}
// 	else{min=min;}
// 	if(sec<=9){sec="0" + sec;}
// 	time=(min<=9 ? "0"+min : min) + ":" + sec;
// 	if(initTimer){timer.innerHTML=time;}
// 	inter=setTimeout("refresh()", 1000);
// 	// action if time 00:00
// 	if(min=='00' && sec=='00'){
// 		sec="00";
// 		clearInterval(inter);
//         location.reload(true);
// 	}
// }
console.log (document.getElementsByClassName(timer.innerHTML=time;))