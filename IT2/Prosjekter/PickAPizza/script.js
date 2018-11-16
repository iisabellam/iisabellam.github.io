
    let ostArray = document.querySelectorAll(".ost");
    let bunnArray = document.querySelectorAll(".bunn");
    let toppingArray = document.querySelectorAll(".topping");
    let dressingArray = document.querySelectorAll(".dressing");

    let minPizza = {
        bunn: " ",
        ost: [],
        topping: [],
        dressing: []
    };

    let navn = {
        fornavn: " ",
        etternavn: " ",
        adresse: " ",
        postnummer: " ",
        by: " ",
        email: " ",
        tlf: " "
    };

    const btnNeste = document.getElementById("btnNeste");
    const pizza = document.getElementById("pizza");
    const velg = document.getElementById("velg");
    const lag = document.getElementById("lag");
    const btnbet = document.getElementById("btnbet");
    const inpfornavn = document.getElementById("inpfornavn");
    const inpetternavn = document.getElementById("inpetternavn");
    const inpadresse = document.getElementById("inpadresse");
    const inppostnr = document.getElementById("inppostnr");
    const inpby = document.getElementById("inpby");
    const inpemail = document.getElementById("inpemail");
    const inptlf = document.getElementById("inptlf");
    const bekreft = document.getElementById("bekreft");
    const bestilling = document.getElementById("bestilling");
    const person = document.getElementById("person");

    


    btnNeste.onclick = function() {
        for (let i = 0; i <= 11; i++) {
            if (toppingArray[i].checked) {
                minPizza.topping.push(toppingArray[i].value);
            }
        }
        for (let i = 0; i <= 4; i++) {
            if (ostArray[i].checked) {
                minPizza.ost.push(ostArray[i].value);
            }
        }
        for (let i = 0; i <= 5; i++) {
            if (dressingArray[i].checked) {
                minPizza.dressing.push(dressingArray[i].value);
            }
        }
        for (let i = 0; i <= 3; i++) {
            if (bunnArray[i].checked) {
                minPizza.bunn = bunnArray[i].value;
            }
        }
        console.log(minPizza)
        lag.style.display = "none";
        info.style.display = "block";
    }

    /*
    onclick = function(){
        for (let i = 0; i <= 4; i++) {
            if (ostArray[i].checked) {
                pizza.innerHTML = `<img src="bilder/ost-01.png">`;
            }
        }
        for (let i = 0; i<=11; i++) {
            if (toppingArray[i].checked){
                pizza.innerHTML += `<img id="${toppingArray[i].value}" src="bilder/${toppingArray[i].value}-01.png">`;
        }
    }


    onclick = function() {
        for (let i = 0; i <= 4; i++) {
            if (ostArray[i].checked) {
                pizza.innerHTML = ingredienser;
            }
        }
    }
    */

    velg.onclick = function(){
        let ingredienser = `<img src="bilder/bunn-01.png">`;
        for (let i = 0; i <= 4; i++) {
            if (ostArray[i].checked) {
                ingredienser += `<img src="bilder/ost-01.png">`;
            }
        }
        for (let i = 0; i<=11; i++){
            if (toppingArray[i].checked){
                ingredienser += `<img src="bilder/${toppingArray[i].value}-01.png">`;
            }
        }

        pizza.innerHTML = ingredienser;
    }

    btnbet.onclick = function(){
        navn.fornavn = inpfornavn.value;
        navn.etternavn = inpetternavn.value;
        navn.adresse = inpadresse.value;
        navn.postnummer = inppostnr.value;
        navn.by = inpby.value;
        navn.email = inpemail.value;
        navn.tlf = inptlf.value;
        console.log(navn);
        
        info.style.display = "none";
        bekreft.style.display = "block";

        bestilling.innerHTML += `
        <h3>Pizza</h3>
        <h4>Bunn: ${minPizza.bunn}</h4>
        <h4>Ost: ${minPizza.ost}</h4>
        <h4>Topping: ${minPizza.topping}</h4>
        <h4>Dressing: ${minPizza.dressing}</h4>
        `;

        person.innerHTML += `
        <h3>Person Info</h3>
        <h4>Navn: ${navn.fornavn}  ${navn.etternavn}</h4>
        <h4>Adresse: ${navn.adresse}</h4>
        <h4>By: ${navn.postnummer}, ${navn.by}</h4>
        <h4>E-mail: ${navn.email}</h4>
        <h4>Telefonnummer: ${navn.tlf}</h4>
        `;
    }