import { Day } from 'types/schedule';

export const getAllDays = (days: Day[]) => {
  if (!days) return [];
  return days?.map((day) => {
    return day.date;
  });
};
