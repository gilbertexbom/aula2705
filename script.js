
function ola(){
    const data = new Date();

    //data.setHours(data.getHours() + 10);

    //document.write(data.getHours() + "h");
    document.getElementById("teste").innerHTML = data.getHours() + "h";

    if(data.getHours() < 12){
        document.getElementById("headline1").innerHTML = "Bom dia";
        //document.write("<h1> Bom dia! </h1>");
    } else if(data.getHours() < 18){
        document.write("<h1> Boa tarde! </h1>");
    } else {
        document.write("<h1> Boa noite! </h1>");
    }
}