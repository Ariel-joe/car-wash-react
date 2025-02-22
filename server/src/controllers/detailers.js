import { Detailer } from "../database/models/detailer.js";
import { Vehicle } from "../database/models/vehicle.js";

// getting all the detailers
export const getDetailers = async (req, res) => {
  try {
    const detailers = await Detailer.find();

    return res.status(200).json({
      success: true,
      data: detailers,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: "something went wrong please try again!",
    });
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

// // Assigning a detailer to a vehicle
// export const assignDetailerToVehicle = async (req, res) => {
//   try {
//     const { vehicleId, detailerId } = req.body;

//     console.log(vehicleId);
//     console.log(detailerId);

//     // Find the vehicle by ID
//     const vehicle = await Vehicle.findById(vehicleId);

//     if (!vehicle) {
//       return res.status(404).json({
//         success: false,
//         message: "Vehicle not found",
//       });
//     }

//     // Find the detailer by ID
//     const detailer = await Detailer.findById(detailerId);
//     if (!detailer) {
//       return res.status(404).json({
//         success: false,
//         message: "Detailer not found",
//       });
//     }

//     // Assign the detailer to the vehicle
//     vehicle.detailer = detailerId;
//     await vehicle.save();

//     return res.status(200).json({
//       success: true,
//       message: "Detailer assigned to vehicle successfully",
//       data: vehicle,
//     });
//   } catch (error) {
//     console.error(error.message);

//     return res.status(500).json({
//       success: false,
//       message: "Something went wrong, please try again!",
//     });
//   }
// };

export const assignDetailer = async (req, res) => {
  try {
    const { vehicleId, detailerName } = req.body;

    // Validate input
    if (!vehicleId || !detailerName) {
      return res.status(400).json({
        success: false,
        message: "Vehicle ID and Detailer ID are required",
      });
    }

    // Check if the vehicle exists
    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) {
      return res
        .status(404)
        .json({ success: false, message: "Vehicle not found" });
    }

    // Check if the detailer exists
    const detailer = await Detailer.findOne({ name: detailerName });
    if (!detailer) {
      return res
        .status(404)
        .json({ success: false, message: "Detailer not found" });
    }

    // Prevent assigning a busy detailer
    if (detailer.status.toLowerCase() === "busy") {
      return res.status(400).json({
        success: false,
        message: "Detailer is already assigned to another vehicle",
      });
    }

    // Update vehicle with assigned detailer and change status
    vehicle.detailer = detailer._id;
    vehicle.status = "In Progress";

    // update detailer status
    detailer.status = "busy";

    await Promise.all([vehicle.save(), detailer.save()]);

    return res.status(200).json({
      success: true,
      message: "Detailer assigned successfully",
      vehicle,
    });
  } catch (error) {
    console.error("Error assigning detailer:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
