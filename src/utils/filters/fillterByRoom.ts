import { Day, Room } from 'types/schedule';

export const filterByRoom = (days: Day[], room: string) => {
  if (!days) return [];
  return days?.map((day) => {
    const { rooms } = day as any;
    return {
      ...day,
      rooms: {
        [room]: rooms[room] as Room[],
      },
    };
  });
};
