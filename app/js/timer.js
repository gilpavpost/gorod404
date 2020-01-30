

var sec=00;
var min=timer.getAttribute('data-time');

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