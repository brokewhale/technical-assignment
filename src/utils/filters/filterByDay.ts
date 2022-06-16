import { Day, Room } from 'types/schedule';

export const filterByDay = (days: Day[], date: string) => {
  return days.filter((day) => day.date === date);
};
