const NOTIFICATION_REGISTRY = {
    "shipment_pending":{

    },
    "shipment_cancelled":{

    },
    "pickup_cancelled":{

    },
    "pickup_pending":{

    },
    "shipped":{
        sms:{
            tempplate:`Your order ## is now Shipped`
        }
    },
    "in_transit":{

    },
    "delivered":{

    },
    "delivery_failed":{

    }
}


const VALID_STATUSES = [
    'shipment_pending',
    'pickup_pending',
    'shipped',
    'in_transit',
    'delivered',
    'shipment_cancelled',
    'pickup_cancelled',
    'delivery_failed'
];

const VALID_TRANSITIONS = {
    'shipment_pending': ['pickup_pending', 'shipment_cancelled'],
    'pickup_pending': ['shipped', 'pickup_cancelled'],
    'shipped': ['in_transit'],
    'in_transit': ['delivered', 'delivery_failed'],
    'delivered': [],
    'shipment_cancelled': [],
    'pickup_cancelled': [],
    'delivery_failed': []
};
export {NOTIFICATION_REGISTRY, VALID_STATUSES, VALID_TRANSITIONS}