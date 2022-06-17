import Day from 'components/Day/days';
import { getAllDays } from 'helpers/getAllDays';
import { getAllRooms } from 'helpers/getAllRooms';
import { getAllTracks } from 'helpers/getAllTracks';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import type { NextPage } from 'next';
import Link from 'next/link';
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

  return (
    <div>
      <header>
        <h1 className={styles.header}>Welcome to {schedule?.title}</h1>
      </header>

      <main>
        <p className={styles.info}>
          Democon is an automatically generated event to test and showcase our
          schedule overview.
        </p>

        <div className={styles.rooms}>
          <div className={styles.rooms_heading}>Rooms Available</div>
        </div>
        <div className={styles.rooms_list}>
          <ol>
            {schedule.rooms?.map((room: RoomElement) => (
              <li key={room.name}>
                <Link passHref href={`/rooms/${room.name}`}>
                  <p>{room.name}</p>
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <section>
          <Day />
        </section>
      </main>
    </div>
  );
};

export default Home;
