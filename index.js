//	Creati o functie care afisieaza in consola o proprietate a obiectulu, dupa,  creati 3 obiecte care au ca metoda functia data.
//folositi, call, apply si bind astfel ca chemarea metodeii dintr-un obiect sa afiseze proprietatea din altul.

function afiseazaProp(price) {
    console.log(this[price]);
  }
  const det1={
    name: "Ariel",
    price: 150
  };
  const det2={
    name: "Dash",
    price: 175
  };
  const det3={
    name: "Persil",
    price: 145
  };

  afiseazaProp.call(det1,"price");
  afiseazaProp.call(det2,"price");
  afiseazaProp.call(det3,"price");

  afiseazaProp.apply(det1,["price"]);
  afiseazaProp.apply(det2,["price"]);
  afiseazaProp.apply(det3,["price"]);

  const a1=  afiseazaProp.bind(det1,"price");
  const a2=  afiseazaProp.bind(det2,"price");
  const a3=  afiseazaProp.bind(det3,"price");
  a1();
  a2();
  a3();
//•	Creati un obiect si adaugati proprietati noi la fie care din ele cel putin un atribut trebuie sa fie false si aratati cum acest atribut afecteaza obiectul.
//ex: atributu writable: false nu permite de schimbat value pentru un anumit key a obiectului
const det = {
    name: "Ariel",
    price: 145,
    color: false
};
det.tip = "capsule"
det.price = 180;

console.log("Denumire:" + det.name);
console.log("Pret:"+det.price);
console.log("Pentru haine colorate?:"+det.color);
console.log("Forma producere:"+det.tip);

if (det.color){console.log("pentru haine colorate")}
else {console.log("pentru haine albe")};
det.atentionari=["Provoacă o iritare gravă a ochilor","A se purta mănuși de protecție"]
det.descriere={
    numar: 690875,
    ean: 8001090846990
};
console.log(det.atentionari);
console.log(det.descriere.ean);
//•	Creati un obiect si aplicati metoda care nu permite ca obiectul sa fie extins.
const det4 = {
    name:"Ariel",
    price: 145
};
Object.preventExtensions(det4);
det4.color=false;
console.log(det4);

//•	Creati un obiect si aplicati metoda care nu permite ca obiectul sa fie extins sa nu pot modifica atributele dar sa pot schimba valoarea la key existente in obiect.
const det5={
    name:"Ariel",
    price: 145
}

Object.preventExtensions(det5);
Object.defineProperty(det5,"price",{
   function(newPrice){
        if(typeof newPrice ==="number"){
            this.price=newPrice;
        }else {
            console.log("Pretul trebuie sa fie numar!");
        }
        }
    });
det5.price=165;
console.log(det5.price);
det5.color = false; //eroare nu poate fi extins
console.log(det5);
//•	Creati un obiect si aplicati metoda care nu permite ca obiectul sa fie extins, valorile sa nu fie posibil de modificat la fel ca si atributele.

const obiectFreeze = Object.freeze({
    name:"Ariel",
    price: 145
  });  
  obiectFreeze.price = 26; //  eroare  
  obiectFreeze.color = false; //  eroare
  
  console.log(obiectFreeze); // fara modificari 

//Createe o functie care primeste o lista si un element, intoarce true daca toate itemurile din lista sunt egale cu elementul primit si false daca nu sunt egale.
function toateEgal(lista, element) {
    return lista.reduce((toateEgal, elementCurent) => toateEgal && elementCurent === element, true);
  }  
  const listaNumere = [1, 2, 3, 4, 5];  
  console.log(toateEgal(listaNumere, 3)); // Afișează `false`
  const listaNumere1 = [5, 5, 5];
  console.log(toateEgal(listaNumere1, 5)); // Afișează `true`

//•	Creati o functie care primeste o lista si un element ca argument, si va intoarce indexul itemului din lista care este identic cu elementul primit, daca asa element nu exista, va intoarce -1.
  function gasesteIndex(lista, item) {
    return lista.reduce((index, itemCr, i) => itemCr === item ? i : index, -1);
  }  
  const listaS = ["Ana", "Maria", "Ion", "Ana"];  
  console.log(gasesteIndex(listaS, "Ana")); // Afișează 3
  console.log(gasesteIndex(listaS, "Mihai")); // Afișează -1

  //•	Creati o functie care primeste o lista si un element ca argument, va intoarce o lista cu itemurile din lista care sunt identice cu acel element
  function filtreazaElemente(lista, element) {
    return lista.reduce((listaFiltrata, elementCurent) => elementCurent === element ? [...listaFiltrata, elementCurent] : listaFiltrata, []);
  }
  
  const listaNumere2 = [12, 12, 3, 4, 5, 1, 12];
  
  console.log(filtreazaElemente(listaNumere2, 12)); // Afișează [2, 2]
  console.log(filtreazaElemente(listaNumere2, 6)); // Afișează []
