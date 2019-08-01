// Expresiones
let unLet = 5;
const unConst = 4;
console.log(unLet);
console.log(unConst);



class Speaker {

    hi(name: string){
        console.log(name);
    }
}

let speaker: Speaker = new Speaker();
speaker.hi("Sergio");
