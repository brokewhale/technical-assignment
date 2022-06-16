import { Day, Room } from 'types/schedule';

export const filterByTrack = (days: Day[], track: string) => {
  return days.map((day) => {
    const { rooms } = day as any;

    return {
      ...day,
      rooms: Object.keys(rooms)
        .map((key) => {
          return {
            [key]: rooms[key].filter(
              (room: Room) => room.track === track
            ) as Room[],
          };
        })
        .reduce(function (result, item) {
          var key = Object.keys(item)[0]; //first property: a, b, c
          result[key] = item[key];
          return result;
        }, {}),
    };
  });
};
