import { Request, Response } from "express";
import User from "../models/user"; // Make sure the model is correctly imported

const MyUserController = {
  createCurrentUser: async (req: Request, res: Response) => {
    try {
      const { auth0Id } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ auth0Id });

      if (existingUser) {
        // res.status(200).json(existingUser.toObject());
        // return; // If user exists, return it immediately and avoid saving a new user
        res.status(200).send();
        return;
      }

      // Create a new user
      const newUser = new User(req.body);
      await newUser.save();

      // Return the newly created user
      res.status(201).json(newUser.toObject());
    } catch (error) {
      console.error("Error creating user:", error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the user" });
    }
  },
};

export default MyUserController;
