import { Request, Response, NextFunction } from "express";
import { items, Item } from "../models/item";

// Creating an Item
// create item with name passed it and date, then append to our list of items
// give a status of 201 to our response and json of our item to show it worked
export const createItem = (req: Request, res: Response, next: NextFunction) => {
    try{
    const { name } = req.body;
    const newItem: Item = {id: Date.now(), name};
    items.push(newItem);
    res.status(201).json(newItem);
    } catch (error) {
        next(error);
    }
};
// Read all items
// return json of our items list if it worked
export const getItems = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json(items);
    } catch (error) {
      next(error);
    }
};

// Read single item
// get our id number from url param of the request, for example items/5 would be string 5
// return json if found
export const getItemById = (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id, 10);
      const item = items.find((i) => i.id === id);
      if (!item) {
        res.status(404).json({ message: 'Item not found' });
        return;
      }
      res.json(item);
    } catch (error) {
      next(error);
    }
};

// Update an item
// find the item and its specific index within the list
// if index is found update at that spot
// return json for that item
export const updateItem = (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id, 10);
      const { name } = req.body;
      const itemIndex = items.findIndex((i) => i.id === id);
      if (itemIndex === -1) {
        res.status(404).json({ message: 'Item not found' });
        return;
      }
      items[itemIndex].name = name;
      res.json(items[itemIndex]);
    } catch (error) {
      next(error);
    }
  };

// Delete an item
// find item and splice it from list which removes that 1 item and returns it
export const deleteItem = (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id, 10);
      const itemIndex = items.findIndex((i) => i.id === id);
      if (itemIndex === -1) {
        res.status(404).json({ message: 'Item not found' });
        return;
      }
      const deletedItem = items.splice(itemIndex, 1)[0];
      res.json(deletedItem);
    } catch (error) {
      next(error);
    }
  };