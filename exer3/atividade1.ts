interface INotification {
    send(message: string): void;
}

class EmailNotification implements INotification {
    send(message: string): void {
        console.log(`Enviando e-mail: ${message}`);
    }
}

class SMSNotification implements INotification {
    send(message: string): void {
        console.log(`Enviando SMS: ${message}`);
    }
}

class NotificationFactory {
    static createNotification(type: string): INotification {
        if (type === 'email') {
            return new EmailNotification();
        } else if (type === 'sms') {
            return new SMSNotification();
        } else {
            throw new Error('Tipo de notificação não suportado.');
        }
    }
}

const notificationType = 'email'; // ou 'sms'
const notification = NotificationFactory.createNotification(notificationType);
notification.send('Olá, esta é uma notificação!');
