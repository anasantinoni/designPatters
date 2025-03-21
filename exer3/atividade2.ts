interface Payment {
    processPayment(amount: number): void;
}

class CreditCardPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Processando pagamento de R$${amount.toFixed(2)} via Cartão de Crédito.`);
    }
}

class PayPalPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Processando pagamento de R$${amount.toFixed(2)} via PayPal.`);
    }
}

class BoletoPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Processando pagamento de R$${amount.toFixed(2)} via Boleto Bancário.`);
    }
}

class PaymentFactory {
    static createPayment(method: string): Payment {
        if (method === 'creditcard') {
            return new CreditCardPayment();
        } else if (method === 'paypal') {
            return new PayPalPayment();
        } else if (method === 'boleto') {
            return new BoletoPayment();
        } else {
            throw new Error('Método de pagamento não suportado.');
        }
    }
}

const paymentMethod = 'paypal'; // ou 'creditcard', 'boleto'
const payment = PaymentFactory.createPayment(paymentMethod);
payment.processPayment(150.00);
