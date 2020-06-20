class Speaker {

    welcome(name: string){
        console.log("Hola " + name);
    }
}

let speaker: Speaker = new Speaker();
speaker.welcome("Sergio");
