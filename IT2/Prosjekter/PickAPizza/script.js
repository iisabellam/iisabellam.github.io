
    let ostArray = document.querySelectorAll(".ost");
    let bunnArray = document.querySelectorAll(".bunn");
    let toppingArray = document.querySelectorAll(".topping");
    let dressingArray = document.querySelectorAll(".dressing");
    let kr = 100;

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
    const btnback = document.getElementById("btnback");
    const btnbak = document.getElementById("btnbak");
    const pris = document.getElementById("pris");
    const nav1 = document.getElementById("nav1");
    const nav2 = document.getElementById("nav2");
    const nav3 = document.getElementById("nav3");
    
    


    function neste() {
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
        bekreft.style.display = "none";
        nav1.style.color = "white";
        nav3.style.color = "white";
        nav2.style.color = "black";
    }

    btnNeste.onclick = neste;
    //nav2.onclick = neste;

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

    function leggtil(){
        let ingredienser = `<img class="lol" src="bilder/Bunn-01.png">`;
        kr = 100;
        for (let i = 0; i <= 4; i++) {
            if (ostArray[i].checked) {
                ingredienser += `<img class="lol" src="bilder/ost-01.png">`;
                kr += 10;
            }
        }
        for (let i = 0; i<=11; i++){
            if (toppingArray[i].checked){
                ingredienser += `<img class="lol" src="bilder/${toppingArray[i].value}-01.png">`;
                kr += 15;
            }
        }
        for (let i = 0; i<=5; i++){
            if (dressingArray[i].checked){
                ingredienser += `<img class="lol" src="bilder/${dressingArray[i].value}-01.png">`;
                kr += 30;
            }
        }


        pizza.innerHTML = ingredienser + `<p id="pris"> Pris: ${kr},- </p>`;
    }

    velg.onclick = leggtil;

    function bet(){
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
        lag.style.display = "none";

        let utost = "";
        for (let i = 0; i<=(minPizza.ost.length)-1; i++){
            utost += ` <br> - ${minPizza.ost[i]} `;
        }

        let uttopp = "";
        for (let i = 0; i<=(minPizza.topping.length)-1; i++){
            uttopp += ` <br> - ${minPizza.topping[i]} `;
        }

        let utdre = "";
        for (let i = 0; i<=(minPizza.dressing.length)-1; i++){
            utdre += ` <br> - ${minPizza.dressing[i]} `;
        }

        bestilling.innerHTML += `
        <h3>Pizza</h3>
        <p><b>Bunn: </b><br> - ${minPizza.bunn}</p><br>
        <p><b>Ost:</b> ${utost}</p><br>
        <p><b>Topping: </b> ${uttopp}</p><br>
        <p><b>Dressing:</b> ${utdre}</p><br>
        <p><b>Pris:</b> <br>  - ${kr},-</p>
        `;

        person.innerHTML += `
        <h3>Person Info</h3>
        <p><b>Navn: </b><br> - ${navn.fornavn}  ${navn.etternavn}</p><br>
        <p><b>Adresse:</b> <br> - ${navn.adresse}</p><br>
        <p><b>By: </b><br> - ${navn.postnummer}, ${navn.by}</p><br>
        <p><b>E-mail: </b><br> - ${navn.email}</p><br>
        <p><b>Telefonnummer: </b><br> - ${navn.tlf}</p>
        `;

        nav1.style.color = "white";
        nav2.style.color = "white";
        nav3.style.color = "black";
    }

    btnbet.onclick = bet;
    // nav3.onclick = bet;


    function back() {
        lag.style.display = "grid";
        info.style.display = "none";
        bekreft.style.display = "none";

        minPizza = {
            bunn: " ",
            ost: [],
            topping: [],
            dressing: []
        };
        nav1.style.color = "black";
        nav2.style.color = "white";
        nav3.style.color = "white";
    }

    btnback.onclick = back;


    function bak() {
        bekreft.style.display = "none";
        info.style.display = "block";
        lag.style.display = "none";

        navn = {
            fornavn: " ",
            etternavn: " ",
            adresse: " ",
            postnummer: " ",
            by: " ",
            email: " ",
            tlf: " "
        };

        bestilling.innerHTML = "";
        person.innerHTML = "";
        nav2.style.color = "black";
        nav3.style.color = "white";
        nav1.style.color = "white";

    }

    btnbak.onclick = bak;
    //nav2.onclick = bak;

    nav1.onclick = back;

    nav2.onclick = function () {
        if (lag.style.display === ""){
            neste();
            console.log("nest");
        } else if(lag.style.display === "grid") {
            neste();
            console.log("neste");
        } else {
            bak();
            console.log("bak");
        }
    };

    nav3.onclick = function () {
        if (bekreft.style.display === "block"){
            console.log("bli");
        } else if (lag.style.display === "none"){
            bet();
            console.log("bet2");
        } else {
            neste();
            console.log("nest1");
            bak();
            console.log("bak1");
            bet();
            console.log("bet1");
        }
    };