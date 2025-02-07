import { Customer } from "../database/models/customer.js";

// adding a customer
export const addCustomer = async (req, res) => {
  try {
    const { name, phone } = req.body;

    const customerData = {
      name,
      phone,
    };

    const newCustomer = await Customer.create(customerData);

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
      message: "failed to fetch all customers",
    });
  }
};

// fetching one customer with id
export const findCustomer = async (req, res) => {
  try {
    const customerId = req.query.id;

    const customer = await Customer.findOne(
      { _id: customerId },
      req.body
    ).populate("Vehicle");

    return res.status(200).json({
      success: true,
      customer: customer,
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: "failed to fetch the customer",
    });
  }
};

// updating a customer
export const updateCustomer = async (req, res) => {
  try {
    const customerId = req.query.id;

    const customer = await Customer.findOneAndUpdate(
      { _id: customerId },
      req.body,
      { new: true }
    );

    return res.status(200).json({
      success: true,
      customer: customer,
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: "failed to update the customer",
    });
  }
};
