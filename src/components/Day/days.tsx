import { getAllDays } from 'helpers/getAllDays';
import { getAllRooms } from 'helpers/getAllRooms';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import * as React from 'react';
import { getSchedule } from 'store/slices';
import { filterByDay } from 'utils/filters/filterByDay';
import style from './index.module.scss';
import moment from 'moment';
import { Day as DayType, Room } from 'types/schedule';
import EventCard from 'components/Card';

export interface IDayProps {}

export default function Day(props: IDayProps) {
  const scheduleData = useAppSelector((state) => state.schedule) as any;
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getSchedule());
  }, [dispatch]);
  let schedule = scheduleData?.conference;

  const days = getAllDays(schedule?.days);
  let allRooms = getAllRooms(schedule?.rooms);

  const [dayIndex, setDayIndex] = React.useState(0);
  let filteredSchedule = filterByDay(
    schedule?.days,
    days[dayIndex]
  ) as DayType[];

  React.useEffect(() => {
    let mount = true;
    if (mount) {
      if (!scheduleData?.isLoading) {
        filteredSchedule = filterByDay(
          schedule?.days,
          days[dayIndex]
        ) as DayType[];
      }
    }
    return () => {
      mount = false;
    };
  }, [dayIndex]);

  return (
    <div className={style.day}>
      <div className={style.day_container}>
        <nav>
          {days?.map((day, index) => (
            <div
              key={day}
              onClick={() => setDayIndex(index)}
              className={style.day_date}
              style={{
                color: `${
                  dayIndex === index ? '#a5b0e8' : 'rgba(67, 67, 67, 0.35)'
                }`,
              }}
            >
              Day {index + 1}
            </div>
          ))}
        </nav>

        <div className={style.event}>
          {filteredSchedule?.map((day) => {
            const { rooms } = day;
            return (
              <div className={style.event_divide} key={day.index}>
                {allRooms?.map((room) => (
                  <div className={style.event_divide_child} key={room}>
                    <h4 className={style.eventRoom}>{room}</h4>
                    <div className={style.event_card_container}>
                      {rooms[room]?.map((room) => {
                        return <EventCard room={room} />;
                      })}
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
