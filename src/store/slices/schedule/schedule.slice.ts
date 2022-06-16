import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { Conference, ScheduleClass, Schedule } from 'types/schedule';
import { getSchedule } from './schedule.action';

interface ScheduleState extends ScheduleClass {
  error?: SerializedError['message'];
  isLoading: boolean;
}

const initialState: ScheduleState = {
  version: '',
  base_url: '',
  conference: {} as Conference,
  isLoading: true,
};

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSchedule.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSchedule.fulfilled, (state, action) => {
      return Object.assign(state, {
        ...(action.payload as Schedule),
        isLoading: false,
      });
    });
    builder.addCase(getSchedule.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const scheduleReducer = scheduleSlice.reducer;
