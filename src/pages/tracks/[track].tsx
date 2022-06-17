import EventCard from 'components/Card';
import { getAllRooms } from 'helpers/getAllRooms';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { getSchedule } from 'store/slices';
import { filterByTrack } from 'utils/filters/filterByTrack';
import styles from './index.module.scss';

export interface ITrackProps {}

export default function Track(props: ITrackProps) {
  const router = useRouter();
  const { track } = router.query;
  const scheduleData = useAppSelector((state) => state.schedule) as any;
  const dispatch = useAppDispatch();
  const eventTrack = track as string;
  React.useEffect(() => {
    dispatch(getSchedule());
  }, [dispatch]);
  let schedule = scheduleData?.conference;
  let filteredSchedule = filterByTrack(schedule?.days, eventTrack);
  let allRooms = getAllRooms(schedule?.rooms);
  return (
    <div className={styles.track}>
      <div className={styles.track_container}>
        <h1>{eventTrack}</h1>
        <div className={styles.track_data}>
          {filteredSchedule?.map((day) => {
            const { rooms } = day;
            return (
              <div key={day.date} className={styles.day}>
                <Link passHref href={`/days/${day.date}`}>
                  <h2 className={styles.dd}>
                    {moment(day.date).format('dddd, MMMM Do ')}
                  </h2>
                </Link>
                {allRooms?.map((room) => (
                  <div key={room}>
                    <Link passHref href={`/rooms/${room}`}>
                      <h2 className={styles.df}>{room}</h2>
                    </Link>
                    <div className={styles.eventContainer}>
                      {rooms[room]?.map((room) => (
                        <EventCard room={room} />
                      ))}
                    </div>
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
