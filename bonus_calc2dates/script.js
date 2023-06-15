const enviar = document.querySelector("#enviar");

enviar.addEventListener("click", (event) => {
    event.preventDefault();
    var date1 = new Date(document.getElementById("data1").value);
    var date2 = new Date(document.getElementById("data2").value);

    var difference = date2 - date1;
    var dif = difference/(24*3600*1000);    
})
