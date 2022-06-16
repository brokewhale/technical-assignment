import schedule from './schedule.json';
export const fetchSchedule = () =>
  new Promise<unknown>((resolve) => resolve(schedule.schedule));
