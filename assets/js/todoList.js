//check off specific todo by clicking 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//create new todo from input
$('input[type="text"]').keypress(function(){
	if(event.which === 13){
		//grab new todo from input
		var newTodo = $(this).val();
		$(this).val("");
		//crate new li and add ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + newTodo + "</li>");
    };
});

$(".fa-pencil-square-o").click(function(){
	$('input[type="text"]').fadeToggle();
});

$(".fa-cog").click(function(){
	$("body").toggleClass("otherBackgound");
});

