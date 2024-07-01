import { configureStore } from '@reduxjs/toolkit';
import testStore from './reducers/testReducer';
import lunarStore from './reducers/lunarReducer';
import logger from 'redux-logger'

const store = configureStore({
  reducer: {
    testStore,
    lunarStore
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});

export default store;
