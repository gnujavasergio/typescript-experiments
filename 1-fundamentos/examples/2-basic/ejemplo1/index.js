var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
    }
    Customer.prototype.welcome = function () {
        return 'Hola, mi nombre es ' + this.name;
    };
    return Customer;
}());
var firstCustomer = new Customer('Sergio');
var newMessage = firstCustomer.welcome();
// Cambiar el texto de la pagina
var webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
