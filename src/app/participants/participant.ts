/**
 * @author Rommel Loayza
 */
export class History {
  id?: string;
  participantId?: string;
  room: string;
  date: Date;
  monthNumber?: number;
  year?: number;
  task: string;
  monthlyProgramId: string;
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
