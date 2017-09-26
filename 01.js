var lienzo = document.getElementById('milienzo');
var contexto = lienzo.getContext('2d');

contexto.beginPath();//inicia el camino para dibujar
contexto.moveTo(50, 70);//Mueve el cursor a la posicion x=50, y =70
contexto.lineTo(140, 250);//hace un línea entre (50,70) - (140,250)
contexto.stroke();  //hace visible la linea