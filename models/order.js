const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
            orderItems: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'OrderItem',
                required: true
            }],
            shippingAddress1: {
                type: String,
                required: true,
            },
            shippingAddress2: {
                type: String,
            },
            city: {
                type: String,
                required: true,
            },
            district: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
            status: {
                type: String,
                required: true,
                default: 'Pending',
            },
            totalPrice: {
                type: Number,
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            dateOrdered: {
                type: Date,
                default: Date.now,
            },

})
orderSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

orderSchema.set('toJSON', {
    virtuals: true,
});

exports.Order = mongoose.model('Order', orderSchema);

/*
Order Example:

{
    "orderItems": [{
            "quantity": 3,
            "clinic": "6091be4bb3f747313bdb4b49"
        },
        {
            "quantity": 2,
            "clinic": "6091be04b3f747313bdb4b48"
        }
    ],
    "shippingAddress1": "Colombo",
    "shippingAddress2": "Colombo 1",
    "city": "Colombo",
    "district": "Rathnapura",
    "phone": "+94664434446",
    "user": "60c717b49b2239ac0c6df654"
}



*/
