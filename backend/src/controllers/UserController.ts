import { Request, Response } from 'express';
const users = [
  {
    name: 'Marcos Felipe',
    email: 'p.marcosfelipe@gmail.com',
  },
];

export default {
  async list(request: Request, response: Response) {
    return response.json(users);
  },
};
