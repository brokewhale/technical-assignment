import { RoomElement } from 'types/schedule';

export const getAllRooms = (rooms: RoomElement[]) => {
  return rooms.map((room) => {
    return room.name;
  });
};
