const User = require('../models/User');

const userController = {
  // Get all users
  async getAllUsers(req, res, next) {
    try {
      const users = await User.getAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  },

  // Get a specific user
  async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.getById(id);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      res.json(user);
    } catch (error) {
      next(error);
    }
  },

  // Create a new user
  async createUser(req, res, next) {
    try {
      const userData = req.body;
      const newUser = await User.create(userData);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  },

  // Update an existing user
  async updateUser(req, res, next) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await User.update(id, userData);
      
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  },

  // Delete a user
  async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const result = await User.delete(id);
      
      if (!result) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
};

module.exports = userController;
