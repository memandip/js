$("#todoName").focus();

var todos = [];

function Todo(name){
	this.name = name;
	// this.completed = false;
}

function addTodoWithName(name){
	var t = new Todo(name);
	todos.push(t);
	saveTodo();
}

function saveTodo(){
	var str = JSON.stringify(todos);
	localStorage.setItem("todos",str);
}

function getTodos(){
	var str = localStorage.getItem("todos");
	todos = JSON.parse(str);
	if(!todos){
		todos = [];
	}
}

function removeTodo(index){
	todos.splice(index,1);
	saveTodo();
}


// function todoCompleted(index){
// 	todos[index].completed = true;
// }

function getTodoAtIndex(index){
	return todos[index];
}

function listTodos(){
	var html = "";
	var sn = 1;
	if(todos.length>0){
		todos.forEach(function(todo){
			html += "<li> "+sn+") <input type='checkbox' class='completed'> "+todo.name;
			html += " <button class='removeTodo'>Remove</button>"
			html += "<input type='hidden' value='"+(sn-1)+"' class='index'>";
			html += "</li><hr>";
			sn++;
		});
	}
	
	$("#todos").html(html);

	$(".completed").click(function(){
		$(this).parent().toggleClass('completed');
	});

	$('.removeTodo').click(function(){
		var c = confirm('Do you really want to delete ?');
		if(c){
			var parent = $(this).parent();
			var index = parent.find('.index').val();
			removeTodo(index);
			listTodos();
		}
	});

}


$("#addTodoForm").on('submit',function(e){
	e.preventDefault();
	html = "";
	var name = $("#todoName").val();
	if(name.length>0){
		addTodoWithName(name);
		listTodos();
		$("#todoName").val("");
	}
	else{
		alert('Todo name field is empty.');
	}
});


//Initialization of the todo app
getTodos();
listTodos();