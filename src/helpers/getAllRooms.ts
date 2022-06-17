import { RoomElement } from 'types/schedule';

export const getAllRooms = (rooms: RoomElement[]) => {
  if (!rooms) return [];
  return rooms.map((room) => {
    return room.name;
  });
};
