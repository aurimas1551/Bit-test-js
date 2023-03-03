//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
function one(){
    let a = 2;
    let b = 9;
    if(a>b){
        console.log(a + "yra daugiau uz" + b);
    } else if (a<b){
        console.log(a + "yra maziau uz" + b);
    } else {
        console.log(a + "yra lygus" + b);
    }
}

//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
function two(){
    for(i=1; i<=10; i++){
        console.log(i);
    }
}

//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
function three(){
    for(i=0; i<=10; i+=2){
        console.log(i);
    }
}

//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
function four(){
    for(i=1; i<=10; i++){
        console.log(Math.floor(Math.random() * 10 ) + 1)
    }
}

//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
function five(){
    let i = 1;
    let x = 10;
    while(i<=x){
        i++;
        if(i>x){
            console.log(5);
        } else {
            console.log(Math.floor(Math.random() * 10 ) + 1);
        }
    }
}

//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30.
//Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
function six(){
    let min = Math.ceil(20);
    let max = Math.floor(30);
    let arrayMinValue = Math.ceil(10);
    let arrayMaxValue = Math.floor(30);
    let arraySize = (Math.floor(Math.random() * (max - min + 1) + min));
    let arraySix = [];
    //console.log(arraySize)
    for (i=0; i<arraySize; i++){
        arraySix[i] = (Math.floor(Math.random() * (arrayMaxValue - arrayMinValue + 1) + arrayMinValue));
    }
    //console.log(arraySix);
    let answer = 0;
    for (i=0; i<arraySix.length; i++){
        if(answer < arraySix[i]){
            answer = arraySix[i];
        }
    }
    console.log(answer);
}

//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. 
//Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

function seven(){
    let masyvas = [];
    let raidziuMasyvas = ["A","B","C","D"];
    let ilgis = 100;
    let counterA = 0;
    let counterB = 0;
    let counterC = 0;
    let counterD = 0;
    for (i=0; i<ilgis; i++){
        let min = Math.ceil(0);
        let max = Math.floor(3);
        masyvas[i] = raidziuMasyvas[((Math.floor(Math.random() * (max - min + 1) + min)))];
    }
    for (i=0; i<masyvas.length; i++){
        switch(masyvas[i]) {
            case "A": counterA++;
            break;
            case "B": counterB++;
            break;
            case "C": counterC++;
            break;
            case "D": counterD++;
            break;
        }
    }
    console.log("letter A: " + counterA);
    console.log("letter B: " + counterB);
    console.log("letter C: " + counterC);
    console.log("letter D: " + counterD);
}


//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. 
//Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
//Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. 
//Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
function lygineSuma(a, b){
    if(typeof a == 'number' && typeof b == 'number') {
        let sum = a + b;
        if( sum % 2 == 0 ){
            console.log("skaiciu suma: " + sum);
        } else {
            console.log("skaiciu suma nelygine: " + sum);
        }
    }
    else if(Array.isArray(a) && Array.isArray(b)) {
        let sum = a.length + b.length;
        if (sum % 2 == 0){
            console.log("masyvu suma: " + sum);
        } else {
            console.log("masyvu suma nelygine: " + sum);
        }
    } else {
        console.log("vienas is kintamuju yra skirtingas.")
    }
}

//9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. 
//Turi būti patikrinimas, kad kintamasis yra skaičius. 
//Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
function pirminisSkaicius(a) {
    if (typeof a == 'number') {
        if (a % 1 !== 0 || a <= 0) {
            console.log("skaicius turi buti sveikas ir daugiau uz 0");
        }else if (a == 1 || a == 2) {
            console.log("skaicius " + a + " yra pirminis");
        } else {
            let pirminis = true;
            for(i=2; i<a; i++){
                if (a % i == 0){
                    pirminis = false;
                    i = a;
                }
            }
            if (pirminis){
                console.log("skaicius: " + a + " yra pirminis");
            } else {
                console.log("skaicius: " + a + " nera pirminis");
            }
        }
    }

}

//10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. 
//Masyvo elementai - skaičiai, ilgis - 10. 
//Funkcija turi grąžinti telefono numerį tokiu formatu - 
//"(XXX) XXX-XXXX". (10 taškų)*/
function telefonoNumeris(a) {
    console.log(`(${a.slice(0,3).join("")}) ${a.slice(3,6).join("")}-${a.slice(6,10).join("")}`);
}

console.log("1------------------------------")
one();
console.log("2------------------------------")
two();
console.log("3------------------------------")
three();
console.log("4------------------------------")
four();
console.log("5------------------------------")
five();
console.log("6------------------------------")
six();
console.log("7------------------------------")
seven();
console.log("8------------------------------")
lygineSuma([1], 1);
console.log("9------------------------------")
pirminisSkaicius(97);
console.log("10------------------------------")
telefonoNumeris([1,2,3,4,5,6,7,8,9,0]);
