import { Day } from 'types/schedule';

export const getAllDays = (days: Day[]) => {
  return days.map((day) => {
    return day.date;
  });
};
