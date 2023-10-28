import { configureStore } from "@reduxjs/toolkit";
import snackbar from './snackbar/index';
import user from './user/index';

const store = configureStore({
    reducer: {
        snackbar: snackbar,
        user: user,
    }
})

export default store;