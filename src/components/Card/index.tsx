import moment from 'moment';
import Link from 'next/link';
import * as React from 'react';
import { Room } from 'types/schedule';
import style from './index.module.scss';
export interface IEventCardProps {}

export default function EventCard({ room }: { room: Room }) {
  return (
    <div key={room.id} className={style.event_card}>
      <div className={style.event_card_logo} />
      <div className={style.event_card_info}>
        <div className={style.left}>
          <h4 className={style.left_name}>{room.persons[0]?.public_name}</h4>
          <Link passHref href={`/tracks/${room.track}`}>
            <p className={style.left_track}>{room.track}</p>
          </Link>
          <h4 className={style.left_title}>{room.title}</h4>
        </div>

        <div className={style.right}>
          <div className={style.right_date}>
            {moment(room.date).format('dddd, MMMM Do ')}
          </div>
          <div className={style.right_time}>{room.start}</div>
        </div>
      </div>
    </div>
  );
}
