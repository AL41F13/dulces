// JavaScript Document
$(document).ready(function(e) {  // esperar que el documento este listo
document.addEventListener("deviceready",function(){ // esperar asta que el dispositvo este listo

$('#btnlistado').on('tap',function(){
	
	$.ajax({
		
		type:"POST",
		
		url:"http://192.168.1.188/dulce/buscartodo.php",
		
		data:"",
		
		error: function(){alert("error en conexion");},
		
		success: function(respuesta){var producto = JSON.parse(respuesta);
		
		$('#contenido').empty();
		
		for(var $x=0; $x<producto.dulces.length;$x++)
		
		{$('#contenido').append('   <div><div align="center" style="border:4px solid #63F;"><div>'+ producto.dulces[$x].nombreDulce +' </div><div>'+ producto.dulces[$x].regionDulce +'  </div><div>                '+ producto.dulces[$x].descripcionDulce +'</div><div><img src="http://192.168.1.188/dulce/recursos/imagenes/fotos/'+ producto.dulces[$x].claveDulce +'.jpg"> </div></div></div></div>      ');}
		
		
		$(':mobile-pagecontainer').pagecontainer('change','#listado',{transition: 'pop'});
		
		
			
		}
			});
			});
}); 
});


