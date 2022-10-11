// Models
import CustomerModel from "../Models/CustomerModel.js";

export const saveCustomer = async (req, res) => {
  try {
    const { name } = req.body;

    const newCustomer = new CustomerModel({ name });

    const savedCustomer = await newCustomer.save();

    res.json(savedCustomer);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await CustomerModel.find();

    res.json(customers);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};
