import { Vehicle } from "../database/models/vehicle.js";

export const getVehicles = (req, res) => {
  res.json({
    message: "this are all the vehicles",
  });
};

export const addVehicles = async (req, res) => {
  try {
    const { customer, vehicle_type, status } = req.body;

    const vehicleData = {
      customer,
      vehicle_type,
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
        message: error.message
    })
    
  }
};
