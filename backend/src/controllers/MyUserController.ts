// // import { Request, Response } from "express";
// // import User from "../models/user";
// // const createCurrentUser = async (req: Request, res: Response) => {
// //   // 1. check if user exists
// //   // 2. Create user if he does not exist
// //   // 3. return user to calling client

// //   try {
// //     const { auth0Id } = req.body;

// //     const existingUser = await User.findOne({ auth0Id });

// //     if (existingUser) {
// //       return res.status(200).send();
// //     }

// //     const newUser = new User(req.body);
// //     await newUser.save();

// //     res.status(201).json(newUser.toObject());
// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).json({ message: "Server error" });
// //   }
// // };

// // export default { createCurrentUser };

// import { Request, Response } from "express";

// const MyUserController = {
//   createCurrentUser: async (req: Request, res: Response): Promise<void> => {
//     try {
//       // Your business logic goes here

//       const { auth0Id } = req.body;

//           const existingUser = await User.findOne({ auth0Id });

//           if (existingUser) {
//             return res.status(200).send();
//           }

//           const newUser = new User(req.body);
//           await newUser.save();

//           res.status(201).json(newUser.toObject());

//       res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//       res.status(500).json({ error: "An error occurred" });
//     }
//   },
// };

// export default MyUserController;

import { Request, Response } from "express";
import User from "../models/user"; // Make sure the model is correctly imported

const MyUserController = {
  createCurrentUser: async (req: Request, res: Response): Promise<void> => {
    try {
      const { auth0Id } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ auth0Id });

      if (existingUser) {
        res.status(200).json(existingUser.toObject());
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
