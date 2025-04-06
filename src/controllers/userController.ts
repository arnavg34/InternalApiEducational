import { Request, Response, NextFunction } from "express";
import { users, User } from "../models/user";
import { Session } from "express-session";

interface AuthenticatedRequest extends Request {
  session: Session & {
    userEmail?: string;
  };
}
// Creating an User
// create User with email passed it and password, then append to our list of users
// give a status of 201 to our response and json of our item to show it worked
export const createUser = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try{
    const {email,password} = req.body;
    const newUser: User = {email, password};
    users.push(newUser);
    res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};
// Read all Users
// return json of our users list if it worked
export const getUsers = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      res.json(users);
    } catch (error) {
      next(error);
    }
};

// Read single user
// get our email from url param of the request, for example items/5 would be string 5
// return json if found
export const getUserByEmail = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const {email,password} = req.body;
      const user = users.find((i) => i.email === email && i.password === password);
      if (!user) {
        res.status(404).json({ message: 'Item not found' });
        return;
      }
      req.session.userEmail = user.email;
      res.json(user);
    } catch (error) {
      next(error);
    }
};

// Update an User
// find the user and its specific index within the list
// if index is found update at that spot
// return json for that user
export const updateUser = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const userIndex = users.findIndex((i) => i.email === email);
      if (userIndex === -1) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      users[userIndex].password = password;
      res.status(201).json(users[userIndex]);
    } catch (error) {
      next(error);
    }
  };

// Delete an User
// find user and splice it from list which removes that 1 user and returns it
export const deleteUser = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const userEmail = req.session.userEmail;
      const userIndex = users.findIndex((i) => i.email === userEmail);
      if (userIndex === -1) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      const deletedUser = users.splice(userIndex, 1)[0];
      res.json(users);
      req.session.userEmail = undefined;
    } catch (error) {
      next(error);
    }
  };

  export const getCurrentUser = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const userEmail = req.session.userEmail;

      if (!userEmail) {
        res.status(401).json({ message: "Not logged in" });
        return
      }
    
      const user = users.find((u) => u.email === userEmail);
    
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return
      }
      res.json(user);
    } catch (error) {
      next(error);
    }
};