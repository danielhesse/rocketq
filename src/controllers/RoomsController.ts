import { Request, Response } from 'express';

import { Database } from '../database/connection';

class RoomsController {
  async create(request: Request, response: Response): Promise<void> {
    const { password } = request.body;

    let roomId: string;

    for (let i = 0; i < 6; i++) {
      if (i === 0) roomId = Math.floor(Math.random() * 10).toString();
      if (i !== 0) roomId += Math.floor(Math.random() * 10).toString();
    }

    const db = await Database();

    await db.run(`
      INSERT INTO rooms (id, password)
      VALUES (${Number(roomId)}, ${password})
    `);

    await db.close();

    return response.redirect(`/room/${roomId}`);
  }
}

export { RoomsController };
