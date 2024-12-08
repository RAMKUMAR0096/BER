// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//     productDetails: [
//         {
//             productId: {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: 'Product', // Reference to the Product model
//                 required: true,
//             },
//             name: {
//                 type: String,
//                 required: true,
//             },
//             price: {
//                 type: Number,
//                 required: true,
//             },
//             quantity: {
//                 type: Number,
//                 required: true,
//             },
//             image: {
//                 type: [String], // Assuming multiple images can be associated with a product
//                 default: [],
//             },
//         },
//     ],
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User', // Reference to the User model
//         required: true,
//     },
//     paymentDetails: {
//         paymentId: {
//             type: String,
//             required: true,
//         },
//         payment_method_type: {
//             type: String,
//             required: true,
//         },
//         payment_status: {
//             type: String,
//             required: true,
//         },
//     },
//     totalAmount: {
//         type: Number,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now, // Automatically set the date when the order is created
//     },
// });

// // Create an Order model from the schema
// const Order = mongoose.model('Order', orderSchema);

// module.exports = Order;
const mongoose = require('mongoose');

// Schema for individual product details in the order
const productDetailsSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    brandName: { type: String, required: true },
    category: { type: String, required: true },
    images: [{ type: String, required: true }], // Assuming multiple images can be associated
    quantity: { type: Number, required: true },
});

// Schema for payment details in the order
const paymentDetailsSchema = new mongoose.Schema({
    paymentId: { type: String, required: true },
    payment_method_type: { type: String, required: true },
    payment_status: { type: String, required: true },
});

// Main order schema
const orderSchema = new mongoose.Schema({
    productDetails: [productDetailsSchema], // Embedding product details schema
    email: { type: String, required: true, trim: true },
    userId: { type: String, required: true },
    userAddress: { // Schema for user address details
        name: { type: String, required: true },
        mobile: { type: String, required: true },
        pincode: { type: String, required: true },
        locality: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        landmark: { type: String, default: '' },
        alternativePhone: { type: String, default: '' },
        addressType: { type: String, required: true },
    },
    paymentDetails: paymentDetailsSchema, // Embedding payment details schema
    totalAmount: { type: Number, required: true },
    orderStatus: { type: String, default: 'Processing Your Order' }, // New field with default value
    createdAt: { type: Date, default: Date.now }, // Automatically set the date when the order is created
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
