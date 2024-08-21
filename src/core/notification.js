
export default class NotificationService {
    constructor() {
        this.channels = {};

    }

    registerChannel(orderId, channel, handler) {
        if (!this.channels[orderId]) {
            this.channels[orderId] = [];
        }
        this.channels[orderId].push({ channel, handler });
    }
     sendNotification(order) {
    
        if (this.channels[order.orderId]) {
            this.channels[order.orderId].forEach(({ channel, handler }) => {
                handler(order);
            });
        } else {
            console.log(`No channels registered for Order ID: ${order.orderId}`);
        }
    }
}
