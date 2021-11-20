function data()
{
    let data = new Date();
    let hora = data.getHours() - 2;
    if (hora < 10) 
        hora = '0' + (data.getHours() - 2);
    
    let min = data.getMinutes();
    if (min < 10) 
        min = '0' + data.getMinutes();
    
    let seg = data.getSeconds();
    if (seg < 10) 
        seg = '0' + data.getSeconds();
    
    let horacompleta = "Time in New York: " + hora + ": " + min + ': ' + seg;
    let escrever = window.document.getElementById('horario');
    escrever.innerHTML = horacompleta; 
    
    
} 
setInterval(data, 1000);

let fechar = document.querySelector("#fechar");
fechar.addEventListener("click", function() {
    let div = document.querySelector("#horario");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
    
});