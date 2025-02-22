import { Customer } from "../database/models/customer.js";
import { Detailer } from "../database/models/detailer.js";
import { Service } from "../database/models/service.js";
import { Vehicle } from "../database/models/vehicle.js";
import { VehicleType } from "../database/models/vehicleType.js";

// adding a customer
export const addCustomer = async (req, res) => {
  try {
    const {
      name,
      phone,
      numberPlate,
      vehicleType,
      service,
      amount,
    } = req.body;

    

    // Validate and fetch the vehicleType, service, and detailer from the database
    const vehicleTypeData = await VehicleType.findOne({type: vehicleType});
    if (!vehicleTypeData) {
      return res.status(404).json({
        success: false,
        message: "Vehicle type not found",
      });
    }

    const serviceData = await Service.findOne({service: service});
    if (!serviceData) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    // const detailerData = await Detailer.findOne({name: detailer});
    // if (!detailerData) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "Detailer not found",
    //   });
    // }

    const customerData = {
      name,
      phone,
      numberPlate,
      vehicleType: vehicleTypeData._id,
      service: serviceData._id,
      amount,
      // detailer: detailerData._id,
    };

    const newCustomer = await Customer.create(customerData);

    const vehicleData = {
      customer: newCustomer._id,
      vehicle_type: vehicleTypeData._id,
      number_plate: numberPlate,
      service: serviceData._id,
      // detailer: detailerData._id,
      status: "Pending",
    }

    const newVehicle = await Vehicle.create(vehicleData);

    return res.status(201).json({
      success: true,
      newCustomer: newCustomer, newVehicle
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
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

    const customer = await Customer.findOne({ _id: customerId }, req.body);

    return res.status(200).json({
      success: true,
      customer: customer,
    });
  } catch (error) {
    console.log(error.message);

    return res.json({
      success: false,
      message: error.message,
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
