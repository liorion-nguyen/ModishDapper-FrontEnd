import { createSlice } from "@reduxjs/toolkit";

const PurchaseSlice = createSlice({
    name: 'purchase',
    initialState: {
        purchase: {}
    },
    reducers: {
        setPurchase(state, action) {
            return {
                ...state,
                purchase: action.payload
            }
        }
    },
})

export const PurchaseActions = PurchaseSlice.actions;
export default PurchaseSlice.reducer;