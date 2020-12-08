/**
 * @author Rommel Loayza
 */
export class History {
  date: Date;
  room: string;
}

export class Participant {

  id: string;

  name: string;

  gender: string;

  active: boolean;

  history: History[];

  age: string;

  skills: string[];
}
