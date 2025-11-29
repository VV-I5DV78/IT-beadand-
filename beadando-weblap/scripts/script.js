
const gomb = document.getElementById("menuGomb");
const menu = document.getElementById("menu");

if(gomb != null && menu != null){
    gomb.addEventListener("click", () => {
        menu.classList.toggle("show");
});
}


function flippingBox(flipBox){
    const kep = flipBox.querySelector(".flipImage");
    const flipGomb = flipBox.querySelector(".flip");
    const xGomb = flipBox.querySelector(".backFlip");
    const szoveg = flipBox.querySelector(".flipText");

    const kepLatszik = getComputedStyle(kep).opacity == 1;

    if (kepLatszik){
        kep.style.opacity = 0;
        flipGomb.style.opacity = 0;
        xGomb.style.opacity = 1;
        szoveg.style.opacity = 1;
        szoveg.style.overflow = "auto";
    }
    else{
        kep.style.opacity = 1;
        flipGomb.style.opacity = 1;
        xGomb.style.opacity = 0;
        szoveg.style.opacity = 0;
        szoveg.style.overflow = "hidden";
    }
}

function formValidator(form){

    const kNev = form.querySelector("#fName");
    const vNev = form.querySelector("#lName");
    const bDay = form.querySelector("#birth");
    const kSzam = form.querySelector("#favNum");
    const email = form.querySelector("#email");
    const targy = form.querySelector("#aim");
    const uzenet = form.querySelector("#msg");
    const jog = form.querySelector("#TC");

    const kNevError= form.querySelector("#fNameError");
    const vNevError = form.querySelector("#lNameError");
    const bDayError = form.querySelector("#birthError");
    const kSzamError = form.querySelector("#favNumError");
    const emailError = form.querySelector("#emailError");
    const targyError = form.querySelector("#aimError");
    const uzenetError = form.querySelector("#msgError");
    const jogError = form.querySelector("#TCError");



    let isValid = true;

    const errors = form.querySelectorAll(".errorBox");
    errors.forEach(element => element.textContent = "");
    const inputs = form.querySelectorAll("select, input");
    inputs.forEach(element => element.classList.remove("errorStyle"));

    if(kNev.value.trim() === ""){
        kNevError.textContent = "A keresztnév mező nem lehet üres!";
        kNev.classList.add("errorStyle");
        isValid = false;
    }

    if(vNev.value.trim() === ""){
        vNevError.textContent = "A vezetéknév mező nem lehet üres!";
        vNev.classList.add("errorStyle");
        isValid = false;
    }

    /*DÁTUM CELLA*/

    if(bDay.value < "1900-01-01"){
        bDayError.textContent = "Ennyire azért nem lehetsz öreg...";
        bDay.classList.add("errorStyle");
        isValid = false;
    }

    if(new Date(bDay.value).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)){
        bDayError.textContent = "Ennyire azért nem lehetsz fiatal...";
        bDay.classList.add("errorStyle");
        isValid = false;
    }

    if(bDay.value.trim() === ""){
        bDayError.textContent = "Kötelező mező!";
        bDay.classList.add("errorStyle");
        isValid = false;
    }

    if(kSzam.value === ""){
        kSzamError.textContent = "Kötelező mező!";
        kSzam.classList.add("errorStyle");
        isValid = false;
    }

    /*EMAIL*/
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regexp.test(email.value)){
        emailError.textContent = "Helytelen e-mail fomátum";
        email.classList.add("errorStyle");
        isValid = false;
    }

    if(email.value === ""){
        emailError.textContent = "Kötelező mező!";
        email.classList.add("errorStyle");
        isValid = false;
    }

    if(targy.value === "notSelected"){
        targyError.textContent = "Kötelező választani!";
        targy.classList.add("errorStyle");
        isValid = false;
    }

    if(uzenet.value.trim() === ""){
        uzenetError.textContent = "Az üzenet mező nem lehet üres!";
        uzenet.classList.add("errorStyle");
        isValid = false;
    }

    if(!jog.checked){
        console.log(jog.chechked);
        jogError.textContent = "A levél elküldéséhez el kell fogani az ÁSZF-et!";
        jog.classList.add("errorStyle");
        isValid = false;
    }

/*VÉGSŐ*/
    if (!isValid){
        console.log("nem OK");
        return isValid;
    }
    else{
        console.log("OK");
        return isValid;
    }
}

if((/contact.html/g).test(location.href)){
const form = document.getElementById("urlap");
form.addEventListener("submit", function(event) {
        const valid = formValidator(form);

        if (!valid) {
            event.preventDefault();
        }
    });}