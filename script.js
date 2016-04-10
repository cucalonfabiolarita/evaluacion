
var estudiante1={nombre:"Roxanna",sexo:"femenino",edad:24, notas:[25,50,45],ciudad:"salinas",lenguajefavorito:"c#",laborando:true};
var estudiante2={nombre:"Rita",sexo:"femenino",edad:25, notas:[25,50,45],ciudad:"salinas",lenguajefavorito:"c#",laborando:true};
var estudiante3={nombre:"Carlos",sexo:"masculino",edad:26, notas:[29,30,50],ciudad:"salinas",lenguajefavorito:"c#",laborando:false};
var estudiante4={nombre:"Jose",sexo:"masculino",edad:22, notas:[25,50,40],ciudad:"salinas",lenguajefavorito:"c#",laborando:true};
var estudiante5={nombre:"Pedro",sexo:"masculino",edad:21, notas:[25,40,40],ciudad:"salinas",lenguajefavorito:"c#",laborando:false};

/*var estudiante2={'Rita','femenino','25',['28','40','45'],false,'santa elena','php'};
var estudiante3={'Juan','masculino', '24',['25','50','35'],true,'salinas','c++'};
var estudiante4={'fabiola','femenino','21',['25','40','42'],false,'santa elena','Java'};
var estudiante5={'Pedro','masculino','23',['30','30','47'],false,'La Libertad','JavaScript'};

*/
var busqueda;
function print(mensaje)
{
	document.write("<p>"+ mensaje + "</p>");
}

while(true)
{
	busqueda= prompt("presione l para listar estudiantes o q para salir, y ");
	busqueda= busqueda.toLowerCase();
	if(busqueda=="salir"|| busqueda=="fin" || busqueda=="chao")
{
	alert("gracias por utilizar el buscador");
	break;
} else if(busqueda=="lista"|| busqueda=="inventario")
 {
 
 		var datos1 ="<p>nombre:"+estudiante1.nombre+"</p>";
    datos1+="<p>Sexo:"+estudiante1.sexo+"</p>";
    datos1+="<p>Edad:"+(estudiante1.edad+1)+"</p>";
   datos1+="<p>Notas:"+estudiante1.notas.join(",")+"</p>";
    datos1+="<p>Ciudad:"+estudiante1.ciudad+"</p>";
    datos1+="<p>lenguajefavorito:"+estudiante1.lenguajefavorito+"</p>";
    datos1+="<p>Laborando:"+estudiante1.laborando+"</p>";
    document.write(datos1);
 


    var datos2 ="<p><br>nombre:"+estudiante2.nombre+"</p>";
    datos2+="<p>Sexo:"+estudiante2.sexo+"</p>";
    datos2+="<p>Edad:"+(estudiante2.edad+1)+"</p>";
   datos2+="<p>Notas:"+estudiante2.notas.join(",")+"</p>";
    datos2+="<p>Ciudad:"+estudiante2.ciudad+"</p>";
    datos2+="<p>lenguajefavorito:"+estudiante2.lenguajefavorito+"</p>";
    datos2+="<p>Laborando:"+estudiante2.laborando+"</p>";
   
    document.write(datos2);

    var datos3 ="<p><br>nombre:"+estudiante3.nombre+"</p>";
    datos3+="<p>Sexo:"+estudiante3.sexo+"</p>";
    datos3+="<p>Edad:"+(estudiante3.edad+1)+"</p>";
   datos3+="<p>Notas:"+estudiante3.notas.join(",")+"</p>";
    datos3+="<p>Ciudad:"+estudiante3.ciudad+"</p>";
    datos3+="<p>lenguajefavorito:"+estudiante3.lenguajefavorito+"</p>";
    datos3+="<p>Laborando:"+estudiante3.laborando+"</p>";
   
    document.write(datos3);
    var datos4 ="<p><br>nombre:"+estudiante4.nombre+"</p>";
    datos4+="<p>Sexo:"+estudiante4.sexo+"</p>";
    datos4+="<p>Edad:"+(estudiante4.edad+1)+"</p>";
   datos4+="<p>Notas:"+estudiante4.notas.join(",")+"</p>";
    datos4+="<p>Ciudad:"+estudiante4.ciudad+"</p>";
    datos4+="<p>lenguajefavorito:"+estudiante4.lenguajefavorito+"</p>";
    datos4+="<p>Laborando:"+estudiante4.laborando+"</p>";
   
    document.write(datos4);


    var datos5 ="<p><br>nombre:"+estudiante5.nombre+"</p>";
    datos5+="<p>Sexo:"+estudiante5.sexo+"</p>";
    datos5+="<p>Edad:"+(estudiante5.edad+1)+"</p>";
   datos5+="<p>Notas:"+estudiante5.notas.join(",")+"</p>";
    datos5+="<p>Ciudad:"+estudiante5.ciudad+"</p>";
    datos5+="<p>lenguajefavorito:"+estudiante5.lenguajefavorito+"</p>";
    datos5+="<p>Laborando:"+estudiante5.laborando+"</p>";
   
    document.write(datos5);
/*
personas.nombre="programador";
saludo+="<p>tu nombre de usuario es"+personas.nombre+"</p>";
saludo+="<p>tu edad pronto sera"+(personas.edad+1)+"</p>";
saludo+="<p>tienes al momento"+personas.habilidades.length+"habilidades</p>";
saludo+="<p>las habilidades son"+personas.habilidades.join(",")+"habilidades</p>";*/


 /* else {
 	if(productosDisponible.indexOf(busqueda)>=0)
 	{
 		alert("si tenemos"+ busqueda +"en nuestra tienda");
 	} else{
 		alert("no tenemos" + busqueda + "en nuestra tienda");
 	}*/

 }
}









