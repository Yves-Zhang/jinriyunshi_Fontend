// chatConfigReducer.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InfoState {
  lunarInfo: any;
}

export const configStore = createSlice({
  name: 'lunar-state',
  initialState: {
    lunarInfo: null,
  },
  reducers: {
    setLunarInfo: (state: InfoState, { payload }: PayloadAction<any>): void => {
      console.log('payload', payload);
      state.lunarInfo = { ...payload };
    },
  },
});

export const { setLunarInfo } = configStore.actions;

export default configStore.reducer;
