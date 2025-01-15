import { Request, Response } from "express";
import User from "../models/user";
const createCurrentUser = async (req: Request, res: Response) => {
  // 1. check if user exists
  // 2. Create user if he does not exist
  // 3. return user to calling client

  try {
    const { auth0Id } = req.body;

    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).send();
    }

    const newUser = new User(req.body);
    await newUser.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default { createCurrentUser };
