// chatConfigReducer.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TestState {
  message?: string;
}

export const configStore = createSlice({
  name: 'test-state',
  initialState: {
    message: 'Welcome to FWD Cli',
  },
  reducers: {
    setTest: (state: TestState, { payload }: PayloadAction<any>): void => {
      state = { message: payload.message };
    },
  },
});

export const { setTest } = configStore.actions;

export default configStore.reducer;
