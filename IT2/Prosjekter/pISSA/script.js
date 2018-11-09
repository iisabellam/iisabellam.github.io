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

const btnNeste = document.getElementById("btnNeste");

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
    };