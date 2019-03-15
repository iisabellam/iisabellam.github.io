    // referanser til HTML-elementer
    const kjeks = document.querySelector("#kjeks");
    const poeng = document.querySelector("#poeng");
    const divHjelp = document.querySelector("#divHjelp");
    const divAdds = document.querySelector("#divAdds");


    // global variabler
    let png = 0;
    let cps = 0;
    let frames = 0;
    let transf = [
        {transform: "scale(1)"},
        {transform: "scale(0.95)"},
        {transform: "scale(1)"}
    ];

    let clickAd = {
        id: "click",
        navn: "Autoclick",
        bilde: "bilder/click.jpg",
        cps: 1/5,
        pris: 20,
        antall: 0
    };

    let grandmaAd = {
        id: "grandma",
        navn: "Grandma",
        bilde: "bilder/grandma.jpg",
        cps: 1/2,
        pris: 100,
        antall: 0
    };

    let robotAd = {
        id: "robot",
        navn: "Robot",
        bilde: "bilder/robot.jpg",
        cps: 1,
        pris: 350,
        antall: 0
    };

    let farmAd = {
        id: "farm",
        navn: "Farm",
        bilde: "bilder/farm.jpg",
        cps: 2,
        pris: 500,
        antall: 0
    };

    let factoryAd = {
        id: "factory",
        navn: "Factory",
        bilde: "bilder/factory.jpg",
        cps: 10,
        pris: 3000,
        antall: 0
    };

    let mineAd = {
        id: "mine",
        navn: "Mine",
        bilde: "bilder/mine.jpg",
        cps: 40,
        pris: 10000,
        antall: 0
    };

    let shipmentAd = {
        id: "shipment",
        navn: "Shipment",
        bilde: "bilder/shipment.jpg",
        cps: 100,
        pris: 40000,
        antall: 0
    };

    let alchemylabAd = {
        id: "alchemylab",
        navn: "Alchemy Lab",
        bilde: "bilder/alchemylab.jpg",
        cps: 400,
        pris: 200000,
        antall: 0
    };

    let arrayAd = [clickAd, grandmaAd, robotAd, farmAd, factoryAd, mineAd, shipmentAd, alchemylabAd];

    // Setup
    gameLoop();
    for (let i = 0; i<arrayAd.length; i++) { // Skriver ut alle hjelpemidlene
        divAdds.innerHTML += `
                    <div id="${arrayAd[i].id}" class="adds" style="opacity: 0.5">
                        <h3 class="span3">${arrayAd[i].navn}</h3>
                        <a>${arrayAd[i].pris} cookies</a>
                        <a>Cps: ${arrayAd[i].cps}</a>
                    </div>
                `;
    }

    let divAdArray = document.querySelectorAll(".adds");

    //hendelsesfunksjoner
    kjeks.onclick = merPoeng;

    for (let u=0; u<divAdArray.length; u++){
        divAdArray[u].onclick = function () {
            if (png >= arrayAd[u].pris){
                cps += arrayAd[u].cps;
                png -= arrayAd[u].pris;
                arrayAd[u].antall++;
                arrayAd[u].pris = Number(Number(arrayAd[u].pris*1.1)).toFixed(0);
                // ender innhold i kjøpt produkt
                divAdArray[u].innerHTML = `
                            <h3 class="span3">${arrayAd[u].navn}</h3>
                            <a>${arrayAd[u].pris} cookies</a>
                            <a>Cps: ${arrayAd[u].cps}</a>
                            <a>Antall: ${arrayAd[u].antall}</a>
                        `;
                poeng.innerHTML = `${Math.floor(png)} cookies`;
                hcps.innerHTML = `per sekund: ${cps.toFixed(1)}`;

                if (png < arrayAd[u].pris){
                    divAdArray[u].style.opacity = 0.5;
                }
            } else {
                console.log("du har ikke råd");
            }
        }
    }


    // window.onkeydown = gameLoop;

    function gameLoop() {
        frames++;
        sjekkraad();
        if (frames%60===0){
            plusscps();
        }
        requestAnimationFrame(gameLoop);
    }

    //funksjonsdefinisjoner
    function merPoeng() {
        png++;
        kjeks.animate(transf, {duration: 200});
        poeng.innerHTML = `${Math.floor(png)} cookies`;
        plussen();

    }

    function sjekkraad() {
        for (let y=0; y<arrayAd.length; y++){
            if (arrayAd[y].pris <= png) {
                divAdArray[y].style.opacity = 1;
            }
        }
    }

    function plusscps() {
        png += cps;
        poeng.innerHTML = `${Math.floor(png)} cookies`;
    }

    function plussen() {
        let pluss = document.createElement("div");
        pluss.className = "pluss";
        pluss.style.left = event.clientX + "px";
        pluss.innerHTML = "+1";
        document.body.appendChild(pluss);
        let animasjon = pluss.animate([{opacity:1, top: "170px"},{opacity:0, top: "20px"}],{duration:1000, easing: "linear"});
        animasjon.onfinish = function(){
            document.body.removeChild(pluss);
        }
    };