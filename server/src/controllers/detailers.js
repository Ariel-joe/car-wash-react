import { Detailer } from "../database/models/detailer.js";

export const getDetailers =async (req, res) => {
  try {
    const detailers = await Detailer.find()

    return res.status(200).json({
      success: true,
      data: detailers,
    })
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: "something went wrong please try again!"
    })
    
    
  }
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
