import { ServiceType } from "../database/models/serviceType.js";

export const addServiceType = async (req, res) => {
  try {
    const { vehicle_type, service, price } = req.body;

    const serviceTypeData = {
      vehicle_type,
      service,
      price,
    };

    const newServicetype = await ServiceType.create(serviceTypeData);

    return res.status(201).json({
      success: true,
      data: newServicetype,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
