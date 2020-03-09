Date.prototype.daysInMonth = function() {
	return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};
masparty=[];
masparty[0]=[];
masparty[0][1]=true;
masparty[0][7]=true;
masparty[1]=[];
masparty[1][23]=true;
masparty[2]=[];
masparty[2][8]=true;
masparty[3]=[];
masparty[3][1]=true;
masparty[4]=[];
masparty[4][1]=true;
masparty[4][9]=true;
masparty[5]=[];
masparty[5][1]=true;
masparty[5][12]=true;
masparty[6]=[];
masparty[7]=[];
masparty[7][22]=true;
masparty[8]=[];
masparty[8][1]=true;
masparty[9]=[];
masparty[10]=[];
masparty[10][4]=true;
masparty[11]=[];
masparty[11][12]=true;
masparty[11][31]=true;
monthA = 'January, February, March, April, May, June, July, August, September, October, November, December'.split(',');
var DateThis = new Date();
document.getElementById('mounth').innerText = monthA[DateThis.getMonth()];
document.getElementById('year').innerText = DateThis.getFullYear();
var startDate = new Date(DateThis.getFullYear(), DateThis.getMonth(), 1);
var startpos = startDate.getDay();
//document.querySelector('.mainc[data-week="1"]').querySelector('.td[data-day="'+startpos+'"]').querySelector('h3').textContent="1";
if(startpos==0){
	startpos=7;
}
var i = 1;
var week = 1;
var kd =DateThis.daysInMonth();
l=1;
if(startpos==7){
	week++;
	document.querySelector('.mainc[data-week="1"]').querySelector('.td[data-day="7"]').querySelector('h3').outerHTML=("<h3>1</h3>");
}
while(i < (kd+startpos-1)){
	
	i++;
	j=i;
	if(j%7 == 1){
		week++;
	}
	while(j>7){
		j=j-7;
	}
	if(l>=(startpos)){
		console.log(week+" "+j+" "+(l-startpos+2));
		if((l-startpos+2)==DateThis.getDate()){
			if(masparty[(DateThis.getMonth())][(l-startpos+2)]==true){
				document.querySelector('.mainc[data-week="'+week+'"]').querySelector('.td[data-day="'+j+'"]').querySelector('h3').outerHTML=("<h3 class='currentDay party'>"+(l-startpos+2)+"</h3>");
			}else{
				document.querySelector('.mainc[data-week="'+week+'"]').querySelector('.td[data-day="'+j+'"]').querySelector('h3').outerHTML=("<h3 class='currentDay'>"+(l-startpos+2)+"</h3>");
			}
		}else{
			if(masparty[(DateThis.getMonth())][(l-startpos+2)]==true){
				document.querySelector('.mainc[data-week="'+week+'"]').querySelector('.td[data-day="'+j+'"]').querySelector('h3').outerHTML=("<h3 class='party'>"+(l-startpos+2)+"</h3>");
			}else{
				document.querySelector('.mainc[data-week="'+week+'"]').querySelector('.td[data-day="'+j+'"]').querySelector('h3').textContent=(l-startpos+2);
			}
		}
	}
	l++;
}
function toggleClassCalendarInner(){
	//По идее это плохая реализация, т.к. надо проверять select val(ну и добавить из туда) и уже по ним делать case, но для двух тем оформления это приемлемо
	var g = document.getElementById('CalendarInner');
	if(g.style.background=="rgb(255, 255, 255)"){
		g.style.background="rgb(0, 0, 0)";
		g.classList.add('dark');
	}else{
		g.style.background="rgb(255, 255, 255)";
		g.classList.remove('dark');
	}
}
