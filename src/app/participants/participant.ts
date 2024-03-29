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
  monthlyProgramId: string;
}

export class Participant {

  id: string;

  name: string;

  gender: string;

  active: boolean;

  reserved: boolean;

  age: string;

  skills: string[];

  last?: Date;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export enum Age {
  KID = 'KID',
  ADULT = 'ADULT',
  SENIOR = 'SENIOR'
}
