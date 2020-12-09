class Customer {

    name: string;
    constructor(name: string) {
        this.name = name;
    }

    welcome(){
        return 'Hola, mi nombre es ' + this.name;
    }
}

let firstCustomer = new Customer('Sergio');
let newMessage: string  = firstCustomer.welcome();

// Cambiar el texto de la pagina
let webHeading = document.querySelector('h1');
webHeading!.textContent = newMessage;
