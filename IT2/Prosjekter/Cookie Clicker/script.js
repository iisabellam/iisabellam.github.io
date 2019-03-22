

    // referanser til HTML-elementer
    const kjeks = document.querySelector("#kjeks");
    const poeng = document.querySelector("#poeng");
    const divHjelp = document.querySelector("#divHjelp");
    const divAdds = document.querySelector("#divAdds");


    // global variabler
    let png = 0;
    let cps = 0;
    let xtra = 1;

    // animasjon
    let transf = [
        {transform: "scale(1)"},
        {transform: "scale(0.95)"},
        {transform: "scale(1)"}
    ];

    // objekter av hjelpemidler
    let cursorAd = {
        id: "cursor",
        navn: "Cursor",
        bilde: "bilder/cursor.png",
        cps: 1/5,
        pris: 20,
        antall: 0,
        inbilde: "bilder/pointer.png"
    };

    let grandmaAd = {
        id: "grandma",
        navn: "Grandma",
        bilde: "bilder/grandma.png",
        cps: 1/2,
        pris: 100,
        antall: 0,
        inbilde: "bilder/grandma.png",
        bakgrunn: "bilder/grandmaBackground.png",
        boks: 0
    };

    let powerAd = {
        id: "power",
        navn: "Powerclick",
        bilde: "bilder/power.png",
        cps: "+1 each click",
        pris: 350,
        extra: 1
    };

    let farmAd = {
        id: "farm",
        navn: "Farm",
        bilde: "bilder/farm.png",
        cps: 2,
        pris: 500,
        antall: 0,
        inbilde: "bilder/farmin.png",
        bakgrunn: "bilder/farmBackground.png",
        boks: 1
    };

    let factoryAd = {
        id: "factory",
        navn: "Factory",
        bilde: "bilder/factory.png",
        cps: 10,
        pris: 3000,
        antall: 0,
        inbilde: "bilder/factoryin.png",
        bakgrunn: "bilder/factoryBackground.png",
        boks: 2
    };

    let mineAd = {
        id: "mine",
        navn: "Mine",
        bilde: "bilder/mine.png",
        cps: 40,
        pris: 10000,
        antall: 0,
        inbilde: "bilder/minemin.png",
        bakgrunn: "bilder/mineBackground.png",
        boks: 3
    };

    let shipmentAd = {
        id: "shipment",
        navn: "Shipment",
        bilde: "bilder/shipment.png",
        cps: 100,
        pris: 40000,
        antall: 0,
        inbilde: "bilder/shipin.png",
        bakgrunn: "bilder/shipmentBackground.png",
        boks: 4
    };

    let alchemylabAd = {
        id: "alchemylab",
        navn: "Alchemy Lab",
        bilde: "bilder/alchemylab.png",
        cps: 400,
        pris: 200000,
        antall: 0,
        inbilde: "bilder/alchin.png",
        bakgrunn: "bilder/alchemylabBackground.png",
        boks: 5
    };

    let arrayAd = [cursorAd, grandmaAd, powerAd, farmAd, factoryAd, mineAd, shipmentAd, alchemylabAd]; //array av alle hjelpemidlene

    // Setup
    gameLoop();

    for (let i = 0; i<arrayAd.length; i++) { // Skriver ut alle hjelpemidlene
        divAdds.innerHTML += `
                    <div id="${arrayAd[i].id}" class="adds" style="opacity: 0.5">
                        <img src="${arrayAd[i].bilde}" class="bilde2">
                        <h3 class="span3">${arrayAd[i].navn}</h3>
                        <a>${arrayAd[i].pris} cookies</a>
                        <a>Cps: ${arrayAd[i].cps}</a>
                    </div>
                `;
        // skriver ut alle Add on boksene uten om til pekerne (0,2)
        if (i===0 || i===2){
            console.log("Trenger ikke div boks");
        } else{
            divHjelp.innerHTML += `
                <div class="divBak" style="background-image: url('${arrayAd[i].bakgrunn}')"></div>
            `;
        }
    }

    //global variabel, lager array av hjelpemidlene
    let divAdArray = document.querySelectorAll(".adds"); // lager array av div-elementene i store
    let divBakArray = document.querySelectorAll(".divBak"); // lager array av div-elementene i "add ons"

    //hendelsesfunksjoner
    kjeks.onclick = merPoeng; // kjører funksjonen merPoeng for hvert klikk på kjeksen


    // hva som skjer når men trykker på en av hjelpmidlene
    for (let u=0; u<divAdArray.length; u++){ // for løkke for å sjekke hva man trykker på
        divAdArray[u].onclick = function () {
            if (png >= arrayAd[u].pris){ // dersom man har råd, kan man trykke på boksene
                if (u === 2){ // powerclick endrer ikke cps, og har derfor egen setning
                    png -= arrayAd[2].pris; // trekker fra cookies
                    arrayAd[2].pris = Number(Number(arrayAd[2].pris*1.1)).toFixed(0); // endrer pris

                    // endrer innhold i powerclick
                    divAdArray[2].innerHTML = `
                                <img src="${arrayAd[2].bilde}" class="bilde2">
                                <h3 class="span3">${arrayAd[2].navn}</h3>
                                <a>${arrayAd[2].pris} cookies</a>
                                <a>Cps: ${arrayAd[2].cps}</a>
                            `;
                    xtra++;
                } else { // andre funksjoner som endrer cps
                    cps += arrayAd[u].cps; // endrer cps
                    png -= arrayAd[u].pris; // trekker fra cookies
                    arrayAd[u].antall++; // legger til antall
                    arrayAd[u].pris = Number(Number(arrayAd[u].pris*1.1)).toFixed(0); // endrer prisen
                    // ender innhold i kjøpt produkt til nye priser og antall
                    divAdArray[u].innerHTML = `
                                <img src="${arrayAd[u].bilde}" class="bilde2">
                                <h3 class="span3">${arrayAd[u].navn}</h3>
                                <a>${arrayAd[u].pris} cookies</a>
                                <a>Cps: ${arrayAd[u].cps}</a>
                                <p>${arrayAd[u].antall}</p>
                            `;

                    // skriver ut nye antall cookies og cps
                    poeng.innerHTML = `${Math.floor(png)} cookies`;
                    hcps.innerHTML = `per sekund: ${cps.toFixed(1)}`;
                }
                // gjør at boksene blir "borte"
                for(let o=0; o<arrayAd.length; o++){
                    if (png < arrayAd[o].pris){
                        divAdArray[o].style.opacity = 0.5;
                    }
                }

            } else { // dersom man ikke har råd kommer det opp i consolen
                console.log("du har ikke råd");
            }

            // tegner på figurene når du trykker på boksen, og gjør boksen synlig
            if(u===0 || u===2){
                console.log("pointer ass")
            } else{
                if(arrayAd[u].antall > 0){
                    divBakArray[arrayAd[u].boks].style.opacity = 1;
                }
                tegnHjelp(arrayAd[u].antall, divBakArray[arrayAd[u].boks], arrayAd[u].inbilde);
            }
        }
    }

    // gameLoop: sjekker om man har råd, legger til cps hvert sekund
    function gameLoop() {
        sjekkraad();
        plusscps();
        requestAnimationFrame(gameLoop);
    }

    //funksjonsdefinisjoner

    // legger til poeng, og kjører animasjonen plussen i gang
    function merPoeng() {
        png += xtra;
        kjeks.animate(transf, {duration: 200});
        poeng.innerHTML = `${Math.floor(png)} cookies`;
        plussen();
        kjekned();
    }

    // sjekker om man har råd til å kjøpe hjelpemidler, endrer opacity til boksene
    function sjekkraad() {
        for (let y=0; y<arrayAd.length; y++){
            if (arrayAd[y].pris <= png) {
                divAdArray[y].style.opacity = 1;
            } // for ikke den til å funke, har skrevet den over, selvom det ikke er like praktisk
            /*else {
                divAdArray[y].style.opacity = 0.5;
            }*/
        }
    }

    // legger til cps hvert sekund, og runder ned slik at man ikke får desimaltall av kjeks
    function plusscps() {
        png += cps/60;
        poeng.innerHTML = `${Math.floor(png)} cookies`;
    }

    // skriver på + når man trykker, og animerer slik at den blir borte
    function plussen() {
        let pluss = document.createElement("div");
        pluss.className = "pluss";
        pluss.style.left = event.clientX + "px";
        pluss.innerHTML = `+${xtra}`;
        document.body.appendChild(pluss);
        let animasjon = pluss.animate([{opacity:1, top: "180px"},{opacity:0, top: "20px"}],{duration:1000, easing: "linear"});
        animasjon.onfinish = function(){
            document.body.removeChild(pluss);
        }
    };

    // kjeks som faller ned i bakgrunnen for hver gang man trykker, med random x-posisjon innenfor div
    function kjekned() {
        let kjek = document.createElement("div");
        kjek.className = "kjek";
        kjek.style.left = Math.floor(Math.random()*350)+1 + "px";
        kjek.style.height = "70px";
        kjek.innerHTML = `<img id="kjek" src="bilder/kjeks.png">`;
        document.body.appendChild(kjek);
        let animasjon = kjek.animate([{opacity:0.5, top: "-40px"},{opacity:0.5, top: "100vh"}],{duration:1000, easing: "linear"});
        animasjon.onfinish = function(){
            document.body.removeChild(kjek);
        }
    }


    // tegner figurene i hjelpemidlene
    function tegnHjelp(antall, boks, bilde) {
        let x = 0;
        for (let i=0; i<antall; i++){
            let nyFigur = document.createElement("div");
            nyFigur.className = "fig";
            nyFigur.style.position = "absolute";
            nyFigur.style.top = "50%";
            nyFigur.style.left = x + "px";
            nyFigur.style.transform = "translate(0%,-50%)";
            nyFigur.innerHTML = `<img src="${bilde}" class="inbilde">`;
            boks.appendChild(nyFigur);
            x += 35;
        }
    }