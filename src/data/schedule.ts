import schedule from './schedule.json';
export const fetchSchedule = () => new Promise((resolve) => resolve(schedule));
