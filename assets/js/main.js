var studentName = prompt('Cual es tu nombre?', 'Ingresa tu nombre');
var studentSurname = prompt('Cual es tu apellido?', 'Ingresa tu apellido');
var studentCareer = prompt('Cual es tu carrera?', 'Ingresa tu carrera');

var subject1 = prompt('Cual es tu primer curso?', 'Ingresa primer curso');
var markHtml_1 = parseFloat(prompt(subject1 + ' - Nota 1?', 'Ingresa la primera nota'));
var markHtml_2 = parseFloat(prompt(subject1 + ' - Nota 2?', 'Ingresa la segunda nota'));
var markHtml_3 = parseFloat(prompt(subject1 + ' - Nota 3?', 'Ingresa la tercera nota'));

var subject2 = prompt('Cual es tu segundo curso?', 'Ingresa segundo curso');
var markCss_1 = parseFloat(prompt(subject2 + ' - Nota 1?', 'Ingresa la primera nota'));
var markCss_2 = parseFloat(prompt(subject2 + ' - Nota 2?', 'Ingresa la segunda nota'));
var markCss_3 = parseFloat(prompt(subject2 + ' - Nota 3?', 'Ingresa la tercera nota'));

var subject3 = prompt('Cual es tu tercer curso?', 'Ingresa tercer curso ');
var markJavaScript_1 = parseFloat(prompt(subject3 + ' - Nota 1?', 'Ingresa la primera nota'));
var markJavaScript_2 = parseFloat(prompt(subject3 + ' - Nota 2?', 'Ingresa la segunda nota'));

var averageHtml = (markHtml_1 + markHtml_2 + markHtml_3) / 3;

var averageCss = (markCss_1 + markCss_2 + markCss_3) / 3;

//var averageJavaScript = (markJavaScript_1 + markJavaScript_2) / 3;

// CONTENEDOR PRINCIPAL
document.write("<div class='container my-4'>");

document.write('<h1>Notas Finales</h1>');
// PRIMERA TABLA DE DATOS DEL ALUMNO
document.write("<table class='mb-3'>");
document.write('<tbody>');
document.write('<tr>');
document.write("<th scope='row'>Nombre</th>");
document.write("<td id='fullName' class='pl-5'></td>");
document.write('</tr>');

document.write('<tr>');
document.write("<th scope='row'>Carrera</th>");
document.write("<td id='studentCareer' class='pl-5'></td>");
document.write('</tr>');
document.write('</tbody>');
document.write('</table>');

// TABLA DE NOTAS
document.write("<table class='table'>");
document.write("<thead class='thead-dark'>");
document.write('<tr>');
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write('</tr>');
document.write('</thead>');

document.write('<tbody>');
document.write('<tr>');
document.write("<th id='html' scope='row'></th>");
document.write("<th id='markHtml_1' scope='col'></th>");
document.write("<th id='markHtml_2'scope='col'></th>");
document.write("<th id='markHtml_3' scope='col'></th>");
document.write("<th id='averageHtml' scope='col'></th>");
document.write('</tr>');

document.write('<tr>');
document.write("<th id='css' scope='row'>CSS</th>");
document.write("<th id='markCss_1' scope='col'></th>");
document.write("<th id='markCss_2' scope='col'></th>");
document.write("<th id='markCss_3' scope='col'></th>");
document.write("<th id='averageCss' scope='col'></th>");
document.write('</tr>');

document.write('<tr>');
document.write("<th id='javascript' scope='row'>JavaScript</th>");
document.write("<th id='markJavaScript_1' scope='col'></th>");
document.write("<th id='markJavaScript_2' scope='col'></th>");
document.write("<th id='markJavaScript_3' scope='col'></th>");
document.write("<th id='averageJavaScript' scope='col'></th>");
document.write('</tr>');

document.write('</tbody>');
document.write('</table>');

// PIE DE LA TABLA
document.write("<hr class='break'>");
document.write("<h6 id='alert'></h6>");
document.write('</div>');

document.getElementById('fullName').innerHTML = studentName + ' ' + studentSurname;
document.getElementById('studentCareer').innerHTML = studentCareer;

document.getElementById('html').innerHTML = subject1;
document.getElementById('markHtml_1').innerHTML = markHtml_1;
document.getElementById('markHtml_2').innerHTML = markHtml_2;
document.getElementById('markHtml_3').innerHTML = markHtml_3;

document.getElementById('css').innerHTML = subject2;
document.getElementById('markCss_1').innerHTML = markCss_1;
document.getElementById('markCss_2').innerHTML = markCss_2;
document.getElementById('markCss_3').innerHTML = markCss_3;

document.getElementById('javascript').innerHTML = subject3;
document.getElementById('markJavaScript_1').innerHTML = markJavaScript_1;
document.getElementById('markJavaScript_2').innerHTML = markJavaScript_2;
document.getElementById('markJavaScript_3').innerHTML = '-';

document.getElementById('averageHtml').innerHTML = averageHtml.toFixed(1);
document.getElementById('averageCss').innerHTML = averageCss.toFixed(1);
document.getElementById('averageJavaScript').innerHTML = '-';

// TEXTO POR DEFECTO DE ACUERDO A LA NOTA
document.getElementById('alert').innerHTML =
	'Para aprobar el ramo ' + subject3 + ', necesitas obtener un 4 en el promedio.';
