import { useAppDispatch, useAppSelector } from 'hooks/redux';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { getSchedule } from 'store/slices';

const Home: NextPage = () => {
  const schedule = useAppSelector((state) => state.schedule);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSchedule());
  }, [dispatch]);

  console.log('schedule', schedule);
  return (
    <div>
      <header>
        <h1>Welcome to Democon</h1>
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
