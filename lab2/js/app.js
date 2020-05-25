function filter_task(positionCheckbox){
	var elementCheckbox= document.getElementsByClassName('checkbox');
	if(positionCheckbox=="checked"){
		for (var i = 0; i < elementCheckbox.length; i++){
			if(elementCheckbox[i].childNodes[0].childNodes[0].checked == true){
				elementCheckbox[i].childNodes[0].childNodes[0].parentElement.parentElement.style.display = 'block';
			}else{
				elementCheckbox[i].childNodes[0].childNodes[0].parentElement.parentElement.style.display = 'none';
			}
		}
	}
	if(positionCheckbox=="unchecked"){
		for (var i = 0; i < elementCheckbox.length; i++){
			if(elementCheckbox[i].childNodes[0].childNodes[0].checked == true){
				elementCheckbox[i].childNodes[0].childNodes[0].parentElement.parentElement.style.display = 'none';
			}else{
				elementCheckbox[i].childNodes[0].childNodes[0].parentElement.parentElement.style.display = 'block';
			}
		}
	}
	if(positionCheckbox=="all"){
		for (var i = 0; i < elementCheckbox.length; i++){
			if(elementCheckbox[i].childNodes[0].childNodes[0].checked == true){
				elementCheckbox[i].childNodes[0].childNodes[0].parentElement.parentElement.style.display = 'block';
			}
		}
	}
	
}
window.onload = function () {
  var btn = document.getElementById('button');
  var txtArea = document.getElementById('textarea');

  // add task handler
  btn.onclick = function () {
    // add element to UI
    var taskContent = txtArea.value;
    var containerToDo = document.getElementById('container-to-do');
    var newTask = document.createElement('div');
    newTask.classList.add('new', 'checkbox');
    containerToDo.append(newTask);
    var label = document.createElement('label');
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    label.append(check);
    newTask.append(label);
    var text = document.createTextNode(taskContent);
    label.append(text);
    var icon = document.createElement('i');
    icon.classList.add('glyphicon', 'glyphicon-trash', 'icon', 'remove-card');
    newTask.append(icon);
    txtArea.value = "";

    // register events here:

    // complete task
    // TODO: labeled - not valid name for CSS and context
    check.onclick = function () {
      label.classList.toggle('labeled');
    };

    // TODO: delete task event
    icon.onclick = function () {
		this.parentElement.remove();
		console.log('delete');
    };
    var lengthCheckbox = document.getElementsByClassName('checkbox').length;
    if(lengthCheckbox>1){
		var lengthCheckn = document.getElementsByClassName('allCheck').length;
		if(lengthCheckn==0){
			var taskContent = "Check All";
			var containerToDo = document.getElementById('container-to-do');
			var newTask = document.createElement('div');
			newTask.classList.add('new', 'checkbox', 'allCheck');
			containerToDo.append(newTask);
			var label = document.createElement('label');
			var check = document.createElement('input');
			check.setAttribute('type', 'checkbox');
			label.append(check);
			newTask.append(label);
			var text = document.createTextNode(taskContent);
			label.append(text);
			txtArea.value = "";
			newTask.onclick = function() {
				console.log('+');
				var ch= document.getElementsByClassName('checkbox');
				
				for (var i = 0; i < ch.length; i++){
					ch[i].childNodes[0].childNodes[0].checked = true;
					//console.log(ch[i].childNodes[0].childNodes[0]);
				}
			}
		}
	}else{
		document.getElementsByClassName('allCheck').parentElement.remove();
	}
  };

  // TODO: complete all handler here
  /*
    var completeAll = document.getElementById('complete-all');
    completeAll.onclick = function () {
      console.log('complete all');
    };
  */


  // TODO: filter tasks
  /*
    var filterShowAll = document.getElementById('filter-show-all');
    filterShowAll.onclick = function () {
      console.log('show all');
    };

    var filterShowCompleted = document.getElementById('filter-show-completed');
    filterShowCompleted.onclick = function () {
      console.log('show completed');
    };

    var filterShowCompleted = document.getElementById('filter-show-removed');
    filterShowRemoved.onclick = function () {
      console.log('show removed');
    };
  */
}
