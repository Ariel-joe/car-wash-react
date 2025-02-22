import { Service } from "../database/models/service.js";

// adding a service.
export const addService = async (req, res) => {
  try {
    const { service, status } = req.body;

    const serviceData = {
      service,
      status,
    };

    const newService = await Service.create(serviceData);

    return res.status(201).json({
      sucess: true,
      data: newService,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};

// gwtting all the services available.
export const getServices = async (req, res) => {
  try {
    const services = await Service.find();

    return res.status(200).json({
      success: true,
      data: services,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong please try again!",
    });
  }
};
