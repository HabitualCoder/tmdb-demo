import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
// import rootReducer from '../reducers';

const store = configureStore({
  reducer: {}, // Add your reducers here
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
