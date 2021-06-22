const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({
        quantity: {
            type: Number,
            required: true
        },
        clinic : {
            type : mongoose.Schema.Types.ObjectId,
            ref: 'Clinic'
        }

})

exports.OrderItem = mongoose.model('OrderItem', orderItemSchema);