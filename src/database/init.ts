import { Database } from './connection';

const initDatabase = {
  async init() {
    const database = await Database();

    await database.exec(`
      CREATE TABLE IF NOT EXISTS rooms (
        id INTEGER PRIMARY KEY,
        password TEXT
      )
    `);

    await database.exec(`
      CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        read INT
      )
    `);

    await database.close();
  },
};

initDatabase.init();
