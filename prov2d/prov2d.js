const rutaPasta = document.querySelector(".pasta")
const rutaLax = document.querySelector(".lax")
const rutaGrädde = document.querySelector(".grädde")
const rutaBuljong = document.querySelector(".buljong")
const rutaLista = document.querySelector("textarea")
const rutaSumma = document.querySelector(".summa")
const knappBeställ = document.querySelector("button")

knappBeställ.addEventListener("click", function () {

    var pasta = Number(rutaPasta.value);
    var lax = Number(rutaLax.value);
    var grädde = Number(rutaGrädde.value);
    var buljong = Number(rutaBuljong.value);

    var lista = pasta + " " + lax + " " + grädde + " " + buljong 

    rutaLista.textContent = lista;

    if (pasta, lax, grädde, buljong > 0) {

        rutaLista.textContent = lista + "   Pasta 300g, Lax 400g, Grädde 2.5dl, Buljongtärning"


    }


})







knappBeställ.addEventListener("click", function () {

    var pasta = Number(rutaPasta.value);
    var lax = Number(rutaLax.value);
    var grädde = Number(rutaGrädde.value);
    var buljong = Number(rutaBuljong.value);

    var summa = pasta * 29 + lax * 99 + grädde * 15 + buljong * 5 + ":-";

    rutaSumma.value = summa;


})