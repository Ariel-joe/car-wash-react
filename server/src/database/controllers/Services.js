export const getCompletedServices = (req, res) => {
    res.json({
        message: "this is the completed route"
    })
}

export const getPendingServices = (req, res) => {
    res.json({
      message: "this is the pending route",
    });
  }