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
    // const order1 = new Order(1, 'customer1@arch.com', '9044297421');
    // const order2 = new Order(2, 'customer2@arch.com', '9044297425');




    orderWrapper.addOrder(1, 'customer1@arch.com', '9044297421')
    orderWrapper.addOrder(2, 'customer2@arch.com', '9044297425')

    notificationService.registerChannel(1, 'whatsapp', whatsappNotificationHandler);
    notificationService.registerChannel(2, 'email', emailNotificationHandler);

    orderWrapper.updateOrderStatus(1, 'pickup_pending');



}
main()


