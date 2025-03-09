interface Notificacao {
    enviar(mensagem: string): void;
}

class EmailNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}

class SmsNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}

class PushNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando push notification: ${mensagem}`);
    }
}

class Usuario {
    constructor(private nome: string) {}

    receberNotificacao(notificacao: Notificacao, mensagem: string): void {
        notificacao.enviar(mensagem);
    }
}

const user = new Usuario("Carlos");
user.receberNotificacao(new EmailNotificacao(), "Você tem um novo e-mail!");