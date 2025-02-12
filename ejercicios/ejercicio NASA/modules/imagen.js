function cargarImagen(fecha,apiKey,url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("titulo").textContent = data.title;
        document.getElementById("explicacion").textContent = data.explanation;
        
        if (data.media_type === "image") {
            document.getElementById("imagen").src = data.url;
            document.getElementById("imagen").style.display = "block";
            document.getElementById("video").style.display = "none";
        } else if (data.media_type === "video") {
            document.getElementById("video").src = data.url;
            document.getElementById("video").style.display = "block";
            document.getElementById("imagen").style.display = "none";
        }
    })
    .catch(error => console.log("Error al obtener datos de la NASA", error));
}
export default cargarImagen