/**
 * @author Rommel Loayza
 */
export class MonthlyProgram {
  weeks: [
    {
      date: string,
      rooms: [
        {
          roomId: string,
          participants: [
            {
              task: string,
              exercise: number,
              mainName: string,
              mainId: string,
              helperName: string,
              helperId: string
            }
          ]
        }
      ]
    }];
  name: string;
  id: string;
  status: string;
  programId: string;
}
