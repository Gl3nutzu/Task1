var x = 4; //declararea unei variabile de tip var are domeniul de aplicare global daca este in afara functiei sau paote fi folosita in toata functia daca este declarata local in functie.
let z = 'aqua'; //declararea unei variabile de tip let (feature adus de ES6) are domeniul de aplicare marginit de blocul '{ }' si folosirea variabilei in afara blocului va rezulta o eroare.
const y = false; //poate fi accesata la fel ca si cea de tip let in schimb valoarea pe care o are nu poate fi redeclarata sau actualizata in alta portiune din cod. 

//diferenta dintre var si let
function varfunc() {
    var a = 24;
    if(a < 50) {
        var a = 75; // se refera si va schimba valoarea variabilei a declarata inaintea blocului if { }
        console.log(a); // va afisa 75
    }
    console.log(a); // va afisa 75
}

function letfunc() {
    let a = 24;
    if(a < 50) {
        let a = 75; // este declarata o variabila separata care va avea sens doar in blocul if { }
        console.log(a); // va afisa 75
    }
    console.log(a); // va afisa 24
}

let partial = ['aqua'];
let ndpartial = ['soft', 2022];
let full = [...partial, 'soft', 2022]; // folosim operatorul spread (...)
console.log(full);

let ndfull = partial.concat(ndpartial);

let final = ['Summer camp', ...full];
console.log(final);

let culoare = 'negru', marca = 'Ford', pret = 5000;

let masina = { //obiectele in js sunt variabile care pot contine mai multe valori numite propietati (varibile sau metode)
    culoare,
    marca,
    pret,
    scumpeste() {
        this.pret += 2000;
    }
}

masina.scumpeste(); // apelam propietatea functie a obiectului creat
console.log(masina.culoare); // se va afisa 'negru'
console.log(masina.pret); //se va afisa in consola 7000


let nmr = [1, 2, 3, 4]; // declararea unui array
console.log (nmr[2]); // se va afisa in consola 3

nmr.forEach(suma);

let s=0;
function suma(value) {
    s += value;
}
console.log(s); // se va afisa suma cifrelor din array => 10

const reverse = nmr.reverse(); // metoda care provoaca o mutatie array-ului 
console.log(reverse); // se va afisa array-ul inversat ([4, 3, 2, 1])

nmr.push(5); // se adauga la finalul array-ului valoarea din parametru => [1, 2, 3, 4, 5]
console.log(nmr);

let l = nmr.pop();
console.log(l); // se va afisa 5
console.log(nmr); // observam ca a disparut ultimul obiect din array

// o promisiune reprezinta un obiect care este folosit ca inlocuitor pentru ceea ce va rezulta in cazul in care exista o intarziere.
let myPromise = new Promise(function(myResolve, myReject) {

  myResolve(); // se va apela in cazul in care se executa cu succes promise-ul
  myReject();  // se va apela in cazul in care nu se va executa cu succes promise-ul

});

// dupa ce se termina de executat promise-ul
myPromise.then(
  function(value) { /* cod daca se executa cu succes */ },
  function(error) { /* cod daca apare vreo eroare */ }
);

async function asincron() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("timer expirat"), 5000)
  });

  let result = await promise; // await va astepta pana cand promise-ul se va termina de executat

  console.log(result); // se va afisa 'timer expirat'
}

asincron();

// exemplu de disclosure
function adunare(x) {
  return function (y) {
    return x + y;
  };
}

const sapte = adunare(7);
const doi = adunare(2);

console.log(sapte(2)); // se va afisa 9
console.log(doi(2)); // se va afisa 4

const func = (a, b) => a+b; // functie arrow (ES6)

console.log(func(4, 9)); // va afisa 13

let text = "Summer Camp Aquasoft";
if(text.endsWith('Aquasoft')) console.log('Succes');

console.log(Array.from(text)); // transforma un text intr-un array