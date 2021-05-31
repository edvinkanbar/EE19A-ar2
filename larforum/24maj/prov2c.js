console.log("nu kör vi");

// Hitta element
const knappMinus1 = document.querySelector(".minus1");
const knappPlus1 = document.querySelector(".plus1");
const rutaAntal1 = document.querySelector(".antal1");

const knappMinus2 = document.querySelector(".minus2");
const knappPlus2 = document.querySelector(".plus2");
const rutaAntal2 = document.querySelector(".antal2");

const knappSlutför = document.querySelector("button");
const knappTotal = document.querySelector(".total");

//

// Klicka på plus ökar med 1
knappPlus1.addEventListener("click", function () {
    console.log("klicka på plus");
    // Läsa av rutan
    var antal = Number(rutaAntal1.value);

    //Skriv tillbaka
    rutaAntal1.value = antal + 1;
})
// klicka på minus minskar med 1
knappMinus1.addEventListener("click", function () {
    console.log("klicka på minus");
    // Läsa av rutan
    var antal = Number(rutaAntal1.value);

    // Om antal större än noll minska med 1
    if (antal > 0) {
        //Skriv tillbaka
        rutaAntal1.value = antal - 1;
    }


})


// Klicka på plus ökar med 1
knappPlus2.addEventListener("click", function () {
    console.log("klicka på plus");
    // Läsa av rutan
    var antal = Number(rutaAntal2.value);

    //Skriv tillbaka
    rutaAntal2.value = antal + 1;
})
// klicka på minus minskar med 2
knappMinus2.addEventListener("click", function () {
    console.log("klicka på minus");
    // Läsa av rutan
    var antal = Number(rutaAntal2.value);
    if (antal > 0) {
        //Skriv tillbaka
        rutaAntal2.value = antal - 1;
    }

})

knappSlutför.addEventListener("click", function () {
    // Läs in antal1 och antal2
    var antal1 = Number(rutaAntal1.value);
    var antal2 = Number(rutaAntal1.value);
    
    // Räkna ut totalen 
    var total = antal1 * 39 + antal2 * 102;

    // Skriv ut totalen
    rutaTotal.value = total;
})