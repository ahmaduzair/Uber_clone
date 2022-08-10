import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    origin: null,
    destination: null,
    traveltimeinfo: null
};
// Reducers
export const navslice = createSlice({
    name: "nav",
    initialState,
    reducer:{
        setOrigin: (state, action) =>{
            state.origin = action.payload;
        },
        setDestination: (state, action) =>{
            state.destination = action.payload;
        },
        setTravelTimeInfo: (state, action) =>{
            state.traveltimeinfo = action.payload;
        },
    },

});

export const { setOrigin,setDestination,setTravelTimeInfo} = navslice.actions;

//selector
export const selectOrigin = {state} = state.nav.origin;
export const selectDestinantion = {state} = state.nav.destination;
export const selectTravelTimeInfo = {state} = state.nav.traveltimeinfo;

export default navslice.reducer;