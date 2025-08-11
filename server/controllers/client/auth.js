import Client from "../../models/client/client.js";
import { sendToken, cookieOptions } from "../../utils/features.js";
import { compare, hash } from "bcrypt";

export const newUser = async (req, res) => {
  try {
    const { name, email, phone, company, projectDetails, budget, password } = req.body;

    const existingUser = await Client.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    const hashedPassword = await hash(password, 10);

    const user = new Client({
      name,
      email,
      phone,
      company,
      projectDetails,
      budget,
      password: hashedPassword,
    });

    await user.save();

    sendToken(res, user, 201, "User Created");
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Client.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid Email",
      });
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    sendToken(res, user, 200, `Welcome Back, ${user.name}`);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const logout = async (req, res) => {
  return res
    .status(200)
    .cookie("LandingLabs", null, { ...cookieOptions, maxAge: 0 })
    .json({
      success: true,
      message: "Logged out successfully",
    });
};
