import { Vehicle } from "../database/models/vehicle.js";

export const getVehicles = (req, res) => {
  res.json({
    message: "this are all the vehicles",
  });
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
    const vehicleId = req.params.id

    const vehicleSearch = await Vehicle.findOne({vehicleId})
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
