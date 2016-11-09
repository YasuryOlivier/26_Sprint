$(document).ready(function(){
	//alert("hola");
	//agrega y quita color
	$('.tit').hover(
    function(){
    $(this).addClass('blanco');
    },
    function(){
    $(this).removeClass('blanco');    
    });
	//coloca y quita sombra al input
	$("img").mouseenter(function(){
        $("img").fadeTo("fast", 1);
        });
    
    $("img").mouseleave(function(){
        $("img").fadeTo("fast", .5);
        });
    //agrega tarea
     $("button").click(function(){
        var agregar=$('input[name=checkListItem]').val();
        $(".list").append("<div class=item>" + agregar + "</div>");
        });
        $(document).on("click",".item", function(){
            $(this).remove();
          });
     //input
     $('input').focus(function(){
     	$(this).css('outline-color','green');
     });

});