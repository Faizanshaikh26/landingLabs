import { v4 as uuid } from "uuid";
import { v2 as cloudinary } from "cloudinary";
import { getBase64 } from "../lib/helper.js";
import jwt from "jsonwebtoken";

export const uploadFilesToCloudinary = async (files = []) => {
  const uploadPromises = files.map((file) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        getBase64(file), // make sure this returns a data URI like "data:image/png;base64,..."
        {
          resource_type: "auto",
          public_id: uuid(),
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
    });
  });

  try {
    const results = await Promise.all(uploadPromises);

    return results.map((result) => ({
      public_id: result.public_id,
      url: result.secure_url,
    }));
  } catch (err) {
    throw new Error(`Error uploading files to Cloudinary: ${err.message}`);
  }
};

export const validateCaptcha = (inputCaptcha) => {
  const actualCaptcha = "LL"; 
  return inputCaptcha === actualCaptcha;
};

export const cookieOptions = {
  maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
  sameSite: "none",
  httpOnly: true,
  secure: true,
};

export const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  return res
    .status(code)
    .cookie("LandingLabs", token, cookieOptions)
    .json({
      success: true,
      user,
      message,
    });
};

export const generateToken = () => {
  return jwt.sign(
    { data: "reset_password_token" },
    process.env.JWT_SECRET || "LandingLabs",
    {
      expiresIn: "1h",
    }
  );
};
