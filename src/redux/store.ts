import { configureStore } from "@reduxjs/toolkit";
import snackbar from './snackbar/index';

const store = configureStore({
    reducer: {
        snackbar: snackbar,
    }
})

export default store;