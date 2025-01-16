import { Customer } from "../models/customer.js";

// adding a customer
export const addCustomer = async (req, res) => {
  try {
    const { name, phone, number_plate } = req.body;

    const customerData = {
      name,
      phone,
      number_plate,
    };

    const newCustomer = await new Customer.save(customerData);

    return res.status(201).json({
      success: true,
      newCustomer: newCustomer,
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: "failed to add customer",
    });
  }
};

// fetching all customers
export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();

    return res.status(200).json({
      success: true,
      customers: customers,
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: "failed to add customer",
    });
  }
};

// fetching one customer with id
export const findCustomer = async (req, res) => {
  try {
    const { _id: customerId } = req.body;

    const customer = await Customer.findOne({ customerId });

    return res.status(200).json({
      success: true,
      customer: customer,
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: "failed to add customer",
    });
  }
};
