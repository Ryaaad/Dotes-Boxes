import { configureStore } from '@reduxjs/toolkit';
import Controlreducer from './features/Control'
export const store = configureStore({
  reducer: {
    Control:Controlreducer
  },
});