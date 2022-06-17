import { getAllRooms } from 'helpers/getAllRooms';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { getSchedule } from 'store/slices';
import { filterByDay } from 'utils/filters/filterByDay';
import styles from './index.module.scss';
export interface IDayProps {}

export default function Day(props: IDayProps) {
  const router = useRouter();
  const { day } = router.query;
  const scheduleData = useAppSelector((state) => state.schedule) as any;
  const dispatch = useAppDispatch();
  const eventDate = day as string;
  React.useEffect(() => {
    dispatch(getSchedule());
  }, [dispatch]);
  let schedule = scheduleData?.conference;
  let filteredSchedule = filterByDay(schedule?.days, eventDate);
  let allRooms = getAllRooms(schedule?.rooms);

  return (
    <div className={styles.room}>
      <div className={styles.room_container}>
        <h1>{eventDate}</h1>
        <div className={styles.room_data}>
          {filteredSchedule?.map((day) => {
            const { rooms } = day;
            return (
              <div key={day.date} className={styles.day}>
                <Link passHref href={`/days/${day.date}`}>
                  <h2>{day.date}</h2>
                </Link>
                {allRooms?.map((room) => (
                  <div key={room}>
                    <Link passHref href={`/rooms/${room}`}>
                      <h2>{room}</h2>
                    </Link>
                    <ul>
                      {rooms[room]?.map((room) => (
                        <li key={room.id}>
                          <h4>{room.title}</h4>
                          <p>{room.track}</p>
                          <p>{room.start}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
