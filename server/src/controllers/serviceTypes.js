import { ServiceType } from "../database/models/serviceType.js";

// adding a service type
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

// fetching the services with the vehicle types, service and price.

export const getServiceType = async (req, res) => {
  try {
    const serviceTypes = await ServiceType.find().populate(
      "service",
      "vehicle_type"
    );

    return res.status(200).json({
      success: true,
      data: serviceTypes,
    });
  } catch (error) {
    console.error(error.message);

    console.log(error);
    

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
