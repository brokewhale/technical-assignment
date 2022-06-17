import EventCard from 'components/Card';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { getSchedule } from 'store/slices';
import { Day } from 'types/schedule';
import { filterByRoom } from 'utils/filters/fillterByRoom';
import styles from './room.module.scss';

export interface IRoomProps {}

export default function Room(props: IRoomProps) {
  const router = useRouter();
  const { room } = router.query;
  const scheduleData = useAppSelector((state) => state.schedule) as any;
  const dispatch = useAppDispatch();
  const roomName = room as string;
  React.useEffect(() => {
    dispatch(getSchedule());
  }, [dispatch]);
  let schedule = scheduleData?.conference;
  let filteredSchedule = filterByRoom(schedule?.days, roomName);

  return (
    <div className={styles.room}>
      <div className={styles.room_container}>
        <h1>Sort By Room</h1>
        <h1>{room}</h1>
        <div className={styles.room_data}>
          {filteredSchedule?.map((day) => {
            const { rooms } = day;
            return (
              <div key={day.date} className={styles.day}>
                <Link passHref href={`/days/${day.date}`}>
                  <h2 className={styles.dd}>
                    {moment(day.date).format('dddd, MMMM Do ')}
                  </h2>
                </Link>
                <div className={styles.eventContainer}>
                  {rooms[roomName]?.map((room) => (
                    <EventCard room={room} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
