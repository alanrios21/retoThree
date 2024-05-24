import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer'; // Asegúrate de que la ruta sea correcta

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
