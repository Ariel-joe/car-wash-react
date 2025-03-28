import { compare, hash } from "bcrypt";
import { User } from "../database/models/user.js";
import jwt from "jsonwebtoken";

// signup
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await hash(password, 10);

  req.body.password = hashedPassword;

  try {
    const userData = {
        username, email, password
    }
    const newUser = await User.create(userData);

    return res.json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: "there was an error creating your account",
    });
  }
};

// login

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) throw new Error("invalid credentials");

    // if the username exists, we now try and match the passwords
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) throw new Error("invalid credentials");

    // the password is correct, now we generate  JWT token for the user
    const { _id } = user;
    const jwtinfo = {
      _id,
    };

    // sign the jwt using the secret key
    const token = jwt.sign(jwtinfo, process.env.JWT_SECRET, {
      expiresIn: 24 * 60 * 60,
    });

    // add the token in the cookie
    res.cookie(process.env.AUTH_COOKIE_NAME, token, {
      maxAge: 24 * 60 * 60 * 1000,
    //   can only be accessed by server requests


      httpOnly: true,
      // path = where the cookie is valid
      // path: "/",
      // domain = what domain the cookie is valid on
      // domain: "localhost",
      // secure = only send cookie over https
      secure: process.env.NODE_ENV === "production",
      // sameSite = only send cookie if the request is coming from the same origin
      sameSite: "lax", // "strict" | "lax" | "none" (secure must be true)
      // maxAge = how long the cookie is valid for in milliseconds
    });


    return res.json({
        success: true,
        data: user
    })
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: "invalid credentials",
    });
  }
};
