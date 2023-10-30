import { configureStore } from "@reduxjs/toolkit";
import snackbar from './snackbar/index';
import user from './user/index';
import purchase from './purchase/index';

const store = configureStore({
    reducer: {
        snackbar: snackbar,
        user: user,
        purchase: purchase,
    }
})

export default store;