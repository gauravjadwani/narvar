/**
 * 
 * 
 * Seperation of conserns over here
 */
import Order from "./order.js";
export default class OrderWrapper {
    constructor(notificationService) {
        this.orders = [];
        this.notificationService = notificationService;
    }
    // addOrder(orderId, customerEmail, customerPhone) {
    //     const order = new Order(orderId, customerEmail, customerPhone, this.notificationService);
    //     this.orders.push(order);
    // }
    addOrder(order) {
        this.orders.push(order);
    }

    updateOrderStatus(orderId, newStatus) {
        const order = this.orders.find(o => o.orderId === orderId);
        if (!order) {
            console.log(`Order with ID ${orderId} not found.`);
            return;
        }
        order.updateShipmentStatus(newStatus,this.notificationService);
    }

    getOrderById(orderId) {
        return this.orders.find(o => o.orderId === orderId);
    }
}