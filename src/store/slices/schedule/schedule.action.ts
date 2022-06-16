import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSchedule } from 'data/schedule';

import { logger } from 'utils';

export const getSchedule = createAsyncThunk('schedule/get', async () => {
  try {
    return await fetchSchedule();
  } catch (err) {
    logger.error({ err }, 'getSchedule');
    throw err;
  }
});
