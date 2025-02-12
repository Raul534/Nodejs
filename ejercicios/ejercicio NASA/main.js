import cargarImagen from './modules/imagen'
const fecha = document.getElementById("fecha").value;
const apiKey = "DEMO_KEY";
const url = `https://api.nasa.gov/planetary/apod?date=${fecha}&api_key=${apiKey}`;
let btn=document.getElementById("btn")
// let imagen=cargarImagen(fecha)
btn.addEventListener("click",cargarImagen(fecha,apiKey,url))
