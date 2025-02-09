// adding a service.

import { Service } from "../database/models/service.js";

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
      message: error.message
    })
    
  }
};
