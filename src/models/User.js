const db = require('../db');

class User {
  static async getAll() {
    return db('users').select('*');
  }

  static async getById(id) {
    return db('users').where({ id }).first();
  }

  static async create(userData) {
    const [newUser] = await db('users').insert(userData).returning('*');
    return newUser;
  }

  static async update(id, userData) {
    const [updatedUser] = await db('users')
      .where({ id })
      .update(userData)
      .returning('*');
    return updatedUser;
  }

  static async delete(id) {
    return db('users').where({ id }).del();
  }
}

module.exports = User;
