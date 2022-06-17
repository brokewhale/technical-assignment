import { Day, Room } from 'types/schedule';

export const getAllTracks = (days: Day[]) => {
  let allTracks = days
    .map((day) => {
      const { rooms } = day as any;
      return Object.keys(day.rooms).map((key) =>
        rooms[key].map((room: Room) => room.track)
      );
    })
    .flat(2);

  return [...new Set(allTracks)];
};
