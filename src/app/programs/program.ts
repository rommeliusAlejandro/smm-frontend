/**
 * @author Rommel Loayza
 */
export class Task {
  name: string;
  exercise: number;
  gender: string;
  paired: boolean;
}

export class Week {
  tasks: Task[];
  date: string;
}

export class Program {

  id: string;

  weeks: Week[];

  year: number;

  month: number;
}
