

    let ostArray = document.querySelectorAll(".ost");
    let bunnArray = document.querySelectorAll(".bunn");
    let toppingArray = document.querySelectorAll(".topping");
    let dressingArray = document.querySelectorAll(".dressing");
    let kr = 100;

    let minPizza = {
        bunn: " ",
        ost: [],
        topping: [],
        dressing: [],
        pris: " "
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
    const klikk = document.getElementById("klikk");
    const btnbek = document.getElementById("btnbek");
    const vent = document.getElementById("vent");
    const bekreftet = document.getElementById("bekreftet");
    const db = firebase.database();
    const ordre = db.ref("ordre");


    // Lagre Pizza toppinger og pris, går fra lag til info
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

        minPizza.pris = kr;

        console.log(minPizza)
        lag.style.display = "none";
        info.style.display = "block";
        bekreft.style.display = "none";
        nav1.style.color = "white";
        nav3.style.color = "white";
        nav2.style.color = "black";
        klikk.play();
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

    // Viser pizza toppingne på bilde ved checked boks
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


    // Lagrer navn og info til kunde, skriver ut bestilling og kundeinfo i bekreft-boksen, går fra info til bekreft
    // må fylle telefonnummer
    function bet(){
        if(inptlf.value === ""){
            alert("Du må fylle inn telefonnummer!");
        }else{
            navn.fornavn = inpfornavn.value;
            navn.etternavn = inpetternavn.value;
            navn.adresse = inpadresse.value;
            navn.postnummer = inppostnr.value;
            navn.by = inpby.value;
            navn.email = inpemail.value;
            navn.tlf = inptlf.value;
            console.log(navn);

            bestilling.innerHTML = "";
            person.innerHTML = "";

            info.style.display = "none";
            bekreft.style.display = "block";
            lag.style.display = "none";

            klikk.play();

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
    }

    btnbet.onclick = bet;
    // nav3.onclick = bet;


    // Går tilbake til lag, sletter pizzainfo for å lagre igjen når man trykker neste(så det ikke blir dobbelt)
    function back() {
        lag.style.display = "grid";
        info.style.display = "none";
        bekreft.style.display = "none";

        minPizza = {
            bunn: " ",
            ost: [],
            topping: [],
            dressing: [],
            pris: " "
        };
        nav1.style.color = "black";
        nav2.style.color = "white";
        nav3.style.color = "white";

        klikk.play();
    }

    btnback.onclick = back;


    // Går tilbake til info, sletter kontaktinfo for å ikke dobbelt lagre.
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

        klikk.play();

    }

    btnbak.onclick = bak;

    // kan bruke navigasjonsbar til å velge trinn
    nav1.onclick = function () {
        if (bekreftet.style.display === "block"){
            console.log("kan ikke");
        } else {
            back();
        }
    };

    // kan bruke navigasjonsbar til å velge trinn
    nav2.onclick = function () {
        if (bekreftet.style.display === "block"){
            console.log("kan ikke");
        } else if (lag.style.display === ""){
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

    // kan bruke navigasjonsbar til å velge trinn
    nav3.onclick = function () {
        if (bekreftet.style.display === "block"){
            console.log("kan ikke");
        } else if (bekreft.style.display === "block"){
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

    // bekrefte kjøp, lagrer i database og viser bekreft melding
    function bekr(evt) {
        bekreft.style.display = "none";
        vent.style.display = "block";

        klikk.play();

        setTimeout(function () {
            vent.style.display = "none";
            bekreftet.style.display = "block";
        }, 8000);

        console.log("bet1");
        evt.preventDefault();
        const order = {
            kunde: navn,
            pizza: minPizza
        };
        ordre.push(order);
    }

    btnbek.onclick = bekr;
