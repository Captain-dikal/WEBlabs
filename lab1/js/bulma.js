function sreach_func(){
	var search= document.getElementsByTagName("input")[0];
	var searchtext=search.value;
	searchtext=searchtext.replace(/\s/g, '');
	searchtext=searchtext.toLowerCase();
	console.log(searchtext);
	var allhtml = document.body.innerHTML;
	
	//(".column.is-one-third")
	var tf="";
	var sp="";
	var elemf = document.getElementsByClassName("is-one-third");
	for (var i = 0; i < elemf.length; i ++){
		tf=elemf[i].innerText;
		tf=tf.replace(/\s/g, '');
		tf=tf.toLowerCase();
		sp=tf.includes(searchtext);
		console.log(sp);
		if(sp==true){
			elemf[i].style.display = 'block';
		}else{
			elemf[i].style.display = 'none';
		}
	}
}
// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();
