import { useAppDispatch, useAppSelector } from 'hooks/redux';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { getSchedule } from 'store/slices';
import styles from './index.module.scss';

const Home: NextPage = () => {
  const scheduleData = useAppSelector((state) => state.schedule) as any;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSchedule());
  }, [dispatch]);

  let schedule = scheduleData?.conference;
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
