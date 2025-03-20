import { VehicleType } from "../database/models/vehicleType.js";

export const vehicleTypefunc = async (req, res) => {
  try {
    const { status, type } = req.body;
    const vehicleTypeData = {
      status,
      type,
    };
    const typeData = await VehicleType.create(vehicleTypeData);

    return res.status(201).json({
      success: true,
      data: typeData,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// getting all the vehicles types.
export const getVehicleTypes = async (req, res) => {
  try {
    const vehicleTypes = await VehicleType.find();

    return res.status(200).json({
      success: true,
      data: vehicleTypes,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: "something went wrong please try again!",
    });
  }
};
