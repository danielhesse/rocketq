import { Request, Response } from 'express';

import { Database } from '../database/connection';

class QuestionsController {
  async index(request: Request, response: Response): Promise<void> {
    const db = await Database();

    const { roomId, questionId, action } = request.params;
    const { password } = request.body;

    const roomExists = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`);

    if (roomExists.password !== password) {
      await db.close();

      return response.render('pass-incorrect', { roomId });
    }

    if (action === 'delete') {
      await db.run(`DELETE FROM questions WHERE id = ${questionId}`);
    }

    if (action === 'check') {
      await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`);
    }

    await db.close();

    return response.redirect(`/room/${roomId}`);
  }

  async create(request: Request, response: Response): Promise<void> {
    const db = await Database();

    const { question } = request.body;
    const { roomId } = request.params;

    await db.run(`
      INSERT INTO questions (roomId, title, read)
      VALUES (${roomId}, "${question}", 0)
    `);

    await db.close();

    return response.redirect(`/room/${roomId}`);
  }
}

export { QuestionsController };
