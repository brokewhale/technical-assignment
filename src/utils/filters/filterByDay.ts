import { Day, Room } from 'types/schedule';

export const filterByDay = (days: Day[], date: string) => {
  if (!days) return [];
  return days?.filter((day) => day.date === date);
};
