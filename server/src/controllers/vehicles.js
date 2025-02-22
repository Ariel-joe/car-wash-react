import { Vehicle } from "../database/models/vehicle.js";

// get all the vehicles
export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find().populate("customer vehicle_type service");

    return res.status(200).json({
      success: true,
      data: vehicles,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// adding a customer vehicle for service
export const addVehicle = async (req, res) => {
  try {
    const { customer, vehicle_type, number_plate, status } = req.body;

    const vehicleData = {
      customer,
      vehicle_type,
      number_plate,
      status,
    };

    const newvehicle = await Vehicle.create(vehicleData);

    return res.status(201).json({
      success: true,
      data: newvehicle,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// searching for a vehicle by it's number_plate

export const searchVehicle = async (req, res) => {
  try {
    const vehicleId = req.query.id;

    const vehicleSearch = await Vehicle.findOne({ _id: vehicleId }).populate(
      "customer vehicle_type"
    );

    return res.status(200).json({
      success: true,
      data: vehicleSearch,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
