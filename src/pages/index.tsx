import { getAllDays } from 'helpers/getAllDays';
import { getAllRooms } from 'helpers/getAllRooms';
import { getAllTracks } from 'helpers/getAllTracks';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { getSchedule } from 'store/slices';
import { RoomElement } from 'types/schedule';
import { filterByRoom } from 'utils/filters/fillterByRoom';
import { filterByDay } from 'utils/filters/filterByDay';
import { filterByTrack } from 'utils/filters/filterByTrack';
import styles from './index.module.scss';

const Home: NextPage = () => {
  const scheduleData = useAppSelector((state) => state.schedule) as any;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSchedule());
  }, [dispatch]);

  let schedule = scheduleData?.conference;
  let loading = scheduleData?.isLoading;

  if (!loading) {
    // console.log('room', filterByRoom(schedule?.days, 'Khaki Room'));
    // console.log('day', filterByDay(schedule?.days, '2022-06-06'));
    // console.log(
    //   'room',
    //   filterByRoom(filterByDay(schedule?.days, '2022-06-06'), 'Khaki Room')
    // );
    // console.log('day', filterByTrack(schedule?.days, 'Realigned'));
    console.log('room', getAllRooms(schedule?.rooms));
    console.log('date', getAllDays(schedule?.days));
    console.log('tracks', getAllTracks(schedule?.days));
  }

  return (
    <div>
      <header>
        <h1 className={styles.header}>Welcome to {schedule?.title}</h1>
      </header>

      <main>
        <p>
          Democon is an automatically generated event to test and showcase our
          schedule overview.
        </p>

        {schedule.rooms?.map((room: RoomElement) => (
          <div key={room.name}>
            <h2>{room.name}</h2>
          </div>
        ))}
      </main>

      <footer>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Powered by Next.js
        </a>
      </footer>
    </div>
  );
};

export default Home;
