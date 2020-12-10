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

export enum Gender {
  MALE= 'MALE',
  FEMALE= 'FEMALE'
}

export enum Age {
  KID= 'KID',
  ADULT= 'ADULT',
  SENIOR= 'SENIOR'
}
