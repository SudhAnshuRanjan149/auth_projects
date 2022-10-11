import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const CustomerModel = mongoose.model('customer', customerSchema);

export default CustomerModel;
