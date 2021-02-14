/**
 * @author Rommel Loayza
 */
export class Task {
  task: string;
  exercise: number;
  mainName: string;
  mainId: string;
  helperName: string;
  helperId: string;
}

export class MonthlyProgram {
  weeks: [
    {
      date: string,
      rooms: [
        {
          roomId: string,
          participants: Task[]
        }
      ]
    }];
  name: string;
  id: string;
  status: string;
  programId: string;
}
