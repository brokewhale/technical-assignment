import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { getSchedule } from './schedule.action';

interface ScheduleState {
  data: {};
  error?: SerializedError['message'];
  isLoading: boolean;
}

const initialState: ScheduleState = {
  data: {},
  isLoading: false,
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
      state.data = action.payload as any;
      state.isLoading = false;
    });
    builder.addCase(getSchedule.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const scheduleReducer = scheduleSlice.reducer;
