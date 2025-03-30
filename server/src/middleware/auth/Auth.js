import jwt from "jsonwebtoken";
import { User } from "../../database/models/user.js";

export const userAuthentication = async (req, res, next) => {

  try {
    const token = req.cookies[process.env.AUTH_COOKIE_NAME];

    console.log("TOKEN:", token);
    

    if (!token) throw new Error("Token not found");

    // beyond this point means the token has been set inside the cookie

    // verifying the tokens
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const { _id } = payload;

    const user = await User.findById(_id);

    if (!user) throw new Error("invalid tokens");

    req.user = user;

    next();
  } catch (error) {
    console.log({ error });

    return res.status(401).json({
      sucess: false,
      message: "unathorized",
    });
  }
};
