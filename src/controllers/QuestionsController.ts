import { Request, Response } from 'express';

class QuestionsController {
  index(request: Request, response: Response) {
    const { roomId, questionId, action } = request.params;
    const { password } = request.body;

    console.log(
      `room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`,
    );
  }
}

export { QuestionsController };
