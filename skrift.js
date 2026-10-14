//============================
//æfing 1 data og típur
//============================

//Búa til breytur fyrir nafnið okkar, aldur og hvort við eigum gæludýr og prenta það með console.log

const nafn = "Kristofer"
let aldur = 20;
const gaeludyr = true;
console.log(nafn, aldur, gaeludyr);


// 2. nota typeof til að breyta reytinum okkar
console.log(typeof nafn); // string
console.log(typeof aldur); // number
console.log(typeof gaeludyr); // boolean

// 3. Búa til breytu sem er fæðingarár og reiknaðu aldurinn út frá árinu 2026

const faedingarar = 2006;
const reiknaduAldur = 2026 - faedingarar;
console.log("Reiknaður aldur", reiknaduAldur)

// 4. Prenta "eg heiti ____ og er ____ ára"
console.log("Ég heiti " + nafn + " og er " + aldur + "ára!");
console.log(`Ég heiti ${nafn} og er ${aldur} ára!`);

// 5. prófa

//==============================
//æfing 2 - if else og föll
//==============================

// 1. skila true ef aldurinn er 18 eða meira, annars skila sem false
function erFullordin(aldur) { 
    return aldur >= 18;
}
console.log(erFullordin(20));
console.log(erFullordin(3));
console.log(erFullordin(18));

// 2. Skila frábært ef einver er 90+, gott ef það er 70-89 staðið ef það er 50-69 fall ef það er undir 50

function einkunn(stig) {
    if (stig >= 90) {
        return "Frábært"
    } else if (stig >= 70) {
        return "gott";

    } else {
        ("Fall");
    }    
}

console.log(einkunn(95));
console.log(einkunn(89));
console.log(einkunn(50));
console.log(einkunn(4));

// 3. skila hvort að talan sé slétt tala eða oddatala
// Notuð % en ef það er einhver afgangur þá er það oddatala

function slettaEdaOdda(tala) {
    if (tala % 2 === 0) {
        return "slétt tala";
    } else {
        return "odda tala"  
    }
}
console.log (slettaEdaOdda(6));
console.log (slettaEdaOdda(3));

// 4. Reikna aflattt

function verdRftirAfslatt(verd, afslattur) {
    return verd - (verd * afslattur) /100;
}

console.log(verdRftirAfslatt(1000, 20));

// 5. Skila stærstu tölu af þremur

function staerst(tala1, tala2, tala3) {
    if(tala1 >= tala2 && tala1 >= tala3) {
        return tala1;
    } else if (tala2 >= tala3) {
        return tala2;
    } else {
        return tala3;
    }
}

console.log(staerst(3, 5, 9));
console.log(staerst(6, 3, 2));




