import { Detailer } from "../database/models/detailer.js";

export const getDetailers = (req, res) => {
  res.json({
    message: "this are the availalbe detailers",
  });
};


// adding a detailer to the database
export const addDetailer = async (req, res) => {
  try {
    const { name, phone_number, status } = req.body;

    const detailerData = {
      name,
      phone_number,
      status,
    };

    const newDetailer = await Detailer.create(detailerData);

    return res.status(201).json({
      success: true,
      data: newDetailer,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
