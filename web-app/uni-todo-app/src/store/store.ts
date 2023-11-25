import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/appReducer'

const store = configureStore({
  reducer: appReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store