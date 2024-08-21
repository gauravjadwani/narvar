import Order from "./core/order.js"
import NotificationService from "./core/notification.js"
import OrderWrapper from "./core/orderWrapper.js"

// class Main{
//     constructor(){
//         console.log("this is main")
//     }
// }
// const main = new Main()



function whatsappNotificationHandler(order) {
    console.log(`WhatsApp message  --> ${order.customerPhone}: Your order ${order.orderId} is now ${order.shipmentStatus}`);
}

function emailNotificationHandler(order) {
    console.log(`Email sent -->${order.customerEmail}: Your order ${order.orderId} is now ${order.shipmentStatus}`);
}


function main(){

    const notificationService = new NotificationService();
    const orderWrapper = new OrderWrapper(notificationService)
    const order1 = new Order(1, 'customer1@arch.com', '9044297421');
    const order2 = new Order(2, 'customer2@arch.com', '9044297425');




    orderWrapper.addOrder(order1)
    orderWrapper.addOrder(order2)

    notificationService.registerChannel(order1.orderId, 'whatsapp', whatsappNotificationHandler);
    notificationService.registerChannel(order1.orderId, 'email', emailNotificationHandler);
    notificationService.registerChannel(order2.orderId, 'email', emailNotificationHandler);

    orderWrapper.updateOrderStatus(order1.orderId, 'pickup_pending');
    orderWrapper.updateOrderStatus(order2.orderId, 'pickup_pending');



}
main()


