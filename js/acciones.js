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
		alert(respuesta);
		
		$('#contenido').empty();
		
		for(var $x=0; $x<producto.dulce.length;$x++)
		
		{$('#contenido').append('   <div><div align="center" style="border:4px solid #63F;"><div>'+ producto.dulce[$x].nombreDulce +' </div><div>'+ producto.dulce[$x].regionDulce +'  </div><div>                '+ producto.dulce[$x].descripcionDulce +'</div><div><img src="http://192.168.1.188/dulce/recursos/imagenes/fotos/'+ producto.dulce[$x].claveDulce +'.jpg"> </div></div></div></div>      ');}
		
		
		$(':mobile-pagecontainer').pagecontainer('change','#page4',{transition: 'pop'});
		
		
			
		}
			});
			});
			// aqui inicia la parte de la busqueda por el nombre
			$('#buscar').on('tap',function(){
	
	$.ajax({
		
		type:"POST",
		
		url:"http://192.168.1.188/dulce/busqueda_nombre.php",
		
		data: "nombre=" + $('#txtnombre').val(),
		
		error: function(){alert("error en conexion");},
		
		success: function(respuesta){var producto = JSON.parse(respuesta);
		alert(respuesta);
		
		$('#busca_d').empty();
		
		for(var $x=0; $x<producto.dulce.length;$x++)
		
		{$('#busca_d').append('   <div><div align="center" style="border:4px solid #63F;"><div>'+ producto.dulce[$x].nombreDulce +' </div><div>'+ producto.dulce[$x].regionDulce +'  </div><div>                '+ producto.dulce[$x].descripcionDulce +'</div><div><img src="http://192.168.1.188/dulce/recursos/imagenes/fotos/'+ producto.dulce[$x].claveDulce +'.jpg"> </div></div></div></div>      ');}
		
		
	
		
		
			
		}
			});
			});
}); 
});


