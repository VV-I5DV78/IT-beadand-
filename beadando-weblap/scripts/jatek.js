
function caesar(szoveg, kulcs){
    const regexpKis = /[a-z]/;
    const regexpNagy = /[A-Z]/;
    let titkos = "";
    for (betu of szoveg){
        if(regexpKis.test(betu)){
            titkos += String.fromCharCode((((betu.charCodeAt(0) - 97) + kulcs) % 26) + 97);
        }
        else if(regexpNagy.test(betu)){
            titkos += String.fromCharCode((((betu.charCodeAt(0) - 65) + kulcs) % 26) + 65);
        }
        else{
            titkos += betu;
        }
    }
    return titkos;
}

function decaesar(szoveg, kulcs){
    const regexpKis = /[a-z]/;
    const regexpNagy = /[A-Z]/;
    let nyilt = "";
    for (betu of szoveg){
        if(regexpKis.test(betu)){
            nyilt += String.fromCharCode(((betu.charCodeAt(0) - 97 - kulcs + 26) % 26) + 97);
        }
        else if(regexpNagy.test(betu)){
            nyilt += String.fromCharCode(((betu.charCodeAt(0) - 65 - kulcs + 26) % 26) + 65);
        }
        else{
            nyilt += betu;
        }
    }
    return nyilt;
}



const kulcs = Math.floor(Math.random() * 25) + 1;
let szoveg = "";
const inputMezo = document.getElementById("jatekSzoveg");
const titkos = document.getElementById("titkositott");
const megfejtett = document.getElementById("megfejtett");

const start = document.getElementById("start");
const slider = document.getElementById("slider");
const error = document.getElementById("jatekError");

start.addEventListener("click", () => {
    
    szoveg = document.getElementById("jatekSzoveg").value.trim();
    error.textContent = "";
    inputMezo.classList.remove("errorStyle");

    if(szoveg === ""){
        inputMezo.classList.add("errorStyle");
        error.textContent = "Ezt a mezőt nem hagyhatod üresen!";
    }
    else{
        titkos.textContent = caesar(szoveg, kulcs);
        document.getElementById("titkosDiv").style.display = "flex";
        document.getElementById("megoldasDiv").style.display = "flex";
        document.getElementById("sliderDiv").style.display = "block";
        slider.value = 1;
        eredmenyFrissites();
    }
});

function eredmenyFrissites(){
    const sliderValue = document.getElementById("sliderValue");
    sliderValue.textContent = `Az aktuális érték: ${slider.value}`;

    if(!(szoveg === "")){
    const megfejtes = decaesar(caesar(szoveg, kulcs), slider.value);
    megfejtett.textContent = megfejtes;

    document.getElementById("megoldasDiv").style.backgroundColor = "inherit";
    if (slider.value == kulcs){
        document.getElementById("megoldasDiv").style.backgroundColor = "#c1ffc1";
    }

    }
    
    else{
        console.log(szoveg ==="");
    }
}

slider.addEventListener("input", eredmenyFrissites);

