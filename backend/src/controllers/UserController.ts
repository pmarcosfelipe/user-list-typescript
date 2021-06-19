import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  {
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
  },
  {
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
  },
  {
    name: 'Clementine Bauch',
    email: 'Nathan@yesenia.net',
  },
  {
    name: 'Patricia Lebsack',
    email: 'Julianne.OConner@kory.org',
  },
  {
    name: 'Chelsey Dietrich',
    email: 'Lucio_Hettinger@annie.ca',
  },
  {
    name: 'Mrs. Dennis Schulist',
    email: 'Karley_Dach@jasper.info',
  },
  {
    name: 'Kurtis Weissnat',
    email: 'Telly.Hoeger@billy.biz',
  },
  {
    name: 'Nicholas Runolfsdottir V',
    email: 'Sherwood@rosamond.me',
  },
  {
    name: 'Glenna Reichert',
    email: 'Chaim_McDermott@dana.io',
  },
  {
    name: 'Clementina DuBuque',
    email: 'Rey.Padberg@karina.biz',
  },
];

export default {
  async list(request: Request, response: Response) {
    return response.json(users);
  },

  async create(request: Request, response: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: 'Marcos',
        email: 'p.marcosfelipe@gmail.com',
      },
      message: { subject: 'Bem-vindo ao sistema', body: 'Seja bem-vindo' },
    });

    return response.send();
  },
};
