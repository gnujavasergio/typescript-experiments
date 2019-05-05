enum PaymentMethod {
    NONE = 0,
    CASH = 1,
    TRANSFER = 2,
    DEPOSIT // Podemos dejarlo asi y seguira la secuencia
}

class Sale {
    paymentMethod: PaymentMethod = PaymentMethod.NONE;
}

let sale: Sale = new Sale();
sale.paymentMethod = PaymentMethod.DEPOSIT;
console.log("Metodo de Pago: " + sale.paymentMethod);
