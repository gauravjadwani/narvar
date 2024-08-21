import {VALID_STATUSES, VALID_TRANSITIONS} from './../constants.js'
import NotificationService from './notification.js';
export default class Order {
    constructor(orderId, customerEmail, customerPhone, notificationService) {
        this.orderId = orderId;
        this.customerEmail = customerEmail;
        this.customerPhone = customerPhone;
        this.shipmentStatus = 'shipment_pending';
        this.lastUpdatedOn = new Date();
        this.ledger = [];
        // this.notificationService = notificationService;
    }
    updateShipmentStatus(newStatus,nf) {

        if (!VALID_STATUSES.includes(newStatus)) {
            console.log(`Invalid shipment status: ${newStatus}`);
            return;
        }

        if (!VALID_TRANSITIONS[this.shipmentStatus].includes(newStatus)) {
            console.log(`Invalid status transition from ${this.shipmentStatus} to ${newStatus}`);
            return;
        }

        this.ledger.push({ status: this.shipmentStatus, updatedOn: this.lastUpdatedOn });
        this.shipmentStatus = newStatus;
        this.lastUpdatedOn = new Date();
        const o = new NotificationService()
        nf.sendNotification(this);
    }

    getledger() {
        return this.ledger;
    }
}
